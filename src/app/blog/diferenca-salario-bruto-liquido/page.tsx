import type { Metadata } from "next";

import { createAbsoluteUrl, createPageMetadata } from "@/lib/seo";
import {
  BlogArticleHeader,
  ContentPage,
  ContentHero,
  ContentBody,
  ContentCTA,
  ContentRelatedLinks,
} from "@/components/content-page";

export const metadata: Metadata = createPageMetadata({
  title:
    "Diferença Entre Salário Bruto e Líquido: O Que É e Quanto Desconta",
  description:
    "Qual a diferença entre salário bruto e líquido? Entenda o que é cada um, veja tabela com 5 faixas e quanto desconta no CLT em 2026.",
  pathname: "/blog/diferenca-salario-bruto-liquido",
  openGraphType: "article",
});
