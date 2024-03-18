import type { PropsWithChildren, ReactNode } from "react";
import { Container, VStack } from "styled-system/jsx";
import { flex, vstack } from "styled-system/patterns";
import Menu from "./Menu";

function Wrapper({
  children,
  sidebarTop,
  sidebarBottom,
}: PropsWithChildren<{
  sidebarTop?: ReactNode;
  sidebarBottom?: ReactNode;
}>) {
  return (
    <Container
      width="full"
      maxWidth="content-max-width"
      px="2"
      py="4"
      className={flex({ gap: "md" })}
    >
      <VStack
        containerType="inline-size"
        gap="md"
        alignItems="stretch"
        flexGrow="1"
        maxWidth="full"
        minWidth="0"
      >
        {children}
      </VStack>
      <div
        className={vstack({
          containerType: "inline-size",
          width: "280px",
          hideBelow: "md",
          position: "sticky",
          flexShrink: 0,
          alignItems: "stretch",
          top: "calc(token(sizes.header-height) + token(spacing.4))",
          maxHeight: "calc(100vh - token(sizes.header-height))",
          overflowY: "auto",
          gap: "md",
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
