import NextLink from "next/link";
import { Badge } from "@/components/ui";
import type { Categories } from "@/content";

type CategoriesBadgeProps = Categories;

function CategoriesBadge({ id, title }: CategoriesBadgeProps) {
  return (
    <Badge size="lg" asChild>
      <NextLink href={`/categories/${id}`}>{title}</NextLink>
    </Badge>
  );
}

export default CategoriesBadge;
