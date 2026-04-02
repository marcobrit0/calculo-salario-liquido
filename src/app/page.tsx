import type { Metadata } from "next";

import { SalaryCalculator } from "@/components/salary-calculator";
import { SiteFooter } from "@/components/site-footer";
import { SiteLogo } from "@/components/site-logo";
import { buildCalculatorHref } from "@/lib/calculator-query";
import { createPageMetadata } from "@/lib/seo";
import { calculateSalaryBreakdown, formatCurrency } from "@/lib/salary";
import { faqItems, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Cálculo Salário Líquido CLT 2026",
  description:
    "Cálculo salário líquido CLT com INSS 2026, IRRF 2026 e redução da Lei 15.270/2025. Use a calculadora de salário líquido para simular bruto para líquido ou líquido para bruto.",
  pathname: "/",
});

const highlights = [
  {
    title: "INSS 2026",
    body: "INSS com faixas de 2026. O desconto previdenciário é calculado faixa por faixa, do menor ao maior percentual. Você paga 7,5% sobre a primeira faixa e vai subindo até 14%.",
  },
  {
    title: "IRRF 2026",
    body: "IRRF com isenção até R$ 5 mil. A Lei 15.270/2025 pode zerar o imposto de renda para quem ganha até R$ 5.000 por mês. A calculadora já aplica essa regra automaticamente.",
  },
  {
    title: "Atualizado",
    body: "Tabelas de abril de 2026. Os valores usados aqui seguem as tabelas oficiais publicadas pela Receita Federal e pelo INSS para o ano corrente.",
  },
];

const methodology = [
  {
    title: "1. Desconta o INSS por faixas",
    body: "O salário bruto passa pelas quatro faixas progressivas do INSS 2026. Cada faixa tem seu percentual, de 7,5% a 14%. O total é somado para chegar no desconto previdenciário.",
  },
  {
    title: "2. Calcula o IRRF pela melhor regra",
    body: "A base do imposto de renda pode ser calculada de dois jeitos: pelas deduções legais (dependentes + pensão) ou pelo desconto simplificado de R$ 607,20 por mês. A calculadora testa os dois e escolhe o que resulta em mais líquido para você.",
  },
  {
    title: "3. Aplica a redução da Lei 15.270/2025",
    body: "Se a sua renda mensal se enquadra na faixa de benefício, o IRRF é reduzido ou zerado. Quem ganha até R$ 5.000 bruto, por exemplo, tende a ter imposto zero.",
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
    body: "O caminho do bruto até o líquido tem três paradas obrigatórias: INSS, base do IRRF e imposto final. O INSS sai primeiro, direto do bruto. Depois, o que sobra vira a base para calcular o imposto de renda. Dependendo do seu caso, a base usa deduções legais ou desconto simplificado, o que for melhor para você. Por fim, a Lei 15.270/2025 pode reduzir ou eliminar o IRRF se sua renda mensal estiver dentro da faixa de benefício.",
  },
  {
    title: "Quando o desconto simplificado compensa",
    body: "O desconto simplificado é um abatimento fixo de R$ 607,20 por mês na base do IRRF. Ele compensa quando você não tem dependentes e não paga pensão judicial, porque nesses casos as deduções legais ficam menores que R$ 607,20. A calculadora compara os dois cenários automaticamente e usa o melhor.",
  },
  {
    title: 'O que significa "desconto de salário"',
    body: 'Quando alguém pesquisa "desconto salário", geralmente quer entender por que o líquido é menor que o bruto. Os descontos obrigatórios são dois: INSS (previdência) e IRRF (imposto de renda). Existem outros possíveis, como vale-transporte, pensão alimentícia e contribuição sindical, mas INSS e IRRF são os que mais pesam no contracheque.',
  },
];

