import { readFile, readdir } from "fs/promises";
import * as path from "path";
import * as yaml from "yaml";
import type { ZodType } from "zod";

export function defineCollection<T extends Record<string, any>>({
  contentPath,
  schema,
}: {
  contentPath: string;
  schema: ZodType<T>;
}) {
  async function getData() {
    const filesInDir = await readdir(contentPath, {
      encoding: "utf8",
      recursive: true,
    });
    const files = filesInDir.filter((fileName) =>
      /\.(yml|yaml)$/.test(fileName),
    );
    const data = await Promise.all(
      files.map(async (filename) => {
        const absolutePath = path.join(contentPath, filename);
        const file = await readFile(absolutePath, "utf8");
        const datum = yaml.parse(file);
        return schema.parse(datum);
      }),
    );
    return data;
  }

  return {
    schema,
    get: async (key: string, value: any) => {
      const data = await getData();
      return data.find((datum) => datum?.[key] === value);
    },
    getAll: async () => await getData(),
  };
}
