import { defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  html: {
    fontFamily: "sans",
    fontSize: { base: "100%", md: "110%" },
  },
  body: {
    bg: "bg",
    color: "text",
  },
});

export default globalCss;
