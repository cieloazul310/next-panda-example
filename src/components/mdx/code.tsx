import { css } from "styled-system/css";

export const Code = (props: React.ComponentProps<"code">) => {
  return (
    <code
      className={css({
        ":not(pre) > &": {
          color: "accent.12",
          bg: "accent.6/18",
          px: 1,
          rounded: "md",
        },
      })}
      {...props}
    />
  );
};
