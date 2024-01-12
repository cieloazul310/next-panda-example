import { defineRecipe } from "@pandacss/dev";

const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    py: 2,
    px: 4,
    rounded: "xl",
    cursor: "pointer",
  },
  variants: {
    variant: {
      contained: {
        background: {
          base: "colorPalette.600",
          _dark: "colorPalette.300",
          _hover: { base: "colorPalette.500", _dark: "colorPalette.200" },
        },
        color: { base: "white", _dark: "colorPalette.950" },
      },
      rounded: {
        borderWidth: "1px",
        borderColor: { base: "colorPalette.700", _dark: "colorPalette.300" },
        color: {
          base: "colorPalette.700",
          _dark: "colorPalette.300",
          _hover: { base: "colorPalette.500", _dark: "colorPalette.100" },
        },
      },
    },
  },
  defaultVariants: {
    variant: "contained",
  },
});

export default buttonRecipe;
