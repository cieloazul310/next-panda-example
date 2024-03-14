import * as path from "path";
import { readdir, readFile } from "fs/promises";
import { compileMDX, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { z, type ZodObject, ZodRawShape } from "zod";

/**
 * example:
 * getting-started.mdx => ["getting-started"]
 * 2024/hoge.mdx => ["2024", "hoge"]
 * 2024/nested-post/index.md => ["2024", "nested-post"]
 */
export function fileNameToSlug(filename: string) {
  const indexPattern = /\/index.(md|mdx)$/;
  const pattern = /.(md|mdx)$/;
  return filename.replace(indexPattern, ".mdx").replace(pattern, "").split("/");
}

const defaultFrontmatterSchema = z.object({
  title: z.string(),
  date: z.date(),
  lastmod: z.date(),
  draft: z.boolean(),
});
const defaultFrontmatterSchemaInput = defaultFrontmatterSchema.partial({
  lastmod: true,
  draft: true,
});

type PostFrontmatter<T extends Record<string, any>> = T &
  z.infer<typeof defaultFrontmatterSchema>;

type PostFrontmatterInput<T extends Record<string, any>> = T &
  z.infer<typeof defaultFrontmatterSchemaInput>;

type PostMetadata<T extends Record<string, any>> = PostFrontmatter<T> & {
  absolutePath: string;
  slug: string[];
  href: string;
};

export function defineContent<Z extends ZodRawShape>({
  contentPath,
  basePath,
  schema,
}: {
  contentPath: string;
  basePath: string;
  schema: ZodObject<Z>;
}) {
  type RestFrontmatter = z.infer<typeof schema>;
  const frontmatterSchema = defaultFrontmatterSchema.merge(schema);
  const metadataSchema = frontmatterSchema.extend({
    absolutePath: z.string(),
    slug: z.array(z.string()),
    href: z.string(),
  });

  function complementFrontmatter({
    title,
    date,
    lastmod,
    draft,
    ...rest
  }: PostFrontmatterInput<RestFrontmatter>): PostFrontmatter<RestFrontmatter> {
    const frontmatter = {
      title,
      date: new Date(date),
      lastmod: lastmod ? new Date(lastmod) : new Date(date),
      draft: typeof draft === "boolean" ? draft : false,
      ...rest,
    };
    return frontmatterSchema.parse(
      frontmatter,
    ) as PostFrontmatter<RestFrontmatter>;
  }

  async function getAll(
    { sortDesc }: { sortDesc: boolean } = { sortDesc: false },
  ): Promise<
    (PostMetadata<RestFrontmatter> & {
      context: {
        older: PostMetadata<RestFrontmatter> | null;
        newer: PostMetadata<RestFrontmatter> | null;
      };
    })[]
  > {
    const filesInDir = await readdir(contentPath, {
      encoding: "utf8",
      recursive: true,
    });
    const files = filesInDir.filter((fileName) => /\.(md|mdx)$/.test(fileName));

    const posts = files.map(async (filename) => {
      const absolutePath = path.join(contentPath, filename);
      const source = await readFile(absolutePath, { encoding: "utf8" });
      const { frontmatter } = await compileMDX<
        PostFrontmatterInput<RestFrontmatter>
      >({
        source,
        options: { parseFrontmatter: true },
      });

      const slug = fileNameToSlug(filename);
      const href = path.join(basePath, ...slug);

      return {
        ...complementFrontmatter(frontmatter),
        absolutePath,
        slug,
        href,
      };
    });
    const allPosts = await Promise.all(posts);

    return allPosts
      .filter(({ draft }) => process.env.NODE_ENV === "development" || !draft)
      .sort(
        (a, b) => (sortDesc ? -1 : 1) * (a.date.getTime() - b.date.getTime()),
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
    const allPosts = await getAll();
    const index = allPosts.findIndex(
      (post) => post.slug.join("/") === slug.join("/"),
    );
    return allPosts[index];
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
      PostFrontmatterInput<RestFrontmatter>
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
