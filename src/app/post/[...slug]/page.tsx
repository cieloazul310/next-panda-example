import type { Metadata } from "next";
import Link from "next/link";
import { author, post, categories } from "@/content";
import { siteMetadata, parseDate } from "@/utils";
import {
  Jumbotron,
  Wrapper,
  Block,
  Author,
  PostItem,
  Alert,
  CategoriesBadge,
} from "@/components";
import { Text } from "@/components/ui";
import { useMDXComponents } from "@/mdx-components";
import { MdInfo as InfoIcon } from "react-icons/md";

export async function generateStaticParams() {
  const allPosts = await post.getAll();
  return allPosts;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = params;
  const { title, featuredImg } = await post.get(slug);
  return siteMetadata({
    title,
    openGraph: {
      images: featuredImg,
    },
  }) satisfies Metadata;
}

async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const components = useMDXComponents();
  const { content, frontmatter, context } = await post.useMdx(slug, {
    components,
  });
  const authorItem = await author.get("name", frontmatter.author);
  const category = await categories.get("title", frontmatter.category);
  const authorBox = authorItem && (
    <Author
      headerText={
        <Text fontWeight="bold" fontSize={{ base: "md", "@/md": "lg" }}>
          Author
        </Text>
      }
      {...authorItem}
    />
  );

  return (
    <>
      <Jumbotron
        title={frontmatter.title}
        headerText={<time>{parseDate(frontmatter.date)}</time>}
        footerText={category && <CategoriesBadge {...category} />}
      />
      <Wrapper sidebarTop={authorBox}>
        <Block asChild>
          <article>
            {frontmatter.draft && <Alert title="Draft" icon={<InfoIcon />} />}
            {content}
          </article>
        </Block>
        {authorBox}
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
