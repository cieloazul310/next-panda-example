import {
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
} from "./article-classes";

type HeadingTag = `h${1 | 2 | 3 | 4 | 5}`;

export function createHeadings(): Record<HeadingTag, React.FC<any>> {
  return {
    h1: (props) => <h1 className={heading1} {...props} />,
    h2: (props) => <h2 className={heading2} {...props} />,
    h3: (props) => <h3 className={heading3} {...props} />,
    h4: (props) => <h4 className={heading4} {...props} />,
    h5: (props) => <h5 className={heading5} {...props} />,
  };
}
