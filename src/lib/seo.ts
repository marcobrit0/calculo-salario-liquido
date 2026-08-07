import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  pathname?: string;
  openGraphType?: "website" | "article";
  robots?: Metadata["robots"];
};

export function normalizePathname(pathname: string) {
  if (pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "");
}

export function createAbsoluteUrl(pathname = "/") {
  return new URL(normalizePathname(pathname), siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  pathname = "/",
  openGraphType = "website",
  robots,
}: PageMetadataInput): Metadata {
  const canonical = normalizePathname(pathname);
  const absoluteUrl = createAbsoluteUrl(canonical);

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      type: openGraphType,
      locale: siteConfig.locale,
      url: absoluteUrl,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: siteConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.defaultOgImage],
    },
    robots,
  };
}
