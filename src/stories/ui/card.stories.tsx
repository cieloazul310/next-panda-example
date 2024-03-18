import type { Meta, StoryObj } from "@storybook/react";
import { Card, Button, FormLabel, Input } from "@/components/ui";
import { Stack } from "styled-system/jsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ParkUI/Card",
  component: Card.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Card.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const parameters = {
  // controls: { include: ["width"] },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExampleCode: Story = {
  render: (props) => {
    return (
      <Card.Root {...props}>
        <Card.Header>
          <Card.Title>Team Members</Card.Title>
          <Card.Description>
            Add new members to your organisation.
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4">
            <Stack gap="1.5">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" placeholder="Name" />
            </Stack>
            <Stack gap="1.5">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" placeholder="Email" />
            </Stack>
          </Stack>
        </Card.Body>
        <Card.Footer gap="3">
          <Button variant="outline">Cancel</Button>
          <Button>Invite</Button>
        </Card.Footer>
      </Card.Root>
    );
  },
  args: {},
  parameters,
};
