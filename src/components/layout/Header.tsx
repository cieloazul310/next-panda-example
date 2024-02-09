import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import { siteTitle } from "@/utils";
import { Heading } from "../ui";
import Link from "../Link";
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
      <Link
        className={css({
          textDecoration: { base: "none", _hover: "underline" },
        })}
        href="/"
      >
        <Heading as="h1" fontWeight="bold">
          {siteTitle}
        </Heading>
      </Link>
      <div className={css({ flexGrow: 1, hideBelow: "sm" })} />
      <ColorModeHandler className={css({ hideBelow: "sm" })} />
    </header>
  );
}

export default Header;
