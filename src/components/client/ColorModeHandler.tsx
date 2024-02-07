"use client";

import { useTheme } from "next-themes";
import { MdSunny, MdOutlineNightlight } from "react-icons/md";
import { IconButton, type IconButtonProps } from "../ui";

function ColorModeHandler({ className }: IconButtonProps) {
  const { theme, setTheme } = useTheme();
  const onClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <IconButton className={className} variant="ghost" onClick={onClick}>
      {theme === "dark" ? <MdOutlineNightlight /> : <MdSunny />}
    </IconButton>
  );
}

export default ColorModeHandler;
