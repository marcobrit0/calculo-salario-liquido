import type { Metadata } from "next";

import { createAbsoluteUrl, createPageMetadata } from "@/lib/seo";
import {
  BlogArticleHeader,
  ContentPage,
  ContentHero,
  ContentBody,
  ContentCTA,
  ContentRelatedLinks,
} from "@/components/content-page";

export const metadata: Metadata = createPageMetadata({
  title:
    "Como calcular o décimo terceiro salário: 1ª e 2ª parcela, INSS e IRRF em 2026",
  description:
    "Como calcular o décimo terceiro salário: prazos da 1ª e 2ª parcela, cálculo proporcional e exemplo completo com R$ 3.000, já com INSS e IRRF de 2026.",
  pathname: "/blog/como-calcular-decimo-terceiro",
  openGraphType: "article",
});

const pageUrl = createAbsoluteUrl("/blog/como-calcular-decimo-terceiro");
const homeUrl = createAbsoluteUrl("/");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Como calcular o décimo terceiro salário: 1ª e 2ª parcela, INSS e IRRF em 2026",
  description:
    "Como calcular o décimo terceiro salário: prazos, cálculo proporcional, INSS e IRRF de 2026 e exemplo completo com salário de R$ 3.000.",
  url: pageUrl,
  inLanguage: "pt-BR",
  datePublished: "2026-10-21",
  dateModified: "2026-10-21",
  author: {
    "@type": "Organization",
    name: "Salário Líquido",
    url: homeUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Salário Líquido",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
};

