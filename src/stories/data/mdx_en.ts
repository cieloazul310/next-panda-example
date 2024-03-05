export const mdxEn = `
  ## Heading 2

  This is MDX contents.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in [reprehenderit](/) in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui [officia deserunt](https://cieloazul310.github.io) mollit anim id est laborum.

  ### Heading 3

  \`Lorem ipsum\` dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

  #### Heading 4

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

  > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

  ### Heading 3

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

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

  ## Heading 2

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

  ### Ordered list

  1. Sarah Vaughan
  2. Ella Fitzgerald
  3. Billie Holiday

  ### Unordered list

  - a
  - b
  - c

  ### Table

  | _Colors_      | Fruits          | Vegetable         |
  | ------------- |:---------------:| -----------------:|
  | Red           | *Apple*         | [Pepper](#Tables) |
  | ~~Orange~~    | Oranges         | **Carrot**        |
  | Green         | ~~***Pears***~~ | Spinach           |

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
`;
