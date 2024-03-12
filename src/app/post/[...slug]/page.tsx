import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { author, getAllPosts, getPostData, useMdx } from "@/content";
import { siteMetadata, parseDate } from "@/utils";
import { Jumbotron, Wrapper, Block, Author, PostItem } from "@/components";
import { Text } from "@/components/ui";
// import remarkGfm from "remark-gfm";
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
  const mdx = await useMdx(slug);
  const { context } = await getPostData(slug);
  const components = useMDXComponents();
  if (!mdx) return null;
  const { content, data } = mdx;
  const date = new Date(data.date);
  const authorItem = await author.get("name", data.author);
  const sidebarAuthor = authorItem && (
    <Author
      headerText={<Text fontWeight="bold">Author</Text>}
      {...authorItem}
    />
  );

  return (
    <>
      <Jumbotron title={data.title} headerText={parseDate(date)} />
      <Wrapper sidebarTop={sidebarAuthor}>
        <Block asChild>
          <article>
            <MDXRemote
              options={{
                parseFrontmatter: true,
                mdxOptions: {
                  // remarkPlugins: [remarkGfm],
                },
              }}
              source={content}
              components={components}
            />
          </article>
        </Block>
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
