import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

const withMdx = createMDX({
  experimental: {
    mdxRs: true,
  },
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMdx(nextConfig);
