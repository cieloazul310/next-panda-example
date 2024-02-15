import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllPosts,
  getPostData,
  useMdx,
  siteMetadata,
  // rehypeImageSize,
} from "@/utils";
import { Jumbotron, Wrapper, Link, Block } from "@/components";
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
      <Jumbotron title={data.title} headerText={date.toISOString()} />
      <Wrapper>
        <Block as="article">
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
        </Block>
        {context.older && (
          <Link href={context.older.href}>{context.older.title}</Link>
        )}
        {context.newer && (
          <Link href={context.newer.href}>{context.newer.title}</Link>
        )}
      </Wrapper>
    </>
  );
}

export default Page;
