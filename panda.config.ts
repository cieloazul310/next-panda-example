import { defineConfig } from "@pandacss/dev";
import { globalCss, patterns, recipes, semanticTokens, textStyles, tokens, utilities } from "./src/theme";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  conditions: {
    extend: {
      light: "[data-theme=light] &",
      dark: "[data-theme=dark] &",
    },
  },
  globalCss,
  // Useful for theme customization
  theme: {
    extend: {
      recipes,
      textStyles,
      tokens,
      semanticTokens,
    },
  },
  patterns,
  utilities,
  
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
