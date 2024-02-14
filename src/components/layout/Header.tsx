import NextLink from "next/link";
import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import { siteTitle } from "@/utils";
import { Heading } from "../ui";
import { ColorModeHandler } from "../client";

function Header() {
  return (
    <header
      className={flex({
        position: "sticky",
        top: 0,
        height: "header-height",
        px: 4,
        bg: "bg.canvas/60",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: ["center", "start"],
        zIndex: "header",
      })}
    >
      <NextLink
        className={css({
          color: {
            base: "fg.default",
            _dark: "fg.default",
            _hover: "accent.11",
          },
          textDecoration: { base: "none", _hover: "underline" },
        })}
        href="/"
      >
        <Heading as="h1" fontWeight="bold">
          {siteTitle}
        </Heading>
      </NextLink>
      <div className={css({ flexGrow: 1, hideBelow: "sm" })} />
      <ColorModeHandler className={css({ hideBelow: "sm" })} />
    </header>
  );
}

export default Header;
