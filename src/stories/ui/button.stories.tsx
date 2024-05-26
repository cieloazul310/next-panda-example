import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { button } from "styled-system/recipes";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ParkUI/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "subtle", "outline", "ghost"],
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const parameters = {
  controls: { include: ["children", "variant", "size"] },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: ({ children, ...props }) => <Button {...props}>{children}</Button>,
  args: {
    children: "Primary",
    ...button.raw({
      variant: "solid",
      size: "md",
    }),
  },
  parameters,
};

export const Secondary: Story = {
  render: ({ children, ...props }) => <Button {...props}>{children}</Button>,
  args: {
    children: "Secondary",
    colorPalette: "red",
    ...button.raw({
      variant: "outline",
      size: "sm",
    }),
  },
  parameters,
};

export const Large: Story = {
  render: ({ children, ...props }) => <Button {...props}>{children}</Button>,
  args: {
    children: "Double Extra Large",
    ...button.raw({
      variant: "ghost",
      size: "xl",
    }),
  },
  parameters,
};

export const Rounded: Story = {
  render: ({ children, ...props }) => <Button {...props}>{children}</Button>,
  args: {
    children: "Outline",
    ...button.raw({
      variant: "subtle",
      size: "2xl",
    }),
  },
  parameters,
};
