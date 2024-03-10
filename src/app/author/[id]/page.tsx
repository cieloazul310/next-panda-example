import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { author } from "@/data/content";
import { getAllPosts, siteMetadata } from "@/utils";
import { Jumbotron, Wrapper, Block } from "@/components";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export function generateStaticParams() {
  const allAuthor = author.getAll();
  return allAuthor;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const item = author.get("id", id);
  if (!item) return undefined;
  const { name, description } = item;
  return siteMetadata({
    title: name,
    description,
  });
}

async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const item = author.get("id", id);
  if (!item) return null;
  const { name, description } = item;

  return (
    <>
      <Jumbotron title={name} headerText="Author" />
      <Wrapper>
        <Block asChild>
          <article>
            <Heading as="h1">{name}</Heading>
            {description && <p>{description}</p>}
          </article>
        </Block>
        <Block enableHover fontWeight="bold" asChild>
          <Link href="/author">Author</Link>
        </Block>
      </Wrapper>
    </>
  );
}

export default Page;
