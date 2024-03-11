import type { Meta, StoryObj } from "@storybook/react";
import { Block } from "@/components";
import { VStack } from "styled-system/jsx";
import { paper } from "styled-system/patterns";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Block",
  component: Block,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    colorPalette: {
      control: "select",
      options: ["accent", "gray"],
    },
    enableHover: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Block>;

export default meta;
type Story = StoryObj<typeof meta>;

const parameters = {
  controls: { include: ["colorPalette", "enableHover"] },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: ({ children, ...props }) => (
    <Block {...props}>
      <p>Hello, Block component</p>
    </Block>
  ),
  // @ts-ignore
  args: {
    colorPalette: "accent",
    ...paper.raw({
      enableHover: true,
    }),
  },
  parameters,
};

export const Multiple: Story = {
  render: ({ children, ...props }) => (
    <VStack width="full" alignItems="stretch" gap={2}>
      <Block {...props}>
        <p>Hello, Block component</p>
      </Block>
      <Block {...props}>
        <p>Hello, Block component</p>
      </Block>
      <Block {...props}>
        <Block {...props} asChild>
          <blockquote>
            <p>Nested</p>
          </blockquote>
        </Block>
      </Block>
    </VStack>
  ),
  // @ts-ignore
  args: {
    colorPalette: "accent",
    ...paper.raw({
      enableHover: false,
    }),
  },
  parameters,
};
