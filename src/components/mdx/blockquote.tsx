import { blockquote } from "./article-classes";

export const Blockquote = (props: React.ComponentProps<"blockquote">) => (
  <blockquote className={blockquote} {...props} />
);
