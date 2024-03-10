import NextLink from "next/link";
import { Wrapper, Jumbotron, Block, Author } from "@/components";
import { author } from "@/data/content";
import { css } from "@styled-system/css";
import { vstack } from "@styled-system/patterns";

async function Page() {
  const allAuthors = author.getAll();

  return (
    <>
      <Jumbotron title="Author" />
      <Wrapper>
        <ul className={vstack({ gap: 1, alignItems: "stretch" })}>
          {allAuthors.map((data) => (
            <Author key={data.id} {...data} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
}

export default Page;
