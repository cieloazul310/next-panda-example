import NextLink from "next/link";
import type { Categories } from "@/content";
import { Badge } from "./ui/badge";

type CategoriesBadgeProps = Categories;

function CategoriesBadge({ id, title }: CategoriesBadgeProps) {
  return (
    <Badge size="lg" asChild>
      <NextLink href={`/categories/${id}`}>{title}</NextLink>
    </Badge>
  );
}

export default CategoriesBadge;
