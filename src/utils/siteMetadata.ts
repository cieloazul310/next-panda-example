import type { Metadata } from "next";

export const siteTitle =
  "Next.js (App Router), Panda CSS and Storybook example";
export const siteDescription =
  "Next.js (App Router), Panda CSS and Storybook example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
export const siteUrl = "https://cieloazul310.github.io/next-panda-example";

export function siteMetadata({
  title,
  description,
  openGraph,
}: Partial<Metadata> = {}): Metadata {
  return {
    title: title ?? {
      template: `%s - ${siteTitle}`,
      default: siteTitle,
    },
    description: description ?? siteDescription,
    openGraph: {
      title: title ?? siteTitle,
      description: description ?? siteDescription,
      url: siteUrl,
      siteName: siteTitle,
      images: openGraph?.images ?? [],
      locale: "ja_JP",
      type: "website",
    },
  };
}
