import NextLink from "next/link";
import { Text } from "@/components/ui/text";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";

const siteTitle = "Next.js + Park UI";
const year = new Date().getFullYear().toString();

function Footer() {
  return (
    <footer
      className={flex({
        alignItems: "center",
        direction: "column",
        gap: 2,
        px: [2, 4],
        py: 8,
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
        <Text fontSize="md" fontWeight="bold">
          {siteTitle}
        </Text>
      </NextLink>
      <Text>
        © {year} {siteTitle} All rights reserved.
      </Text>
    </footer>
  );
}

export default Footer;
