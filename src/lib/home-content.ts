import { buildCalculatorHref } from "@/lib/calculator-query";
import { calculateSalaryBreakdown, formatCurrency } from "@/lib/salary";
import { faqItems, siteConfig } from "@/lib/site";

export const homeNavigationLinks = [
  { label: "Metodologia", href: "#metodologia" },
  { label: "FAQ", href: "#faq" },
] as const;

export const officialSourceLinks = [
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
] as const;

export const heroHighlights = [
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
] as const;

export const inssTableRows = [
  { salaryRange: "Até R$ 1.621,00", rate: "7,5%", rateValue: 7.5 },
  { salaryRange: "De R$ 1.621,01 a R$ 2.902,84", rate: "9%", rateValue: 9 },
  { salaryRange: "De R$ 2.902,85 a R$ 4.354,27", rate: "12%", rateValue: 12 },
  { salaryRange: "De R$ 4.354,28 a R$ 8.475,55", rate: "14%", rateValue: 14 },
] as const;

export const irrfTableRows = [
  { taxBase: "Até R$ 2.428,80", rate: "Isento", deduction: "—", rateValue: 0 },
  { taxBase: "De R$ 2.428,81 a R$ 2.826,65", rate: "7,5%", deduction: "R$ 182,16", rateValue: 7.5 },
  { taxBase: "De R$ 2.826,66 a R$ 3.751,05", rate: "15%", deduction: "R$ 394,16", rateValue: 15 },
  { taxBase: "De R$ 3.751,06 a R$ 4.664,68", rate: "22,5%", deduction: "R$ 675,49", rateValue: 22.5 },
  { taxBase: "Acima de R$ 4.664,68", rate: "27,5%", deduction: "R$ 908,73", rateValue: 27.5 },
] as const;

export const lawChangeBlocks = [
  {
    label: undefined,
    body: "A Lei 15.270, sancionada em 2025, criou uma redução progressiva no IRRF mensal para trabalhadores com renda dentro de uma faixa específica. Na prática, quem ganha até R$ 5.000 brutos por mês tende a ter o IRRF zerado a partir de janeiro de 2026.",
  },
  {
    label: "Como funciona a redução:",
    body: "Depois de calcular o IRRF pela tabela normal, o sistema aplica um desconto proporcional à renda. Para rendas até R$ 5.000, o desconto costuma zerar o imposto. Acima disso, o benefício diminui gradualmente até desaparecer.",
  },
  {
    label: "Quem é afetado:",
    body: "Empregados CLT, domésticos e trabalhadores avulsos com renda mensal na faixa de benefício. A redução é aplicada automaticamente na folha — não é necessário fazer nenhum pedido.",
  },
  {
    label: "O que a lei NÃO muda:",
    body: "As alíquotas do INSS seguem iguais. A tabela base do IRRF também. A mudança está exclusivamente na redução aplicada depois do cálculo do imposto.",
  },
] as const;

export const grossVsNetBlocks = [
  {
    title: "Salário bruto",
    body: "é o valor que aparece no contrato de trabalho. É a remuneração antes de qualquer desconto — o ponto de partida.",
  },
  {
    title: "Salário líquido",
    body: "é o que sobra depois de descontar INSS, IRRF e eventuais deduções como pensão alimentícia. É o que cai na conta bancária.",
  },
] as const;

export const payslipCheckSteps = [
  {
    title: "Passo 1: Localize o salário base no holerite.",
    body: "Ignore adicionais, horas extras e gratificações por enquanto. Use o valor do salário-base ou a remuneração fixa mensal.",
  },
  {
    title: "Passo 2: Insira na calculadora.",
    body: "Coloque o valor no campo de salário bruto, informe seus dependentes e pensão judicial (se houver), e compare o INSS e IRRF com os valores do holerite.",
  },
  {
    title: "Passo 3: Entenda as diferenças.",
    body: "Se o holerite mostra descontos maiores, provavelmente inclui vale-transporte, plano de saúde, empréstimo consignado ou contribuição sindical — itens que esta calculadora não cobre. Se o INSS ou IRRF estão diferentes, vale perguntar ao RH.",
  },
  {
    title: "Passo 4: Verifique a redução do IRRF.",
    body: "Se você ganha até R$ 5.000 e o holerite ainda mostra cobrança de IRRF, pode haver erro na aplicação da Lei 15.270/2025. Converse com o departamento pessoal.",
  },
] as const;

export const methodologySteps = [
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
] as const;

export const includedScopeItems = [
  "Salário mensal CLT padrão",
  "Dependentes no IRRF",
  "Pensão alimentícia judicial",
  "Cálculo bruto para líquido",
  "Cálculo líquido para bruto",
] as const;

export const excludedScopeItems = [
  "Não inclui férias, 13º, PLR ou horas extras",
  "Não trata vale-transporte, adiantamentos ou descontos internos da empresa",
  "É uma referência para empregado, doméstico e trabalhador avulso dentro do regime mensal de 2026",
] as const;

export const guideBlocks = [
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
] as const;

export const interpretationTips = [
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
] as const;

export const practicalMoments = [
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
] as const;

const grossVsNetSamples = [
  { grossSalary: 5000, label: "R$ 5.000 bruto", accent: "dark" as const },
  { grossSalary: 10000, label: "R$ 10.000 bruto", accent: "mid" as const },
] as const;

export const grossVsNetMetrics = grossVsNetSamples.map((item) => {
  const result = calculateSalaryBreakdown({
    mode: "gross-to-net",
    amount: item.grossSalary,
    dependents: 0,
    pension: 0,
  });

  return {
    label: item.label,
    value: result.netSalary,
    valueLabel: `${formatCurrency(result.netSalary)} líquido`,
    detail: `Desconto total de ${formatCurrency(item.grossSalary - result.netSalary)} · INSS ${formatCurrency(result.inss)} · IRRF ${formatCurrency(result.irrf)}`,
    accent: item.accent,
  };
});

const proposalComparisonSamples = [
  { grossSalary: 7000, label: "R$ 7.000", accent: "mid" as const },
  { grossSalary: 8500, label: "R$ 8.500", accent: "dark" as const },
] as const;

export const proposalComparisonMetrics = proposalComparisonSamples.map((item) => {
  const result = calculateSalaryBreakdown({
    mode: "gross-to-net",
    amount: item.grossSalary,
    dependents: 0,
    pension: 0,
  });

  return {
    label: `${item.label} bruto`,
    value: result.netSalary,
    valueLabel: `${formatCurrency(result.netSalary)} líquido`,
    detail: `INSS ${formatCurrency(result.inss)} · IRRF ${formatCurrency(result.irrf)} · Diferença total ${formatCurrency(item.grossSalary - result.netSalary)}`,
    accent: item.accent,
  };
});

const homeExamples = [
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
] as const;

export const exampleResults = homeExamples.map((item) => ({
  ...item,
  href: buildCalculatorHref({
    mode: "gross-to-net",
    amount: item.amount,
    dependents: item.dependents,
    pension: item.pension,
  }),
  result: calculateSalaryBreakdown({
    mode: "gross-to-net",
    amount: item.amount,
    dependents: item.dependents,
    pension: item.pension,
  }),
}));

export function getHomePageJsonLd() {
  return {
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
}
