/* eslint @typescript-eslint/no-explicit-any: warn */
import { readFile } from "fs/promises";
import * as yaml from "yaml";
import type { ZodObject } from "zod";
import { schemaVaridator } from "./utils";

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

export function defineDataFromFile<T extends Record<string, any>>({
  filePath,
  schema,
  format = "yaml",
}: {
  filePath: string;
  schema: ZodObject<T>;
  format?: "yaml" | "json";
}) {
  const { parser } = formatter(format);
  const varidator = schemaVaridator(schema);

  async function getAll() {
    const file = await readFile(filePath, "utf8");
    const raw = parser(file);
    if (!Array.isArray(raw)) throw new Error("Data must be array");
    const data = raw.filter(varidator);
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
