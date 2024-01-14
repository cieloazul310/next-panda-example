import { definePattern } from "@pandacss/dev";

const paper = definePattern({
  description: "Paper component with background and border-radius",
  properties: {
    hover: { type: "boolean" },
  },
  transform({ hover, ...props }) {
    return {
      bgct: {
        base: "colorPalette.600/92",
        _dark: "colorPalette.600/90",
        _hover: hover ? "colorPalette.600/84" : undefined,
      },
      "&[data-selected]": {
        bgct: { base: "colorPalette.600/84", _dark: "colorPalette.600/84" },
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
