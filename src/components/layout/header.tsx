import NextLink from "next/link";
import { Container, Spacer, Flex } from "styled-system/jsx";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { Heading } from "../ui/heading";
import ColorModeHandler from "../color-mode-handler";

const siteTitle = "Next.js + Park UI";

function Header() {
  return (
    <Flex
      position="sticky"
      top="0"
      alignItems="center"
      height="header-height"
      bg="bg.canvas/60"
      backdropFilter="blur(4px)"
      zIndex="sticky"
    >
      <Container
        width="full"
        maxWidth="content-max-width"
        className={flex({
          alignItems: "center",
          justifyContent: ["center", "start"],
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
        <Spacer hideBelow="sm" />
        <ColorModeHandler className={css({ hideBelow: "sm" })} />
      </Container>
    </Flex>
  );
}

export default Header;
