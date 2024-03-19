/* eslint @typescript-eslint/no-explicit-any: warn */
import { z, type ZodType } from "zod";

export function schemaVaridator<T extends ZodType>(schema: T) {
  return (data: any): data is z.infer<typeof schema> => {
    const result = schema.safeParse(data);
    if (!result.success) {
      console.error(result.error.message);
    }
    return result.success;
  };
}

export function dataSchemaVaridator<T extends ZodType>(schema: T) {
  return (input: {
    data: any;
    filename: string;
  }): input is { data: z.infer<typeof schema>; filename: string } => {
    const { data, filename } = input;
    const result = schema.safeParse(data);
    if (!result.success) {
      console.error(filename, result.error.message);
    }
    return result.success;
  };
}
