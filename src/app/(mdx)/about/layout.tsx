import type { PropsWithChildren } from "react";
import Jumbotron from "@/components/layout/jumbotron";
import Wrapper from "@/components/layout/wrapper";
import Block from "@/components/layout/block";

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Jumbotron title="About" />
      <Wrapper>
        <Block>{children}</Block>
      </Wrapper>
    </>
  );
}
