import type { Metadata } from "next";
import Link from "next/link";

import {
  BlogArticleHeader,
  ContentBody,
  ContentCTA,
  ContentHero,
  ContentPage,
  ContentRelatedLinks,
} from "@/components/content-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title:
    "Descontos no Salário CLT 2026: Lista Completa de Obrigatórios e Opcionais",
  description:
    "Todos os descontos que podem aparecer no seu holerite CLT: INSS, IRRF, vale-transporte, pensão, plano de saúde, consignado e mais. Guia atualizado 2026.",
  pathname: "/blog/descontos-salario-clt",
  openGraphType: "article",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Quais São os Descontos no Salário CLT? Lista Completa 2026",
  description:
    "Todos os descontos no holerite CLT: INSS, IRRF, vale-transporte, pensão, plano de saúde, consignado e mais.",
  url: "https://calculo-salario-liquido.vercel.app/blog/descontos-salario-clt",
  inLanguage: "pt-BR",
  datePublished: "2026-04-04",
  dateModified: "2026-04-04",
  author: {
    "@type": "Organization",
    name: "Salário Líquido",
    url: "https://calculo-salario-liquido.vercel.app",
  },
  publisher: {
    "@type": "Organization",
    name: "Salário Líquido",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://calculo-salario-liquido.vercel.app/blog/descontos-salario-clt",
  },
};

