"use client";

import { useTheme } from "next-themes";
import { MdSunny, MdOutlineNightlight } from "react-icons/md";
import { css } from "@styled-system/css";
import { Icon } from "../ui";

function ColorModeHandler() {
  const { theme, setTheme } = useTheme();
  const onClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Icon
      className={css({
        cursor: "pointer",
        rounded: "full",
        bg: { base: "none", _hover: "bg.muted" },
      })}
      size="lg"
      role="button"
      onClick={onClick}
    >
      {theme === "dark" ? <MdOutlineNightlight /> : <MdSunny />}
    </Icon>
  );
}

export default ColorModeHandler;
