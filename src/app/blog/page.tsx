import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage, ContentHero, ContentBody } from "@/components/content-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog — Salário Líquido CLT 2026",
  description:
    "Artigos sobre salário CLT, INSS, IRRF, Lei 15.270/2025, descontos no holerite e como calcular salário líquido em 2026.",
  pathname: "/blog",
});

const posts = [
  {
    href: "/blog/isencao-imposto-renda-2026",
    title: "Isenção de Imposto de Renda 2026: Quem Ganha Até R$ 5.000 Não Paga IR",
    description:
      "A Lei 15.270/2025 zerou o imposto de renda para quem ganha até R$ 5.000/mês. Entenda como funciona, quem é beneficiado e quanto você economiza.",
    date: "4 de abril de 2026",
  },
  {
    href: "/blog/diferenca-salario-bruto-liquido",
    title: "Diferença Entre Salário Bruto e Líquido: Entenda de Uma Vez",
    description:
      "Salário bruto vs líquido: entenda a diferença, quais descontos existem e veja uma tabela com 5 faixas salariais para comparar. Atualizado 2026.",
    date: "28 de março de 2026",
  },
  {
    href: "/blog/descontos-salario-clt",
    title: "Quais São os Descontos no Salário CLT? Lista Completa 2026",
    description:
      "Todos os descontos que podem aparecer no seu holerite CLT: INSS, IRRF, vale-transporte, pensão, plano de saúde, consignado e mais.",
    date: "21 de março de 2026",
  },
] as const;

export default function BlogPage() {
  return (
    <ContentPage>
      <ContentHero
        eyebrow="Blog"
        title="Artigos sobre salário CLT e impostos"
        description="Guias práticos sobre INSS, IRRF, descontos no holerite e como entender seu contracheque com as regras de 2026."
      />

      <ContentBody>
        <div className="flex flex-col divide-y divide-border">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group flex flex-col gap-2 py-8 first:pt-0 last:pb-0"
            >
              <p className="text-xs text-muted-foreground">{post.date}</p>
              <h2 className="font-display text-xl tracking-[-0.02em] text-foreground transition-colors group-hover:text-muted-foreground md:text-2xl">
                {post.title}
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                {post.description}
              </p>
              <span className="mt-1 text-sm font-medium text-foreground underline underline-offset-4">
                Ler artigo
              </span>
            </Link>
          ))}
        </div>
      </ContentBody>
    </ContentPage>
  );
}
