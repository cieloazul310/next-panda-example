import { paragraph } from "./article-classes";

export const Paragraph = (props: React.ComponentProps<"p">) => (
  <p className={paragraph} {...props} />
);
