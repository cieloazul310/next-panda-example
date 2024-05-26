import type { Meta, StoryObj } from "@storybook/react";
import * as Clipboard from "@/components/ui/clipboard";
import { FormLabel } from "@/components/ui/form-label";
import { Input } from "@/components/ui/input";
import { IconButton } from "@/components/ui/icon-button";
import { FaRegClipboard, FaCheck } from "react-icons/fa6";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ParkUI/Clipboard",
  component: Clipboard.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    // label: { control: "text" },
  },
  render: ({ ...props }) => (
    <Clipboard.Root value="https://park-ui.com" {...props}>
      <Clipboard.Label asChild>
        <FormLabel>Copy</FormLabel>
      </Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Input asChild>
          <Input />
        </Clipboard.Input>
        <Clipboard.Trigger asChild>
          <IconButton variant="outline">
            <Clipboard.Indicator copied={<FaCheck />}>
              <FaRegClipboard />
            </Clipboard.Indicator>
          </IconButton>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  ),
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Clipboard.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const parameters = {
  controls: { include: ["label"] },
};

export const One: Story = {
  args: {
    // label: ""
  },
  parameters,
};
