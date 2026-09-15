import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

/** GSC CTR retargets — title/description only (pathname-keyed). */
const PAGE_SEO_OVERRIDES: Record<
  string,
  { title: string; description: string }
> = {
  "/blog/descontos-salario-clt": {
    title: "Quais São os Descontos no Salário CLT 2026? Lista Completa",
    description:
      "Quais são os descontos no salário CLT 2026? Veja INSS, IRRF, vale-transporte, pensão, plano de saúde, consignado e o que não desconta do holerite.",
  },
  "/blog/diferenca-salario-bruto-liquido": {
    title:
      "Diferença Entre Salário Bruto e Líquido: O Que É e Quanto Desconta",
    description:
      "Qual a diferença entre salário bruto e líquido? Entenda o que é cada um, veja tabela com 5 faixas e quanto desconta no CLT em 2026.",
  },
};


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
  const override = PAGE_SEO_OVERRIDES[canonical];
  const resolvedTitle = override?.title ?? title;
  const resolvedDescription = override?.description ?? description;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      type: openGraphType,
      locale: siteConfig.locale,
      url: absoluteUrl,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description: resolvedDescription,
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
      title: resolvedTitle,
      description: resolvedDescription,
      images: [siteConfig.defaultOgImage],
    },
    robots,
  };
}
