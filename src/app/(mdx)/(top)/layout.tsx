import { Jumbotron, Wrapper, Block } from "@/components";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Jumbotron title="Hello, Park UI" />
      <Wrapper>
        <Block>{children}</Block>
      </Wrapper>
    </>
  );
}
