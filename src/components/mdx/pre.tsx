import type { ComponentProps } from "react";
import { article } from "styled-system/patterns";
import Block from "../layout/block";

export const Pre = (props: ComponentProps<"pre">) => {
  return (
    <Block colorPalette="gray" asChild>
      <pre className={article({ overflowX: "auto", my: "md" })} {...props} />
    </Block>
  );
};
