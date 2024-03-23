/* eslint @typescript-eslint/no-explicit-any: warn */
import * as path from "path";
import { readdir, readFile } from "fs/promises";
import { compileMDX, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { z, type ZodObject, type ZodRawShape } from "zod";
import { fileNameToSlug, dataSchemaVaridator } from "./utils";

const defaultFrontmatterSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  lastmod: z.coerce.date(),
  draft: z.boolean(),
});
const defaultFrontmatterSchemaInput = defaultFrontmatterSchema.partial({
  lastmod: true,
  draft: true,
});

type Frontmatter<T extends Record<string, any> = Record<string, unknown>> = T &
  z.infer<typeof defaultFrontmatterSchema>;

type FrontmatterInput<T extends Record<string, any> = Record<string, unknown>> =
  T & z.infer<typeof defaultFrontmatterSchemaInput>;

type Metadata<T extends Record<string, any> = Record<string, unknown>> =
  Frontmatter<T> & {
    absolutePath: string;
    slug: string[];
    href: string;
  };

function complementFrontmatter<T extends Record<string, any>>({
  title,
  date,
  lastmod,
  draft,
  ...rest
}: FrontmatterInput<T>): Frontmatter<T> {
  return {
    title,
    date: new Date(date),
    lastmod: lastmod ? new Date(lastmod) : new Date(date),
    draft: typeof draft === "boolean" ? draft : false,
    ...rest,
  } as Frontmatter<T>;
}

export function defineMdx<Z extends ZodRawShape>({
  contentPath,
  basePath,
  schema,
  extensions = ["md", "mdx"],
}: {
  contentPath: string;
  basePath: string;
  schema: ZodObject<Z>;
  extensions?: string[];
}) {
  type RestFrontmatter = z.infer<typeof schema>;
  const frontmatterSchema = defaultFrontmatterSchema.merge(schema);
  const metadataSchema = frontmatterSchema.extend({
    absolutePath: z.string(),
    slug: z.array(z.string()),
    href: z.string(),
  });
  const varidator = dataSchemaVaridator(frontmatterSchema);

  async function getAll(): Promise<
    (Metadata<RestFrontmatter> & {
      context: {
        older: Metadata<RestFrontmatter> | null;
        newer: Metadata<RestFrontmatter> | null;
      };
    })[]
  > {
    const filesInDir = await readdir(contentPath, {
      encoding: "utf8",
      recursive: true,
    });
    const files = filesInDir.filter((fileName) =>
      extensions.some((ext) => new RegExp(`.${ext}$`).test(fileName)),
    );

    const allPosts = (
      await Promise.all(
        files.map(async (filename) => {
          const absolutePath = path.join(contentPath, filename);
          const source = await readFile(absolutePath, { encoding: "utf8" });
          const { frontmatter } = await compileMDX<
            FrontmatterInput<RestFrontmatter>
          >({
            source,
            options: { parseFrontmatter: true },
          });
          return {
            data: complementFrontmatter(frontmatter),
            absolutePath,
            filename,
          };
        }),
      )
    )
      .filter(varidator)
      .map(({ data, absolutePath, filename }) => {
        const slug = fileNameToSlug(filename);
        const href = path.join(basePath, ...slug);

        return {
          ...data,
          absolutePath,
          slug,
          href,
        };
      });

    return allPosts
      .filter(({ draft }) => process.env.NODE_ENV === "development" || !draft)
      .sort(
        (a, b) =>
          a.date.getTime() - b.date.getTime() ||
          a.lastmod.getTime() - b.lastmod.getTime(),
      )
      .map((post, index, arr) => ({
        ...post,
        context: {
          older: index !== 0 ? arr[index - 1] : null,
          newer: index !== arr.length - 1 ? arr[index + 1] : null,
        },
      }));
  }

  async function get(slug: string[]) {
    const alls = await getAll();
    const index = alls.findIndex(
      (post) => post.slug.join("/") === slug.join("/"),
    );
    return alls[index];
  }

  async function useMdx(
    slug: string[],
    {
      components,
      options,
    }: Pick<MDXRemoteProps, "components"> & {
      options?: Omit<MDXRemoteProps["options"], "parseFrontmatter">;
    } = {},
  ) {
    const { absolutePath, context } = await get(slug);
    const file = await readFile(absolutePath, { encoding: "utf8" });
    const { content, frontmatter } = await compileMDX<
      FrontmatterInput<RestFrontmatter>
    >({
      source: file,
      components,
      options: {
        ...options,
        parseFrontmatter: true,
      },
    });
    return {
      content,
      context,
      frontmatter: complementFrontmatter(frontmatter),
    };
  }

  return {
    schema: frontmatterSchema,
    metadataSchema,
    get,
    getAll,
    useMdx,
  };
}
