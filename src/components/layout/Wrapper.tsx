import type { PropsWithChildren } from "react";
import { Container, VStack } from "@styled-system/jsx";
import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import Menu from "./Menu";

function Wrapper({
  children,
  sidebarTop,
  sidebarBottom,
}: PropsWithChildren<{
  sidebarTop?: React.ReactNode;
  sidebarBottom?: React.ReactNode;
}>) {
  return (
    <Container
      width="full"
      maxWidth="content-max-width"
      px="2"
      py="4"
      className={flex({ gap: "sm" })}
    >
      <VStack
        gap="md"
        alignItems="stretch"
        px={[0, 2]}
        flexGrow="1"
        maxWidth="full"
        minWidth="0"
      >
        {children}
      </VStack>
      <div
        className={css({
          width: "280px",
          hideBelow: "md",
          position: "sticky",
          flexShrink: 0,
          top: "calc(token(sizes.header-height) + token(spacing.4))",
          maxHeight: "calc(100vh - token(sizes.header-height))",
          overflowY: "auto",
        })}
      >
        {sidebarTop}
        <Menu />
        {sidebarBottom}
      </div>
    </Container>
  );
}

export default Wrapper;
