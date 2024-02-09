import { Link, Wrapper, Jumbotron } from "@/components";
import { getAllPosts } from "@/utils";
import { linkBox, linkOverlay } from "@styled-system/patterns";

async function Page() {
  const allPosts = await getAllPosts();

  return (
    <>
      <Jumbotron title="MDX Posts" />
      <Wrapper>
        <ul>
          {allPosts.map(({ title, date, href }) => (
            <li
              key={href}
              className={linkBox({
                p: 4,
                _hover: { bg: { base: "primary.50", _dark: "primary.950" } },
              })}
            >
              <hgroup>
                <h1>
                  <Link
                    className={linkOverlay({ fontWeight: "bold" })}
                    href={href}
                  >
                    {title}
                  </Link>
                </h1>
                <p>{new Date(date).toISOString()}</p>
              </hgroup>
            </li>
          ))}
        </ul>
      </Wrapper>
    </>
  );
}

export default Page;
