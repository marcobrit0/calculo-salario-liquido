import type { MetadataRoute } from "next";

import { collectStaticPageEntries } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

function getPriority(route: string) {
  if (route === "/") {
    return 1;
  }

  if (route === "/privacidade" || route === "/termos") {
    return 0.4;
  }

  return 0.8;
}

function getChangeFrequency(route: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "/") {
    return "weekly";
  }

  if (route === "/privacidade" || route === "/termos") {
    return "yearly";
  }

  return "monthly";
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await collectStaticPageEntries();

  return pages.map((page) => ({
    url: new URL(page.route, siteConfig.url).toString(),
    lastModified: page.lastModified,
    changeFrequency: getChangeFrequency(page.route),
    priority: getPriority(page.route),
  }));
}