export default function ComoCalcularDecimoTerceiro() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <ContentHero
        eyebrow="Décimo terceiro salário"
        title="Como calcular o décimo terceiro salário: 1ª e 2ª parcela, INSS e IRRF em 2026"
        description="Quem tem direito, os prazos de pagamento, o cálculo proporcional e um exemplo completo com salário de R$ 3.000, já com os descontos de INSS e IRRF de 2026."
      />

      <ContentBody>
        <BlogArticleHeader
          breadcrumbLabel="Décimo terceiro"
          date="21 de outubro de 2026"
          readingTime="7 min de leitura"
        />

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          O que é o décimo terceiro salário
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O décimo terceiro salário é uma gratificação anual do trabalhador
          com carteira assinada. Ele corresponde a{" "}
          <strong className="text-foreground">
            1/12 da remuneração por mês trabalhado no ano
          </strong>
          : quem trabalhou o ano inteiro recebe o equivalente a um salário
          mensal completo, dividido em duas parcelas.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A dúvida mais comum não é o valor bruto, e sim o valor líquido. A
          1ª parcela vem sem descontos de INSS e IRRF. Já na 2ª parcela os
          descontos incidem sobre o valor total do décimo terceiro, e é aí
          que o valor que cai na conta fica menor do que muita gente espera.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Quem tem direito ao décimo terceiro?
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Tem direito, em regra:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">Trabalhador CLT</strong>{" "}
            (urbano, rural e doméstico), pelo período trabalhado no ano.
          </li>
          <li>
            <strong className="text-foreground">Trabalhador avulso</strong>,
            intermediado pelo sindicato ou pelo órgão gestor de mão de obra.
          </li>
          <li>
            <strong className="text-foreground">
              Aposentado e pensionista do INSS
            </strong>
            , pelo benefício previdenciário, com calendário próprio do
            INSS, diferente do calendário CLT explicado neste guia.
          </li>
        </ul>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Quem presta serviço como PJ ou autônomo sem vínculo CLT só recebe
          13º se isso estiver previsto em contrato.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Regra dos 15 dias:</strong>{" "}
          cada mês em que o trabalhador trabalhou 15 dias ou mais conta
          como mês completo para o cálculo do 13º. O mês com menos de 15
          dias trabalhados não conta. Faltas injustificadas podem reduzir a
          contagem do mês, porque diminuem os dias efetivamente
          trabalhados.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Prazos: quando o décimo terceiro é pago?
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">1ª parcela:</strong> paga
            entre fevereiro e novembro, até{" "}
            <strong className="text-foreground">30 de novembro</strong>. O
            trabalhador pode pedir para recebê-la junto com as férias,
            desde que faça o pedido em janeiro.
          </li>
          <li>
            <strong className="text-foreground">2ª parcela:</strong> até{" "}
            <strong className="text-foreground">20 de dezembro</strong>.
          </li>
        </ul>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Se a data cair em domingo ou feriado, o pagamento deve ser
          antecipado para o dia útil anterior. Em 2026, 30 de novembro cai
          numa segunda-feira, mas{" "}
          <strong className="text-foreground">
            20 de dezembro cai num domingo
          </strong>
          , por isso a 2ª parcela deve ser paga até sexta-feira, 18 de
          dezembro de 2026.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Confira o holerite das duas parcelas separadamente: os descontos
          só aparecem na segunda.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Como é calculado: a regra do proporcional
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A fórmula base é simples:
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">
            13º bruto = (salário bruto ÷ 12) × meses trabalhados no ano
          </strong>
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Meses trabalhados
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  13º bruto (salário de R$ 3.000)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">12 meses</td>
                <td className="px-4 py-3 text-right">R$ 3.000,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">6 meses</td>
                <td className="px-4 py-3 text-right">R$ 1.500,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">4 meses</td>
                <td className="px-4 py-3 text-right">R$ 1.000,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Quem recebe salário variável (comissões, horas extras habituais e
          adicionais) não usa só o salário fixo do último mês: essas verbas
          entram no cálculo pela média do período trabalhado no ano. A 2ª
          parcela usa a média de janeiro a novembro e, em janeiro, há um
          recálculo incluindo as variáveis de dezembro, pago até 10 de
          janeiro.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          1ª parcela: 50% sem descontos
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A 1ª parcela corresponde a 50% do valor a que o trabalhador tem
          direito até aquele momento — em regra, metade do salário recebido
          no mês anterior ao pagamento:
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">
            1ª parcela = 13º bruto × 50%
          </strong>
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Sobre a 1ª parcela{" "}
          <strong className="text-foreground">
            não incidem INSS nem IRRF
          </strong>{" "}
          no momento do pagamento. O FGTS é recolhido pelo empregador, mas
          não é descontado do trabalhador.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          No exemplo deste guia (salário de R$ 3.000, ano completo): 13º
          bruto de R$ 3.000,00 e{" "}
          <strong className="text-foreground">
            1ª parcela de R$ 1.500,00, sem descontos
          </strong>
          .
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          2ª parcela: INSS e IRRF sobre o total
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Na 2ª parcela, INSS e IRRF são calculados sobre o{" "}
          <strong className="text-foreground">
            valor total do décimo terceiro
          </strong>{" "}
          (e não só sobre a segunda metade) e descontados da 2ª parcela,
          junto com a antecipação já paga:
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">
            2ª parcela líquida = 13º bruto − 1ª parcela − INSS do 13º −
            IRRF do 13º
          </strong>
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O IRRF do 13º tem{" "}
          <strong className="text-foreground">
            tributação exclusiva na fonte
          </strong>
          : ele é calculado separadamente, não se soma ao salário de
          dezembro e não pode ser compensado na declaração anual.
        </p>

        <h3 className="font-display text-xl tracking-[-0.02em] text-foreground mt-10">
          Passo 1 — INSS sobre o 13º em 2026
        </h3>
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Faixa salarial
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Alíquota
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">Até R$ 1.621,00</td>
                <td className="px-4 py-3 text-right">7,5%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">De R$ 1.621,01 a R$ 2.902,84</td>
                <td className="px-4 py-3 text-right">9%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">De R$ 2.902,85 a R$ 4.354,27</td>
                <td className="px-4 py-3 text-right">12%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  De R$ 4.354,28 a R$ 8.475,55 (teto)
                </td>
                <td className="px-4 py-3 text-right">14%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O teto do INSS em 2026 é R$ 8.475,55, com desconto máximo de
          R$ 988,09. Para um 13º de R$ 3.000,00, o cálculo trecho a trecho
          é:
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Faixa
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Trecho tributado
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
                <td className="px-4 py-3">1ª</td>
                <td className="px-4 py-3 text-right">R$ 1.621,00</td>
                <td className="px-4 py-3 text-right">7,5%</td>
                <td className="px-4 py-3 text-right">R$ 121,58</td>
              </tr>
              <tr>
                <td className="px-4 py-3">2ª</td>
                <td className="px-4 py-3 text-right">R$ 1.281,84</td>
                <td className="px-4 py-3 text-right">9%</td>
                <td className="px-4 py-3 text-right">R$ 115,37</td>
              </tr>
              <tr>
                <td className="px-4 py-3">3ª</td>
                <td className="px-4 py-3 text-right">R$ 97,16</td>
                <td className="px-4 py-3 text-right">12%</td>
                <td className="px-4 py-3 text-right">R$ 11,66</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <strong className="text-foreground">Total</strong>
                </td>
                <td className="px-4 py-3 text-right"></td>
                <td className="px-4 py-3 text-right"></td>
                <td className="px-4 py-3 text-right">
                  <strong className="text-foreground">R$ 248,60</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Valores por faixa arredondados; o total é calculado sobre os
          valores exatos.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">
            INSS do 13º no exemplo: R$ 248,60
          </strong>{" "}
          (alíquota efetiva de 8,29%).
        </p>

        <h3 className="font-display text-xl tracking-[-0.02em] text-foreground mt-10">
          Passo 2 — IRRF sobre o 13º em 2026
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A base do IRRF do 13º usa a dedução mais vantajosa para o
          trabalhador: as deduções legais (INSS, dependentes e pensão) ou o{" "}
          <strong className="text-foreground">
            desconto simplificado de R$ 607,20
          </strong>
          , que também se aplica ao cálculo exclusivo do décimo terceiro
          (Instrução Normativa RFB nº 1.500/2014, art. 13, § 8º). A fonte
          pagadora deve usar o simplificado quando ele for mais benéfico.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          No exemplo de R$ 3.000, sem dependentes e sem pensão:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">
              Pelo desconto simplificado:
            </strong>{" "}
            base = R$ 3.000,00 − R$ 607,20 = R$ 2.392,80, abaixo do limite
            de isenção de R$ 2.428,80.{" "}
            <strong className="text-foreground">IRRF = R$ 0,00.</strong>
          </li>
          <li>
            <strong className="text-foreground">
              Pelas deduções legais:
            </strong>{" "}
            base = R$ 3.000,00 − R$ 248,60 = R$ 2.751,40, na faixa de 7,5%.
            O imposto pela tabela seria R$ 24,20 (R$ 2.751,40 × 7,5% −
            R$ 182,16), mas a{" "}
            <strong className="text-foreground">
              redução da Lei 15.270/2025 também se aplica ao décimo
              terceiro
            </strong>{" "}
            (Lei nº 9.250/1995, art. 3º-A, § 3º) e, para um 13º de até
            R$ 5.000, zera o imposto devido.{" "}
            <strong className="text-foreground">
              IRRF final = R$ 0,00 também por esta via.
            </strong>
          </li>
        </ul>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Ou seja: em 2026, as duas vias chegam ao mesmo resultado neste
          exemplo.{" "}
          <strong className="text-foreground">
            IRRF do 13º no exemplo: R$ 0,00.
          </strong>
        </p>

        <h3 className="font-display text-xl tracking-[-0.02em] text-foreground mt-10">
          Passo 3 — Valor final da 2ª parcela no exemplo
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Premissas: salário bruto fixo de R$ 3.000,00, ano completo (12
          meses), sem dependentes, sem pensão alimentícia e sem verbas
          variáveis.
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
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
                <td className="px-4 py-3">13º bruto</td>
                <td className="px-4 py-3 text-right">R$ 3.000,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">1ª parcela já paga</td>
                <td className="px-4 py-3 text-right">− R$ 1.500,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">INSS sobre o total</td>
                <td className="px-4 py-3 text-right">− R$ 248,60</td>
              </tr>
              <tr>
                <td className="px-4 py-3">IRRF sobre o total</td>
                <td className="px-4 py-3 text-right">− R$ 0,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <strong className="text-foreground">
                    2ª parcela líquida
                  </strong>
                </td>
                <td className="px-4 py-3 text-right">
                  <strong className="text-foreground">R$ 1.251,40</strong>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <strong className="text-foreground">
                    Total líquido do 13º (1ª + 2ª)
                  </strong>
                </td>
                <td className="px-4 py-3 text-right">
                  <strong className="text-foreground">R$ 2.751,40</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Mesmo quando a 2ª parcela parece bem menor que a 1ª, isso é
          esperado: os R$ 248,60 de INSS são calculados sobre os
          R$ 3.000,00 inteiros, mas descontados de uma só vez dos
          R$ 1.500,00 da segunda metade.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Erros comuns e situações especiais
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">
              Confundir a 2ª parcela com metade já descontada:
            </strong>{" "}
            o desconto é sobre o total do 13º, cobrado na 2ª parcela.
          </li>
          <li>
            <strong className="text-foreground">
              Admissão no meio do ano:
            </strong>{" "}
            o valor é proporcional (meses × 1/12), respeitada a regra dos
            15 dias.
          </li>
          <li>
            <strong className="text-foreground">Férias:</strong> a 1ª
            parcela pode ser antecipada junto com as férias quando pedida
            em janeiro; o acerto de INSS e IRRF continua na 2ª parcela,
            sobre o total.
          </li>
          <li>
            <strong className="text-foreground">
              Rescisão e aviso prévio:
            </strong>{" "}
            o 13º proporcional é pago nas verbas rescisórias. Na demissão
            por justa causa, o trabalhador não recebe o 13º proporcional do
            ano da demissão.
          </li>
          <li>
            <strong className="text-foreground">Afastamentos:</strong> o
            período de licença-maternidade conta para o 13º. Na doença
            comum, o empregador responde pela fração proporcional,
            incluindo os primeiros 15 dias, e o INSS paga o abono anual
            proporcional a partir do 16º dia. No acidente de trabalho ou
            doença ocupacional, o período conta como tempo de serviço e
            cabe ao empregador complementar a diferença se o abono anual
            do INSS for menor que o 13º integral.
          </li>
          <li>
            <strong className="text-foreground">Salário variável:</strong>{" "}
            comissões e horas extras habituais entram pela média do ano;
            quem só olha o salário fixo subestima o 13º bruto.
          </li>
        </ul>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Perguntas frequentes
        </h2>
        <div className="mt-6 flex flex-col divide-y divide-border">
          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Quem foi admitido no meio do ano recebe décimo terceiro
              inteiro?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Não. Recebe o proporcional: 1/12 do salário por mês
              trabalhado, contando como mês completo o mês com 15 dias ou
              mais de trabalho. Quem trabalhou 6 meses com salário de
              R$ 3.000, por exemplo, tem 13º bruto de R$ 1.500,00.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              A 1ª parcela do décimo terceiro tem desconto de INSS ou
              imposto de renda?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Não. A 1ª parcela, de 50%, é paga sem desconto de INSS e de
              IRRF. Os dois descontos são calculados sobre o valor total
              do 13º e cobrados na 2ª parcela.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Por que a 2ª parcela do meu décimo terceiro veio bem menor
              que a 1ª?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Porque INSS — e IRRF, quando devido — incidem sobre o total
              do 13º, mas são descontados integralmente da segunda metade.
              No exemplo de R$ 3.000 deste guia, só o INSS já retira
              R$ 248,60 da 2ª parcela.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Décimo terceiro tem FGTS?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim. O empregador recolhe FGTS de 8% sobre o 13º, nas duas
              parcelas. O FGTS é um depósito do empregador e não é
              descontado do valor que o trabalhador recebe.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O décimo terceiro entra na declaração anual do imposto de
              renda?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              O 13º é tributado de forma exclusiva na fonte e deve ser
              informado na declaração anual, pelo valor líquido, na ficha
              de Rendimentos Sujeitos à Tributação Exclusiva/Definitiva.
              Ele não se soma ao salário mensal para um novo cálculo e o
              imposto retido sobre ele não pode ser compensado no ajuste
              anual.
            </p>
          </details>
        </div>

        <ContentCTA />

        <ContentRelatedLinks
          links={[
            {
              href: "/tabela-inss-2026",
              label: "Tabela INSS 2026",
            },
            {
              href: "/tabela-irrf-2026",
              label: "Tabela IRRF 2026",
            },
            {
              href: "/blog/isencao-imposto-renda-2026",
              label: "Isenção de IR 2026",
            },
          ]}
        />
      </ContentBody>
    </ContentPage>
  );
}
