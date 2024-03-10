import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { author } from "@/data/content";
import {
  getAllPosts,
  getPostData,
  useMdx,
  siteMetadata,
  parseDate,
} from "@/utils";
import { Jumbotron, Wrapper, Block, Author } from "@/components";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
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
  const authorItem = author.get("name", data.author);

  return (
    <>
      <Jumbotron title={data.title} headerText={parseDate(date)} />
      <Wrapper sidebarTop={authorItem && <Author {...authorItem} />}>
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
          <Block enableHover asChild>
            <Link href={context.older.href}>
              <hgroup>
                <Text mb="sm">Older Post</Text>
                <Heading as="h3" fontSize="lg">
                  {context.older.title}
                </Heading>
                <Text>{parseDate(context.older.date)}</Text>
              </hgroup>
            </Link>
          </Block>
        )}
        {context.newer && (
          <Block enableHover asChild>
            <Link href={context.newer.href}>
              <hgroup>
                <Text mb="sm">Newer Post</Text>
                <Heading as="h3" fontSize="lg">
                  {context.newer.title}
                </Heading>
                <Text>{parseDate(context.newer.date)}</Text>
              </hgroup>
            </Link>
          </Block>
        )}
        <Block enableHover fontWeight="bold" asChild>
          <Link href="/post">Post</Link>
        </Block>
      </Wrapper>
    </>
  );
}

export default Page;
