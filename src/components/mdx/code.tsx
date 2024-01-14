import { code } from "./article-classes";

export const Code = (props: React.ComponentProps<"code">) => {
  return <code className={code} {...props} />;
};
