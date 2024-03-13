import * as path from "path";
import { z } from "zod";
import { defineCollection } from "./defineCollection";
import { defineContent } from "./defineContent";

export const postPath = path.resolve(process.cwd(), "content/post");
export const authorPath = path.resolve(process.cwd(), "content/author");

export const author = defineCollection({
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

export const post = defineContent({
  contentPath: postPath,
  basePath: "/post",
  schema: z.object({
    author: z.string().optional(),
  }),
});
