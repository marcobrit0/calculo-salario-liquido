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
    "Como calcular férias: 1/3 constitucional, abono pecuniário e descontos em 2026",
  description:
    "Como calcular férias: 1/3 constitucional, abono pecuniário, prazos de pagamento e um exemplo completo com R$ 3.000, já com INSS e IRRF de 2026.",
  pathname: "/blog/como-calcular-ferias",
  openGraphType: "article",
});

const pageUrl = createAbsoluteUrl("/blog/como-calcular-ferias");
const homeUrl = createAbsoluteUrl("/");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Como calcular férias: 1/3 constitucional, abono pecuniário e descontos em 2026",
  description:
    "Como calcular férias: 1/3 constitucional, abono pecuniário, prazos de pagamento e um exemplo completo com salário de R$ 3.000, já com INSS e IRRF de 2026.",
  url: pageUrl,
  inLanguage: "pt-BR",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
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

export default function ComoCalcularFerias() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <ContentHero
        eyebrow="Férias CLT"
        title="Como calcular férias: 1/3 constitucional, abono pecuniário e descontos em 2026"
        description="Quem tem direito, quantos dias, o 1/3 constitucional, o abono pecuniário e um exemplo completo com salário de R$ 3.000, já com os descontos de INSS e IRRF de 2026."
      />

      <ContentBody>
        <BlogArticleHeader
          breadcrumbLabel="Férias"
          date="23 de outubro de 2026"
          readingTime="7 min de leitura"
        />

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Quem tem direito a férias e quantos dias
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Todo empregado tem direito, a cada ano, a um período de férias,
          sem prejuízo da remuneração (CLT, art. 129). O direito é
          adquirido após cada período de 12 meses de vigência do contrato
          — o chamado{" "}
          <strong className="text-foreground">período aquisitivo</strong>.
          A quantidade de dias depende das faltas no período aquisitivo
          (CLT, art. 130):
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Faltas no período aquisitivo
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Dias de férias
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">Até 5 faltas</td>
                <td className="px-4 py-3 text-right">30 dias corridos</td>
              </tr>
              <tr>
                <td className="px-4 py-3">De 6 a 14 faltas</td>
                <td className="px-4 py-3 text-right">24 dias corridos</td>
              </tr>
              <tr>
                <td className="px-4 py-3">De 15 a 23 faltas</td>
                <td className="px-4 py-3 text-right">18 dias corridos</td>
              </tr>
              <tr>
                <td className="px-4 py-3">De 24 a 32 faltas</td>
                <td className="px-4 py-3 text-right">12 dias corridos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          É vedado descontar as faltas do período de férias (art. 130,
          § 1º): elas só reduzem os dias pela tabela acima. E o período de
          férias conta como tempo de serviço para todos os efeitos (art.
          130, § 2º).
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Período aquisitivo, período concessivo e a dobra
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Adquirido o direito, as férias devem ser concedidas nos{" "}
          <strong className="text-foreground">
            12 meses seguintes
          </strong>{" "}
          — o período concessivo — em um só período, por ato do empregador
          (CLT, art. 134). Se as férias forem concedidas depois desse
          prazo, o empregador{" "}
          <strong className="text-foreground">
            paga em dobro a respectiva remuneração
          </strong>{" "}
          (CLT, art. 137). É a chamada dobra das férias.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Faltas justificadas não entram na conta da tabela acima: não são
          consideradas falta, entre outras, as ausências nos casos do art.
          473, a licença-maternidade, o acidente de trabalho ou doença
          atestada pelo INSS e a falta justificada pela empresa (CLT, art.
          131). Já quem, no período aquisitivo, sair do emprego sem
          readmissão em 60 dias, ficar de licença com salários por mais de
          30 dias ou receber benefício previdenciário por acidente/doença
          por mais de 6 meses perde o direito àquelas férias e começa um
          novo período aquisitivo (CLT, art. 133).
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          O 1/3 constitucional
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A Constituição garante férias anuais remuneradas{" "}
          <strong className="text-foreground">
            com, pelo menos, um terço a mais do que o salário normal
          </strong>{" "}
          (CF, art. 7º, XVII). Na prática:
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">
            Férias brutas = salário + 1/3 do salário
          </strong>
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Com salário de R$ 3.000,00, o 1/3 é R$ 1.000,00 e as férias
          brutas somam R$ 4.000,00. O 1/3 não é um bônus fora da folha:
          ele entra na base de cálculo do INSS e do IRRF das férias. No
          IRRF, a base é o salário do mês de férias acrescido do 1/3 (IN
          RFB nº 1.500/2014, art. 29).
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Abono pecuniário: vender 1/3 das férias
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          É facultado ao empregado{" "}
          <strong className="text-foreground">
            converter 1/3 do período de férias em abono pecuniário
          </strong>
          , no valor da remuneração que seria devida nos dias
          correspondentes (CLT, art. 143). Em 30 dias de férias, dá para
          vender 10 dias: você goza 20 e recebe os 10 em dinheiro, junto
          com o pagamento das férias.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Prazo do pedido:</strong> o
          abono deve ser requerido{" "}
          <strong className="text-foreground">
            até 15 dias antes do término do período aquisitivo
          </strong>{" "}
          (art. 143, § 1º). Depois desse prazo, o empregador não é obrigado
          a aceitar. Nas férias coletivas, a conversão depende de acordo
          coletivo com o sindicato, sem necessidade de pedido individual
          (art. 143, § 2º). O abono não integra a remuneração para os
          efeitos da legislação do trabalho (art. 144).
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Composição (salário de R$ 3.000)
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  30 dias gozados
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  20 gozados + 10 vendidos
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">Dias gozados</td>
                <td className="px-4 py-3 text-right">R$ 3.000,00</td>
                <td className="px-4 py-3 text-right">R$ 2.000,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">1/3 constitucional</td>
                <td className="px-4 py-3 text-right">R$ 1.000,00</td>
                <td className="px-4 py-3 text-right">R$ 1.000,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Abono pecuniário (10 dias)</td>
                <td className="px-4 py-3 text-right">—</td>
                <td className="px-4 py-3 text-right">R$ 1.000,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <strong className="text-foreground">Total bruto</strong>
                </td>
                <td className="px-4 py-3 text-right">
                  <strong className="text-foreground">R$ 4.000,00</strong>
                </td>
                <td className="px-4 py-3 text-right">
                  <strong className="text-foreground">R$ 4.000,00</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O valor bruto é o mesmo nos dois cenários; a diferença é que,
          vendendo 10 dias, você trabalha 10 dias a mais naquele mês.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Prazos: quando as férias são pagas
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">Pagamento:</strong> a
            remuneração das férias e, se for o caso, o abono devem ser
            pagos{" "}
            <strong className="text-foreground">
              até 2 dias antes do início
            </strong>{" "}
            do período (CLT, art. 145).
          </li>
          <li>
            <strong className="text-foreground">Aviso:</strong> a concessão
            é comunicada por escrito ao empregado com antecedência mínima
            de <strong className="text-foreground">30 dias</strong> (CLT,
            art. 135).
          </li>
          <li>
            <strong className="text-foreground">Início:</strong> é vedado
            começar as férias nos 2 dias que antecedem feriado ou dia de
            repouso semanal remunerado (CLT, art. 134, § 3º).
          </li>
        </ul>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Na prática, quem sai de férias no dia 1º recebe o pagamento ainda
          no mês anterior — e é no mês do pagamento que o IRRF das férias
          é calculado.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Dá para dividir as férias?
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Sim, desde que haja{" "}
          <strong className="text-foreground">
            concordância do empregado
          </strong>
          : as férias podem ser usufruídas em{" "}
          <strong className="text-foreground">até 3 períodos</strong>,
          sendo que um deles não pode ser inferior a 14 dias corridos e os
          demais não podem ser inferiores a 5 dias corridos, cada um (CLT,
          art. 134, § 1º). Combinações válidas: 14 + 16, 15 + 10 + 5 ou
          20 + 5 + 5, por exemplo.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Férias coletivas
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A empresa pode conceder férias coletivas a todos os empregados
          ou a determinados setores (CLT, art. 139): em até 2 períodos
          anuais, nenhum inferior a 10 dias corridos, com comunicação ao
          Ministério do Trabalho e aos sindicatos com 15 dias de
          antecedência. Quem foi contratado há menos de 12 meses goza
          férias proporcionais na coletiva e inicia então um novo período
          aquisitivo (CLT, art. 140).
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Férias proporcionais na rescisão
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Na rescisão, as férias já adquiridas são pagas de forma simples
          ou em dobro, conforme o caso (CLT, art. 146). Além disso, após 12
          meses de serviço, quem não foi demitido por justa causa recebe
          as férias proporcionais do período incompleto:{" "}
          <strong className="text-foreground">
            1/12 por mês de serviço ou fração superior a 14 dias
          </strong>
          . Quem é despedido sem justa causa ou tem o contrato a termo
          encerrado antes de 12 meses também recebe o proporcional (CLT,
          art. 147). A remuneração das férias, mesmo paga após a rescisão,
          tem natureza salarial (CLT, art. 148).
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Exemplo completo: salário de R$ 3.000, 30 dias de férias
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Premissas: salário bruto fixo de R$ 3.000,00, 30 dias gozados,
          sem dependentes, sem pensão alimentícia e sem verbas variáveis.
          O imposto das férias é calculado{" "}
          <strong className="text-foreground">
            em separado de qualquer outro rendimento pago no mês
          </strong>
          , inclusive do salário (IN RFB nº 1.500/2014, art. 29, § 1º).
        </p>

        <h3 className="font-display text-xl tracking-[-0.02em] text-foreground mt-10">
          Passo 1 — INSS sobre as férias em 2026
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
          R$ 988,09. Para férias brutas de R$ 4.000,00 (salário + 1/3), o
          cálculo trecho a trecho é:
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
                <td className="px-4 py-3 text-right">R$ 1.097,16</td>
                <td className="px-4 py-3 text-right">12%</td>
                <td className="px-4 py-3 text-right">R$ 131,66</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <strong className="text-foreground">Total</strong>
                </td>
                <td className="px-4 py-3 text-right"></td>
                <td className="px-4 py-3 text-right"></td>
                <td className="px-4 py-3 text-right">
                  <strong className="text-foreground">R$ 368,60</strong>
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
            INSS das férias no exemplo: R$ 368,60
          </strong>{" "}
          (alíquota efetiva de 9,22%). O teto do INSS considera a soma de
          salário e férias no mês; neste exemplo, a soma fica abaixo do
          teto, então o desconto segue este cálculo.
        </p>

        <h3 className="font-display text-xl tracking-[-0.02em] text-foreground mt-10">
          Passo 2 — IRRF sobre as férias em 2026
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A base do IRRF das férias usa a dedução mais vantajosa para o
          trabalhador: as deduções legais (INSS, dependentes e pensão) ou
          o{" "}
          <strong className="text-foreground">
            desconto simplificado de R$ 607,20
          </strong>
          , que também se aplica à apuração das férias (IN RFB nº
          1.500/2014, art. 29, § 3º; Lei nº 9.250/1995, art. 4º, § 2º). A
          fonte pagadora deve usar o simplificado quando ele for mais
          benéfico.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          No exemplo de R$ 4.000,00 de férias brutas, sem dependentes e sem
          pensão:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">
              Pelo desconto simplificado:
            </strong>{" "}
            base = R$ 4.000,00 − R$ 607,20 = R$ 3.392,80, na faixa de 15%.
            O imposto pela tabela seria R$ 114,76 (R$ 3.392,80 × 15% −
            R$ 394,16), mas a{" "}
            <strong className="text-foreground">
              redução da Lei 15.270/2025 zera o imposto para rendimentos
              de até R$ 5.000
            </strong>{" "}
            (Lei nº 9.250/1995, art. 3º-A).{" "}
            <strong className="text-foreground">IRRF = R$ 0,00.</strong>
          </li>
          <li>
            <strong className="text-foreground">
              Pelas deduções legais:
            </strong>{" "}
            base = R$ 4.000,00 − R$ 368,60 = R$ 3.631,40, também na faixa
            de 15%. O imposto pela tabela seria R$ 150,55 (R$ 3.631,40 ×
            15% − R$ 394,16), igualmente zerado pela redução da Lei
            15.270/2025 para rendimentos de até R$ 5.000.{" "}
            <strong className="text-foreground">
              IRRF final = R$ 0,00 também por esta via.
            </strong>
          </li>
        </ul>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Ou seja: em 2026, as duas vias chegam ao mesmo resultado neste
          exemplo.{" "}
          <strong className="text-foreground">
            IRRF das férias no exemplo: R$ 0,00.
          </strong>
        </p>

        <h3 className="font-display text-xl tracking-[-0.02em] text-foreground mt-10">
          Passo 3 — Valor final das férias no exemplo
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Premissas: salário bruto fixo de R$ 3.000,00, 30 dias gozados,
          sem dependentes, sem pensão alimentícia e sem verbas variáveis.
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
                <td className="px-4 py-3">Salário (30 dias)</td>
                <td className="px-4 py-3 text-right">R$ 3.000,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">1/3 constitucional</td>
                <td className="px-4 py-3 text-right">+ R$ 1.000,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">INSS sobre o total</td>
                <td className="px-4 py-3 text-right">− R$ 368,60</td>
              </tr>
              <tr>
                <td className="px-4 py-3">IRRF sobre o total</td>
                <td className="px-4 py-3 text-right">− R$ 0,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <strong className="text-foreground">
                    Férias líquidas
                  </strong>
                </td>
                <td className="px-4 py-3 text-right">
                  <strong className="text-foreground">R$ 3.631,40</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O empregador ainda recolhe FGTS de 8% sobre os R$ 4.000,00
          (R$ 320,00), que não é descontado do trabalhador.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Erros comuns
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">
              Achar que o 1/3 é um bônus sem desconto:
            </strong>{" "}
            o terço constitucional entra na base do INSS e do IRRF das
            férias.
          </li>
          <li>
            <strong className="text-foreground">
              Pedir o abono fora do prazo:
            </strong>{" "}
            o requerimento tem que chegar até 15 dias antes do fim do
            período aquisitivo; depois disso, a empresa pode recusar.
          </li>
          <li>
            <strong className="text-foreground">
              Somar férias e salário na mesma base de IRRF:
            </strong>{" "}
            o imposto das férias é calculado em separado do salário pago
            no mesmo mês.
          </li>
          <li>
            <strong className="text-foreground">
              Confundir atraso com dobra automática:
            </strong>{" "}
            a dobra só vale quando as férias são concedidas depois do
            período concessivo de 12 meses.
          </li>
        </ul>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Perguntas frequentes
        </h2>
        <div className="mt-6 flex flex-col divide-y divide-border">
          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Posso vender parte das férias? Como fica o valor?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim: você pode converter 1/3 do período em abono pecuniário,
              desde que peça até 15 dias antes do fim do período
              aquisitivo. Em 30 dias, dá para gozar 20 e vender 10: no
              exemplo de R$ 3.000, são R$ 2.000,00 de gozo + R$ 1.000,00
              de 1/3 + R$ 1.000,00 de abono, totalizando R$ 4.000,00
              brutos — o mesmo que 30 dias gozados, com 10 dias a mais de
              trabalho.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Férias têm desconto de INSS e imposto de renda?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim. O INSS incide sobre as férias + 1/3 e o IRRF é calculado
              no mês do pagamento, em separado do salário. No exemplo de
              R$ 3.000 deste guia, o INSS é R$ 368,60 e o IRRF é R$ 0,00
              em 2026, pela redução da Lei 15.270/2025 para rendimentos de
              até R$ 5.000.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Em quantas vezes posso dividir as férias?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Em até 3 períodos, desde que você concorde: um deles com no
              mínimo 14 dias corridos e os demais com no mínimo 5 dias
              corridos cada um. As férias não podem começar nos 2 dias que
              antecedem feriado ou dia de repouso semanal remunerado.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              A empresa atrasou minhas férias. E agora?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Se as férias forem concedidas depois dos 12 meses do período
              concessivo, o empregador paga em dobro a respectiva
              remuneração (CLT, art. 137).
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Férias têm FGTS?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim. O empregador recolhe FGTS de 8% sobre as férias + 1/3.
              O FGTS é um depósito do empregador e não é descontado do
              valor que o trabalhador recebe.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              As férias entram na declaração anual do imposto de renda?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Na declaração anual, as férias são tributadas em conjunto
              com os demais rendimentos (IN RFB nº 1.500/2014, art. 29,
              § 4º) — diferente do 13º, que tem tributação exclusiva na
              fonte.
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
              href: "/blog/como-calcular-decimo-terceiro",
              label: "Como calcular o décimo terceiro",
            },
          ]}
        />
      </ContentBody>
    </ContentPage>
  );
}
