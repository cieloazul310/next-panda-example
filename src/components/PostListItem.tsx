import NextLink from "next/link";
import { Block } from "@/components";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { parseDate, type PostMetadata } from "@/utils";

export type PostListItemProps = Pick<PostMetadata, "href" | "title" | "date">;

export function PostListItem({ href, title, date }: PostListItemProps) {
  return (
    <Block enableHover asChild>
      <NextLink href={href}>
        <hgroup>
          <Heading as="h1" fontWeight="bold">
            {title}
          </Heading>
          <Text>{parseDate(date)}</Text>
        </hgroup>
      </NextLink>
    </Block>
  );
}
