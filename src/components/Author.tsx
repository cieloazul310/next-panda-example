import type { ReactNode, PropsWithChildren } from "react";
import NextLink from "next/link";
import { z } from "zod";
import { IconButton } from "@/components/ui";
import { author } from "@/content";
import { css } from "styled-system/css";
import { hstack, stack, vstack } from "styled-system/patterns";
import { FaXTwitter, FaGithub, FaLink } from "react-icons/fa6";
import { Avatar, Heading, Text } from "./ui";
import { Block } from "./layout";

type AuthorSchema = z.infer<typeof author.schema>;

type AuthorSocialButtonProps = PropsWithChildren<{
  href: string;
  label: string;
}>;

function AuthorSocialButton({
  children,
  href,
  label,
}: AuthorSocialButtonProps) {
  return (
    <IconButton variant="ghost" aria-label={label} asChild>
      <a href={href} target="_blank" rel="noreferer noopener" title={label}>
        {children}
      </a>
    </IconButton>
  );
}

type AuthorSocialProps = Pick<AuthorSchema, "socials">;

function AuthorSocial({ socials }: AuthorSocialProps) {
  if (!socials) return null;
  const { github, twitter, url } = socials;
  return (
    <address className={hstack({ gap: 1, zIndex: 2 })}>
      {url && (
        <AuthorSocialButton href={url} label="Web">
          <FaLink />
        </AuthorSocialButton>
      )}
      {github && (
        <AuthorSocialButton
          href={`https://github.com/${github}`}
          label="GitHub"
        >
          <FaGithub />
        </AuthorSocialButton>
      )}
      {twitter && (
        <AuthorSocialButton
          href={`https://twitter.com/${twitter}`}
          label="Twitter"
        >
          <FaXTwitter />
        </AuthorSocialButton>
      )}
    </address>
  );
}

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
      <article
        className={vstack({
          alignItems: "flex-start",
          gap: "sm",
          position: "relative",
        })}
      >
        {headerText && <header>{headerText}</header>}
        <div
          className={stack({
            flexDirection: "column",
            gap: "sm",
            width: "full",
            alignItems: "center",
            "@/md": { flexDirection: "row", gap: "md" },
          })}
        >
          <Avatar src={image} size="2xl">
            {name}
          </Avatar>
          <div
            className={vstack({
              gap: "sm",
              alignItems: { base: "center", "@/md": "flex-start" },
              width: "full",
              flexGrow: 1,
            })}
          >
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
                <NextLink
                  href={`/author/${id}`}
                  className={css({
                    _after: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      inset: 0,
                      width: "full",
                      height: "full",
                      zIndex: 1,
                      content: '""',
                    },
                  })}
                >
                  {name}
                </NextLink>
              </Heading>
              {description && (
                <Text width="full" fontSize={{ base: "sm", "@/md": "md" }}>
                  {description}
                </Text>
              )}
            </hgroup>
            <AuthorSocial socials={socials} />
          </div>
        </div>
        {footerText && <footer>{footerText}</footer>}
      </article>
    </Block>
  );
}