const interpretationTips = [
  {
    title: "O número principal é o seu líquido estimado",
    body: "No modo bruto para líquido, é quanto tende a cair na conta. No modo líquido para bruto, é o salário bruto necessário para chegar naquele valor.",
  },
  {
    title: "A base do IRRF explica as diferenças",
    body: "Duas pessoas com o mesmo bruto podem ter IRRFs diferentes se uma tem dependentes ou paga pensão judicial. Confira esse campo se o desconto parecer alto.",
  },
  {
    title: "A redução aparece separada quando existe",
    body: "Se a Lei 15.270/2025 reduziu ou zerou seu IRRF, o campo mostra exatamente quanto foi abatido.",
  },
  {
    title: "O resultado é uma simulação, não um holerite",
    body: "Benefícios, adicionais, convenções coletivas e descontos internos da empresa não entram aqui. Compare com seu contracheque real e ajuste se necessário.",
  },
];

const practicalMoments = [
  {
    title: "Recebeu uma proposta de emprego",
    body: "Compare ofertas CLT pelo que realmente importa: o líquido. Duas propostas com R$ 1.000 de diferença no bruto podem ter menos de R$ 600 de diferença no líquido.",
  },
  {
    title: "Quer negociar salário",
    body: "Use o modo líquido para bruto. Defina quanto precisa receber na conta e descubra qual bruto pedir na negociação.",
  },
  {
    title: "Recebeu aumento ou promoção",
    body: "Nem todo aumento no bruto se traduz proporcionalmente no líquido. Simule para ver quanto realmente muda.",
  },
  {
    title: "Está montando o orçamento do mês",
    body: "Saber o líquido previsível é o primeiro passo para organizar gastos fixos, investimentos e reserva.",
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
    title: "Salário bruto de R$ 3.000/mês",
    description:
      "Perfil típico: auxiliar administrativo, atendente, técnico em início de carreira. INSS de R$ 248,60, IRRF zerado pela Lei 15.270/2025. Sobram R$ 2.751,40 na conta.",
    amount: 3000,
    dependents: 0,
    pension: 0,
  },
  {
    title: "Salário bruto de R$ 5.000/mês",
    description:
      "Perfil típico: analista pleno, coordenador, profissional com 5+ anos. INSS de R$ 501,51, IRRF zerado pela redução mensal. Líquido de R$ 4.498,49, a isenção faz diferença aqui.",
    amount: 5000,
    dependents: 0,
    pension: 0,
  },
  {
    title: "Salário bruto de R$ 8.000/mês",
    description:
      "Perfil típico: gerente, especialista sênior, profissional com salário acima da faixa de isenção. INSS de R$ 921,51 + IRRF de R$ 985,72. Líquido de R$ 6.092,77, nessa faixa, dependentes podem reduzir o imposto.",
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
                    Descubra quanto do seu salário sobra depois dos descontos
                  </h1>
                  <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
                    Simule INSS, IRRF e a nova isenção da Lei 15.270/2025 em segundos.
                    Informe o bruto, veja o líquido. Ou informe o líquido desejado e
                    descubra quanto precisa ganhar.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#calculadora"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Calcular meu salário líquido
                  </a>
                  <a
                    href="#metodologia"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/8"
                  >
                    Como funciona o cálculo
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
                Como a calculadora chega no resultado
              </h2>
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Três etapas, na mesma ordem que o departamento pessoal usa para fechar a
                folha.
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
                  Cálculo de salário líquido: o que você precisa saber
                </h2>
                <p className="max-w-lg text-base leading-7 text-muted-foreground">
                  Os descontos que separam o bruto do líquido explicados sem jargão, com
                  exemplos práticos.
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
                Quanto sobra na prática: 3 faixas de salário simuladas
              </h2>
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Cenários reais com os mesmos cálculos da ferramenta acima. Clique para
                ajustar no simulador.
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
                    <div className="pt-2">
                      <a
                        href={buildCalculatorHref({
                          mode: "gross-to-net",
                          amount: item.amount,
                          dependents: item.dependents,
                          pension: item.pension,
                        })}
                        className="inline-flex h-10 items-center justify-center rounded-full border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-neutral-100"
                      >
                        Ajustar no simulador
                      </a>
                    </div>
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
                Como ler o resultado da calculadora
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
                Quando faz sentido calcular o salário líquido
              </h2>
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                A simulação ajuda mais quando você precisa transformar bruto em decisão
                prática.
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
