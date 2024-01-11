import type { PropsWithChildren } from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { css } from "../../styled-system/css";

function Link({ ...props }: PropsWithChildren<NextLinkProps>) {
  return (
    <NextLink
      className={css({
        color: { base: "teal.700", _dark: "teal.200" },
        textDecoration: { base: "none", _hover: "underline" },
      })}
      {...props}
    />
  );
}

export default Link;
