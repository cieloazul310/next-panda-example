import { Jumbotron, Wrapper, Block } from "@/components";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Jumbotron title="About" />
      <Wrapper>
        <Block>{children}</Block>
      </Wrapper>
    </>
  );
}
