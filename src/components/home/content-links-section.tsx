import Link from "next/link";

import { SectionHeading } from "@/components/home/section-heading";

const contentLinks = [
  {
    href: "/tabela-inss-2026",
    title: "Tabela INSS 2026",
    description:
      "Faixas, alíquotas progressivas, teto de R$ 8.475,55, exemplos de cálculo e comparação 2025 vs 2026.",
  },
  {
    href: "/tabela-irrf-2026",
    title: "Tabela IRRF 2026",
    description:
      "Alíquotas, parcela a deduzir, desconto simplificado e a nova isenção da Lei 15.270/2025 até R$ 5.000.",
  },
  {
    href: "/como-calcular-salario-liquido",
    title: "Como calcular salário líquido",
    description:
      "Guia passo a passo com dois exemplos completos (R$ 6.000 e R$ 3.500) e 8 perguntas frequentes.",
  },
] as const;

const blogLinks = [
  {
    href: "/blog/isencao-imposto-renda-2026",
    title: "Isenção de IR 2026",
    description: "Quem ganha até R$ 5.000 não paga imposto de renda.",
  },
  {
    href: "/blog/diferenca-salario-bruto-liquido",
    title: "Bruto vs líquido",
    description: "Entenda a diferença com tabela comparativa em 5 faixas.",
  },
  {
    href: "/blog/descontos-salario-clt",
    title: "Descontos no salário CLT",
    description: "Lista completa de obrigatórios e opcionais no holerite.",
  },
] as const;

export function ContentLinksSection() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Guias e artigos"
          title="Entenda seu salário além do cálculo."
          description="Tabelas atualizadas, guias passo a passo e artigos sobre descontos CLT, IRRF e INSS com as regras de 2026."
          titleClassName="max-w-lg"
          descriptionClassName="max-w-xl"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {contentLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-display text-lg tracking-[-0.02em] text-foreground transition-colors group-hover:text-muted-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
              <span className="mt-auto text-sm font-medium text-foreground underline underline-offset-4">
                Ler mais
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {blogLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col gap-2 rounded-2xl border border-border bg-neutral-50 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-muted-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            Ver todos os artigos →
          </Link>
        </div>
      </div>
    </section>
  );
}
