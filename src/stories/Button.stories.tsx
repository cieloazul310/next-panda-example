import type { Meta, StoryObj } from "@storybook/react";
import { button } from "../../styled-system/recipes";
import { Button } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: "select", options: ["contained", "rounded"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: ({ children, ...props }) => (
    <Button colorPalette="primary" {...props}>
      {children}
    </Button>
  ),
  args: {
    children: "Primary",
    ...button.raw({
      variant: "contained",
    }),
  },
};

export const Secondary: Story = {
  render: ({ children, ...props }) => (
    <Button colorPalette="secondary" {...props}>
      {children}
    </Button>
  ),
  args: {
    children: "Secondary",
    ...button.raw({
      variant: "contained",
    }),
  },
};

export const Large: Story = {
  render: ({ children, ...props }) => <Button {...props}>{children}</Button>,
  args: {
    size: "2xl",
    children: "Double Extra Large",
    ...button.raw({
      variant: "contained",
    }),
  },
};

export const Rounded: Story = {
  render: ({ children, ...props }) => <Button {...props}>{children}</Button>,
  args: {
    children: "Rounded",
    ...button.raw({
      variant: "rounded",
    }),
  },
};
