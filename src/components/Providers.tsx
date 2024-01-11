"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
