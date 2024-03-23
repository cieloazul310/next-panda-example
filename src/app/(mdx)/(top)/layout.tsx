import type { ReactNode } from "react";
import { Jumbotron, Wrapper, Block } from "@/components";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <Jumbotron title="Hello, Park UI" headerText="With Next App Router" />
      <Wrapper>
        <Block>{children}</Block>
      </Wrapper>
    </>
  );
}
