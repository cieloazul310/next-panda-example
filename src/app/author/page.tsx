import { Wrapper, Jumbotron, Author } from "@/components";
import { author } from "@/content";
import { vstack } from "@styled-system/patterns";

async function Page() {
  const allAuthors = await author.getAll();

  return (
    <>
      <Jumbotron title="Author" />
      <Wrapper>
        <ul className={vstack({ gap: "sm", alignItems: "stretch" })}>
          {allAuthors.map((data) => (
            <Author key={data.id} {...data} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
}

export default Page;
