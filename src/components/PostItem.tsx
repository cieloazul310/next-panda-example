import type { ReactNode } from "react";
import NextLink from "next/link";
import { Block } from "@/components";
import { Heading, Text } from "@/components/ui";
import { parseDate } from "@/utils";
import type { PostMetadata } from "@/content";
import { vstack } from "styled-system/patterns";

export type PostItemProps = Pick<PostMetadata, "href" | "title" | "date"> & {
  headerText?: ReactNode;
  footerText?: ReactNode;
};

export function PostItem({
  href,
  title,
  date,
  headerText,
  footerText,
}: PostItemProps) {
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
          <Text fontSize={{ base: "sm", "@/sm": "md" }}>{parseDate(date)}</Text>
        </hgroup>
        {footerText}
      </NextLink>
    </Block>
  );
}
