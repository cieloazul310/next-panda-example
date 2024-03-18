import type { Meta, StoryObj } from "@storybook/react";
import { Carousel, IconButton } from "@/components/ui";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { carousel } from "styled-system/recipes";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ParkUI/Carousel",
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
    slidesPerView: { control: { type: "number", min: 1, max: 3, step: 1 } },
  },
} satisfies Meta<typeof Carousel.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const parameters = {
  controls: {
    include: ["size", "align", "orientation", "loop", "slidesPerView"],
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExampleCode: Story = {
  render: (props) => {
    const images = [
      "https://tinyurl.com/5b6ka8jd",
      "https://tinyurl.com/7rmccdn5",
      "https://tinyurl.com/59jxz9uu",
      "https://tinyurl.com/6jurv23t",
      "https://tinyurl.com/yp4rfum7",
    ];
    return (
      <Carousel.Root {...props}>
        <Carousel.Viewport>
          <Carousel.ItemGroup>
            {images.map((image, index) => (
              <Carousel.Item key={index} index={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  style={{ height: "398px", width: "100%", objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
          <Carousel.Control>
            <Carousel.PrevTrigger asChild>
              <IconButton size="sm" variant="link" aria-label="Previous Slide">
                <MdChevronLeft />
              </IconButton>
            </Carousel.PrevTrigger>
            <Carousel.IndicatorGroup>
              {images.map((_, index) => (
                <Carousel.Indicator
                  key={index}
                  index={index}
                  aria-label={`Goto slide ${index + 1}`}
                />
              ))}
            </Carousel.IndicatorGroup>
            <Carousel.NextTrigger asChild>
              <IconButton size="sm" variant="link" aria-label="Next Slide">
                <MdChevronRight />
              </IconButton>
            </Carousel.NextTrigger>
          </Carousel.Control>
        </Carousel.Viewport>
      </Carousel.Root>
    );
  },
  args: {
    align: "center",
    loop: true,
    orientation: "horizontal",
    slidesPerView: 1,
    ...carousel.raw({
      size: "md",
    }),
  },
  parameters,
};
