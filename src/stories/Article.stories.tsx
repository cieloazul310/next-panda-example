import type { Meta, StoryObj } from "@storybook/react";
import {
  Paragraph,
  Link,
  Blockquote,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  heading2,
  heading3,
} from "@/components";
import { container } from "@styled-system/patterns";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ArticleComponents",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const LoremIpsum = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in <Link href="/">reprehenderit</Link> in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui{" "}
    <Link href="https://cieloazul310.github.io">officia deserunt</Link> mollit
    anim id est laborum.
  </Paragraph>
);

const TableExample = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>a</Th>
        <Th>b</Th>
        <Th>c</Th>
      </Tr>
    </Thead>
    <tbody>
      <Tr>
        <Th>1</Th>
        <Td>Hoge</Td>
        <Td>Hoge</Td>
      </Tr>
      <Tr>
        <Th>2</Th>
        <Td>Hoge</Td>
        <Td>Hoge</Td>
      </Tr>
    </tbody>
  </Table>
);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: () => (
    <article className={container({ maxWidth: "content-max-width" })}>
      <h2 className={heading2}>Heading 2</h2>
      <LoremIpsum />
      <Blockquote>
        <LoremIpsum />
      </Blockquote>
      <LoremIpsum />
      <TableExample />
      <h3 className={heading3}>Heading 3</h3>
      <LoremIpsum />
    </article>
  ),
};
