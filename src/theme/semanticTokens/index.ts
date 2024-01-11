import { defineSemanticTokens } from "@pandacss/dev";
import colors from "./colors";
import sizes from "./sizes";

const semanticTokens = defineSemanticTokens({
  sizes,
  colors,
});

export default semanticTokens;
