import { defineConfig } from "@pandacss/dev";
import { globalCss, recipes, semanticTokens, tokens } from "./src/theme";

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
      tokens,
      semanticTokens,
    },
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
