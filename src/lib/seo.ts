import { promises as fs } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

const APP_DIRECTORY = path.join(process.cwd(), "src", "app");
const PAGE_FILE_PATTERN = /^page\.(js|jsx|ts|tsx|mdx)$/;

type PageMetadataInput = {
  title: string;
  description: string;
  pathname?: string;
  openGraphType?: "website" | "article";
  robots?: Metadata["robots"];
};

export type StaticPageEntry = {
  route: string;
  filePath: string;
  lastModified: Date;
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

function isRouteGroup(segment: string) {
  return segment.startsWith("(") && segment.endsWith(")");
}

function isDynamicSegment(segment: string) {
  return segment.includes("[") || segment.includes("]");
}

function isExcludedSegment(segment: string) {
  return (
    segment === "api" ||
    segment.startsWith("@") ||
    segment.startsWith("_") ||
    segment.startsWith(".")
  );
}

function toRouteFromFile(filePath: string) {
  const relativeDirectory = path.relative(APP_DIRECTORY, path.dirname(filePath));
  const rawSegments = relativeDirectory ? relativeDirectory.split(path.sep) : [];

  if (rawSegments.some((segment) => isDynamicSegment(segment) || isExcludedSegment(segment))) {
    return null;
  }

  const segments = rawSegments.filter((segment) => !isRouteGroup(segment));

  return segments.length === 0 ? "/" : `/${segments.join("/")}`;
}

async function collectPageFiles(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const pageFiles: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (isExcludedSegment(entry.name)) {
        continue;
      }

      pageFiles.push(...(await collectPageFiles(entryPath)));
      continue;
    }

    if (PAGE_FILE_PATTERN.test(entry.name)) {
      pageFiles.push(entryPath);
    }
  }

  return pageFiles;
}

export async function collectStaticPageEntries(): Promise<StaticPageEntry[]> {
  const pageFiles = await collectPageFiles(APP_DIRECTORY);
  const routeMap = new Map<string, StaticPageEntry>();

  for (const filePath of pageFiles) {
    const route = toRouteFromFile(filePath);

    if (!route) {
      continue;
    }

    const { mtime } = await fs.stat(filePath);

    routeMap.set(route, {
      route,
      filePath,
      lastModified: mtime,
    });
  }

  return [...routeMap.values()].sort((left, right) => {
    if (left.route === "/") {
      return -1;
    }

    if (right.route === "/") {
      return 1;
    }

    return left.route.localeCompare(right.route, "pt-BR");
  });
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
      canonical,
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
