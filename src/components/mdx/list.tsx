import { orderedList, unorderedList } from "./article-classes";

export const Ol = (props: React.ComponentProps<"ol">) => (
  <ol className={orderedList} {...props} />
);

export const Ul = (props: React.ComponentProps<"ul">) => (
  <ul className={unorderedList} {...props} />
);
