import { article } from "@styled-system/patterns";

export const Ol = (props: React.ComponentProps<"ol">) => (
  <ol
    className={article({
      my: "md",
      listStyleType: "decimal",
      paddingInlineStart: "md",
    })}
    {...props}
  />
);

export const Ul = (props: React.ComponentProps<"ul">) => (
  <ul
    className={article({
      my: "md",
      listStyleType: "disc",
      paddingInlineStart: "md",
    })}
    {...props}
  />
);

export const Li = (props: React.ComponentProps<"li">) => (
  <li className={article({ my: "sm" })} {...props} />
);
