import type { ReactNode } from "react";
import { Jumbotron, Wrapper, Block } from "@/components";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Jumbotron title="About" />
      <Wrapper>
        <Block>{children}</Block>
      </Wrapper>
    </>
  );
}
