import type { ComponentPropsWithoutRef } from "react";
import { article } from "styled-system/patterns";
import { Text } from "../ui/text";

export const Paragraph = (props: ComponentPropsWithoutRef<"p">) => (
  <Text className={article()} my="sm" {...props} />
);
