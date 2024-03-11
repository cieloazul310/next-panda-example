import { divider } from "styled-system/patterns";

export const Hr = (props: React.ComponentProps<"hr">) => {
  return <hr className={divider({ my: "lg" })} {...props} />;
};
