import { definePattern } from "@pandacss/dev";

const paper = definePattern({
  description: "Paper component with background and border-radius",
  properties: {
    enableHover: { type: "boolean" },
  },
  defaultValues: {
    enableHover: false,
  },
  transform({ enableHover, ...props }) {
    return {
      bg: {
        base: "colorPalette.8/8",
        _dark: "colorPalette.8/10",
        _hover: enableHover ? "colorPalette.8/16" : undefined,
      },
      _selected: {
        bg: { base: "colorPalette.8/16", _dark: "colorPalette.8/16" },
        color: "colorPalette.8",
        pointerEvents: "none",
      },
      p: [4, 8],
      rounded: "l2",
      wordBreak: "break-all",
      transition: "background .25s",
      ...props,
    };
  },
});

export default paper;
