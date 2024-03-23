import * as path from "path";
import { z } from "zod";
import { defineData } from "./defineData";
import { defineDataFromFile } from "./defineDataFromFile";
import { defineMdx } from "./defineMdx";

export const post = defineMdx({
  contentPath: path.resolve(process.cwd(), "content/post"),
  basePath: "/post",
  schema: z.object({
    author: z.string().optional(),
    category: z.string().optional(),
    featuredImg: z.string().optional(),
    featuredImgAlt: z.string().optional(),
  }),
});
export type PostFrontmatter = z.infer<typeof post.schema>;
export type PostMetadata = z.infer<typeof post.metadataSchema>;

export const author = defineData({
  contentPath: path.resolve(process.cwd(), "content/author"),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    socials: z
      .object({
        url: z.string().optional(),
        twitter: z.string().optional(),
        github: z.string().optional(),
      })
      .optional(),
  }),
});
export type Author = z.infer<typeof author.schema>;

export const categories = defineDataFromFile({
  filePath: path.resolve(process.cwd(), "content/categories.yml"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
  }),
});
export type Categories = z.infer<typeof categories.schema>;
