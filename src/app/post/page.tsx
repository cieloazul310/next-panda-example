import NextLink from "next/link";
import { Wrapper, Jumbotron, Block } from "@/components";
import { getAllPosts } from "@/utils";
import { linkBox, linkOverlay, vstack } from "@styled-system/patterns";

async function Page() {
  const allPosts = await getAllPosts();

  return (
    <>
      <Jumbotron title="MDX Posts" />
      <Wrapper>
        <ul className={vstack({ gap: 1, alignItems: "stretch" })}>
          {allPosts.map(({ title, date, href }) => (
            <Block
              as="li"
              key={href}
              className={linkBox({
                _hover: { bg: "accent.a3" },
              })}
            >
              <hgroup>
                <h1>
                  <NextLink
                    className={linkOverlay({ fontWeight: "bold" })}
                    href={href}
                  >
                    {title}
                  </NextLink>
                </h1>
                <p>{new Date(date).toISOString()}</p>
              </hgroup>
            </Block>
          ))}
        </ul>
      </Wrapper>
    </>
  );
}

export default Page;
