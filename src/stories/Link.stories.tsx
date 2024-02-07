import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@/components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Link",
  component: Link,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  /*
  argTypes: {
  },
  */
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    href: "/",
    children: "Link",
  },
};

export const Inline: Story = {
  render: ({ children, ...props }) => (
    <article>
      <p>
        This is{" "}
        <Link href="/" {...props}>
          {children}
        </Link>
        . Please check out.
      </p>
      <p>
        This is{" "}
        <Link href="https://cieloazul310.github.io" {...props}>
          {children}
        </Link>{" "}
        with External Icon. Please check out.
      </p>
    </article>
  ),
  args: {
    children: "Inline link",
  },
};
