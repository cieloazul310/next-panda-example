import type { PropsWithChildren } from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { isInternal } from "@/utils";
import { anchor } from "./mdx";

function Link({ href, ...props }: Omit<React.ComponentProps<"a">, "ref">) {
  const internal = isInternal(href);

  if (href && internal) {
    return <NextLink className={anchor} href={href} {...props} />;
  }
  return (
    <a
      className={anchor}
      href={href}
      target="_blank"
      rel="noreffer noopener"
      {...props}
    />
  );
}

export default Link;
