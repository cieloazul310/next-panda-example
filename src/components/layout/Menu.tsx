import NextLink from "next/link";
import { vstack } from "@styled-system/patterns";
import { Block } from "../layout";

function Menu() {
  const options = [
    { label: "Top", href: "/" },
    { label: "About", href: "/about" },
    { label: "Post", href: "/post" },
  ];
  return (
    <nav className={vstack({ width: "full", gap: 1, alignItems: "stretch" })}>
      {options.map((option) => (
        <Block key={option.href} fontWeight="bold" enableHover asChild>
          <NextLink href={option.href}>{option.label}</NextLink>
        </Block>
      ))}
    </nav>
  );
}

export default Menu;
