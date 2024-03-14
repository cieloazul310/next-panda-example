import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@/components/ui";
import { MdInfo as InfoIcon } from "react-icons/md";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ParkUI/Alert",
  component: Alert.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: {
      control: "text",
    },
  },
} satisfies Meta<Alert.RootProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const parameters = {
  controls: { include: ["title"] },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: ({ title, ...props }) => (
    <Alert.Root {...props}>
      <Alert.Icon asChild>
        <InfoIcon />
      </Alert.Icon>
      <Alert.Content>
        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>
          For the best experience, please update your browser.
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  ),
  args: {
    title: "Alert",
  },
  parameters,
};

export const WithoutDescription: Story = {
  render: ({ title, ...props }) => (
    <Alert.Root {...props}>
      <Alert.Icon asChild>
        <InfoIcon />
      </Alert.Icon>
      <Alert.Content>
        <Alert.Title>{title}</Alert.Title>
      </Alert.Content>
    </Alert.Root>
  ),
  args: {
    title: "Alert",
  },
  parameters,
};
