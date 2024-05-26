import type { Metadata } from "next";
import Link from "next/link";
import { author, post } from "@/content";
import { siteMetadata } from "@/utils/siteMetadata";
import Jumbotron from "@/components/layout/jumbotron";
import Wrapper from "@/components/layout/wrapper";
import { Author } from "@/components/author";
import Block from "@/components/layout/block";
import { PostItem } from "@/components/post-item";
import { vstack } from "styled-system/patterns";

export async function generateStaticParams() {
  const allAuthor = await author.getAll();
  return allAuthor;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const item = await author.get("id", id);
  if (!item) return undefined;
  const { data } = item;
  const { name, description } = data;
  return siteMetadata({
    title: name,
    description,
  }) satisfies Metadata;
}

async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const item = await author.get("id", id);
  if (!item) return null;
  const { data } = item;
  const { name } = data;
  const posts = await post.getAll();
  const authorsPosts = posts.filter((post) => post.frontmatter.author === name);

  return (
    <>
      <Jumbotron title={name} headerText="Author" />
      <Wrapper>
        <Author id={id} {...data} />
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
