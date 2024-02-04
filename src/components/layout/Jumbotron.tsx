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
      <div
        className={flex({
          width: "100%",
          height: "100%",
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          zIndex: -1,
          filter: "blur(20px)",
        })}
      >
        <svg
          className={css({ width: "100%", height: "100%" })}
          viewBox="0 0 200 200"
        >
          <rect
            x={120}
            y={90}
            width={40}
            height={40}
            className={css({
              fill: { base: "accent.a7", _dark: "accent.a1" },
            })}
          />
          <rect
            x={100}
            y={80}
            width={40}
            height={40}
            className={css({
              fill: { base: "accent.6", _dark: "accent.1" },
            })}
          />
        </svg>
      </div>
    </header>
  );
}

export default Jumbotron;
