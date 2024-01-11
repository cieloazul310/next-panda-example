import * as path from "path";
import { MDXRemote } from "next-mdx-remote";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { allPosts, useMdx, type PostFrontmatter } from "@/utils";

export async function generateStaticParams() {
  console.log(allPosts);
  return allPosts.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const markdown = await useMdx(params.slug);

  if (!markdown) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  // do something with frontmatter, like set metadata or whatever

  return <>{content}</>;
}
