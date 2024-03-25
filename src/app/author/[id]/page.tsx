import type { Metadata } from "next";
import Link from "next/link";
import { author, post } from "@/content";
import { siteMetadata } from "@/utils";
import { Jumbotron, Wrapper, Block, Author, PostItem } from "@/components";
import { vstack } from "styled-system/patterns";

export async function generateStaticParams() {
  const allAuthor = await author.getAll();
  return allAuthor;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const item = await author.get("id", id);
  if (!item) return undefined;
  const { name, description } = item;
  return siteMetadata({
    title: name,
    description,
  }) satisfies Metadata;
}

async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const item = await author.get("id", id);
  if (!item) return null;
  const { name } = item;
  const posts = await post.getAll();
  const authorsPosts = posts.filter((post) => post.frontmatter.author === name);

  return (
    <>
      <Jumbotron title={name} headerText="Author" />
      <Wrapper>
        <Author {...item} />
        <ul className={vstack({ gap: "sm", alignItems: "stretch" })}>
          {authorsPosts.map((post) => (
            <PostItem key={post.href} {...post} />
          ))}
        </ul>
        <Block enableHover fontWeight="bold" asChild>
          <Link href="/author">Author</Link>
        </Block>
      </Wrapper>
    </>
  );
}

export default Page;
