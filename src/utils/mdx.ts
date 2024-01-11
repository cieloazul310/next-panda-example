import * as fs from "fs";
import * as path from "path";
import { readFile, access } from "fs/promises";

export type PostFrontmatter = {
  title: string;
  date: string;
}

export const postPath = path.resolve(process.cwd(), "content/post");

export const allPosts = fs
  .readdirSync(postPath)
  .filter((fileName) => /\.mdx$/.test(fileName));

export async function useMdx(slug: string) {
  const filePath = path.resolve(postPath, `${slug}.mdx`);

  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: "utf8" });
  return fileContent;
}
