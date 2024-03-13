import * as path from "path";
import { readdir, readFile } from "fs/promises";
import { compileMDX, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { z, ZodString, type ZodObject, ZodRawShape } from "zod";

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

type PostFrontmatter<T> = T & {
  title: string;
  date: Date;
};

type PostMetadata<T> = PostFrontmatter<T> & {
  absolutePath: string;
  slug: string[];
  href: string;
};

export function defineContent<T extends ZodRawShape>({
  contentPath,
  basePath,
  schema,
}: {
  contentPath: string;
  basePath: string;
  schema: ZodObject<T>;
}) {
  const frontmatterSchema = schema.extend({
    title: z.string(),
    date: z.date(),
  });
  const metadataSchema = frontmatterSchema.extend({
    absolutePath: z.string(),
    slug: z.array(z.string()),
    href: z.string(),
  });

  async function getData(
    { sortDesc }: { sortDesc: boolean } = { sortDesc: false },
  ): Promise<
    (PostMetadata<z.infer<ZodObject<T>>> & {
      context: {
        older: PostMetadata<z.infer<ZodObject<T>>> | null;
        newer: PostMetadata<z.infer<ZodObject<T>>> | null;
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
        PostFrontmatter<z.infer<ZodObject<T>>>
      >({
        source,
        options: { parseFrontmatter: true },
      });
      const frontmatterX = {
        ...frontmatter,
        date: new Date(frontmatter.date),
      };

      const slug = fileNameToSlug(filename);
      const href = path.join(basePath, ...slug);

      return {
        ...frontmatterX,
        absolutePath,
        slug,
        href,
      };
    });

    return Promise.all(posts).then((allPosts) =>
      allPosts
        .sort(
          (a, b) => (sortDesc ? -1 : 1) * (a.date.getTime() - b.date.getTime()),
        )
        .map((post, index, arr) => ({
          ...post,
          context: {
            older: index !== 0 ? arr[index - 1] : null,
            newer: index !== arr.length - 1 ? arr[index + 1] : null,
          },
        })),
    );
  }
  async function getPostData(slug: string[]) {
    const allPosts = await getData();
    const index = allPosts.findIndex(
      (post) => post.slug.join("/") === slug.join("/"),
    );
    return allPosts[index];
  }

  return {
    schema: frontmatterSchema,
    metadataSchema,
    get: async (slug: string[]) => await getPostData(slug),
    getAll: async ({ sortDesc }: { sortDesc: boolean } = { sortDesc: false }) =>
      await getData({ sortDesc }),
    useMdx: async (
      slug: string[],
      {
        components,
        options,
      }: Pick<MDXRemoteProps, "components"> & {
        options?: Omit<MDXRemoteProps["options"], "parseFrontmatter">;
      } = {},
    ) => {
      const { absolutePath, context } = await getPostData(slug);
      const file = await readFile(absolutePath, { encoding: "utf8" });
      const { content, frontmatter } = await compileMDX<
        PostFrontmatter<z.infer<ZodObject<T>>>
      >({
        source: file,
        components,
        options: {
          ...options,
          parseFrontmatter: true,
        },
      });

      return { content, frontmatter, context };
    },
  };
}
