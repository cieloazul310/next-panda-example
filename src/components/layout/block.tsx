import { ark, type HTMLArkProps } from "@ark-ui/react";
import { styled, splitCssProps, type HTMLStyledProps } from "styled-system/jsx";
import { css, cx } from "styled-system/css";
import { paper, type PaperProperties } from "styled-system/patterns";

const Div = styled(ark.div);

export type BlockProps = HTMLStyledProps<"div"> &
  HTMLArkProps<"div"> &
  PaperProperties;

function Block({
  colorPalette = "accent",
  enableHover = false,
  ...props
}: BlockProps) {
  const [cssProps, restProps] = splitCssProps({ colorPalette, ...props });
  const { css: cssProp, ...styleProps } = cssProps;

  const className = cx(css(styleProps, cssProp), paper({ enableHover }));

  return <Div className={className} {...restProps} />;
}

export default Block;
