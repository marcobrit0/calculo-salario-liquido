import type { Metadata } from "next";
import Link from "next/link";

import {
  ContentBody,
  ContentCTA,
  ContentHero,
  ContentPage,
  ContentRelatedLinks,
} from "@/components/content-page";
import { createAbsoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title:
    "Como Calcular Salário Líquido CLT 2026 — Passo a Passo com Exemplos",
  description:
    "Aprenda a calcular o salário líquido CLT em 2026 com exemplos práticos. Passo a passo do INSS, IRRF e a nova isenção da Lei 15.270/2025.",
  pathname: "/como-calcular-salario-liquido",
  openGraphType: "article",
});

const pageUrl = createAbsoluteUrl("/como-calcular-salario-liquido");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "Como Calcular o Salário Líquido CLT em 2026",
      description:
        "Passo a passo para calcular o salário líquido CLT com INSS, IRRF e Lei 15.270/2025.",
      url: pageUrl,
      inLanguage: "pt-BR",
      step: [
        {
          "@type": "HowToStep",
          name: "Calcular o desconto do INSS",
          text: "Aplique as 4 faixas progressivas do INSS 2026 (7,5% a 14%) sobre o salário bruto. Some o desconto de cada faixa.",
        },
        {
          "@type": "HowToStep",
          name: "Determinar a base de cálculo do IRRF",
          text: "Subtraia o INSS do bruto. Depois, subtraia as deduções: desconto simplificado de R$ 607,20 ou deduções legais (R$ 189,59 por dependente + pensão). Use a menor base.",
        },
        {
          "@type": "HowToStep",
          name: "Aplicar a tabela do IRRF",
          text: "Multiplique a base pela alíquota correspondente (7,5% a 27,5%) e subtraia a parcela a deduzir.",
        },
        {
          "@type": "HowToStep",
          name: "Aplicar a redução da Lei 15.270/2025",
          text: "Se o salário bruto é de até R$ 5.000, o IRRF é zerado. Entre R$ 5.000 e R$ 7.350, redução parcial. Acima de R$ 7.350, sem redução.",
        },
        {
          "@type": "HowToStep",
          name: "Calcular o líquido final",
          text: "Salário líquido = Bruto - INSS - IRRF final - Pensão alimentícia (se houver).",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Salário líquido é o que cai na conta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Na maioria dos casos, sim. O líquido considera INSS e IRRF. Se seu holerite tem outros descontos (VT, plano de saúde, consignado), o valor na conta será menor.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto desconta de um salário de R$ 5.000?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "INSS: R$ 501,51. IRRF: R$ 0,00 (Lei 15.270/2025). Líquido: R$ 4.498,49.",
          },
        },
        {
          "@type": "Question",
          name: "O FGTS é descontado do meu salário?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. O FGTS (8% do bruto) é pago pelo empregador. Não sai do salário do trabalhador.",
          },
        },
        {
          "@type": "Question",
          name: "Como calcular de líquido para bruto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O processo é inverso e mais complexo. A calculadora tem um modo específico: informe o líquido desejado e ela estima o bruto necessário.",
          },
        },
      ],
    },
  ],
};

export default function ComoCalcularSalarioLiquidoPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <ContentHero
        eyebrow="Guia CLT 2026"
        title="Como Calcular o Salário Líquido CLT em 2026"
        description="Saber calcular o salário líquido ajuda a avaliar propostas de emprego, conferir o holerite e planejar o orçamento mensal. Neste guia, mostramos o passo a passo completo com as regras de 2026 — INSS, IRRF e a redução da Lei 15.270/2025."
      />

      <ContentBody>
        {/* ---------- O que é salário líquido ---------- */}

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          O que é salário líquido
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O salário líquido é o valor que o trabalhador CLT recebe depois dos
          descontos obrigatórios — INSS e IRRF. É diferente do salário bruto,
          que é o valor registrado no contrato de trabalho antes de qualquer
          desconto.
        </p>

        {/* ---------- Quais descontos ---------- */}

        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Quais descontos são aplicados no salário CLT
        </h2>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Descontos obrigatórios
        </h3>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">INSS</strong> — contribuição
            previdenciária progressiva com alíquotas de{" "}
            <strong className="text-foreground">7,5% a 14%</strong>, aplicadas
            faixa a faixa.
          </li>
          <li>
            <strong className="text-foreground">IRRF</strong> — imposto de
            renda retido na fonte com alíquotas de{" "}
            <strong className="text-foreground">7,5% a 27,5%</strong>, após
            deduções e possível redução da Lei 15.270/2025.
          </li>
        </ul>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Descontos opcionais ou variáveis
        </h3>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
          <li>Vale-transporte (até 6% do bruto)</li>
          <li>Plano de saúde (coparticipação)</li>
          <li>Pensão alimentícia judicial</li>
          <li>Empréstimo consignado</li>
          <li>Contribuição sindical</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Esta simulação considera apenas os descontos obrigatórios (INSS e
          IRRF) e a pensão alimentícia judicial, quando informada.
        </p>

        {/* ---------- Passo a passo ---------- */}

        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Passo a passo — como calcular o salário líquido
        </h2>

        {/* Passo 1 */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Passo 1: Calcule o desconto do INSS
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O INSS é progressivo: cada faixa de salário tem uma alíquota própria.
          Você calcula o desconto de cada faixa separadamente e soma tudo.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Faixa
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Até
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Alíquota
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">1.ª faixa</td>
                <td className="px-4 py-3 text-right">R$ 1.621,00</td>
                <td className="px-4 py-3 text-right">7,5%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">2.ª faixa</td>
                <td className="px-4 py-3 text-right">R$ 2.902,84</td>
                <td className="px-4 py-3 text-right">9%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">3.ª faixa</td>
                <td className="px-4 py-3 text-right">R$ 4.354,27</td>
                <td className="px-4 py-3 text-right">12%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">4.ª faixa</td>
                <td className="px-4 py-3 text-right">R$ 8.475,55</td>
                <td className="px-4 py-3 text-right">14%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Passo 2 */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Passo 2: Determine a base de cálculo do IRRF
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A base do imposto de renda é o bruto menos as deduções. O sistema
          escolhe automaticamente a opção que resulta em menor imposto:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">Opção A — Desconto simplificado:</strong>{" "}
            abatimento fixo de{" "}
            <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
              R$ 607,20
            </code>{" "}
            por mês na base de cálculo.
          </li>
          <li>
            <strong className="text-foreground">Opção B — Deduções legais:</strong>{" "}
            INSS +{" "}
            <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
              R$ 189,59
            </code>{" "}
            por dependente + pensão alimentícia judicial.
          </li>
        </ul>

        {/* Passo 3 */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Passo 3: Aplique a tabela do IRRF
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Com a base de cálculo definida, aplique a fórmula:
        </p>

        <p className="mt-4 text-center">
          <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
            IRRF = (Base × Alíquota) − Parcela a deduzir
          </code>
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          As alíquotas variam de 7,5% a 27,5%, dependendo da faixa da base de
          cálculo.
        </p>

        {/* Passo 4 */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Passo 4: Aplique a redução da Lei 15.270/2025
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A Lei 15.270/2025 introduziu uma redução progressiva no IRRF mensal
          para faixas de renda mais baixas. Na prática:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">Bruto até R$ 5.000:</strong>{" "}
            IRRF zerado (redução integral).
          </li>
          <li>
            <strong className="text-foreground">
              Bruto entre R$ 5.000 e R$ 7.350:
            </strong>{" "}
            redução parcial (proporcional).
          </li>
          <li>
            <strong className="text-foreground">Bruto acima de R$ 7.350:</strong>{" "}
            sem redução.
          </li>
        </ul>

        {/* Passo 5 */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Passo 5: Calcule o líquido
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Com todos os descontos calculados, o líquido final é:
        </p>

        <p className="mt-4 text-center">
          <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
            Líquido = Bruto − INSS − IRRF final − Pensão
          </code>
        </p>

        {/* ---------- Exemplo 1 ---------- */}

        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Exemplo completo — salário de R$ 6.000
        </h2>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          INSS (desconto por faixa)
        </h3>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Faixa
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Base
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Alíquota
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Desconto
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">1.ª faixa</td>
                <td className="px-4 py-3 text-right">R$ 1.621,00</td>
                <td className="px-4 py-3 text-right">7,5%</td>
                <td className="px-4 py-3 text-right">R$ 121,58</td>
              </tr>
              <tr>
                <td className="px-4 py-3">2.ª faixa</td>
                <td className="px-4 py-3 text-right">R$ 1.281,84</td>
                <td className="px-4 py-3 text-right">9%</td>
                <td className="px-4 py-3 text-right">R$ 115,37</td>
              </tr>
              <tr>
                <td className="px-4 py-3">3.ª faixa</td>
                <td className="px-4 py-3 text-right">R$ 1.451,43</td>
                <td className="px-4 py-3 text-right">12%</td>
                <td className="px-4 py-3 text-right">R$ 174,17</td>
              </tr>
              <tr>
                <td className="px-4 py-3">4.ª faixa</td>
                <td className="px-4 py-3 text-right">R$ 1.645,73</td>
                <td className="px-4 py-3 text-right">14%</td>
                <td className="px-4 py-3 text-right">R$ 230,40</td>
              </tr>
              <tr className="font-semibold">
                <td className="px-4 py-3" colSpan={3}>
                  Total INSS
                </td>
                <td className="px-4 py-3 text-right">R$ 641,51</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Base de cálculo do IRRF
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Sem dependentes nem pensão, as deduções legais se resumem ao INSS:
          R$ 641,51. Como esse valor supera o desconto simplificado (R$ 607,20),
          o sistema aplica as deduções legais, que resultam em uma base menor e
          menos imposto.
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Base IRRF com deduções legais:{" "}
          <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
            R$ 6.000 − R$ 641,51 = R$ 5.358,49
          </code>
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Cálculo do IRRF
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A base de R$ 5.358,49 cai na faixa de 27,5%:{" "}
          <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
            (R$ 5.358,49 × 27,5%) − R$ 908,73 = R$ 564,85
          </code>
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Redução da Lei 15.270/2025
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O bruto de R$ 6.000 está entre R$ 5.000 e R$ 7.350, então a redução é
          parcial:{" "}
          <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
            Redução = R$ 978,62 − (0,133145 × R$ 6.000) = R$ 179,75
          </code>
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">IRRF final:</strong>{" "}
          <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
            R$ 564,85 − R$ 179,75 = R$ 385,10
          </code>
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Resultado
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
            Líquido = R$ 6.000 − R$ 641,51 − R$ 385,10 = R$ 4.973,39
          </code>
        </p>

        {/* ---------- Exemplo 2 ---------- */}

        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Exemplo 2 — salário de R$ 3.500 (IRRF zerado)
        </h2>

        <h3 className="mt-8 text-lg font-semibold text-foreground">INSS</h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Aplicando as faixas progressivas sobre R$ 3.500:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
          <li>1.ª faixa: R$ 1.621,00 × 7,5% = R$ 121,58</li>
          <li>2.ª faixa: R$ 1.281,84 × 9% = R$ 115,37</li>
          <li>3.ª faixa: R$ 597,16 × 12% = R$ 71,66</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Total INSS:</strong>{" "}
          <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
            R$ 308,60
          </code>
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">IRRF</h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O bruto de R$ 3.500 está abaixo de R$ 5.000. A redução da
          Lei 15.270/2025 zera o IRRF:{" "}
          <strong className="text-foreground">IRRF = R$ 0,00</strong>.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Resultado
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
            Líquido = R$ 3.500 − R$ 308,60 = R$ 3.191,40
          </code>
        </p>

        {/* ---------- Simplificado vs deduções legais ---------- */}

        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Desconto simplificado ou deduções legais: qual escolher?
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A calculadora compara automaticamente as duas opções e usa a que
          resulta em menor imposto. A tabela abaixo mostra quando cada opção
          compensa:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Situação
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Deduções legais
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Melhor opção
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">Sem dependentes</td>
                <td className="px-4 py-3 text-right">R$ 0,00</td>
                <td className="px-4 py-3">Simplificado</td>
              </tr>
              <tr>
                <td className="px-4 py-3">1 dependente</td>
                <td className="px-4 py-3 text-right">R$ 189,59</td>
                <td className="px-4 py-3">Simplificado</td>
              </tr>
              <tr>
                <td className="px-4 py-3">2 dependentes</td>
                <td className="px-4 py-3 text-right">R$ 379,18</td>
                <td className="px-4 py-3">Simplificado</td>
              </tr>
              <tr>
                <td className="px-4 py-3">3 dependentes</td>
                <td className="px-4 py-3 text-right">R$ 568,77</td>
                <td className="px-4 py-3">Simplificado</td>
              </tr>
              <tr>
                <td className="px-4 py-3">4 dependentes</td>
                <td className="px-4 py-3 text-right">R$ 758,36</td>
                <td className="px-4 py-3">Deduções legais</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Pensão R$ 1.000</td>
                <td className="px-4 py-3 text-right">R$ 1.000,00</td>
                <td className="px-4 py-3">Deduções legais</td>
              </tr>
              <tr>
                <td className="px-4 py-3">2 dep. + pensão R$ 500</td>
                <td className="px-4 py-3 text-right">R$ 879,18</td>
                <td className="px-4 py-3">Deduções legais</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          As deduções legais incluem INSS + dependentes + pensão. O valor do
          INSS varia conforme o bruto, então a tabela acima mostra apenas a
          parcela de dependentes e pensão. Na prática, a calculadora soma tudo e
          compara com os R$ 607,20 do simplificado.
        </p>

        {/* ---------- O que NÃO entra ---------- */}

        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          O que NÃO entra no cálculo do salário líquido mensal
        </h2>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
          <li>13.º salário</li>
          <li>Férias e adicional de 1/3</li>
          <li>Horas extras</li>
          <li>Participação nos lucros (PLR)</li>
          <li>Adicional de insalubridade, periculosidade ou noturno</li>
          <li>Vale-transporte (6% do bruto descontado em folha)</li>
          <li>Plano de saúde empresarial (coparticipação)</li>
          <li>FGTS (pago pelo empregador, não descontado do salário)</li>
          <li>Empréstimo consignado</li>
          <li>Contribuição sindical</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A simulação foca nos descontos obrigatórios do salário mensal
          recorrente. Para uma visão completa, consulte o holerite e o
          departamento de RH.
        </p>

        {/* ---------- FAQ ---------- */}

        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Perguntas frequentes
        </h2>

        <div className="mt-8 flex flex-col divide-y divide-border">
          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              Salário líquido é o que cai na conta?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Na maioria dos casos, sim. O líquido considera INSS e IRRF. Se
              seu holerite tem outros descontos (VT, plano de saúde,
              consignado), o valor na conta será menor.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              Quanto desconta de um salário de R$ 5.000?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              INSS: R$ 501,51. IRRF: R$ 0,00 (a redução da Lei 15.270/2025
              zera o imposto para brutos até R$ 5.000). Líquido: R$ 4.498,49.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              O cálculo muda se eu tenho dependentes?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Pode mudar. Cada dependente adiciona R$ 189,59 às deduções
              legais do IRRF. Se as deduções legais (INSS + dependentes +
              pensão) ultrapassarem R$ 607,20, o sistema troca o desconto
              simplificado pelas deduções legais, reduzindo o imposto.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              Como calcular de líquido para bruto?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              O processo é inverso e mais complexo. A{" "}
              <Link
                href="/#calculadora"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                calculadora
              </Link>{" "}
              tem um modo específico: informe o líquido desejado e ela estima
              o bruto necessário usando as mesmas regras de INSS e IRRF.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              O FGTS é descontado do meu salário?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Não. O FGTS (8% do bruto) é pago integralmente pelo empregador
              e depositado em conta vinculada. Ele não é descontado do salário
              do trabalhador.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              Salário de R$ 2.000 paga imposto de renda?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Não. Com as regras de 2026, quem ganha até R$ 5.000 bruto tem o
              IRRF zerado pela redução da Lei 15.270/2025. Um salário de
              R$ 2.000 fica bem abaixo desse limite.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              A calculadora vale para empregado doméstico?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Sim. As regras de INSS e IRRF usadas aqui são as mesmas para
              empregado CLT, doméstico e trabalhador avulso no regime mensal.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              Preciso declarar IR mesmo sendo isento na fonte?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Possivelmente. A isenção mensal na fonte não dispensa a
              declaração anual. A obrigatoriedade de declarar depende da renda
              total no ano, patrimônio e outras condições definidas pela
              Receita Federal. Consulte as regras vigentes no ano-calendário.
            </p>
          </details>
        </div>

        {/* ---------- CTA + Related ---------- */}

        <ContentCTA />

        <ContentRelatedLinks
          links={[
            { label: "Tabela INSS 2026", href: "/tabela-inss-2026" },
            { label: "Tabela IRRF 2026", href: "/tabela-irrf-2026" },
          ]}
        />
      </ContentBody>
    </ContentPage>
  );
}
