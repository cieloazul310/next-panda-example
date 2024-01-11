"use client";

import { useTheme } from "next-themes";
import Button from "../Button";

function ColorModeHandler() {
  const { theme, setTheme } = useTheme();
  const onClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button size="md" variant="rounded" onClick={onClick}>
      Color
    </Button>
  );
}

export default ColorModeHandler;
