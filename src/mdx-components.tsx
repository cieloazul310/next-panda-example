import Image, { type ImageProps } from "next/image";
import type { MDXComponents } from "mdx/types";
import {
  createHeadings,
  Paragraph,
  Kbd,
  Code,
  Pre,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Ol,
  Ul,
  Hr,
  Blockquote,
  Link,
} from "@/components";

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    p: Paragraph,
    code: Code,
    pre: Pre,
    table: Table,
    thead: Thead,
    tr: Tr,
    th: Th,
    td: Td,
    ol: Ol,
    ul: Ul,
    a: Link,
    hr: Hr,
    blockquote: Blockquote,
    kbd: Kbd,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...createHeadings(),
    ...components,
  };
}
