import type { Metadata } from "next";
import Link from "next/link";

import {
  ContentBody,
  ContentCTA,
  ContentHero,
  ContentPage,
  ContentRelatedLinks,
} from "@/components/content-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tabela IRRF 2026: Alíquotas, Faixas e Isenção Até R$ 5.000",
  description:
    "Tabela do IRRF 2026 com alíquotas, faixas, parcela a deduzir e a nova isenção da Lei 15.270/2025 para quem ganha até R$ 5.000. Exemplos práticos.",
  pathname: "/tabela-irrf-2026",
  openGraphType: "article",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Tabela IRRF 2026: Alíquotas, Faixas e Nova Isenção Até R$ 5.000",
      description:
        "Tabela do IRRF 2026 com alíquotas, parcela a deduzir e a nova isenção da Lei 15.270/2025.",
      url: "https://calcularsalarioliquido.com.br/tabela-irrf-2026",
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
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quem ganha R$ 5.000 realmente não paga imposto de renda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Na retenção mensal de 2026, sim. A combinação do desconto simplificado com a redução da Lei 15.270/2025 tende a zerar o IRRF para essa faixa. Na declaração anual, o resultado pode ser diferente se houver outras fontes de renda.",
          },
        },
        {
          "@type": "Question",
          name: "A tabela do IRRF mudou em 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. As faixas, alíquotas e parcelas a deduzir continuam as mesmas de 2025. A mudança foi a criação da redução pela Lei 15.270/2025, aplicada depois do cálculo do imposto.",
          },
        },
        {
          "@type": "Question",
          name: "O que é a parcela a deduzir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "É um valor fixo que simplifica o cálculo. Em vez de calcular faixa por faixa, o IRRF permite multiplicar a alíquota pela base total e subtrair a parcela a deduzir. O resultado é o mesmo.",
          },
        },
        {
          "@type": "Question",
          name: "Pensão alimentícia deduz do IRRF?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A pensão judicial é subtraída da base de cálculo antes de aplicar a tabela, reduzindo a base tributável e resultando em menos imposto.",
          },
        },
        {
          "@type": "Question",
          name: "O IRRF retido é devolvido na declaração anual?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pode ser. Se as deduções anuais forem maiores que as consideradas na retenção mensal, você recebe restituição. Se forem menores, pode ter imposto a pagar.",
          },
        },
        {
          "@type": "Question",
          name: "A isenção vale para aposentados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A Lei 15.270/2025 se aplica a todas as rendas sujeitas à tabela progressiva, incluindo aposentadorias e pensões do INSS.",
          },
        },
        {
          "@type": "Question",
          name: "Quem ganha R$ 6.000 paga quanto de IRRF?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende de dependentes e pensão. Sem dependentes, o IRRF fica em torno de R$ 200-300, já com a redução parcial da Lei 15.270/2025.",
          },
        },
        {
          "@type": "Question",
          name: "PJ paga IRRF pela mesma tabela?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. Empresas do Simples Nacional, Lucro Presumido ou Lucro Real têm tributação própria. A tabela do IRRF vale para rendimentos de pessoa física.",
          },
        },
      ],
    },
  ],
};

