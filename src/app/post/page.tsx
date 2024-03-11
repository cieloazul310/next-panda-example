import { Wrapper, Jumbotron, PostListItem } from "@/components";
import { getAllPosts } from "@/content";
import { vstack } from "@styled-system/patterns";

async function Page() {
  const allPosts = await getAllPosts({ sortDesc: true });

  return (
    <>
      <Jumbotron title="MDX Posts" />
      <Wrapper>
        <ul className={vstack({ gap: "sm", alignItems: "stretch" })}>
          {allPosts.map((post) => (
            <PostListItem key={post.href} {...post} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
}

export default Page;
