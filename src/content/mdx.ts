import * as path from "path";
import { readdir, readFile } from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import { postPath } from "./collection";

export type PostFrontmatter = {
  title: string;
  date: string;
  author?: string;
};

export type PostMetadata = PostFrontmatter & {
  absolutePath: string;
  slug: string[];
  href: string;
};

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

export async function getAllPosts(
  { sortDesc }: { sortDesc: boolean } = { sortDesc: false },
): Promise<
  (PostMetadata & {
    context: { older: PostMetadata | null; newer: PostMetadata | null };
  })[]
> {
  const allFiles = await readdir(postPath, {
    encoding: "utf8",
    recursive: true,
  });
  const files = allFiles.filter((fileName) => /\.(md|mdx)$/.test(fileName));

  const posts = files.map(async (filename) => {
    const absolutePath = path.join(postPath, filename);
    const source = await readFile(absolutePath, { encoding: "utf8" });
    const { frontmatter } = await compileMDX<PostFrontmatter>({
      source,
      options: { parseFrontmatter: true },
    });

    const slug = fileNameToSlug(filename);
    const href = path.join("/post", ...slug);

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

export async function getPostData(slug: string[]) {
  const allPosts = await getAllPosts();
  const index = allPosts.findIndex(
    (post) => post.slug.join("/") === slug.join("/"),
  );
  return allPosts[index];
}

export async function useMdx(
  slug: string[],
  { components }: { components?: MDXComponents } = {},
) {
  const { absolutePath, context } = await getPostData(slug);
  const file = await readFile(absolutePath, { encoding: "utf8" });
  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    components,
    source: file,
    options: {
      parseFrontmatter: true,
    },
  });

  return { content, frontmatter, context };
}
