import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const routes = [
  "/",
  "/blog",
  "/blog/descontos-salario-clt",
  "/blog/diferenca-salario-bruto-liquido",
  "/blog/isencao-imposto-renda-2026",
  "/como-calcular-salario-liquido",
  "/privacidade",
  "/tabela-inss-2026",
  "/tabela-irrf-2026",
  "/termos",
] as const;

function getPriority(route: string) {
  if (route === "/") {
    return 1;
  }

  if (route === "/privacidade" || route === "/termos") {
    return 0.4;
  }

  if (route.startsWith("/blog")) {
    return 0.6;
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

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route),
  }));
}
