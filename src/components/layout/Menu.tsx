import NextLink from "next/link";
import { menu } from "@/data";
import { vstack } from "@styled-system/patterns";
import { Block } from "../layout";

function Menu() {
  return (
    <nav className={vstack({ width: "full", gap: 1, alignItems: "stretch" })}>
      {menu.map((option) => (
        <Block key={option.href} fontWeight="bold" enableHover asChild>
          <NextLink href={option.href}>{option.label}</NextLink>
        </Block>
      ))}
    </nav>
  );
}

export default Menu;
