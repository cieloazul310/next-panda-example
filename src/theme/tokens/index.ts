import { defineTokens } from "@pandacss/dev";
import fonts from "./fonts";
import sizes from "./sizes";
import zIndex from "./zIndex";

const tokens = defineTokens({
  fonts,
  sizes,
  zIndex,
});

export default tokens;
