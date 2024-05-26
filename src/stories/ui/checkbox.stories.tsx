import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/ui/checkbox";
import { checkbox } from "styled-system/recipes";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ParkUI/Checkbox",
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: "text" },
    size: { control: "select", options: ["sm", "md", "lg"] },
    colorPalette: { control: "select", options: ["accent", "gray"] },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const parameters = {
  controls: { include: ["children", "size", "colorPalette"] },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryMd: Story = {
  render: ({ children, colorPalette = "accent", ...props }) => (
    <Checkbox colorPalette={colorPalette} {...props}>
      {children}
    </Checkbox>
  ),
  args: {
    children: "Label",
    colorPalette: "accent",
    ...checkbox.raw({
      size: "md",
    }),
  },
  parameters,
};

export const GraySm: Story = {
  render: ({ children, colorPalette = "gray", ...props }) => (
    <Checkbox colorPalette={colorPalette} {...props}>
      {children}
    </Checkbox>
  ),
  args: {
    children: "Label",
    colorPalette: "gray",
    ...checkbox.raw({
      size: "sm",
    }),
  },
  parameters,
};

export const RedLg: Story = {
  render: ({ children, colorPalette = "accent", ...props }) => (
    <Checkbox colorPalette={colorPalette} {...props}>
      {children}
    </Checkbox>
  ),
  args: {
    children: "Label",
    colorPalette: "accent",
    ...checkbox.raw({
      size: "lg",
    }),
  },
  parameters,
};
