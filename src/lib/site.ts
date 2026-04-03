const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://calculo-salario-liquido.vercel.app";

const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION ??
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const bingSiteVerification =
  process.env.BING_SITE_VERIFICATION ??
  process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const siteConfig = {
  name: "Salário Líquido",
  url: baseUrl,
  locale: "pt-BR",
  title: "Cálculo Salário Líquido | Calculadora CLT 2026",
  description:
    "Cálculo salário líquido CLT em PT-BR com INSS 2026, IRRF 2026 e redução da Lei 15.270/2025 para simular bruto para líquido e líquido para bruto.",
  shortDescription:
    "Calculadora de salário líquido CLT com regras brasileiras de 2026.",
  defaultOgImage: "/opengraph-image",
  keywords: [
    "calculo salario liquido",
    "calculadora de salario liquido",
    "calcular salario liquido",
    "desconto salario",
    "calculadora clt 2026",
    "salario bruto para liquido",
    "salario liquido para bruto",
    "simulador salario clt",
    "como calcular salario liquido",
    "inss 2026",
    "irrf 2026",
    "lei 15270 2025",
    "salario liquido clt",
    "liquido para bruto",
  ],
  verification: {
    google: googleSiteVerification,
    bing: bingSiteVerification,
  },
};

export const faqItems = [
  {
    question: "Como calcular salário líquido CLT em 2026?",
    answer:
      "O cálculo parte do salário bruto mensal, aplica o INSS progressivo de 2026, compara as deduções legais com o desconto simplificado mensal do IRRF e, por fim, aplica a redução da Lei 15.270/2025 quando a renda mensal estiver dentro da faixa de benefício.",
  },
  {
    question: "Quem ganha até R$ 5 mil fica isento de IRRF?",
    answer:
      "Na prática mensal de 2026, a redução prevista na Lei 15.270/2025 pode zerar o imposto para rendas mensais até R$ 5 mil, desde que a remuneração se enquadre nas regras da redução. A calculadora já considera esse abatimento automaticamente.",
  },
  {
    question: "A calculadora usa INSS 2026 e IRRF 2026?",
    answer:
      "Sim. A conta considera as faixas progressivas do INSS válidas a partir de janeiro de 2026 e a tabela mensal do IRPF divulgada pela Receita Federal para 2026.",
  },
  {
    question: "Posso calcular líquido para bruto?",
    answer:
      "Sim. Basta trocar o modo de cálculo para líquido para bruto e informar quanto deseja receber líquido por mês. A ferramenta estima o bruto necessário usando as mesmas regras de INSS e IRRF de 2026.",
  },
  {
    question: "Dependentes e pensão alimentícia entram no cálculo?",
    answer:
      "Entram. Os dependentes são considerados no regime de deduções legais do IRRF, e a pensão alimentícia judicial também pode ser abatida quando esse regime for mais vantajoso do que o desconto simplificado mensal.",
  },
  {
    question: "O cálculo inclui férias, 13º ou horas extras?",
    answer:
      "Não. A ferramenta foi focada no salário mensal recorrente de empregado CLT, doméstico e trabalhador avulso. Férias, 13º, horas extras, PLR e descontos internos da empresa ficam fora desta simulação principal.",
  },
  {
    question: "Qual a diferença entre salário bruto e salário líquido?",
    answer:
      "Salário bruto é o valor contratual antes dos descontos. Salário líquido é o valor que sobra depois de aplicar INSS, IRRF, eventual pensão judicial e demais ajustes considerados na simulação.",
  },
  {
    question: "Esta calculadora serve para analisar proposta de emprego?",
    answer:
      "Serve como referência para comparar ofertas CLT, entender quanto do salário bruto tende a virar líquido e antecipar o impacto tributário mensal. A conferência final deve considerar rubricas específicas do contrato e do holerite.",
  },
  {
    question: "Quanto desconta de INSS em 2026?",
    answer:
      "O INSS é progressivo: 7,5% sobre a primeira faixa (até R$ 1.621), 9% na segunda, 12% na terceira e 14% na quarta (até o teto de R$ 8.475,55). O desconto total é a soma de cada faixa, não uma alíquota única sobre o bruto inteiro.",
  },
  {
    question: "O que é o desconto simplificado mensal do IRRF?",
    answer:
      "É um abatimento fixo de R$ 607,20 por mês na base de cálculo do imposto de renda. Ele substitui as deduções legais, como dependentes e pensão, quando resulta em menos imposto. A calculadora compara os dois automaticamente.",
  },
  {
    question: "Quem ganha R$ 5.000 bruto realmente não paga IRRF?",
    answer:
      "Na simulação mensal com as regras de 2026, sim. A combinação do desconto simplificado com a redução da Lei 15.270/2025 tende a zerar o imposto para essa faixa. Mas o resultado pode mudar se houver outras fontes de renda ou ajuste na declaração anual.",
  },
  {
    question: "A calculadora funciona para empregado doméstico?",
    answer:
      "As regras de INSS e IRRF aplicadas aqui são as mesmas para empregado CLT, doméstico e trabalhador avulso no regime mensal. A simulação é válida como referência para os três.",
  },
  {
    question: "Como a pensão alimentícia afeta o salário líquido?",
    answer:
      "A pensão judicial é descontada do bruto antes do cálculo do IRRF, o que reduz a base tributável. Na prática, quem paga pensão tem menos IRRF, mas o líquido final também é menor porque a pensão sai diretamente do salário.",
  },
  {
    question: "O resultado da calculadora é igual ao holerite?",
    answer:
      "Não necessariamente. O holerite pode incluir adicionais, como noturno, periculosidade e insalubridade, além de descontos de vale-transporte, plano de saúde, empréstimo consignado e outras rubricas que não fazem parte desta simulação. Use o resultado como estimativa dos descontos obrigatórios.",
  },
] as const;
