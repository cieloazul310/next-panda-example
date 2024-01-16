import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostData, useMdx, siteMetadata } from "@/utils";
import type { PropsWithChildren } from "react";
import { Jumbotron, Link } from "@/components";
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
  return (
    <>
      <Jumbotron title={data.title} />
      <MDXRemote
        options={{ parseFrontmatter: true }}
        source={content}
        components={components}
      />
      {context.older && (
        <Link href={context.older.href}>{context.older.title}</Link>
      )}
      {context.newer && (
        <Link href={context.newer.href}>{context.newer.title}</Link>
      )}
    </>
  );
}

export default Page;
