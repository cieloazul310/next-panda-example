/* eslint @typescript-eslint/no-unused-vars: warn */
import { definePattern } from "@pandacss/dev";

export default definePattern({
  properties: {
    spacing: { type: "enum", value: ["inherit", "sm", "md", "lg"] },
  },
  defaultValues: {
    spacing: "md",
  },
  transform(props) {
    const { spacing, ...rest } = props;

    return {
      ...rest,
      _first: {
        mt: 0,
      },
      _last: {
        mb: 0,
      },
    };
  },
});
