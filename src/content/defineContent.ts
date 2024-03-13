import * as path from "path";
import { readdir, readFile } from "fs/promises";
import { compileMDX, type MDXRemoteProps } from "next-mdx-remote/rsc";
import type { ZodType } from "zod";

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

export function defineContent<T extends Record<string, any>>({
  contentPath,
  basePath,
  schema,
}: {
  contentPath: string;
  basePath: string;
  schema: ZodType<T>;
}) {
  async function getData(
    { sortDesc }: { sortDesc: boolean } = { sortDesc: false },
  ): Promise<
    (PostMetadata<T> & {
      context: { older: PostMetadata<T> | null; newer: PostMetadata<T> | null };
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
      const { frontmatter } = await compileMDX<PostFrontmatter<T>>({
        source,
        options: { parseFrontmatter: true },
      });

      const slug = fileNameToSlug(filename);
      const href = path.join(basePath, ...slug);

      return {
        ...frontmatter,
        absolutePath,
        slug,
        href,
      };
    });

    return Promise.all(posts).then((allPosts) =>
      allPosts
        .sort(
          (a, b) =>
            (sortDesc ? -1 : 1) *
            (new Date(a.date).getTime() - new Date(b.date).getTime()),
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
    schema,
    get: async (slug: string[]) => await getPostData(slug),
    getAll: async () => await getData(),
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
      const { content, frontmatter } = await compileMDX<PostFrontmatter<T>>({
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
