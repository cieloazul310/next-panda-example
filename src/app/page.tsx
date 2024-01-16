import { Jumbotron, Link } from "../components";

export default function Home() {
  return (
    <>
      <Jumbotron title="Hello, Panda" headerText="With Next App Router" />
      <p>Hello, World</p>
      <Link href="/about">About</Link>
      <Link href="/post">Blog</Link>
    </>
  );
}
