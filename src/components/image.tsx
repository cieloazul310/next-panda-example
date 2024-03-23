import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { isInternal } from "@/utils";
import { css, cx } from "styled-system/css";
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

function isString(src: ImageProps["src"]): src is string {
  return typeof src === "string";
}

function isExternalImage(src: string) {
  return !isInternal(src);
}

function ImageWrapper({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <a
      className={css({
        transition: "filter",
        transitionDuration: "normal",
        filter: { base: "brightness(1)", _hover: "brightness(1.2)" },
      })}
      href={href}
      target="_blank"
      rel="noreffer noopener"
    >
      {children}
    </a>
  );
}

const imgStyle = css({
  width: "full",
  height: "auto",
  rounded: "l2",
  my: "md",
  _dark: { filter: "brightness(0.8)" },
});

export type ImageProps = NextImageProps &
  Omit<ComponentPropsWithoutRef<"img">, "src" | "width" | "height">;

function Image({ src, className, ...props }: ImageProps) {
  if (isString(src)) {
    if (isExternalImage(src)) {
      return (
        <ImageWrapper href={src}>
          <img className={cx(imgStyle, className)} src={src} {...props} />
        </ImageWrapper>
      );
    }
    return (
      <ImageWrapper href={src}>
        <NextImage className={cx(imgStyle, className)} src={src} {...props} />
      </ImageWrapper>
    );
  }
  return <NextImage className={cx(imgStyle, className)} src={src} {...props} />;
}

export default Image;
