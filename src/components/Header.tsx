import Link from "./Link";
import { ColorModeHandler } from "./client";
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";

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
        bg: {
          base: "rgba(255, 255, 255, 0.4)",
          _dark: "rgba(66, 66, 66, 0.4)",
        },
        backdropFilter: "blur(4px)",
        top: 0,
        px: 4,
        zIndex: 10,
      })}
    >
      <h1
        className={css({
          fontWeight: "bold",
          flexGrow: 1,
        })}
      >
        <Link href="/">Site Title</Link>
      </h1>
      <ColorModeHandler />
    </header>
  );
}

export default Header;
