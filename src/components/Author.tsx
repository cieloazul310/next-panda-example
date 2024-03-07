import NextLink from "next/link";
import { z } from "zod";
import { Avatar } from "./ui/avatar";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Stack } from "@styled-system/jsx";
import { author } from "@/data";
import { Block } from "./layout";

type AuthorSchema = z.infer<typeof author.schema>;

export type AuthorProps = Pick<AuthorSchema, "name" | "description" | "image">;

export function Author({ name, description, image }: AuthorProps) {
  return (
    <Block enableHover asChild>
      <Stack direction={["column", "row"]} gap={4} alignItems="center">
        <Avatar src={image} size="2xl">
          {name}
        </Avatar>
        <div>
          <Heading as="h3" fontSize={["lg", "xl"]}>
            {name}
          </Heading>
          {description && <Text>{description}</Text>}
        </div>
      </Stack>
    </Block>
  );
}
