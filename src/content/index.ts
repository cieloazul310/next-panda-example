import * as path from "path";
import { z } from "zod";
import { defineData } from "./defineData";
import { defineDataFromFile } from "./defineDataFromFile";
import { defineArticle } from "./defineArticle";

export const postPath = path.resolve(process.cwd(), "content/post");
export const authorPath = path.resolve(process.cwd(), "content/author");
export const categoriesPath = path.resolve(
  process.cwd(),
  "content/categories.yml",
);

export const author = defineData({
  contentPath: authorPath,
  schema: z.object({
    id: z.string(),
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

export const post = defineArticle({
  contentPath: postPath,
  basePath: "/post",
  schema: z.object({
    author: z.string().optional(),
  }),
});

export const categories = defineDataFromFile({
  filePath: categoriesPath,
  schema: z.object({
    id: z.string(),
    title: z.string(),
  }),
});
