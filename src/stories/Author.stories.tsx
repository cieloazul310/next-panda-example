import type { Meta, StoryObj } from "@storybook/react";
import { Author } from "@/components";

const meta = {
  title: "Example/Author",
  component: Author,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Author>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithImage: Story = {
  args: {
    id: "cieloazul310",
    name: "cieloazul310",
    description: "風が吹くと条件反射で面白い顔になってしまう。",
    image: "https://avatars.githubusercontent.com/u/21035603",
  },
};

export const WithoutImage: Story = {
  args: {
    id: "cieloazul310",
    name: "cieloazul310",
    description: "風が吹くと条件反射で面白い顔になってしまう。",
  },
};
