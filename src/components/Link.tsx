import NextLink from "next/link";
import { isInternal } from "@/utils";
import { css, cx } from "styled-system/css";
import { RiExternalLinkLine } from "react-icons/ri";

const anchor = css({
  color: { base: "accent.11", _hover: "accent.9" },
  textDecoration: { _hover: "underline" },
  _dark: { color: { base: "accent.12", _hover: "accent.a12" } },
});

function Link({
  children,
  href,
  className,
  ...props
}: Omit<React.ComponentProps<"a">, "ref">) {
  const internal = isInternal(href);

  if (href && internal) {
    return (
      <NextLink className={cx(anchor, className)} href={href} {...props}>
        {children}
      </NextLink>
    );
  }
  return (
    <a
      className={cx(anchor, className)}
      href={href}
      target="_blank"
      rel="noreffer noopener"
      {...props}
    >
      {children}
      <RiExternalLinkLine
        className={css({
          display: "inline",
          fontSize: "inherit",
          verticalAlign: "text-top",
        })}
      />
    </a>
  );
}

export default Link;
