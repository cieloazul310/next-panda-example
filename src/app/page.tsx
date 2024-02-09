import { Jumbotron, Wrapper, Main, Link, anchor } from "@/components";

export default function Home() {
  return (
    <>
      <Jumbotron title="Hello, Panda" headerText="With Next App Router" />
      <Wrapper>
        <Main>
          <p>Hello, World</p>
          <Link className={anchor} href="/about">
            About
          </Link>
          <Link className={anchor} href="/post">
            Blog
          </Link>
        </Main>
      </Wrapper>
    </>
  );
}
