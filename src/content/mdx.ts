import * as fs from "fs";
import * as path from "path";
import { access } from "fs/promises";
import { read } from "gray-matter";
import { postPath } from "./collection";

export type PostFrontmatter = {
  title: string;
  date: string;
  author?: string;
};

export type PostMetadata = Pick<PostFrontmatter, "title" | "date"> & {
  data: Omit<PostFrontmatter, "title" | "date">;
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

/**
 * example:
 * ["getting-started"]
 * => ["getting-started.md", "getting-started.mdx", "getting-started/index.md", "getting-started/index.mdx"]
 */
export function slugTofileNames(slug: string[], prefix?: string) {
  const exts = [".md", ".mdx"];
  return [slug.join("/"), [...slug, "index"].join("/")].reduce<string[]>(
    (accum, curr) => [
      ...accum,
      ...exts.map((ext) =>
        prefix ? path.join(prefix, `${curr}${ext}`) : `${curr}${ext}`,
      ),
    ],
    [],
  );
}

/**
 * detect filepath
 */
export function findFilePath(slug: string[]) {
  const fileNames = slugTofileNames(slug, postPath);
  return fileNames.find((str) => {
    const exists = fs.existsSync(str);

    return exists;
  });
}

export async function getAllPosts(
  { sortDesc }: { sortDesc: boolean } = { sortDesc: false },
): Promise<
  (PostMetadata & {
    context: { older: PostMetadata | null; newer: PostMetadata | null };
  })[]
> {
  const files = fs
    .readdirSync(postPath, { encoding: "utf-8", recursive: true })
    .filter((fileName) => /\.(md|mdx)$/.test(fileName));

  const posts = files.map((filename) => {
    const absolutePath = path.join(postPath, filename);
    const { data } = read(absolutePath);
    const { title, date, ...rest } = data;
    const slug = fileNameToSlug(filename);
    const href = path.join("/post", ...slug);

    return {
      title,
      date,
      data: rest,
      absolutePath,
      slug,
      href,
    };
  });
  return [...posts]
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
    }));
}

export async function getPostData(slug: string[]) {
  const allPosts = await getAllPosts();
  const index = allPosts.findIndex(
    (post) => post.slug.join("/") === slug.join("/"),
  );
  return allPosts[index];
}

export async function useMdx(slug: string[]) {
  const filePath = findFilePath(slug);
  if (!filePath) return null;

  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = read(filePath);
  return fileContent;
}