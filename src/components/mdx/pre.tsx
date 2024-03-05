import { article } from "@styled-system/patterns";
import { Block } from "../layout";

export const Pre = (props: React.ComponentProps<"pre">) => {
  return (
    <Block asChild>
      <pre className={article({ overflowX: "auto", my: "md" })} {...props} />
    </Block>
  );
};
