import type { ReactNode } from "react";
import NextLink from "next/link";
import { z } from "zod";
import { author } from "@/content";
import { stack, vstack } from "styled-system/patterns";
import { Avatar } from "./ui/avatar";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Block } from "./layout";

type AuthorSchema = z.infer<typeof author.schema>;

export type AuthorProps = Pick<
  AuthorSchema,
  "id" | "name" | "description" | "image"
> & {
  headerText?: ReactNode;
  footerText?: ReactNode;
};

export function Author({
  id,
  name,
  description,
  image,
  headerText,
  footerText,
}: AuthorProps) {
  return (
    <Block enableHover asChild>
      <NextLink
        className={vstack({ alignItems: "flex-start", gap: "sm" })}
        href={`/author/${id}`}
      >
        {headerText}
        <article
          className={stack({
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            "@/md": { flexDirection: "row", gap: 4 },
          })}
        >
          <Avatar src={image} size="2xl">
            {name}
          </Avatar>
          <hgroup
            className={vstack({
              gap: 1,
              alignItems: "center",
              width: "full",
              "@/md": {
                gap: 0,
                alignItems: "flex-start",
              },
            })}
          >
            <Heading as="h1" fontSize={{ base: "lg", "@/md": "xl" }}>
              {name}
            </Heading>
            {description && <Text width="full">{description}</Text>}
          </hgroup>
          {footerText}
        </article>
      </NextLink>
    </Block>
  );
}
