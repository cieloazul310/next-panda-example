import type { Meta, StoryObj } from "@storybook/react";
import * as Carousel from "@/components/ui/carousel";
import { checkbox } from "@styled-system/recipes";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ParkUI/Clipboard",
  component: Carousel.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
    loop: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Carousel.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export function Hoge() {
  return <></>;
}
