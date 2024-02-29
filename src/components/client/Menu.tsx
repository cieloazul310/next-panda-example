"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import * as SegmentGroup from "@/components/ui/segment-group";

function Menu(props: SegmentGroup.RootProps) {
  const pathname = usePathname();
  const options = [
    { label: "Top", href: "/" },
    { label: "About", href: "/about" },
    { label: "Post", href: "/post" },
  ];
  return (
    <SegmentGroup.Root value={pathname} {...props}>
      {options.map((option) => (
        <SegmentGroup.Item key={option.href} value={option.href}>
          <NextLink href={option.href}>
            <SegmentGroup.ItemControl />
            <SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
          </NextLink>
        </SegmentGroup.Item>
      ))}
      <SegmentGroup.Indicator />
    </SegmentGroup.Root>
  );
}

export default Menu;
