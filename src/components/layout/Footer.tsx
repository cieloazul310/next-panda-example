import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import Link from "../Link";
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
      <Link href="/">
        <p className={css({ fontSize: "md", textStyle: "headings" })}>
          {siteTitle}
        </p>
      </Link>
      <p>
        © {year} {siteTitle} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
