import type { HTMLAttributes, ElementType } from "react";
import { css, cx } from "@styled-system/css";

export type BlockProps = HTMLAttributes<HTMLOrSVGElement> & {
  as?: ElementType;
};

function Block({ children, className, as: Tag = "div" }: BlockProps) {
  return (
    <Tag
      className={cx(
        css({ rounded: "l2", px: [4, 8], py: 8, bg: "accent.a2" }),
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export default Block;
