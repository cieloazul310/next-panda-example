import Link from "next/link";
import { author, post } from "@/content";
import { siteMetadata, parseDate } from "@/utils";
import { Jumbotron, Wrapper, Block, Author, PostItem } from "@/components";
import { Text, Alert } from "@/components/ui";
import { MdInfo as InfoIcon } from "react-icons/md";
import { useMDXComponents } from "../../../mdx-components";

export async function generateStaticParams() {
  const allPosts = await post.getAll();
  return allPosts;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = params;
  const { title } = await post.get(slug);
  return siteMetadata({
    title,
  });
}

async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const components = useMDXComponents();
  const { content, frontmatter, context } = await post.useMdx(slug, {
    components,
  });
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
      <Jumbotron
        title={frontmatter.title}
        headerText={parseDate(frontmatter.date)}
      />
      <Wrapper sidebarTop={authorBox}>
        <Block asChild>
          <article>
            {frontmatter.draft && (
              <Alert.Root>
                <Alert.Icon asChild>
                  <InfoIcon />
                </Alert.Icon>
                <Alert.Content>
                  <Alert.Title>Draft post</Alert.Title>
                  <Alert.Description>
                    For the best experience, please update your browser.
                  </Alert.Description>
                </Alert.Content>
              </Alert.Root>
            )}
            {content}
          </article>
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
