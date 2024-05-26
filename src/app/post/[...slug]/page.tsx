import type { Metadata } from "next";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import { author, post, categories } from "@/content";
import { Author } from "@/components/author";
import Alert from "@/components/alert";
import CategoriesBadge from "@/components/category-badge";
import Block from "@/components/layout/block";
import Jumbotron from "@/components/layout/jumbotron";
import Wrapper from "@/components/layout/wrapper";
import { PostItem } from "@/components/post-item";
import { Text } from "@/components/ui/text";
import { siteMetadata } from "@/utils/siteMetadata";
import parseDate from "@/utils/date";
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
  const item = await post.get(slug);
  if (!item) return siteMetadata();
  const { frontmatter } = item;
  const { title, featuredImg } = frontmatter;
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
  const item = await post.useMdx(slug, {
    components,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });
  if (!item) return null;
  const { content, frontmatter, context } = item;
  const authorItem = await author.get("name", frontmatter.author);
  const category = await categories.get("title", frontmatter.category);
  const authorBox = authorItem && (
    <Author
      id={authorItem.id}
      headerText={
        <Text fontWeight="bold" fontSize={{ base: "md", "@/md": "lg" }}>
          Author
        </Text>
      }
      {...authorItem.data}
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
