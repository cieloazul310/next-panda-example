import type { PropsWithChildren } from "react";
import { css } from "@styled-system/css";
import { vstack, container } from "@styled-system/patterns";
import Block from "./Block";
import Menu from "./Menu";

function Wrapper({ children }: PropsWithChildren) {
  return (
    <div
      className={container({
        maxWidth: "content-max-width",
        display: "flex",
        px: 2,
        py: 4,
      })}
    >
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
      <div
        className={css({
          width: "280px",
          hideBelow: "md",
          position: "sticky",
          flexShrink: 0,
          top: "calc(token(sizes.header-height) + token(spacing.4))",
          maxHeight: "calc(100vh - token(sizes.header-height))",
          overflowY: "auto",
        })}
      >
        <Block>
          <Menu />
        </Block>
      </div>
    </div>
  );
}

export default Wrapper;
