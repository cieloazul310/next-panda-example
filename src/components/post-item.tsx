import type { ReactNode } from "react";
import NextLink from "next/link";
import parseDate from "@/utils/date";
import type { PostMetadata } from "@/content";
import { vstack } from "styled-system/patterns";
import Block from "./layout/block";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";

export type PostItemProps = Pick<PostMetadata, "href"> & {
  frontmatter: Pick<PostMetadata["frontmatter"], "title" | "date">;
  headerText?: ReactNode;
  footerText?: ReactNode;
};

export function PostItem({
  href,
  frontmatter,
  headerText,
  footerText,
}: PostItemProps) {
  const { title, date } = frontmatter;
  return (
    <Block enableHover asChild>
      <NextLink
        className={vstack({ alignItems: "flex-start", gap: "sm" })}
        href={href}
      >
        {headerText}
        <hgroup>
          <Heading
            as="h1"
            fontWeight="bold"
            fontSize={{ base: "md", "@/sm": "lg", "@/md": "xl" }}
          >
            {title}
          </Heading>
          <Text fontSize={{ base: "sm", "@/sm": "md" }}>
            <time>{parseDate(date)}</time>
          </Text>
        </hgroup>
        {footerText}
      </NextLink>
    </Block>
  );
}
