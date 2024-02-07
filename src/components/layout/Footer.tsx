import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";

function Footer() {
  return (
    <footer
      className={flex({
        alignItems: "center",
        direction: "column",
        gap: 2,
        bgGradient: "to-b",
        gradientFrom: "bg",
        gradientTo: "gradient-from",
        height: "56px",
        width: "100%",
        px: [2, 4],
        py: 16,
      })}
    >
      <h1 className={css({ fontWeight: "bold" })}>Site Title</h1>
    </footer>
  );
}

export default Footer;
