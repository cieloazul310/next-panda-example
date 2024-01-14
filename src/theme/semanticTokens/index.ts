import { defineSemanticTokens } from "@pandacss/dev";
import colors from "./colors";
import sizes from "./sizes";
import spacing from "./spacing";

const semanticTokens = defineSemanticTokens({
  sizes,
  colors,
  spacing,
});

export default semanticTokens;
