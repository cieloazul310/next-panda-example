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
    size: {
      sm: {
        fontSize: "sm",
      },
      md: {
        fontSize: "md",
      },
      lg: {
        fontSize: "lg",
      },
      xl: {
        fontSize: "xl",
      },
    },
    variant: {
      contained: {
        background: { base: "colorPalette.700", _dark: "colorPalette.300" },
        color: { base: "white", _dark: "colorPalette.950" },
      },
      rounded: {
        borderWidth: "1px",
        borderColor: { base: "colorPalette.700", _dark: "colorPalette.300" },
        color: { base: "colorPalette.700", _dark: "colorPalette.300" },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "contained",
  },
});

export default buttonRecipe;
