const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://calculo-salario-liquido.vercel.app";

export const siteConfig = {
  name: "Salário Líquido",
  url: baseUrl,
  description:
    "Calculadora de salário líquido CLT em PT-BR com INSS 2026, IRRF 2026 e redução da Lei 15.270/2025 para simular bruto para líquido e líquido para bruto.",
  shortDescription: "Simule salário líquido CLT com regras brasileiras de 2026.",
  keywords: [
    "calculo salario liquido",
    "calculadora de salario liquido",
    "calcular salario liquido",
    "desconto salario",
    "inss 2026",
    "irrf 2026",
    "lei 15270 2025",
    "salario liquido clt",
    "liquido para bruto",
  ],
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
      "Não nesta primeira versão. A ferramenta foi focada no salário mensal recorrente de empregado CLT, doméstico e trabalhador avulso. Férias, 13º, horas extras, PLR e descontos internos da empresa ficaram fora do escopo inicial.",
  },
] as const;