export default function DescontosSalarioCltPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <ContentHero
        eyebrow="Holerite CLT"
        title="Quais São os Descontos no Salário CLT? Lista Completa 2026"
        description="O contracheque de quem trabalha com carteira assinada pode ter muitas linhas de desconto. Algumas são obrigatórias por lei, outras dependem de contrato ou decisão judicial. Neste guia, explicamos cada uma delas com as regras atualizadas para 2026."
      />

      <ContentBody>
        <BlogArticleHeader
          breadcrumbLabel="Descontos CLT"
          date="4 de abril de 2026"
          readingTime="8 min de leitura"
        />

        {/* ---------- Descontos obrigatórios ---------- */}

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Descontos obrigatórios
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          São os descontos que toda empresa é obrigada a reter do salário do
          trabalhador CLT. Não há como recusar.
        </p>

        {/* INSS */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          INSS (Instituto Nacional do Seguro Social)
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A contribuição ao INSS é progressiva, com alíquotas de{" "}
          <strong className="text-foreground">7,5% a 14%</strong>. Cada faixa
          de salário tem sua própria alíquota, aplicada apenas sobre o valor
          daquela faixa — e não sobre o salário inteiro.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Faixa
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Alíquota
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">Até R$ 1.621,00</td>
                <td className="px-4 py-3">7,5%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">De R$ 1.621,01 a R$ 2.902,84</td>
                <td className="px-4 py-3">9%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">De R$ 2.902,85 a R$ 4.354,27</td>
                <td className="px-4 py-3">12%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">De R$ 4.354,28 a R$ 8.475,55</td>
                <td className="px-4 py-3">14%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O teto de contribuição em 2026 é de{" "}
          <strong className="text-foreground">R$ 988,09</strong>. Quem ganha
          acima de R$ 8.475,55 paga esse valor fixo. O desconto é progressivo,
          não linear — ou seja, quem ganha R$ 3.000 não paga 9% sobre tudo,
          apenas sobre a parcela que ultrapassa a primeira faixa.
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Veja a tabela completa em{" "}
          <Link
            href="/tabela-inss-2026"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Tabela INSS 2026
          </Link>
          .
        </p>

        {/* IRRF */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          IRRF (Imposto de Renda Retido na Fonte)
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O IRRF incide sobre a renda tributável após deduzir o INSS e as
          deduções legais (ou o desconto simplificado). As alíquotas variam de{" "}
          <strong className="text-foreground">7,5% a 27,5%</strong>, conforme
          a base de cálculo.
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Com a <strong className="text-foreground">Lei 15.270/2025</strong>,
          quem ganha até R$ 5.000 bruto por mês tem o IRRF zerado. Para quem
          ganha entre R$ 5.000 e R$ 7.350, a redução é parcial. Acima de
          R$ 7.350, não há redução.
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Veja a tabela completa em{" "}
          <Link
            href="/tabela-irrf-2026"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Tabela IRRF 2026
          </Link>
          .
        </p>

        {/* ---------- Descontos condicionais ---------- */}

        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Descontos condicionais
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          São descontos que não se aplicam a todos os trabalhadores. Dependem de
          decisão judicial, opção do empregado ou situação contratual.
        </p>

        {/* Pensão */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Pensão alimentícia judicial
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Quando há decisão judicial, o empregador é obrigado a reter o valor
          diretamente na folha de pagamento. A pensão pode ser um valor fixo ou
          um percentual do salário. Ela é subtraída{" "}
          <strong className="text-foreground">antes</strong> do cálculo do
          IRRF, o que reduz a base tributável e, consequentemente, o imposto de
          renda.
        </p>

        {/* Vale-transporte */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Vale-transporte (VT)
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O empregador pode descontar até{" "}
          <strong className="text-foreground">6% do salário base</strong> do
          empregado para custear o vale-transporte. Se o custo real do
          transporte for menor que 6%, desconta-se apenas o custo real.
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O empregado pode recusar o VT por escrito — por exemplo, se vai de
          carro ou bicicleta. Nesse caso, não há desconto.
        </p>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Exemplo:</strong> salário de
          R$ 3.000 = desconto máximo de R$ 180 (6% de R$ 3.000).
        </p>

        {/* ---------- Descontos opcionais ou negociados ---------- */}

        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Descontos opcionais ou negociados
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Estes descontos dependem de adesão do empregado, acordo coletivo ou
          contrato de trabalho. Eles aparecem no holerite, mas não são
          obrigatórios por lei.
        </p>

        {/* Plano de saúde */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Plano de saúde
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Muitas empresas oferecem plano de saúde com coparticipação: a empresa
          paga a maior parte e o empregado paga uma parcela descontada em folha.
          Não existe limite legal para o valor da coparticipação, mas o desconto
          deve estar previsto no contrato ou acordo coletivo.
        </p>

        {/* VA/VR */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Vale-alimentação e vale-refeição
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Desde a reforma trabalhista de 2017, a prática mais comum é que a
          empresa pague o benefício integralmente, sem descontar nada do
          empregado. Quando há desconto, o percentual é definido em acordo ou
          convenção coletiva.
        </p>

        {/* Contribuição sindical */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Contribuição sindical
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Desde novembro de 2017, a contribuição sindical é{" "}
          <strong className="text-foreground">opcional</strong>. Só pode ser
          descontada com autorização expressa e individual do trabalhador. O
          valor, quando cobrado, equivale a 1 dia de salário por ano,
          descontado normalmente em março.
        </p>

        {/* Consignado */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Empréstimo consignado
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O desconto das parcelas do empréstimo consignado é feito diretamente
          na folha. O limite total é de{" "}
          <strong className="text-foreground">
            35% do salário líquido
          </strong>{" "}
          — sendo 30% para empréstimos e 5% para cartão de crédito consignado.
        </p>

        {/* Adiantamento */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Adiantamento salarial (vale)
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Algumas empresas oferecem adiantamento de 40% a 50% do salário na
          primeira quinzena do mês. Esse valor é descontado no pagamento final.
          Não é um desconto extra — é o mesmo salário dividido em duas parcelas.
        </p>

        {/* ---------- Descontos que NÃO saem do salário ---------- */}

        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Desconto que NÃO sai do seu salário
        </h2>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Alguns encargos são pagos exclusivamente pelo empregador. Eles não
          aparecem como desconto no holerite do trabalhador.
        </p>

        {/* FGTS */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          FGTS (Fundo de Garantia)
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O FGTS corresponde a{" "}
          <strong className="text-foreground">8% do salário bruto</strong>,
          depositado pelo empregador em conta vinculada na Caixa Econômica
          Federal. Esse valor não é descontado do salário — é uma obrigação
          patronal. O trabalhador pode sacá-lo em situações previstas em lei
          (demissão sem justa causa, aposentadoria, compra da casa própria
          etc.).
        </p>

        {/* Contribuição patronal */}

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Contribuição patronal ao INSS
        </h3>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Além da contribuição do empregado (que é descontada em folha), o
          empregador paga{" "}
          <strong className="text-foreground">20% sobre a folha</strong> como
          contribuição patronal ao INSS. Esse encargo não aparece no holerite e
          não reduz o salário do trabalhador.
        </p>

        {/* ---------- Como verificar ---------- */}

        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Como verificar se os descontos estão corretos
        </h2>

        <ol className="mt-4 list-decimal space-y-3 pl-5 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">
              Confira o salário bruto
            </strong>{" "}
            — verifique se o valor registrado no holerite confere com o
            contrato de trabalho.
          </li>
          <li>
            <strong className="text-foreground">
              Calcule o INSS faixa a faixa
            </strong>{" "}
            — use a tabela progressiva e some os valores de cada faixa.
          </li>
          <li>
            <strong className="text-foreground">
              Verifique a base do IRRF
            </strong>{" "}
            — veja se o desconto simplificado ou as deduções legais foram
            aplicados corretamente.
          </li>
          <li>
            <strong className="text-foreground">
              Confira os descontos opcionais
            </strong>{" "}
            — vale-transporte (máximo 6%), plano de saúde, consignado e outros
            devem estar de acordo com o contrato.
          </li>
          <li>
            <strong className="text-foreground">
              Compare com a calculadora
            </strong>{" "}
            — use a{" "}
            <Link
              href="/#calculadora"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              calculadora de salário líquido
            </Link>{" "}
            para simular o valor esperado de INSS e IRRF.
          </li>
        </ol>

        {/* ---------- FAQ ---------- */}

        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Perguntas frequentes
        </h2>

        <div className="mt-8 flex flex-col divide-y divide-border">
          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-medium leading-7 text-foreground">
              Quantos descontos obrigatórios existem no salário CLT?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Dois: <strong className="text-foreground">INSS</strong> e{" "}
              <strong className="text-foreground">IRRF</strong>. São os únicos
              descontos que toda empresa é obrigada a reter por lei. Os demais
              dependem de contrato, acordo coletivo ou decisão judicial.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-medium leading-7 text-foreground">
              O desconto total pode passar de 50% do salário?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Os descontos obrigatórios (INSS + IRRF) raramente ultrapassam 25%
              do bruto. No entanto, se somarmos descontos opcionais —
              consignado, plano de saúde, pensão alimentícia — o total pode se
              aproximar de 50%. A CLT não estabelece um limite geral único, mas
              cada tipo de desconto tem suas próprias regras.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-medium leading-7 text-foreground">
              Férias e 13.º têm os mesmos descontos?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              INSS e IRRF incidem sobre férias e 13.º, sim. Porém, o cálculo é
              feito separadamente — o 13.º tem tabela própria de IRRF, e as
              férias incluem o adicional de 1/3 na base de cálculo.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-medium leading-7 text-foreground">
              Horas extras aumentam os descontos?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim. As horas extras são somadas à remuneração bruta do mês. Como
              o INSS e o IRRF são progressivos, um bruto maior pode fazer o
              trabalhador avançar de faixa e pagar proporcionalmente mais.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-medium leading-7 text-foreground">
              Posso recusar o desconto do vale-transporte?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim. O vale-transporte é um benefício que o empregado pode
              recusar formalmente, assinando uma declaração de não utilização.
              Nesse caso, o desconto de até 6% não é aplicado.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-medium leading-7 text-foreground">
              Desconto de plano de saúde tem limite?
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Não há um limite legal fixo para o desconto de coparticipação em
              plano de saúde. O valor depende do contrato entre a empresa e a
              operadora e do acordo coletivo da categoria. Verifique seu
              contrato de trabalho ou a convenção coletiva.
            </p>
          </details>
        </div>

        {/* ---------- CTA + Related ---------- */}

        <ContentCTA />

        <ContentRelatedLinks
          links={[
            { label: "Tabela INSS 2026", href: "/tabela-inss-2026" },
            { label: "Tabela IRRF 2026", href: "/tabela-irrf-2026" },
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
