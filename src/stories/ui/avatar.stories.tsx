import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/components/ui";
import { avatar } from "styled-system/recipes";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ParkUI/Avatar",
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    name: {
      control: "text",
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
    src: {
      control: "select",
      options: [
        "https://i.ytimg.com/vi/LqB9lhHqmsE/0.jpg",
        "https://i.ytimg.com/vi/H_hbF2EIWMw/0.jpg",
        undefined,
      ],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const parameters = {
  controls: { include: ["name", "size", "src"] },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: ({ ...props }) => <Avatar {...props} />,
  args: {
    name: "Primary",
    ...avatar.raw({
      size: "md",
    }),
  },
  parameters,
};

export const Secondary: Story = {
  render: ({ ...props }) => <Avatar {...props} />,
  args: {
    name: "Daniel Johnston",
    ...avatar.raw({
      size: "xl",
    }),
  },
  parameters,
};

export const Large: Story = {
  render: ({ ...props }) => <Avatar {...props} />,
  args: {
    name: "cieloazul310",
    ...avatar.raw({
      size: "xl",
    }),
  },
  parameters,
};

export const Rounded: Story = {
  render: ({ ...props }) => <Avatar {...props} />,
  args: {
    name: "椿三十郎",
    ...avatar.raw({
      size: "2xl",
    }),
  },
  parameters,
};
