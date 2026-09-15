import type { Metadata } from "next";
import Link from "next/link";

import {
  BlogArticleHeader,
  ContentBody,
  ContentCTA,
  ContentHero,
  ContentPage,
  ContentRelatedLinks,
} from "@/components/content-page";
import { createAbsoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title:
    "Quais São os Descontos no Salário CLT 2026? Lista Completa",
  description:
    "Quais são os descontos no salário CLT 2026? Veja INSS, IRRF, vale-transporte, pensão, plano de saúde, consignado e o que não desconta do holerite.",
  pathname: "/blog/descontos-salario-clt",
  openGraphType: "article",
});
