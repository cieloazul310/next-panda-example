import { Block } from "../layout";

export const Blockquote = (props: React.ComponentProps<"blockquote">) => (
  <Block my="md" asChild>
    <blockquote {...props} />
  </Block>
);
