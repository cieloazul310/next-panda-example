const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export type PandaPalette =
  | "rose"
  | "pink"
  | "fuchsia"
  | "purple"
  | "violet"
  | "indigo"
  | "blue"
  | "sky"
  | "cyan"
  | "teal"
  | "emerald"
  | "green"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "red"
  | "neutral"
  | "stone"
  | "zinc"
  | "gray"
  | "slate";

export function definePalette(props: Record<string, PandaPalette>) {
  return Object.entries(props).reduce<{
    [key: string]: {
      [key: string]: { value: string };
    };
  }>(
    (accum, [key, color]) => ({
      ...accum,
      [key]: shades.reduce<{
        [key: string]: { value: string };
      }>(
        (previousValue, curr) => ({
          ...previousValue,
          [curr]: { value: `{colors.${color}.${curr}}` },
        }),
        {},
      ),
    }),
    {},
  );
}

const colors = {
  bg: {
    value: { base: "white", _dark: "{colors.neutral.800}" },
  },
  text: {
    value: {
      base: "{colors.neutral.950}",
      _dark: "{colors.neutral.50}",
    },
  },
  "gradient-from": {
    value: {
      base: "{colors.primary.500}",
      _dark: "{colors.primary.950}",
    },
  },
  "gradient-to": {
    value: {
      base: "{colors.secondary.200}",
      _dark: "{colors.secondary.950}",
    },
  },
  ...definePalette({ primary: "teal", secondary: "amber" }),
};

export default colors;
