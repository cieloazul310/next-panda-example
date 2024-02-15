import { hr } from "./article-classes";

export const Hr = (props: React.ComponentProps<"hr">) => {
  return <hr className={hr} {...props} />;
};
