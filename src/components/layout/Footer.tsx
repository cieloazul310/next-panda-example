import NextLink from "next/link";
import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import { siteTitle } from "@/utils";

function Footer() {
  const year = new Date().getFullYear().toString();

  return (
    <footer
      className={flex({
        alignItems: "center",
        direction: "column",
        gap: 2,
        px: [2, 4],
        py: "lg",
      })}
    >
      <NextLink
        href="/"
        className={css({
          color: {
            base: "fg.default",
            _dark: "fg.default",
            _hover: "accent.11",
          },
          textDecoration: { base: "none", _hover: "underline" },
        })}
      >
        <p className={css({ fontSize: "md", textStyle: "headings" })}>
          {siteTitle}
        </p>
      </NextLink>
      <p>
        © {year} {siteTitle} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
