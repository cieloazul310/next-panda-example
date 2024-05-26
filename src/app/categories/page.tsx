import NextLink from "next/link";
import Block from "@/components/layout/block";
import Jumbotron from "@/components/layout/jumbotron";
import Wrapper from "@/components/layout/wrapper";
import { categories } from "@/content";
import { vstack } from "styled-system/patterns";

async function Page() {
  const allCategories = await categories.getAll();

  return (
    <>
      <Jumbotron title="Categories" />
      <Wrapper>
        <ul className={vstack({ gap: "sm", alignItems: "stretch" })}>
          {allCategories.map(({ id, title }) => (
            <Block key={id} fontWeight="bold" enableHover asChild>
              <NextLink href={`/categories/${id}`}>{title}</NextLink>
            </Block>
          ))}
        </ul>
      </Wrapper>
    </>
  );
}

export default Page;
