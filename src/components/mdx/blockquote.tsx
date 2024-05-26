import type { ComponentProps } from "react";
import Block from "../layout/block";

export const Blockquote = (props: ComponentProps<"blockquote">) => (
  <Block my="md" asChild>
    <blockquote {...props} />
  </Block>
);
