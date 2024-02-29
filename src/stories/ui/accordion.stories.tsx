import type { Meta, StoryObj } from "@storybook/react";
import * as Accordion from "@/components/ui/accordion";
import { MdKeyboardArrowDown } from "react-icons/md";
import { accordion } from "@styled-system/recipes";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ParkUI/Accordion",
  component: Accordion.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    collapsible: {
      control: "boolean",
    },
    multiple: {
      control: "boolean",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const parameters = {
  controls: { include: ["collapsible", "multiple", "orientation"] },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExampleCode: Story = {
  render: (props) => {
    const items = ["React", "Solid", "Svelte", "Vue"];
    return (
      <Accordion.Root defaultValue={["React"]} {...props}>
        {items.map((item, id) => (
          <Accordion.Item key={id} value={item} disabled={item === "Svelte"}>
            <Accordion.ItemTrigger>
              {item}
              <Accordion.ItemIndicator>
                <MdKeyboardArrowDown />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <div>
                Pudding donut gummies chupa chups oat cake marzipan biscuit
                tart. Dessert macaroon ice cream bonbon jelly. Jelly topping
                tiramisu halvah lollipop.
              </div>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    );
  },
  args: {
    collapsible: true,
    multiple: true,
    orientation: "vertical",
    ...accordion.raw(),
  },
  parameters,
};
