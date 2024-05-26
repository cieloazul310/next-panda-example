import Jumbotron from "@/components/layout/jumbotron";
import Wrapper from "@/components/layout/wrapper";
import { PostItem } from "@/components/post-item";
import { post } from "@/content";
import { vstack } from "styled-system/patterns";

async function Page() {
  const allPosts = await post.getAll();

  return (
    <>
      <Jumbotron title="MDX Posts" />
      <Wrapper>
        <ul className={vstack({ gap: "sm", alignItems: "stretch" })}>
          {allPosts
            .sort(
              (a, b) =>
                b.frontmatter.date.getTime() - a.frontmatter.date.getTime(),
            )
            .map((post) => (
              <PostItem key={post.href} {...post} />
            ))}
        </ul>
      </Wrapper>
    </>
  );
}

export default Page;
