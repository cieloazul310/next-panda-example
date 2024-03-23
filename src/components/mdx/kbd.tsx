import type { ComponentProps } from "react";
import { kbd } from "styled-system/recipes";

export const Kbd = (props: ComponentProps<"kbd">) => {
  return <kbd className={kbd()} {...props} />;
};
