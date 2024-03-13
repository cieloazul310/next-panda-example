import Link from "next/link";
import { author, getAllPosts, getPostData, useMdx } from "@/content";
import { siteMetadata, parseDate } from "@/utils";
import { Jumbotron, Wrapper, Block, Author, PostItem } from "@/components";
import { Text } from "@/components/ui";
import { useMDXComponents } from "../../../mdx-components";

export async function generateStaticParams() {
  const allPosts = await getAllPosts();
  return allPosts;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = params;
  const { title } = await getPostData(slug);
  return siteMetadata({
    title,
  });
}

async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const components = useMDXComponents();
  const { content, frontmatter, context } = await useMdx(slug, { components });
  const date = new Date(frontmatter.date);
  const authorItem = await author.get("name", frontmatter.author);
  const authorBox = authorItem && (
    <Author
      headerText={
        <Text fontWeight="bold" fontSize={{ base: "md", "@/md": "lg" }}>
          Author
        </Text>
      }
      {...authorItem}
    />
  );

  return (
    <>
      <Jumbotron title={frontmatter.title} headerText={parseDate(date)} />
      <Wrapper sidebarTop={authorBox}>
        <Block asChild>
          <article>{content}</article>
        </Block>
        {authorBox}
        {context.older && (
          <PostItem
            headerText={<Text fontWeight="bold">Older Post</Text>}
            {...context.older}
          />
        )}
        {context.newer && (
          <PostItem
            headerText={<Text fontWeight="bold">Newer Post</Text>}
            {...context.newer}
          />
        )}
        <Block enableHover fontWeight="bold" asChild>
          <Link href="/post">Post</Link>
        </Block>
      </Wrapper>
    </>
  );
}

export default Page;
