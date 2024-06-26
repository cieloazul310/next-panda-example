import * as React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { fontClassName } from "../src/styles/fonts";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true, // 👈 Set this
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
  (Story) => (
    <div className={fontClassName}>
      <Story />
    </div>
  ),
];

export default preview;
