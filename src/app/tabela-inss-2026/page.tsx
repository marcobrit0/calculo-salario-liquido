import type { Metadata } from "next";

import {
  ContentPage,
  ContentHero,
  ContentBody,
  ContentCTA,
  ContentRelatedLinks,
} from "@/components/content-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tabela INSS 2026: Faixas, Alíquotas e Como Calcular o Desconto",
  description:
    "Tabela do INSS 2026 atualizada com as 4 faixas progressivas (7,5% a 14%), teto de R$ 8.475,55 e exemplos de cálculo. Veja quanto desconta do seu salário.",
  pathname: "/tabela-inss-2026",
  openGraphType: "article",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Tabela do INSS 2026: Faixas, Alíquotas e Como Calcular",
      description:
        "Tabela do INSS 2026 atualizada com as 4 faixas progressivas, teto e exemplos de cálculo.",
      url: "https://calcularsalarioliquido.com.br/tabela-inss-2026",
      inLanguage: "pt-BR",
      datePublished: "2026-01-15",
      dateModified: "2026-04-04",
      author: {
        "@type": "Organization",
        name: "Salário Líquido",
        url: "https://calcularsalarioliquido.com.br",
      },
      publisher: {
        "@type": "Organization",
        name: "Salário Líquido",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://calcularsalarioliquido.com.br/tabela-inss-2026",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O desconto do INSS é de 14% do meu salário?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. O INSS é progressivo — 14% só incide sobre a parcela do salário acima de R$ 4.354,28. A alíquota efetiva total é sempre menor que 14%. Para quem ganha R$ 5.000, a alíquota efetiva é de 10,03%.",
          },
        },
        {
          "@type": "Question",
          name: "Quem ganha o salário mínimo paga quanto de INSS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Com o mínimo de R$ 1.621 em 2026, o desconto é de R$ 121,58 (7,5% sobre o valor total, já que cabe na primeira faixa).",
          },
        },
        {
          "@type": "Question",
          name: "O INSS desconta do 13º salário e das férias?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Tanto o 13º quanto as férias têm desconto de INSS, calculado separadamente do salário mensal.",
          },
        },
        {
          "@type": "Question",
          name: "Quem ganha acima do teto paga mais INSS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. O desconto máximo é de R$ 988,09, independente de quanto o salário ultrapasse R$ 8.475,55.",
          },
        },
        {
          "@type": "Question",
          name: "O INSS mudou com a Lei 15.270/2025?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. A Lei 15.270/2025 alterou apenas o imposto de renda (IRRF). As alíquotas e faixas do INSS continuam as mesmas, apenas com reajuste nos valores limites.",
          },
        },
        {
          "@type": "Question",
          name: "MEI paga INSS diferente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O MEI recolhe 5% do salário mínimo (R$ 81,05 em 2026). A tabela progressiva se aplica apenas a empregados CLT, domésticos e avulsos.",
          },
        },
        {
          "@type": "Question",
          name: "O desconto do INSS é devolvido na declaração de IR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não é devolvido, mas é deduzido da base de cálculo do imposto de renda. Quanto mais INSS você paga, menor a base para calcular o IRRF.",
          },
        },
        {
          "@type": "Question",
          name: "Autônomos usam a mesma tabela?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contribuintes individuais podem escolher entre 11% (simplificado) ou 20% (normal) sobre o salário de contribuição. A tabela progressiva é exclusiva para empregados.",
          },
        },
      ],
    },
  ],
};

