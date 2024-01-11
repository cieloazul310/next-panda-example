import { cx, css } from "../../styled-system/css";
import { button } from "../../styled-system/recipes";
import type { RecipeVariantProps } from "../../styled-system/types";
import type { PropertyTypes } from "../../styled-system/types/prop-type";

export type ButtonProps = {
  colorPalette?: PropertyTypes["colorPalette"];
} & JSX.IntrinsicElements["button"] &
  RecipeVariantProps<typeof button>;

function Button({ children, colorPalette = "primary", size, variant, className, ...props }: ButtonProps) {
  return (
    <button
      className={cx(css({ colorPalette }), button({ size, variant }), className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
