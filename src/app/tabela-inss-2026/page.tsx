import type { Metadata } from "next";
import Link from "next/link";

import {
  ContentPage,
  ContentHero,
  ContentBody,
  ContentCTA,
  ContentRelatedLinks,
} from "@/components/content-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tabela INSS 2026: Faixas, Aliquotas e Como Calcular o Desconto",
  description:
    "Tabela do INSS 2026 atualizada com as 4 faixas progressivas (7,5% a 14%), teto de R$ 8.475,55 e exemplos de calculo. Veja quanto desconta do seu salario.",
  pathname: "/tabela-inss-2026",
  openGraphType: "article",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Tabela do INSS 2026: Faixas, Aliquotas e Como Calcular",
      description:
        "Tabela do INSS 2026 atualizada com as 4 faixas progressivas, teto e exemplos de calculo.",
      url: "https://calculo-salario-liquido.vercel.app/tabela-inss-2026",
      inLanguage: "pt-BR",
      datePublished: "2026-01-15",
      dateModified: "2026-04-04",
      author: {
        "@type": "Organization",
        name: "Salario Liquido",
        url: "https://calculo-salario-liquido.vercel.app",
      },
      publisher: {
        "@type": "Organization",
        name: "Salario Liquido",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://calculo-salario-liquido.vercel.app/tabela-inss-2026",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O desconto do INSS \u00e9 de 14% do meu sal\u00e1rio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "N\u00e3o. O INSS \u00e9 progressivo \u2014 14% s\u00f3 incide sobre a parcela do sal\u00e1rio acima de R$ 4.354,28. A al\u00edquota efetiva total \u00e9 sempre menor que 14%. Para quem ganha R$ 5.000, a al\u00edquota efetiva \u00e9 de 10,03%.",
          },
        },
        {
          "@type": "Question",
          name: "Quem ganha o sal\u00e1rio m\u00ednimo paga quanto de INSS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Com o m\u00ednimo de R$ 1.621 em 2026, o desconto \u00e9 de R$ 121,58 (7,5% sobre o valor total, j\u00e1 que cabe na primeira faixa).",
          },
        },
        {
          "@type": "Question",
          name: "O INSS desconta do 13\u00ba sal\u00e1rio e das f\u00e9rias?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Tanto o 13\u00ba quanto as f\u00e9rias t\u00eam desconto de INSS, calculado separadamente do sal\u00e1rio mensal.",
          },
        },
        {
          "@type": "Question",
          name: "Quem ganha acima do teto paga mais INSS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "N\u00e3o. O desconto m\u00e1ximo \u00e9 de R$ 988,09, independente de quanto o sal\u00e1rio ultrapasse R$ 8.475,55.",
          },
        },
        {
          "@type": "Question",
          name: "O INSS mudou com a Lei 15.270/2025?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "N\u00e3o. A Lei 15.270/2025 alterou apenas o imposto de renda (IRRF). As al\u00edquotas e faixas do INSS continuam as mesmas, apenas com reajuste nos valores limites.",
          },
        },
        {
          "@type": "Question",
          name: "MEI paga INSS diferente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O MEI recolhe 5% do sal\u00e1rio m\u00ednimo (R$ 81,05 em 2026). A tabela progressiva se aplica apenas a empregados CLT, dom\u00e9sticos e avulsos.",
          },
        },
        {
          "@type": "Question",
          name: "O desconto do INSS \u00e9 devolvido na declara\u00e7\u00e3o de IR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "N\u00e3o \u00e9 devolvido, mas \u00e9 deduzido da base de c\u00e1lculo do imposto de renda. Quanto mais INSS voc\u00ea paga, menor a base para calcular o IRRF.",
          },
        },
        {
          "@type": "Question",
          name: "Aut\u00f4nomos usam a mesma tabela?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contribuintes individuais podem escolher entre 11% (simplificado) ou 20% (normal) sobre o sal\u00e1rio de contribui\u00e7\u00e3o. A tabela progressiva \u00e9 exclusiva para empregados.",
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
        title="Tabela do INSS 2026: Faixas, Al\u00edquotas e Como Calcular"
        description="O INSS \u00e9 o primeiro desconto do sal\u00e1rio bruto de todo trabalhador CLT. Em 2026, a contribui\u00e7\u00e3o segue o modelo progressivo com 4 faixas \u2014 de 7,5% a 14% \u2014 semelhante ao imposto de renda. Entenda como funciona, quanto desconta e como calcular."
      />

      <ContentBody>
        {/* --- Tabela principal do INSS 2026 --- */}
        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Tabela do INSS 2026
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          As al\u00edquotas do INSS em 2026 s\u00e3o aplicadas de forma progressiva sobre
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
                  Al\u00edquota
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-foreground">
                  At\u00e9 R$ 1.621,00
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
          <strong className="text-foreground">Desconto m\u00e1ximo:</strong>{" "}
          R$ 988,09 por m\u00eas (para sal\u00e1rios iguais ou acima do teto de
          R$ 8.475,55).
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Sal\u00e1rio m\u00ednimo 2026:</strong>{" "}
          R$ 1.621,00.
        </p>

        {/* --- Como funciona o calculo progressivo --- */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Como funciona o c\u00e1lculo progressivo do INSS
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O INSS n\u00e3o aplica uma al\u00edquota \u00fanica sobre todo o sal\u00e1rio. Cada faixa
          tem sua pr\u00f3pria al\u00edquota, e o desconto \u00e9 calculado trecho a trecho. Veja
          o exemplo para um sal\u00e1rio bruto de{" "}
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
                  Al\u00edquota
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Desconto
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-foreground">1\u00aa</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 1.621,00
                </td>
                <td className="px-4 py-3 text-right text-foreground">7,5%</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 121,58
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">2\u00aa</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 1.281,84
                </td>
                <td className="px-4 py-3 text-right text-foreground">9%</td>
                <td className="px-4 py-3 text-right text-foreground">
                  R$ 115,37
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground">3\u00aa</td>
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
          <strong className="text-foreground">Al\u00edquota efetiva:</strong> 9,22%
          (R$ 368,60 \u00f7 R$ 4.000,00). Bem abaixo dos 14% da faixa mais alta.
        </p>

        {/* --- Quanto desconta para cada faixa --- */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Quanto desconta de INSS para cada faixa salarial
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Confira o desconto do INSS e a al\u00edquota efetiva para diferentes
          faixas de sal\u00e1rio bruto em 2026:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  Sal\u00e1rio bruto
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Desconto INSS
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Al\u00edquota efetiva
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
          O teto do INSS em 2026 \u00e9 de{" "}
          <strong className="text-foreground">R$ 8.475,55</strong>. Isso
          significa que, independentemente de quanto o sal\u00e1rio bruto ultrapasse
          esse valor, o desconto m\u00e1ximo de INSS ser\u00e1 de{" "}
          <strong className="text-foreground">R$ 988,09</strong> por m\u00eas.
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Quem ganha R$ 10.000, R$ 15.000 ou R$ 50.000 paga exatamente o mesmo
          valor de INSS: R$ 988,09. A contribui\u00e7\u00e3o \u00e9 limitada ao teto para
          todos os empregados CLT, dom\u00e9sticos e trabalhadores avulsos.
        </p>

        {/* --- O que mudou no INSS em 2026 --- */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          O que mudou no INSS em 2026
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          As al\u00edquotas do INSS continuam as mesmas desde 2020 (7,5%, 9%, 12% e
          14%). O que muda a cada ano s\u00e3o os limites de cada faixa, reajustados
          com base no sal\u00e1rio m\u00ednimo e no teto previdenci\u00e1rio. Compare:
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
                <td className="px-4 py-3 text-foreground">Sal\u00e1rio m\u00ednimo</td>
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
                <td className="px-4 py-3 text-foreground">Desconto m\u00e1ximo</td>
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
          INSS para empregado dom\u00e9stico e trabalhador avulso
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Empregados dom\u00e9sticos e trabalhadores avulsos seguem a mesma tabela
          progressiva do INSS aplicada aos empregados CLT. As 4 faixas, as
          al\u00edquotas e o teto s\u00e3o id\u00eanticos.
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A diferen\u00e7a est\u00e1 na responsabilidade do recolhimento: no caso do
          empregado dom\u00e9stico, o empregador \u00e9 respons\u00e1vel por descontar e
          recolher a contribui\u00e7\u00e3o atrav\u00e9s do{" "}
          <strong className="text-foreground">eSocial</strong>. J\u00e1 o
          trabalhador avulso tem a contribui\u00e7\u00e3o intermediada pelo sindicato ou
          \u00f3rg\u00e3o gestor de m\u00e3o de obra (OGMO).
        </p>

        {/* --- FAQ --- */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Perguntas frequentes sobre o INSS 2026
        </h2>

        <div className="mt-6 flex flex-col divide-y divide-border">
          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O desconto do INSS \u00e9 de 14% do meu sal\u00e1rio?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              N\u00e3o. O INSS \u00e9 progressivo \u2014 14% s\u00f3 incide sobre a parcela do
              sal\u00e1rio acima de R$ 4.354,28. A al\u00edquota efetiva total \u00e9 sempre menor
              que 14%. Para quem ganha R$ 5.000, a al\u00edquota efetiva \u00e9 de 10,03%.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Quem ganha o sal\u00e1rio m\u00ednimo paga quanto de INSS?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Com o m\u00ednimo de R$ 1.621 em 2026, o desconto \u00e9 de R$ 121,58 (7,5%
              sobre o valor total, j\u00e1 que cabe na primeira faixa).
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O INSS desconta do 13\u00ba sal\u00e1rio e das f\u00e9rias?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim. Tanto o 13\u00ba quanto as f\u00e9rias t\u00eam desconto de INSS, calculado
              separadamente do sal\u00e1rio mensal.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Quem ganha acima do teto paga mais INSS?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              N\u00e3o. O desconto m\u00e1ximo \u00e9 de R$ 988,09, independente de quanto o
              sal\u00e1rio ultrapasse R$ 8.475,55.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O INSS mudou com a Lei 15.270/2025?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              N\u00e3o. A Lei 15.270/2025 alterou apenas o imposto de renda (IRRF). As
              al\u00edquotas e faixas do INSS continuam as mesmas, apenas com reajuste
              nos valores limites.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              MEI paga INSS diferente?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim. O MEI recolhe 5% do sal\u00e1rio m\u00ednimo (R$ 81,05 em 2026). A
              tabela progressiva se aplica apenas a empregados CLT, dom\u00e9sticos e
              avulsos.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O desconto do INSS \u00e9 devolvido na declara\u00e7\u00e3o de IR?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              N\u00e3o \u00e9 devolvido, mas \u00e9 deduzido da base de c\u00e1lculo do imposto de
              renda. Quanto mais INSS voc\u00ea paga, menor a base para calcular o
              IRRF.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Aut\u00f4nomos usam a mesma tabela?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Contribuintes individuais podem escolher entre 11% (simplificado)
              ou 20% (normal) sobre o sal\u00e1rio de contribui\u00e7\u00e3o. A tabela
              progressiva \u00e9 exclusiva para empregados.
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
              label: "Como calcular sal\u00e1rio l\u00edquido",
              href: "/como-calcular-salario-liquido",
            },
          ]}
        />
      </ContentBody>
    </ContentPage>
  );
}
