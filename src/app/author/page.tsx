import Jumbotron from "@/components/layout/jumbotron";
import Wrapper from "@/components/layout/wrapper";
import { Author } from "@/components/author";
import { author } from "@/content";
import { vstack } from "styled-system/patterns";

async function Page() {
  const allAuthors = await author.getAll();

  return (
    <>
      <Jumbotron title="Author" />
      <Wrapper>
        <ul className={vstack({ gap: "sm", alignItems: "stretch" })}>
          {allAuthors.map(({ id, data }) => (
            <Author key={id} id={id} {...data} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
}

export default Page;
