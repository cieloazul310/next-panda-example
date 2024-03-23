/* eslint @typescript-eslint/no-explicit-any: warn */
import { readFile, readdir } from "fs/promises";
import * as path from "path";
import { z, type ZodObject } from "zod";
import { dataSchemaVaridator, dataFormatter } from "./utils";

export function defineData<T extends Record<string, any>>({
  contentPath,
  schema,
  format = "yaml",
}: {
  contentPath: string;
  schema: ZodObject<T>;
  format?: "yaml" | "json";
}) {
  const { extensions, parser } = dataFormatter(format);
  const dataSchema = z.object({ id: z.string() }).merge(schema);
  const varidator = dataSchemaVaridator(dataSchema);

  async function getAll() {
    const filesInDir = await readdir(contentPath, {
      encoding: "utf8",
      recursive: true,
    });
    const files = filesInDir.filter((fileName) =>
      extensions.some((ext) => new RegExp(`.${ext}$`).test(fileName)),
    );
    const data = (
      await Promise.all(
        files.map(async (filename) => {
          const absolutePath = path.join(contentPath, filename);
          const file = await readFile(absolutePath, "utf8");
          const datum = parser(file);
          return {
            data: { id: filename.replace(/\.[^/.]+$/, ""), ...datum },
            filename,
          };
        }),
      )
    )
      .filter(varidator)
      .map(({ data }) => data);

    return data;
  }

  async function get(key: keyof z.infer<typeof dataSchema>, value: unknown) {
    const data = await getAll();
    return data.find((datum) => datum?.[key] === value);
  }

  return {
    schema: dataSchema,
    get,
    getAll,
  };
}
