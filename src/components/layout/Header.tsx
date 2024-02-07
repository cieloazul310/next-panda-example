import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import { Heading } from "../ui";
import Link from "../Link";
import { ColorModeHandler } from "../client";

function Header() {
  return (
    <header
      className={flex({
        alignItems: "center",
        direction: "row",
        gap: 2,
        height: "header-height",
        width: "100%",
        position: "sticky",
        bg: "bg.canvas/60",
        backdropFilter: "blur(4px)",
        top: 0,
        px: 4,
        zIndex: 10,
      })}
    >
      <Heading
        as="h1"
        fontWeight="bold"
        className={css({
          flexGrow: 1,
          display: "flex",
          justifyContent: { base: "center", smTo2xl: "start" },
        })}
      >
        <Link
          className={css({
            textDecoration: { base: "none", _hover: "underline" },
          })}
          href="/"
        >
          Site Title
        </Link>
      </Heading>
      <ColorModeHandler className={css({ hideBelow: "sm" })} />
    </header>
  );
}

export default Header;
