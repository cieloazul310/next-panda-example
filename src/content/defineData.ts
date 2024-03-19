/* eslint @typescript-eslint/no-explicit-any: warn */
import { readFile, readdir } from "fs/promises";
import * as path from "path";
import * as yaml from "yaml";
import type { ZodObject } from "zod";
import { dataSchemaVaridator } from "./utils";

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
  const varidator = dataSchemaVaridator(schema);

  async function getAll() {
    const filesInDir = await readdir(contentPath, {
      encoding: "utf8",
      recursive: true,
    });
    const files = filesInDir.filter((fileName) =>
      extensions.some((ext) => new RegExp(ext).test(fileName)),
    );
    const data = (
      await Promise.all(
        files.map(async (filename) => {
          const absolutePath = path.join(contentPath, filename);
          const file = await readFile(absolutePath, "utf8");
          const datum = parser(file);
          return { data: datum, filename };
        }),
      )
    )
      .filter(varidator)
      .map(({ data }) => data);

    return data;
  }

  async function get(key: string, value: unknown) {
    const data = await getAll();
    return data.find((datum) => datum?.[key] === value);
  }

  return {
    schema,
    get,
    getAll,
  };
}
