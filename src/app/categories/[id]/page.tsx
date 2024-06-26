import type { Metadata } from "next";
import Link from "next/link";
import { categories, post } from "@/content";
import { siteMetadata } from "@/utils/siteMetadata";
import Block from "@/components/layout/block";
import Jumbotron from "@/components/layout/jumbotron";
import Wrapper from "@/components/layout/wrapper";
import { PostItem } from "@/components/post-item";
import { Text } from "@/components/ui/text";
import { vstack } from "styled-system/patterns";

export async function generateStaticParams() {
  const allCategories = await categories.getAll();
  return allCategories;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const item = await categories.get("id", id);
  if (!item) return undefined;
  const { title } = item;
  return siteMetadata({
    title,
  }) satisfies Metadata;
}

async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const item = await categories.get("id", id);
  if (!item) return null;
  const { title } = item;
  const posts = await post.getAll();
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category === title,
  );

  return (
    <>
      <Jumbotron title={title} headerText="Categories" />
      <Wrapper>
        {categoryPosts.length > 0 ? (
          <ul className={vstack({ gap: "sm", alignItems: "stretch" })}>
            {categoryPosts.map((post) => (
              <PostItem key={post.href} {...post} />
            ))}
          </ul>
        ) : (
          <Block>
            <Text>No categories&apos; post</Text>
          </Block>
        )}
        <Block enableHover fontWeight="bold" asChild>
          <Link href="/categories">Categories</Link>
        </Block>
      </Wrapper>
    </>
  );
}

export default Page;
