import type { ComponentPropsWithoutRef } from "react";
import { article } from "styled-system/patterns";
import * as Table from "../ui/table";

export const MdxTable = (props: ComponentPropsWithoutRef<"table">) => {
  return <Table.Root className={article()} variant="outline" {...props} />;
};
export const Thead = (props: ComponentPropsWithoutRef<"thead">) => {
  return <Table.Head {...props} />;
};
export const Tbody = (props: ComponentPropsWithoutRef<"tbody">) => {
  return <Table.Body {...props} />;
};
export const Tr = (props: ComponentPropsWithoutRef<"tr">) => {
  return <Table.Row {...props} />;
};
export const Th = (props: ComponentPropsWithoutRef<"th">) => {
  return <Table.Header {...props} />;
};
export const Td = (props: ComponentPropsWithoutRef<"td">) => {
  return <Table.Cell {...props} />;
};
