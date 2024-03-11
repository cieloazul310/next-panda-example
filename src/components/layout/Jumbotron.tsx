import type { HTMLAttributes, ElementType } from "react";
import { Heading, Text } from "@/components/ui";
import { Flex } from "@styled-system/jsx";
import { css, cx } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import type { ReactNode } from "react";

export type JumbotronProps = HTMLAttributes<HTMLOrSVGElement> & {
  as?: ElementType;
  title?: string;
  headerText?: ReactNode;
  footerText?: ReactNode;
};

function Jumbotron({
  title,
  headerText,
  footerText,
  className,
  as: Tag = "header",
}: JumbotronProps) {
  return (
    <Tag
      className={cx(
        css({
          width: "full",
          height: "360px",
        }),
        className,
      )}
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="full"
      >
        <hgroup
          className={flex({
            direction: "column",
            justifyContent: "center",
            alignItems: "start",
            animation: ".25s fade-in",
            px: [4, 8],
          })}
        >
          {headerText && <Text fontWeight="bold">{headerText}</Text>}
          {title && (
            <Heading as="h1" fontSize={["2xl", "4xl", "6xl"]}>
              {title}
            </Heading>
          )}
          {footerText && <Text fontWeight="bold">{footerText}</Text>}
        </hgroup>
      </Flex>
    </Tag>
  );
}

export default Jumbotron;
