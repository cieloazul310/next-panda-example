import type { ComponentProps } from "react";
import { css } from "styled-system/css";
import { article } from "styled-system/patterns";

export const Ol = (props: ComponentProps<"ol">) => (
  <ol
    className={article({
      my: "md",
      listStyleType: "decimal",
      paddingInlineStart: "md",
      "li > &": {
        my: 0,
      },
    })}
    {...props}
  />
);

export const Ul = (props: ComponentProps<"ul">) => (
  <ul
    className={article({
      my: "md",
      listStyleType: "disc",
      paddingInlineStart: "md",
      "li > &": {
        my: 0,
      },
    })}
    {...props}
  />
);

export const Li = (props: ComponentProps<"li">) => (
  <li className={css({ my: "sm" })} {...props} />
);
