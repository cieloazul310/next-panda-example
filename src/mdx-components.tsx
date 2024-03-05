import type { MDXComponents } from "mdx/types";
import {
  createHeadings,
  Paragraph,
  Kbd,
  Code,
  Pre,
  MdxTable as Table,
  Thead,
  Tr,
  Th,
  Td,
  Ol,
  Ul,
  Li,
  Hr,
  Blockquote,
  Link,
  Image,
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
    li: Li,
    a: Link,
    hr: Hr,
    blockquote: Blockquote,
    kbd: Kbd,
    img: ({ src, width, height, alt, ...props }) =>
      src &&
      alt && (
        <Image
          src={src}
          alt={alt}
          sizes="100vw"
          width={1000}
          height={600}
          {...props}
        />
      ),
    Image,
    ...createHeadings(),
    ...components,
  };
}
