import { Jumbotron, Wrapper, Main } from "@/components";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Jumbotron title="About" />
      <Wrapper>
        <Main>{children}</Main>
      </Wrapper>
    </>
  );
}