export default function TabelaIrrfPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <ContentHero
        eyebrow="IRRF 2026"
        title="Tabela IRRF 2026: Alíquotas, Faixas e Nova Isenção Até R$ 5.000"
        description="A grande novidade de 2026 é a Lei 15.270/2025, que introduz uma redução progressiva do imposto de renda para quem ganha até R$ 7.350 brutos por mês — zerando o IRRF para salários de até R$ 5.000. Confira as faixas, alíquotas e parcelas a deduzir vigentes."
      />

      <ContentBody>
        {/* ── Tabela principal do IRRF ── */}
        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Tabela progressiva do IRRF 2026
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          As faixas abaixo são aplicadas sobre a{" "}
          <strong className="text-foreground">base de cálculo mensal</strong>,
          que é o salário bruto menos a contribuição ao INSS e menos as deduções
          legais (ou o desconto simplificado).
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Base de cálculo mensal
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Alíquota
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Parcela a deduzir
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">Até R$ 2.428,80</td>
                <td className="px-4 py-3 text-right">Isento</td>
                <td className="px-4 py-3 text-right">&mdash;</td>
              </tr>
              <tr>
                <td className="px-4 py-3">De R$ 2.428,81 a R$ 2.826,65</td>
                <td className="px-4 py-3 text-right">7,5%</td>
                <td className="px-4 py-3 text-right">R$ 182,16</td>
              </tr>
              <tr>
                <td className="px-4 py-3">De R$ 2.826,66 a R$ 3.751,05</td>
                <td className="px-4 py-3 text-right">15%</td>
                <td className="px-4 py-3 text-right">R$ 394,16</td>
              </tr>
              <tr>
                <td className="px-4 py-3">De R$ 3.751,06 a R$ 4.664,68</td>
                <td className="px-4 py-3 text-right">22,5%</td>
                <td className="px-4 py-3 text-right">R$ 675,49</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Acima de R$ 4.664,68</td>
                <td className="px-4 py-3 text-right">27,5%</td>
                <td className="px-4 py-3 text-right">R$ 908,73</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A base de cálculo <strong className="text-foreground">não</strong> é o
          salário bruto. É o valor que resta após descontar o INSS e as deduções
          permitidas.
        </p>

        {/* ── Deduções ── */}
        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Deduções permitidas na base do IRRF
        </h3>

        <div className="mt-4 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Tipo de dedução
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Valor mensal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">Desconto simplificado</td>
                <td className="px-4 py-3 text-right">R$ 607,20</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Por dependente</td>
                <td className="px-4 py-3 text-right">R$ 189,59</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Pensão alimentícia judicial</td>
                <td className="px-4 py-3 text-right">Valor integral pago</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Nova isenção ── */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Nova isenção de imposto de renda 2026 — Lei 15.270/2025
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A Lei 15.270/2025 criou uma redução que é aplicada{" "}
          <strong className="text-foreground">depois</strong> do cálculo do IRRF
          pela tabela progressiva. O efeito prático depende da faixa salarial:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Salário bruto
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  O que acontece
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">Até R$ 5.000</td>
                <td className="px-4 py-3">IRRF zerado</td>
              </tr>
              <tr>
                <td className="px-4 py-3">R$ 5.000,01 a R$ 7.350</td>
                <td className="px-4 py-3">Redução parcial</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Acima de R$ 7.350</td>
                <td className="px-4 py-3">Sem redução</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Como funciona a redução na prática
        </h3>
        <ol className="mt-4 list-inside list-decimal space-y-3 text-base leading-7 text-muted-foreground">
          <li>
            O IRRF é calculado normalmente pela tabela progressiva, aplicando a
            alíquota e subtraindo a parcela a deduzir.
          </li>
          <li>
            Se o salário bruto for de até R$ 5.000, a redução zera o imposto
            integralmente. Entre R$ 5.000,01 e R$ 7.350, a redução diminui
            proporcionalmente.
          </li>
          <li>
            Acima de R$ 7.350 brutos, nenhuma redução é aplicada e o IRRF segue
            a tabela normalmente.
          </li>
        </ol>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Quem se beneficia
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A redução vale para todas as rendas sujeitas à tabela progressiva
          mensal: trabalhadores CLT, empregados domésticos e trabalhadores
          avulsos. Aposentados e pensionistas do INSS também são contemplados.
        </p>

        {/* ── Como calcular ── */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Como calcular o IRRF sobre o salário
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O cálculo do IRRF na folha de pagamento segue cinco etapas:
        </p>

        <ol className="mt-4 list-inside list-decimal space-y-3 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">
              Calcule a contribuição ao INSS
            </strong>{" "}
            — aplique as alíquotas progressivas do INSS sobre o salário bruto
            para encontrar o desconto previdenciário.
          </li>
          <li>
            <strong className="text-foreground">Subtraia o INSS do bruto</strong>{" "}
            — o resultado é a renda tributável antes das deduções do IR.
          </li>
          <li>
            <strong className="text-foreground">Aplique as deduções</strong> —
            escolha entre o desconto simplificado (R$ 607,20) ou a soma das
            deduções legais (dependentes + pensão judicial). Use a opção que
            resultar em menor imposto.
          </li>
          <li>
            <strong className="text-foreground">
              Aplique a tabela progressiva
            </strong>{" "}
            — multiplique a base de cálculo pela alíquota correspondente e
            subtraia a parcela a deduzir.
          </li>
          <li>
            <strong className="text-foreground">
              Aplique a redução da Lei 15.270/2025
            </strong>{" "}
            — se o salário bruto for de até R$ 7.350, reduza o imposto conforme
            as regras da lei. Para salários de até R$ 5.000, o IRRF é zerado.
          </li>
        </ol>

        {/* ── Desconto simplificado vs deduções legais ── */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Desconto simplificado vs deduções legais
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O contribuinte não precisa escolher manualmente: a fonte pagadora
          aplica a opção mais vantajosa. Na prática:
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Quando o desconto simplificado é melhor
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Para quem não tem dependentes nem pensão alimentícia, o desconto
          simplificado de R$ 607,20 costuma ser a melhor opção, pois supera o
          valor de zero deduções legais.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Quando as deduções legais são melhores
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Se a soma dos valores por dependente (R$ 189,59 cada) mais a pensão
          alimentícia judicial ultrapassar R$ 607,20, as deduções legais
          resultam em uma base menor e, portanto, menos imposto. Exemplo: com 4
          dependentes, as deduções legais somam R$ 758,36, superando o
          simplificado.
        </p>

        {/* ── Exemplo prático ── */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Exemplo prático: salário de R$ 7.000 sem dependentes
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Veja o passo a passo para um salário bruto de R$ 7.000,00 em 2026, sem
          dependentes e sem pensão alimentícia:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Etapa
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">Salário bruto</td>
                <td className="px-4 py-3 text-right">R$ 7.000,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">INSS</td>
                <td className="px-4 py-3 text-right">- R$ 781,51</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Dedução aplicada (deduções legais)</td>
                <td className="px-4 py-3 text-right">R$ 781,51</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Base IRRF</td>
                <td className="px-4 py-3 text-right">R$ 6.218,49</td>
              </tr>
              <tr>
                <td className="px-4 py-3">IRRF tabela (27,5%)</td>
                <td className="px-4 py-3 text-right">R$ 801,35</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Redução Lei 15.270/2025</td>
                <td className="px-4 py-3 text-right">- R$ 46,60</td>
              </tr>
              <tr>
                <td className="px-4 py-3">IRRF final</td>
                <td className="px-4 py-3 text-right">R$ 754,75</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Salário líquido</td>
                <td className="px-4 py-3 text-right font-medium">
                  R$ 5.463,74
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Neste exemplo, as deduções legais (INSS de R$ 781,51) superam o
          desconto simplificado (R$ 607,20), então o sistema aplica as deduções
          legais para reduzir a base tributável. Para conferir com outros
          valores, use a{" "}
          <Link
            href="/#calculadora"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            calculadora de salário líquido
          </Link>
          .
        </p>

        {/* ── FAQ ── */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Perguntas frequentes sobre o IRRF 2026
        </h2>

        <div className="mt-6 flex flex-col divide-y divide-border">
          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              Quem ganha R$ 5.000 realmente não paga imposto de renda?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Na retenção mensal de 2026, sim. A combinação do desconto
              simplificado com a redução da Lei 15.270/2025 tende a zerar o IRRF
              para essa faixa. Na declaração anual, o resultado pode ser
              diferente se houver outras fontes de renda.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              A tabela do IRRF mudou em 2026?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Não. As faixas, alíquotas e parcelas a deduzir continuam as mesmas
              de 2025. A mudança foi a criação da redução pela Lei 15.270/2025,
              aplicada depois do cálculo do imposto.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              O que é a parcela a deduzir?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              É um valor fixo que simplifica o cálculo. Em vez de calcular faixa
              por faixa, o IRRF permite multiplicar a alíquota pela base total e
              subtrair a parcela a deduzir. O resultado é o mesmo.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              Pensão alimentícia deduz do IRRF?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Sim. A pensão judicial é subtraída da base de cálculo antes de
              aplicar a tabela, reduzindo a base tributável e resultando em menos
              imposto.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              O IRRF retido é devolvido na declaração anual?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Pode ser. Se as deduções anuais forem maiores que as consideradas
              na retenção mensal, você recebe restituição. Se forem menores, pode
              ter imposto a pagar.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              A isenção vale para aposentados?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Sim. A Lei 15.270/2025 se aplica a todas as rendas sujeitas à
              tabela progressiva, incluindo aposentadorias e pensões do INSS.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              Quem ganha R$ 6.000 paga quanto de IRRF?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Depende de dependentes e pensão. Sem dependentes, o IRRF fica em
              torno de R$ 200-300, já com a redução parcial da Lei 15.270/2025.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-foreground">
              PJ paga IRRF pela mesma tabela?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Não. Empresas do Simples Nacional, Lucro Presumido ou Lucro Real
              têm tributação própria. A tabela do IRRF vale para rendimentos de
              pessoa física.
            </p>
          </details>
        </div>

        {/* ── CTA ── */}
        <ContentCTA />

        {/* ── Links relacionados ── */}
        <ContentRelatedLinks
          links={[
            {
              label: "Tabela INSS 2026",
              href: "/tabela-inss-2026",
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
