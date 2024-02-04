import { definePattern } from "@pandacss/dev";

const paper = definePattern({
  description: "Paper component with background and border-radius",
  properties: {
    hover: { type: "boolean" },
  },
  transform({ hover, ...props }) {
    return {
      bg: {
        base: "colorPalette.600/8",
        _dark: "colorPalette.600/10",
        _hover: hover ? "colorPalette.600/16" : undefined,
      },
      "&[data-selected]": {
        bg: { base: "colorPalette.600/16", _dark: "colorPalette.600/16" },
        color: { base: "colorPalette.800", _dark: "colorPalette.300" },
        pointerEvents: "none",
      },
      p: [4, 8],
      rounded: "xl",
      wordBreak: "break-all",
      transition: "background .25s",
      ...props,
    };
  },
});

export default paper;
