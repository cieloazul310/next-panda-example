import type { Assign } from "@ark-ui/react";
import {
  Switch as ArkSwitch,
  type SwitchRootProps,
} from "@ark-ui/react/switch";
import { forwardRef } from "react";
import { css, cx } from "styled-system/css";
import { splitCssProps } from "styled-system/jsx";
import {
  type SwitchRecipeVariantProps,
  switchRecipe,
} from "styled-system/recipes";
import type { JsxStyleProps } from "styled-system/types";

export interface SwitchProps
  extends Assign<JsxStyleProps, SwitchRootProps>,
    SwitchRecipeVariantProps {}

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  (props, ref) => {
    const [variantProps, switchProps] = switchRecipe.splitVariantProps(props);
    const [cssProps, localProps] = splitCssProps(switchProps);
    const { children, className, ...rootProps } = localProps;
    const styles = switchRecipe(variantProps);

    return (
      <ArkSwitch.Root
        ref={ref}
        className={cx(styles.root, css(cssProps), className)}
        {...rootProps}
      >
        <ArkSwitch.Control className={styles.control}>
          <ArkSwitch.Thumb className={styles.thumb} />
        </ArkSwitch.Control>
        {children && (
          <ArkSwitch.Label className={styles.label}>{children}</ArkSwitch.Label>
        )}
        <ArkSwitch.HiddenInput />
      </ArkSwitch.Root>
    );
  },
);

Switch.displayName = "Switch";
