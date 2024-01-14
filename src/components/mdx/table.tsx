import { table, thead, tr, th, td } from "./article-classes";

export const Table = (props: React.ComponentProps<"table">) => {
  return <table className={table} {...props} />;
};
export const Thead = (props: React.ComponentProps<"thead">) => {
  return <thead className={thead} {...props} />;
};
export const Tr = (props: React.ComponentProps<"tr">) => {
  return <tr className={tr} {...props} />;
};
export const Th = (props: React.ComponentProps<"th">) => {
  return <th className={th} {...props} />;
};
export const Td = (props: React.ComponentProps<"td">) => {
  return <td className={td} {...props} />;
};
