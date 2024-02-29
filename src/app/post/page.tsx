import NextLink from "next/link";
import { Wrapper, Jumbotron, Block } from "@/components";
import { getAllPosts } from "@/utils";
import { css } from "@styled-system/css";
import { vstack } from "@styled-system/patterns";

async function Page() {
  const allPosts = await getAllPosts();

  return (
    <>
      <Jumbotron title="MDX Posts" />
      <Wrapper>
        <ul className={vstack({ gap: 1, alignItems: "stretch" })}>
          {allPosts.map(({ title, date, href }) => (
            <Block key={href} enableHover asChild>
              <NextLink className={css({ fontWeight: "bold" })} href={href}>
                <hgroup>
                  <h1>{title}</h1>
                  <p>{new Date(date).toISOString()}</p>
                </hgroup>
              </NextLink>
            </Block>
          ))}
        </ul>
      </Wrapper>
    </>
  );
}

export default Page;
