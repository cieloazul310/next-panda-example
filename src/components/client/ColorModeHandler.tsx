"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdSunny, MdOutlineNightlight } from "react-icons/md";
import { IconButton, Tooltip, type IconButtonProps } from "../ui";

/**
 * reference:
 * https://github.com/pacocoursey/next-themes/tree/main?tab=readme-ov-file#avoid-hydration-mismatch
 */

function ColorModeHandler({ className }: IconButtonProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const onClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Tooltip.Root openDelay={250} closeDelay={250} closeOnPointerDown>
      <Tooltip.Trigger asChild>
        <IconButton className={className} variant="ghost" onClick={onClick}>
          {theme === "dark" ? <MdOutlineNightlight /> : <MdSunny />}
        </IconButton>
      </Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Arrow>
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>
        <Tooltip.Content>
          Change to {theme === "dark" ? "light" : "dark"} mode.
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
}

export default ColorModeHandler;
