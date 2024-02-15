import Link from "next/link";
import { vstack } from "@styled-system/patterns";
import { Button } from "../ui";

const menu = [
  { title: "Top", href: "/" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/post" },
];

function Menu() {
  return (
    <nav className={vstack({ gap: 1, alignItems: "start" })}>
      {menu.map((menuItem) => (
        <Button asChild key={menuItem.href} variant="ghost">
          <Link href={menuItem.href}>{menuItem.title}</Link>
        </Button>
      ))}
    </nav>
  );
}

export default Menu;
