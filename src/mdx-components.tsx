import type { MDXComponents } from "mdx/types";
import {
  createHeadings,
  Paragraph,
  Code,
  Pre,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Ol,
  Ul,
  Blockquote,
  Link,
} from "@/components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
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
    blockquote: Blockquote,
    ...createHeadings(),
    ...components,
  };
}
