import { kbd } from "./article-classes";

export const Kbd = (props: React.ComponentProps<"kbd">) => {
  return <kbd className={kbd} {...props} />;
};
