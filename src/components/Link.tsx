import NextLink from "next/link";
import { isInternal } from "@/utils";
import { css } from "@styled-system/css";
import { RiExternalLinkLine } from "react-icons/ri";

function Link({
  children,
  href,
  className,
  ...props
}: Omit<React.ComponentProps<"a">, "ref">) {
  const internal = isInternal(href);

  if (href && internal) {
    return (
      <NextLink className={className} href={href} {...props}>
        {children}
      </NextLink>
    );
  }
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreffer noopener"
      {...props}
    >
      {children}
      <RiExternalLinkLine
        className={css({
          ml: 1,
          display: "inline",
          fontSize: "inherit",
          verticalAlign: "text-top",
        })}
      />
    </a>
  );
}

export default Link;
