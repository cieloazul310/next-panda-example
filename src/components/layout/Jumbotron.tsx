import type { PropsWithChildren } from "react";
import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";

export type JumbotronProps = PropsWithChildren<{
  title?: string;
  headerText?: string;
  footerText?: string;
}>;

function Jumbotron({
  children,
  title,
  headerText,
  footerText,
}: JumbotronProps) {
  return (
    <header
      className={css({
        width: "full",
        height: "480px",
        position: "relative",
      })}
    >
      <div
        className={flex({
          width: "100%",
          height: "100%",
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          px: [2, 4],
          mx: "auto",
          maxWidth: "content-max-width",
          zIndex: 0,
        })}
      >
        {children}
        {!children && (
          <hgroup
            className={flex({
              direction: "column",
              justifyContent: "center",
              alignItems: "start",
              animation: ".25s fade-in",
            })}
          >
            {headerText && (
              <p className={css({ fontSize: ["sm", "md", "lg", "xl"] })}>
                {headerText}
              </p>
            )}
            {title && (
              <h1 className={css({ fontSize: ["2xl", "4xl", "6xl", "7xl"] })}>
                {title}
              </h1>
            )}
            {footerText && (
              <p className={css({ fontSize: ["sm", "md", "lg"] })}>
                {footerText}
              </p>
            )}
          </hgroup>
        )}
      </div>
    </header>
  );
}

export default Jumbotron;