export default function TabelaInss2026Page() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <ContentHero
        eyebrow="INSS 2026"
        title="Tabela do INSS 2026: Faixas, Alíquotas e Como Calcular"
        description="O INSS é o primeiro desconto do salário bruto de todo trabalhador CLT. Em 2026, a contribuição segue o modelo progressivo com 4 faixas — de 7,5% a 14% — semelhante ao imposto de renda. Entenda como funciona, quanto desconta e como calcular."
      />

      <ContentBody>
        {/* --- Tabela principal do INSS 2026 --- */}
        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Tabela do INSS 2026
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          As alíquotas do INSS em 2026 são aplicadas de forma progressiva sobre
          cada faixa salarial. Veja os valores atualizados:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  Faixa salarial
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Alíquota
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-foreground">
                  Até R$ 1.621,00
                </td>
                <td className="px-4 py-3 text-right text-foreground">7,5%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">
                  De R$ 1.621,01 a R$ 2.902,84
                </td>
                <td className="px-4 py-3 text-right text-foreground">9%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">
                  De R$ 2.902,85 a R$ 4.354,27
                </td>
                <td className="px-4 py-3 text-right text-foreground">12%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">
                  De R$ 4.354,28 a R$ 8.475,55
                </td>
                <td className="px-4 py-3 text-right text-foreground">14%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Desconto máximo:</strong>{" "}
          R$ 988,09 por mês (para salários iguais ou acima do teto de
          R$ 8.475,55).
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Salário mínimo 2026:</strong>{" "}
          R$ 1.621,00.
        </p>

        {/* --- Como funciona o calculo progressivo --- */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Como funciona o cálculo progressivo do INSS
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O INSS não aplica uma alíquota única sobre todo o salário. Cada faixa
          tem sua própria alíquota, e o desconto é calculado trecho a trecho. Veja
          o exemplo para um salário bruto de{" "}
          <strong className="text-foreground">R$ 4.000,00</strong>:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  Faixa
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Trecho
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Alíquota
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Desconto
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-foreground">1ª</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 1.621,00
                </td>
                <td className="px-4 py-3 text-right text-foreground">7,5%</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 121,58
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">2ª</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 1.281,84
                </td>
                <td className="px-4 py-3 text-right text-foreground">9%</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 115,37
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">3ª</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 1.097,16
                </td>
                <td className="px-4 py-3 text-right text-foreground">12%</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 131,66
                </td>
              </tr>
              <tr className="bg-muted/50 font-medium">
                <td className="px-4 py-3 text-foreground">Total</td>
                <td className="px-4 py-3 text-right text-foreground" />
                <td className="px-4 py-3 text-right text-foreground" />
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 368,60
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Alíquota efetiva:</strong> 9,22%
          (R$ 368,60 ÷ R$ 4.000,00). Bem abaixo dos 14% da faixa mais alta.
        </p>

        {/* --- Quanto desconta para cada faixa --- */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Quanto desconta de INSS para cada faixa salarial
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Confira o desconto do INSS e a alíquota efetiva para diferentes
          faixas de salário bruto em 2026:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  Salário bruto
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Desconto INSS
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Alíquota efetiva
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-foreground">R$ 1.500</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 112,50
                </td>
                <td className="px-4 py-3 text-right text-foreground">7,50%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">R$ 3.000</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 248,60
                </td>
                <td className="px-4 py-3 text-right text-foreground">8,29%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">R$ 5.000</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 501,51
                </td>
                <td className="px-4 py-3 text-right text-foreground">
                  10,03%
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">R$ 8.000</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 921,51
                </td>
                <td className="px-4 py-3 text-right text-foreground">
                  11,52%
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">
                  R$ 8.475,55 (teto)
                </td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 988,09
                </td>
                <td className="px-4 py-3 text-right text-foreground">
                  11,66%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* --- Teto do INSS 2026 --- */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Teto do INSS 2026
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O teto do INSS em 2026 é de{" "}
          <strong className="text-foreground">R$ 8.475,55</strong>. Isso
          significa que, independentemente de quanto o salário bruto ultrapasse
          esse valor, o desconto máximo de INSS será de{" "}
          <strong className="text-foreground">R$ 988,09</strong> por mês.
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Quem ganha R$ 10.000, R$ 15.000 ou R$ 50.000 paga exatamente o mesmo
          valor de INSS: R$ 988,09. A contribuição é limitada ao teto para
          todos os empregados CLT, domésticos e trabalhadores avulsos.
        </p>

        {/* --- O que mudou no INSS em 2026 --- */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          O que mudou no INSS em 2026
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          As alíquotas do INSS continuam as mesmas desde 2020 (7,5%, 9%, 12% e
          14%). O que muda a cada ano são os limites de cada faixa, reajustados
          com base no salário mínimo e no teto previdenciário. Compare:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground" />
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  2025
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  2026
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-foreground">Salário mínimo</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 1.518
                </td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 1.621
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">Teto INSS</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 8.157,41
                </td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 8.475,55
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">Desconto máximo</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 951,63
                </td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 988,09
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">Limite faixa 2</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 2.793,88
                </td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 2.902,84
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">Limite faixa 3</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 4.190,83
                </td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 4.354,27
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* --- Empregado domestico e trabalhador avulso --- */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          INSS para empregado doméstico e trabalhador avulso
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Empregados domésticos e trabalhadores avulsos seguem a mesma tabela
          progressiva do INSS aplicada aos empregados CLT. As 4 faixas, as
          alíquotas e o teto são idênticos.
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A diferença está na responsabilidade do recolhimento: no caso do
          empregado doméstico, o empregador é responsável por descontar e
          recolher a contribuição através do{" "}
          <strong className="text-foreground">eSocial</strong>. Já o
          trabalhador avulso tem a contribuição intermediada pelo sindicato ou
          órgão gestor de mão de obra (OGMO).
        </p>

        {/* --- FAQ --- */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Perguntas frequentes sobre o INSS 2026
        </h2>

        <div className="mt-6 flex flex-col divide-y divide-border">
          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O desconto do INSS é de 14% do meu salário?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Não. O INSS é progressivo — 14% só incide sobre a parcela do
              salário acima de R$ 4.354,28. A alíquota efetiva total é sempre menor
              que 14%. Para quem ganha R$ 5.000, a alíquota efetiva é de 10,03%.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Quem ganha o salário mínimo paga quanto de INSS?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Com o mínimo de R$ 1.621 em 2026, o desconto é de R$ 121,58 (7,5%
              sobre o valor total, já que cabe na primeira faixa).
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O INSS desconta do 13º salário e das férias?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim. Tanto o 13º quanto as férias têm desconto de INSS, calculado
              separadamente do salário mensal.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Quem ganha acima do teto paga mais INSS?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Não. O desconto máximo é de R$ 988,09, independente de quanto o
              salário ultrapasse R$ 8.475,55.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O INSS mudou com a Lei 15.270/2025?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Não. A Lei 15.270/2025 alterou apenas o imposto de renda (IRRF). As
              alíquotas e faixas do INSS continuam as mesmas, apenas com reajuste
              nos valores limites.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              MEI paga INSS diferente?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim. O MEI recolhe 5% do salário mínimo (R$ 81,05 em 2026). A
              tabela progressiva se aplica apenas a empregados CLT, domésticos e
              avulsos.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O desconto do INSS é devolvido na declaração de IR?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Não é devolvido, mas é deduzido da base de cálculo do imposto de
              renda. Quanto mais INSS você paga, menor a base para calcular o
              IRRF.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Autônomos usam a mesma tabela?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Contribuintes individuais podem escolher entre 11% (simplificado)
              ou 20% (normal) sobre o salário de contribuição. A tabela
              progressiva é exclusiva para empregados.
            </p>
          </details>
        </div>

        {/* --- CTA --- */}
        <ContentCTA />

        {/* --- Related links --- */}
        <ContentRelatedLinks
          links={[
            {
              label: "Tabela IRRF 2026",
              href: "/tabela-irrf-2026",
            },
            {
              label: "Como calcular salário líquido",
              href: "/como-calcular-salario-liquido",
            },
          ]}
        />
      </ContentBody>
    </ContentPage>
  );
}
