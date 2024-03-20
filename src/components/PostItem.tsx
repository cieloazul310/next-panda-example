import type { ReactNode } from "react";
import NextLink from "next/link";
import { z } from "zod";
import { Block } from "@/components";
import { Heading, Text } from "@/components/ui";
import { parseDate } from "@/utils";
import { post } from "@/content";
import { vstack } from "styled-system/patterns";

type PostMetadata = z.infer<typeof post.metadataSchema>;

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
          <Text fontSize={{ base: "sm", "@/sm": "md" }}>
            <time>{parseDate(date)}</time>
          </Text>
        </hgroup>
        {footerText}
      </NextLink>
    </Block>
  );
}
