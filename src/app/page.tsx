import type { Metadata } from "next";

import { SalaryCalculator } from "@/components/salary-calculator";
import { SiteFooter } from "@/components/site-footer";
import { SiteLogo } from "@/components/site-logo";
import { calculateSalaryBreakdown, formatCurrency } from "@/lib/salary";
import { faqItems, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cálculo Salário Líquido CLT 2026",
  description:
    "Cálculo salário líquido CLT com INSS 2026, IRRF 2026 e redução da Lei 15.270/2025. Use a calculadora de salário líquido para simular bruto para líquido ou líquido para bruto.",
  alternates: {
    canonical: "/",
  },
};

const highlights = [
  {
    title: "Cálculo salário líquido",
    body: "Conteúdo e simulação pensados para quem pesquisa como calcular salário líquido CLT sem depender de fórmulas soltas ou tabelas desatualizadas.",
  },
  {
    title: "INSS 2026",
    body: "Faixas progressivas válidas desde janeiro de 2026, conforme tabela oficial do INSS, aplicadas até o teto previdenciário.",
  },
  {
    title: "IRRF 2026",
    body: "A conta compara desconto simplificado e deduções legais antes de definir a base mensal do imposto de renda retido na fonte.",
  },
];

const methodology = [
  {
    title: "1. INSS progressivo",
    body: "Aplicamos as quatro faixas do empregado CLT em 2026 para descobrir o desconto previdenciário mensal do trabalhador.",
  },
  {
    title: "2. Melhor dedução do IRRF",
    body: "A base do imposto compara deduções legais com o desconto simplificado mensal de R$ 607,20 e escolhe automaticamente a alternativa mais vantajosa.",
  },
  {
    title: "3. Redução da Lei 15.270/2025",
    body: "Depois do IRRF bruto, a simulação abate a redução mensal prevista em lei para rendas dentro da faixa de benefício.",
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
  "É uma referência para empregado, doméstico e trabalhador avulso dentro do regime mensal de 2026",
];

const guideBlocks = [
  {
    title: "Como calcular salário líquido CLT",
    body: "O salário líquido parte do valor bruto mensal. Primeiro vem o INSS progressivo. Depois, a base do IRRF é ajustada com deduções legais ou desconto simplificado. Por fim, a Lei 15.270/2025 pode reduzir o imposto para parte das rendas mensais.",
  },
  {
    title: "Quando o desconto simplificado ajuda",
    body: "Se dependentes e pensão judicial não gerarem dedução maior, o desconto simplificado mensal tende a ser a melhor escolha. A calculadora compara os dois cenários e usa o que preserva mais líquido.",
  },
  {
    title: "O que significa desconto salário",
    body: "Na prática, desconto de salário reúne retenções obrigatórias e abatimentos específicos. Aqui o foco está em INSS, IRRF e pensão judicial, que são os elementos centrais para entender o salário líquido mensal.",
  },
];

const interpretationTips = [
  {
    title: "Leia primeiro o valor principal",
    body: "No modo bruto para líquido, o destaque mostra quanto tende a sobrar no mês. No modo líquido para bruto, ele estima qual bruto é necessário para atingir o valor desejado.",
  },
  {
    title: "Confira a base do IRRF",
    body: "A base do imposto ajuda a entender por que duas pessoas com o mesmo bruto podem ter retenções diferentes ao informar dependentes ou pensão judicial.",
  },
  {
    title: "Observe a redução aplicada",
    body: "Se houver redução da Lei 15.270/2025, o campo aparece separado para mostrar quanto do imposto foi abatido naquele cenário.",
  },
  {
    title: "Valide rubricas fora da simulação",
    body: "Benefícios, adicionais, convenções coletivas, descontos internos e descontos facultativos podem alterar o valor final no holerite real.",
  },
];

const practicalMoments = [
  {
    title: "Avaliar proposta de emprego",
    body: "Use a calculadora de salário líquido para comparar ofertas CLT e entender quanto do bruto deve virar líquido depois de impostos e previdência.",
  },
  {
    title: "Planejar aumento ou promoção",
    body: "Nem todo reajuste nominal produz o mesmo ganho líquido. A simulação ajuda a ver o impacto real da nova faixa salarial no bolso.",
  },
  {
    title: "Organizar orçamento mensal",
    body: "Quem busca previsibilidade pode usar o cálculo para projetar renda disponível e tomar decisões com uma estimativa mais próxima da folha.",
  },
  {
    title: "Negociar líquido desejado",
    body: "No modo líquido para bruto, dá para estimar o salário bruto necessário para chegar a uma meta mensal, o que ajuda em negociações salariais.",
  },
];

const sourceLinks = [
  {
    label: "Receita Federal: tabelas de tributação de 2026",
    href: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026",
  },
  {
    label: "INSS: tabela de contribuição mensal 2026",
    href: "https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal",
  },
  {
    label: "Planalto: texto da Lei 15.270/2025",
    href: "https://www.planalto.gov.br/ccivil_03/_Ato2023-2026/2025/Lei/L15270.htm",
  },
];

const exampleInputs = [
  {
    title: "Simulação para salário bruto de R$ 3.000",
    description:
      "Faixa comum em pesquisas sobre cálculo de salário líquido e desconto salário para início ou transição de carreira.",
    amount: 3000,
    dependents: 0,
    pension: 0,
  },
  {
    title: "Simulação para salário bruto de R$ 5.000",
    description:
      "Exemplo útil para quem quer entender a faixa em que a redução mensal do IRRF ganha mais relevância no resultado.",
    amount: 5000,
    dependents: 0,
    pension: 0,
  },
  {
    title: "Simulação para salário bruto de R$ 8.000",
    description:
      "Referência para salários em que a tributação mensal pesa mais e a leitura da base do IRRF costuma fazer diferença.",
    amount: 8000,
    dependents: 1,
    pension: 0,
  },
];

const exampleResults = exampleInputs.map((item) => {
  const result = calculateSalaryBreakdown({
    mode: "gross-to-net",
    amount: item.amount,
    dependents: item.dependents,
    pension: item.pension,
  });

  return {
    ...item,
    result,
  };
});

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
      "@type": "WebPage",
      name: "Cálculo salário líquido CLT 2026",
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "pt-BR",
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
    <>
      <main className="bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%),linear-gradient(120deg,rgba(255,255,255,0.08),transparent_40%),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:auto,auto,56px_56px,56px_56px] opacity-40" />
          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-10 lg:px-16">
            <div className="pointer-events-none sticky top-6 z-20">
              <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/12 bg-black/30 px-4 py-3 backdrop-blur-xl md:px-6">
                <SiteLogo href="/" variant="light" />
                <div className="hidden items-center gap-2 md:flex">
                  <a
                    href="#calculadora"
                    className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm text-zinc-300 transition-colors hover:bg-white/8 hover:text-white"
                  >
                    Calculadora
                  </a>
                  <a
                    href="#metodologia"
                    className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm text-zinc-300 transition-colors hover:bg-white/8 hover:text-white"
                  >
                    Metodologia
                  </a>
                  <a
                    href="#guia"
                    className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm text-zinc-300 transition-colors hover:bg-white/8 hover:text-white"
                  >
                    Guia
                  </a>
                  <a
                    href="#faq"
                    className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm text-zinc-300 transition-colors hover:bg-white/8 hover:text-white"
                  >
                    FAQ
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col pb-24 pt-14 md:pb-28 md:pt-18">
              <div className="flex max-w-5xl flex-col gap-8 animate-rise md:gap-9">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-400">
                  <span>{siteConfig.name}</span>
                  <span className="text-zinc-600">/</span>
                  <span>cálculo salário líquido</span>
                  <span className="text-zinc-600">/</span>
                  <span>CLT 2026</span>
                </div>

                <div className="max-w-5xl">
                  <h1 className="max-w-5xl font-display text-[clamp(4rem,11vw,8.8rem)] leading-[0.88] tracking-[-0.06em] text-white">
                    Calculadora de salário líquido CLT
                  </h1>
                  <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
                    Faça o cálculo salário líquido com INSS 2026, IRRF 2026 e redução da
                    Lei 15.270/2025. A simulação compara automaticamente desconto
                    simplificado e deduções legais antes de mostrar quanto sobra no mês
                    ou qual bruto é necessário para atingir um líquido desejado.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#calculadora"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Calcular agora
                  </a>
                  <a
                    href="#guia"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/8"
                  >
                    Entender o cálculo
                  </a>
                </div>

                <div className="grid gap-8 border-t border-white/12 pt-8 text-sm leading-6 text-zinc-300 md:grid-cols-3">
                  {highlights.map((item) => (
                    <div key={item.title} className="flex flex-col gap-2 animate-rise">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        {item.title}
                      </p>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-neutral-100 pb-20 pt-12 md:pt-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <SalaryCalculator />
          </div>
        </section>

        <section id="metodologia" className="border-t border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-16">
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Metodologia
              </p>
              <h2 className="max-w-lg font-display text-4xl leading-tight tracking-[-0.04em] text-foreground md:text-5xl">
                Cálculo de salário líquido com regras oficiais e leitura simples.
              </h2>
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                O simulador usa tabelas públicas de 2026 e organiza a conta em etapas
                para facilitar a conferência do resultado.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {methodology.map((item, index) => (
                <div key={item.title} className="flex flex-col gap-4">
                  {index > 0 ? <div className="h-px w-full bg-border" /> : null}
                  <div className="grid gap-3 md:grid-cols-[11rem_1fr] md:gap-6">
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

        <section id="guia" className="border-t border-border bg-neutral-100">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col gap-6">
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Guia
                </p>
                <h2 className="max-w-xl font-display text-4xl leading-tight tracking-[-0.04em] text-foreground md:text-5xl">
                  Cálculo salário líquido: o que entra na conta e por que o resultado muda.
                </h2>
                <p className="max-w-lg text-base leading-7 text-muted-foreground">
                  Quem pesquisa por calculadora de salário líquido normalmente quer duas
                  respostas: quanto vai receber de fato e quais descontos explicam esse
                  valor. Os blocos abaixo resumem as partes centrais da simulação.
                </p>

                <div className="rounded-[1.75rem] border border-black/8 bg-white px-6 py-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Leitura rápida
                  </p>
                  <p className="mt-3 text-sm leading-6 text-foreground">
                    Primeiro entenda a ordem do cálculo. Depois compare o regime de
                    dedução. Por fim, valide se existem rubricas fora da simulação.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white">
                {guideBlocks.map((item, index) => (
                  <article
                    key={item.title}
                    className="grid gap-4 border-t border-black/8 px-6 py-6 first:border-t-0 md:grid-cols-[4.5rem_15rem_1fr] md:gap-6 md:px-8 md:py-7"
                  >
                    <div className="flex items-start">
                      <span className="font-mono text-xs tracking-[0.28em] text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="max-w-xs font-display text-[1.9rem] leading-[1.02] tracking-[-0.035em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                      {item.body}
                    </p>
                  </article>
                ))}

                <div className="border-t border-black/8 bg-[linear-gradient(135deg,rgba(0,0,0,0.02),rgba(0,0,0,0.05))] px-6 py-6 md:px-8">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Resumo
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground">
                    O salário líquido não depende só do bruto. Ele muda conforme a
                    contribuição previdenciária, a forma de dedução escolhida no IRRF e
                    a existência de abatimentos específicos previstos na legislação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-16">
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Exemplos
              </p>
              <h2 className="max-w-lg font-display text-4xl leading-tight tracking-[-0.04em] text-foreground md:text-5xl">
                Exemplos práticos de cálculo de salário líquido.
              </h2>
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Estes cenários usam o mesmo motor da calculadora e ajudam a visualizar o
                impacto do INSS e do IRRF em faixas de renda pesquisadas com frequência.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-border rounded-[2rem] border border-border bg-white">
              {exampleResults.map((item) => (
                <article key={item.title} className="grid gap-5 px-6 py-6 md:grid-cols-[1fr_auto] md:px-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="grid gap-2 text-sm leading-6 text-foreground md:min-w-64">
                    <div className="flex items-center justify-between gap-4">
                      <span>Líquido estimado</span>
                      <strong>{formatCurrency(item.result.netSalary)}</strong>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>INSS</span>
                      <strong>{formatCurrency(item.result.inss)}</strong>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>IRRF final</span>
                      <strong>{formatCurrency(item.result.irrf)}</strong>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>Dedução escolhida</span>
                      <strong>{item.result.selectedDeductionLabel}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-neutral-100">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Leitura da simulação
              </p>
              <h2 className="max-w-xl font-display text-4xl leading-tight tracking-[-0.04em] text-foreground md:text-5xl">
                Como interpretar o resultado sem depender de suposição.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {interpretationTips.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col gap-3 rounded-[1.5rem] border border-black/8 bg-white p-6"
                >
                  <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-neutral-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-16">
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Fontes</p>
              <h2 className="max-w-2xl font-display text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
                Transparência para conferir o cálculo salário líquido em fontes oficiais.
              </h2>
              <p className="max-w-xl text-base leading-7 text-zinc-300">
                A fórmula usada pelo simulador parte de normas públicas. Por isso, os
                links abaixo ficam visíveis para quem quiser validar tabelas, faixas e a
                base legal da redução aplicada no IRRF.
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
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-16">
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Quando usar
              </p>
              <h2 className="max-w-lg font-display text-4xl leading-tight tracking-[-0.04em] text-foreground md:text-5xl">
                Situações em que calcular salário líquido ajuda de verdade.
              </h2>
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                A busca por cálculo de salário líquido costuma surgir em momentos de
                decisão. Estes são alguns dos cenários mais comuns.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {practicalMoments.map((item) => (
                <article key={item.title} className="border-t border-border pt-5 first:pt-0 md:first:border-t">
                  <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                FAQ
              </p>
              <h2 className="max-w-md font-display text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
                Perguntas frequentes sobre calculadora de salário líquido.
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
      </main>

      <SiteFooter />
    </>
  );
}
