import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllPosts,
  getPostData,
  useMdx,
  siteMetadata,
  parseDate,
  // rehypeImageSize,
} from "@/utils";
import { Jumbotron, Wrapper, Block } from "@/components";
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
  return (
    <>
      <Jumbotron title={data.title} headerText={parseDate(date)} />
      <Wrapper>
        <Block asChild>
          <article>
            <MDXRemote
              options={{
                parseFrontmatter: true,
                mdxOptions: {
                  // rehypePlugins: [[rehypeImageSize, { root: process.cwd() }]],
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
            <Link href={context.older.href}>{context.older.title}</Link>
          </Block>
        )}
        {context.newer && (
          <Block enableHover asChild>
            <Link href={context.newer.href}>{context.newer.title}</Link>
          </Block>
        )}
      </Wrapper>
    </>
  );
}

export default Page;
