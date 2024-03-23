import type { ComponentProps } from "react";
import { divider } from "styled-system/patterns";

export const Hr = (props: ComponentProps<"hr">) => {
  return <hr className={divider({ my: "lg" })} {...props} />;
};
