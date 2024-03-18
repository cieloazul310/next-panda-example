import type { FC, ComponentPropsWithoutRef } from "react";
import { article } from "styled-system/patterns";
import { Heading } from "../ui/heading";

type HeadingTag = `h${1 | 2 | 3 | 4 | 5}`;

export function createHeadings(): Record<
  HeadingTag,
  FC<ComponentPropsWithoutRef<HeadingTag>>
> {
  return {
    h1: (props) => (
      <Heading
        className={article({ spacing: "inherit" })}
        as="h1"
        fontSize={["xl", "2xl", "4xl"]}
        mt="calc(token(spacing.md) + token(spacing.lg))"
        mb="calc(token(spacing.sm) + token(spacing.md))"
        {...props}
      />
    ),
    h2: (props) => (
      <Heading
        className={article({ spacing: "inherit" })}
        as="h2"
        fontSize={["xl", "2xl", "3xl"]}
        mt="calc({spacing.md} + {spacing.lg})"
        mb="md"
        {...props}
      />
    ),
    h3: (props) => (
      <Heading
        className={article()}
        as="h3"
        fontSize={["lg", "lg", "2xl"]}
        mt="calc({spacing.md} + {spacing.lg})"
        mb="md"
        {...props}
      />
    ),
    h4: (props) => (
      <Heading
        className={article()}
        as="h4"
        mt="lg"
        mb="md"
        fontSize={["md", "lg", "xl"]}
        {...props}
      />
    ),
    h5: (props) => (
      <Heading
        className={article()}
        as="h5"
        mt="md"
        mb="sm"
        fontSize={["md", "md", "lg"]}
        {...props}
      />
    ),
  };
}
