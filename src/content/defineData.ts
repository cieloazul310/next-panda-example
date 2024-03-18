/* eslint @typescript-eslint/no-explicit-any: warn */
import { readFile, readdir } from "fs/promises";
import * as path from "path";
import * as yaml from "yaml";
import type { ZodObject } from "zod";

function formatToExts(format: "yaml" | "json") {
  if (format === "yaml") return ["yml", "yaml"];
  return ["json"];
}

function parseData(format: "yaml" | "json") {
  if (format === "yaml") return (raw: string) => yaml.parse(raw);
  return (raw: string) => JSON.parse(raw);
}

function formatter(format: "yaml" | "json") {
  const extensions = formatToExts(format);
  const parser = parseData(format);
  return { extensions, parser };
}

function removeNull<T>(input: T | null | undefined): input is T {
  return !!input;
}

export function defineData<T extends Record<string, any>>({
  contentPath,
  schema,
  format = "yaml",
}: {
  contentPath: string;
  schema: ZodObject<T>;
  format?: "yaml" | "json";
}) {
  const { extensions, parser } = formatter(format);

  async function getData() {
    const filesInDir = await readdir(contentPath, {
      encoding: "utf8",
      recursive: true,
    });
    const files = filesInDir.filter((fileName) =>
      extensions.some((ext) => new RegExp(ext).test(fileName)),
    );
    const data = await Promise.all(
      files.map(async (filename) => {
        const absolutePath = path.join(contentPath, filename);
        const file = await readFile(absolutePath, "utf8");
        const datum = parser(file);

        const result = schema.safeParse(datum);
        if (!result.success) {
          console.error(result.error);
          return null;
        }
        return result.data;
      }),
    );
    return data.filter(removeNull);
  }

  return {
    schema,
    get: async (key: string, value: any) => {
      const data = await getData();
      return data.find((datum) => datum?.[key] === value);
    },
    getAll: getData,
  };
}
