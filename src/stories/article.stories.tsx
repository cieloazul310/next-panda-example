import type { Meta, StoryObj } from "@storybook/react";
import {} from "@mdx-js/mdx";
// import { serialize } from "next-mdx-remote/serialize";
// import { MDXRemote } from "next-mdx-remote";
import { Container } from "styled-system/jsx";
import Block from "@/components/layout/block";
import { useMDXComponents } from "@/mdx-components";
import { mdxEn, mdxJa } from "./data";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ArticleComponents",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hoge: Story = {
  render: () => (
    <Container>
      <Block>Hoge</Block>
    </Container>
  ),
};
/*
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const En: Story = {
  loaders: [
    async () =>
      await {
        source: await serialize(mdxEn, {
          mdxOptions: {
            development: process.env.NODE_ENV === "development",
            remarkPlugins: [],
          },
          parseFrontmatter: true,
        }),
      },
  ],
  render: (args, { loaded }) => {
    const { source } = loaded;
    const components = useMDXComponents();

    return (
      <Container maxWidth="4xl">
        <MDXRemote {...source} components={components} />
      </Container>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InBlockEn: Story = {
  loaders: [
    async () =>
      await {
        source: await serialize(mdxEn, {
          mdxOptions: {
            development: process.env.NODE_ENV === "development",
            remarkPlugins: [],
          },
          parseFrontmatter: true,
        }),
      },
  ],
  render: (args, { loaded }) => {
    const { source } = loaded;
    const components = useMDXComponents();

    return (
      <Container maxWidth="4xl">
        <Block asChild>
          <article>
            <MDXRemote {...source} components={components} />
          </article>
        </Block>
      </Container>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Ja: Story = {
  loaders: [
    async () =>
      await {
        source: await serialize(mdxJa, {
          mdxOptions: {
            development: process.env.NODE_ENV === "development",
            remarkPlugins: [],
          },
          parseFrontmatter: true,
        }),
      },
  ],
  render: (args, { loaded }) => {
    const { source } = loaded;
    const components = useMDXComponents();

    return (
      <Container maxWidth="4xl">
        <MDXRemote {...source} components={components} />
      </Container>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InBlockJa: Story = {
  loaders: [
    async () =>
      await {
        source: await serialize(mdxJa, {
          mdxOptions: {
            development: process.env.NODE_ENV === "development",
            remarkPlugins: [],
          },
          parseFrontmatter: true,
        }),
      },
  ],
  render: (args, { loaded }) => {
    const { source } = loaded;
    const components = useMDXComponents();

    return (
      <Container maxWidth="4xl">
        <Block asChild>
          <article>
            <MDXRemote {...source} components={components} />
          </article>
        </Block>
      </Container>
    );
  },
};
*/
