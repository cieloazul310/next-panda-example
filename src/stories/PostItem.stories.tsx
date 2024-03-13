import type { Meta, StoryObj } from "@storybook/react";
import { PostItem } from "@/components";
import { Text } from "@/components/ui";
import { vstack, cq } from "styled-system/patterns";

const meta = {
  title: "Example/PostItem",
  component: PostItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  render: ({ headerText, footerText, ...args }) => {
    const ht = headerText && <Text fontWeight="bold">{headerText}</Text>;
    const ft = footerText && <Text>{footerText}</Text>;
    return (
      <div className={cq()}>
        <PostItem headerText={ht} footerText={ft} {...args} />
      </div>
    );
  },
  args: {
    headerText: "",
    footerText: "",
  },
  argTypes: {
    headerText: {
      control: "text",
    },
    footerText: {
      control: "text",
    },
  },
} satisfies Meta<typeof PostItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    href: "/",
    title: "Example Title",
    date: new Date("2024-03-10"),
  },
};

export const BasicJa: Story = {
  args: {
    href: "/",
    title: "日本語のタイトル",
    date: new Date("2024-03-10"),
  },
};
