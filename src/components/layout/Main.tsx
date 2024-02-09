import type { PropsWithChildren } from "react";
import { vstack } from "@styled-system/patterns";

function Main({ children }: PropsWithChildren) {
  return (
    <div
      className={vstack({
        flexGrow: 1,
        gap: "md",
        px: [0, 2],
        alignItems: "stretch",
        maxWidth: "100%",
        minWidth: 0,
      })}
    >
      {children}
    </div>
  );
}

export default Main;
