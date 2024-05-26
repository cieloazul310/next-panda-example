import type { PropsWithChildren } from "react";
import Jumbotron from "@/components/layout/jumbotron";
import Wrapper from "@/components/layout/wrapper";
import Block from "@/components/layout/block";

export default function Template({ children }: PropsWithChildren) {
  return (
    <>
      <Jumbotron title="Hello, Park UI" headerText="With Next App Router" />
      <Wrapper>
        <Block>{children}</Block>
      </Wrapper>
    </>
  );
}
