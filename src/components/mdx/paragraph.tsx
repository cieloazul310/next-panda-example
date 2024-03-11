import { article } from "styled-system/patterns";
import { Text } from "../ui/text";

export const Paragraph = (props: React.ComponentPropsWithoutRef<"p">) => (
  <Text className={article()} my="sm" {...props} />
);
