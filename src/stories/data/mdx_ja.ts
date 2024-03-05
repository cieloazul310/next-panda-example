export const mdxJa = `
  ## 見出し2

  これはMDXコンテンツです。

  蟹の握り飯を奪った猿はとうとう蟹に仇を取られた。蟹は臼、蜂、卵と共に、怨敵の猿を殺したのである。――その話はいまさらしないでも好い。ただ猿を仕止めた後、蟹を始め同志のものはどう云う運命に逢着したか、それを話すことは必要である。なぜと云えばお伽噺は全然このことは話していない。

  いや、話していないどころか、あたかも蟹は穴の中に、臼は台所の土間の隅に、蜂は軒先の蜂の巣に、卵は籾殻の箱の中に、太平無事な生涯でも送ったかのように装っている。

  ### 見出し3

  \`蟹の握り飯\`を奪った猿はとうとう蟹に仇を取られた。蟹は臼、蜂、卵と共に、怨敵の猿を殺したのである。――その話はいまさらしないでも好い。ただ猿を仕止めた後、蟹を始め同志のものはどう云う運命に逢着したか、それを話すことは必要である。なぜと云えばお伽噺は全然このことは話していない。

  いや、話していないどころか、あたかも蟹は穴の中に、臼は台所の土間の隅に、蜂は軒先の蜂の巣に、卵は籾殻の箱の中に、太平無事な生涯でも送ったかのように装っている。

  #### 見出し4

  蟹の握り飯を奪った猿はとうとう蟹に仇を取られた。蟹は臼、蜂、卵と共に、怨敵の猿を殺したのである。――その話はいまさらしないでも好い。ただ猿を仕止めた後、蟹を始め同志のものはどう云う運命に逢着したか、それを話すことは必要である。なぜと云えばお伽噺は全然このことは話していない。

  > 蟹の握り飯を奪った猿はとうとう蟹に仇を取られた。蟹は臼、蜂、卵と共に、怨敵の猿を殺したのである。――その話はいまさらしないでも好い。ただ猿を仕止めた後、蟹を始め同志のものはどう云う運命に逢着したか、それを話すことは必要である。なぜと云えばお伽噺は全然このことは話していない。

  ### 見出し3

  蟹の握り飯を奪った猿はとうとう蟹に仇を取られた。蟹は臼、蜂、卵と共に、怨敵の猿を殺したのである。――その話はいまさらしないでも好い。ただ猿を仕止めた後、蟹を始め同志のものはどう云う運命に逢着したか、それを話すことは必要である。なぜと云えばお伽噺は全然このことは話していない。

  \`\`\`tsx
  import { Block } from "@/components";
  import type { PropsWithChildren } from "react";

  export default function Layout({ children }: PropsWithChildren) {
    return (
      <Block asChild>
        <article>
          {children}
        </article>
      </Block>
    );
  }
  \`\`\`

  ---

  ## 見出し2

  蟹の握り飯を奪った猿はとうとう蟹に仇を取られた。蟹は臼、蜂、卵と共に、怨敵の猿を殺したのである。――その話はいまさらしないでも好い。ただ猿を仕止めた後、蟹を始め同志のものはどう云う運命に逢着したか、それを話すことは必要である。なぜと云えばお伽噺は全然このことは話していない。

  ### Ordered list

  1. 龍之介
  2. 也寸志
  3. 比呂志

  ### Unordered list

  - 赤穂浪士
  - 地獄門
  - 八つ墓村

  ### Table

  | _Colors_      | Fruits          | Vegetable         |
  | ------------- |:---------------:| -----------------:|
  | Red           | *Apple*         | [Pepper](#Tables) |
  | ~~Orange~~    | Oranges         | **Carrot**        |
  | Green         | ~~***Pears***~~ | Spinach           |

  蟹の握り飯を奪った猿はとうとう蟹に仇を取られた。蟹は臼、蜂、卵と共に、怨敵の猿を殺したのである。――その話はいまさらしないでも好い。ただ猿を仕止めた後、蟹を始め同志のものはどう云う運命に逢着したか、それを話すことは必要である。なぜと云えばお伽噺は全然このことは話していない。
`;