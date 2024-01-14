import { pre } from "./article-classes";

export const Pre = (props: React.ComponentProps<"pre">) => {
  return <pre className={pre} {...props} />;
};
