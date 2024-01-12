import { cx, css } from "../../styled-system/css";
import { button } from "../../styled-system/recipes";
import { token } from "../../styled-system/tokens";
import type { RecipeVariantProps } from "../../styled-system/types";
import type { PropertyTypes } from "../../styled-system/types/prop-type";

export type ButtonProps = {
  colorPalette?: PropertyTypes["colorPalette"];
  size?: PropertyTypes["fontSize"];
} & JSX.IntrinsicElements["button"] &
  RecipeVariantProps<typeof button>;

function Button({
  children,
  colorPalette = "primary",
  size = "md",
  variant,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(css({ colorPalette }), button({ variant }), className)}
      style={{
        fontSize: token(`fontSizes.${size}`),
      }}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
