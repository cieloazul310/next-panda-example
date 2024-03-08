import * as fs from "fs";
import * as path from "path";
import * as yaml from "yaml";
import type { ZodType } from "zod";

export function defineCollection<T extends { id: string }>({
  contentPath,
  schema,
}: {
  contentPath: string;
  schema: ZodType<T>;
}) {
  const files = fs
    .readdirSync(contentPath, { encoding: "utf-8", recursive: true })
    .filter((fileName) => /\.(yml|yaml)$/.test(fileName));
  const data = files.map((filename) => {
    const absolutePath = path.join(contentPath, filename);
    const datum = yaml.parse(fs.readFileSync(absolutePath, "utf8"));
    return schema.parse(datum);
  });
  return {
    schema,
    get: (contentId: string) => data.find((datum) => datum.id === contentId),
    getAll: () => data,
  };
}