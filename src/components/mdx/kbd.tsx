import { kbd } from "styled-system/recipes";

export const Kbd = (props: React.ComponentProps<"kbd">) => {
  return <kbd className={kbd()} {...props} />;
};
