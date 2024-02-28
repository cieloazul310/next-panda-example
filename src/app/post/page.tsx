import NextLink from "next/link";
import { Wrapper, Jumbotron } from "@/components";
import { getAllPosts } from "@/utils";
import { css, cx } from "@styled-system/css";
import { vstack, paper } from "@styled-system/patterns";
import { ark } from "@ark-ui/react";
import { styled } from "@styled-system/jsx";

const Li = styled(ark.li);

async function Page() {
  const allPosts = await getAllPosts();

  return (
    <>
      <Jumbotron title="MDX Posts" />
      <Wrapper>
        <ul className={vstack({ gap: 1, alignItems: "stretch" })}>
          {allPosts.map(({ title, date, href }) => (
            <Li
              key={href}
              className={cx(
                css({ colorPalette: "accent" }),
                paper({
                  hover: true,
                }),
              )}
              asChild
            >
              <NextLink className={css({ fontWeight: "bold" })} href={href}>
                <hgroup>
                  <h1>{title}</h1>
                  <p>{new Date(date).toISOString()}</p>
                </hgroup>
              </NextLink>
            </Li>
          ))}
        </ul>
      </Wrapper>
    </>
  );
}

export default Page;
