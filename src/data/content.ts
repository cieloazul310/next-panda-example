import * as path from "path";
import { z } from "zod";
import { defineCollection } from "@/utils";

export const postPath = path.resolve(process.cwd(), "content/post");
export const authorPath = path.resolve(process.cwd(), "content/author");

export const author = defineCollection({
  contentPath: authorPath,
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});