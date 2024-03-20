import NextLink from "next/link";
import { Badge } from "@/components/ui";
import { categories } from "@/content";
import { z } from "zod";

type CategoriesBadgeProps = z.infer<typeof categories.schema>;

function CategoriesBadge({ id, title }: CategoriesBadgeProps) {
  return (
    <Badge size="lg" asChild>
      <NextLink href={`/categories/${id}`}>{title}</NextLink>
    </Badge>
  );
}

export default CategoriesBadge;
