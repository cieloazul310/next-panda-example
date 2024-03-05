import { article } from "@styled-system/patterns";
import * as Table from "../ui/table";

export const MdxTable = (props: React.ComponentPropsWithoutRef<"table">) => {
  return <Table.Root className={article()} variant="outline" {...props} />;
};
export const Thead = (props: React.ComponentPropsWithoutRef<"thead">) => {
  return <Table.Head {...props} />;
};
export const Tbody = (props: React.ComponentPropsWithoutRef<"tbody">) => {
  return <Table.Body {...props} />;
};
export const Tr = (props: React.ComponentPropsWithoutRef<"tr">) => {
  return <Table.Row {...props} />;
};
export const Th = (props: React.ComponentPropsWithoutRef<"th">) => {
  return <Table.Header {...props} />;
};
export const Td = (props: React.ComponentPropsWithoutRef<"td">) => {
  return <Table.Cell {...props} />;
};
