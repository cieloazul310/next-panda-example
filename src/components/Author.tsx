import type { ReactNode } from "react";
import NextLink from "next/link";
import { z } from "zod";
import { author } from "@/content";
import { css } from "styled-system/css";
import { stack, vstack } from "styled-system/patterns";
import { Avatar } from "./ui/avatar";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Block } from "./layout";

type AuthorSchema = z.infer<typeof author.schema>;

export type AuthorProps = Pick<
  AuthorSchema,
  "id" | "name" | "description" | "image" | "socials"
> & {
  headerText?: ReactNode;
  footerText?: ReactNode;
};

export function Author({
  id,
  name,
  description,
  image,
  socials,
  headerText,
  footerText,
}: AuthorProps) {
  return (
    <Block enableHover asChild>
      <NextLink href={`/author/${id}`} className={css({ display: "block" })}>
        <article
          className={vstack({
            alignItems: "flex-start",
            gap: "sm",
          })}
        >
          {headerText && <header>{headerText}</header>}
          <div
            className={stack({
              flexDirection: "column",
              gap: "sm",
              alignItems: "center",
              "@/md": { flexDirection: "row", gap: "md" },
            })}
          >
            <Avatar src={image} size="2xl">
              {name}
            </Avatar>
            <hgroup
              className={vstack({
                gap: "xs",
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
          </div>
          {footerText && <footer>{footerText}</footer>}
        </article>
      </NextLink>
    </Block>
  );
}
