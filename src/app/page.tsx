import type { Metadata } from "next";

import { SalaryCalculator } from "@/components/salary-calculator";
import { faqItems, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Calculadora de Salário Líquido CLT 2026",
  description:
    "Calcule salário líquido CLT com INSS 2026, IRRF 2026 e a redução da Lei 15.270/2025. Simule bruto para líquido ou líquido para bruto em PT-BR.",
  alternates: {
    canonical: "/",
  },
};

const highlights = [
  {
    title: "INSS 2026",
    body: "Faixas progressivas válidas desde janeiro de 2026, conforme tabela oficial do INSS.",
  },
  {
    title: "IRRF 2026",
    body: "Tabela mensal da Receita Federal e escolha automática entre deduções legais e desconto simplificado.",
  },
  {
    title: "Lei 15.270/2025",
    body: "Redução mensal do imposto aplicada para renda até R$ 7.350, com faixa de isenção reforçada até R$ 5 mil.",
  },
];

const methodology = [
  {
    title: "1. INSS",
    body: "Aplicamos as quatro faixas progressivas do empregado CLT até o teto previdenciário de 2026.",
  },
  {
    title: "2. Base do IRRF",
    body: "Comparamos deduções legais com o desconto simplificado mensal de R$ 607,20 e usamos o cenário mais vantajoso.",
  },
  {
    title: "3. Redução mensal",
    body: "Depois do IRRF bruto, aplicamos a redução prevista na Lei 15.270/2025 para rendas mensais até R$ 7.350.",
  },
];

const scope = [
  "Salário mensal CLT padrão",
  "Dependentes no IRRF",
  "Pensão alimentícia judicial",
  "Cálculo bruto para líquido",
  "Cálculo líquido para bruto",
];

const limitations = [
  "Não inclui férias, 13º, PLR ou horas extras",
  "Não trata vale-transporte, adiantamentos ou descontos internos da empresa",
  "Simulação pensada para empregado, doméstico e trabalhador avulso no regime progressivo de 2026",
];

const roadmap = [
  "Holerite em PDF",
  "Simulação anual com 13º e férias",
  "Comparação entre propostas salariais",
  "Modo custo do funcionário para empresas",
];

const sourceLinks = [
  {
    label: "Receita Federal: Tributação de 2026",
    href: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026",
  },
  {
    label: "INSS: Tabela de contribuição mensal 2026",
    href: "https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal",
  },
  {
    label: "Planalto: Lei 15.270/2025",
    href: "https://www.planalto.gov.br/ccivil_03/_Ato2023-2026/2025/Lei/L15270.htm",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: siteConfig.name,
      applicationCategory: "FinanceApplication",
      applicationSubCategory: "Salary Calculator",
      operatingSystem: "Web",
      url: siteConfig.url,
      inLanguage: "pt-BR",
      description: siteConfig.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%),linear-gradient(120deg,rgba(255,255,255,0.08),transparent_40%),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:auto,auto,56px_56px,56px_56px] opacity-40" />
        <div className="relative mx-auto grid min-h-screen max-w-7xl gap-12 px-6 pb-12 pt-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-16">
          <div className="flex min-h-[calc(100svh-3rem)] flex-col justify-between py-8">
            <div className="flex flex-col gap-10 animate-rise">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-400">
                <span>{siteConfig.name}</span>
                <span className="text-zinc-600">/</span>
                <span>CLT 2026</span>
              </div>

              <div className="max-w-3xl">
                <p className="max-w-xl text-sm uppercase tracking-[0.24em] text-zinc-400">
                  cálculo salário líquido, líquido para bruto e simulação de descontos reais
                </p>
                <h1 className="mt-4 max-w-4xl font-display text-[clamp(3.5rem,10vw,7.25rem)] leading-[0.9] tracking-[-0.05em] text-white">
                  Calculadora de salário líquido
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
                  Simule seu salário CLT com INSS 2026, IRRF 2026 e a redução da Lei
                  15.270/2025. A conta compara automaticamente o desconto simplificado com
                  as deduções legais antes de mostrar o líquido final.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#calculadora"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Calcular agora
                </a>
                <a
                  href="#metodologia"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/8"
                >
                  Entender a metodologia
                </a>
              </div>
            </div>

            <div className="grid gap-8 border-t border-white/12 pt-6 text-sm leading-6 text-zinc-300 md:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="flex flex-col gap-2 animate-rise">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{item.title}</p>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <SalaryCalculator />
        </div>
      </section>

      <section id="metodologia" className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-16">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Atualizado</p>
            <h2 className="max-w-lg font-display text-4xl leading-tight tracking-[-0.04em] text-foreground md:text-5xl">
              Conta pensada para quem quer confiança antes do holerite cair.
            </h2>
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              A calculadora usa as tabelas oficiais de 2026 e mostra qual regime mensal
              de dedução ficou melhor para você antes de calcular o IRRF.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {methodology.map((item, index) => (
              <div key={item.title} className="flex flex-col gap-4">
                {index > 0 ? <div className="h-px w-full bg-border" /> : null}
                <div className="grid gap-3 md:grid-cols-[9rem_1fr] md:gap-6">
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-base leading-7 text-muted-foreground">{item.body}</p>
                </div>
              </div>
            ))}

            <div className="grid gap-6 border-t border-border pt-6 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Inclui
                </h3>
                <ul className="flex flex-col gap-2 text-sm leading-6 text-foreground">
                  {scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Fora do escopo
                </h3>
                <ul className="flex flex-col gap-2 text-sm leading-6 text-muted-foreground">
                  {limitations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-16">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Fontes</p>
            <h2 className="max-w-2xl font-display text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
              Transparência suficiente para você conferir a conta sem depender de chute.
            </h2>
            <p className="max-w-xl text-base leading-7 text-zinc-300">
              O app foi estruturado para a versão gratuita lançar rápido, mas sem esconder
              as bases normativas usadas na fórmula.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {sourceLinks.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-2 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
              >
                <span className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Fonte oficial {index + 1}
                </span>
                <span className="text-lg text-white transition-colors duration-200 group-hover:text-zinc-300">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              FAQ
            </p>
            <h2 className="max-w-md font-display text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
              Perguntas frequentes sobre cálculo de salário líquido.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-border">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="list-none text-lg font-medium leading-7 text-foreground">
                  {item.question}
                </summary>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-neutral-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-16">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Próxima etapa
            </p>
            <h2 className="max-w-2xl font-display text-4xl leading-tight tracking-[-0.04em] text-foreground md:text-5xl">
              A versão premium pode entrar depois sem reescrever o motor de cálculo.
            </h2>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              A base gratuita já deixa pronto o núcleo para evoluir em PDF de holerite,
              simulação anual e comparação entre ofertas salariais.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm leading-6 text-foreground">
            {roadmap.map((item) => (
              <div key={item} className="border-t border-border py-3 first:border-t-0 first:pt-0">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
