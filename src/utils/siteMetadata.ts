import type { Metadata } from "next";
import { siteTitle, siteDescription, siteUrl } from "@/data";

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
