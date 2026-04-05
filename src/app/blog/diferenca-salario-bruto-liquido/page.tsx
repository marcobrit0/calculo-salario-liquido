import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/seo";
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
    "Diferença Entre Salário Bruto e Líquido: O Que É Cada Um e Quanto Desconta",
  description:
    "Salário bruto vs líquido: entenda a diferença, quais descontos existem e veja uma tabela com 5 faixas salariais para comparar. Exemplos atualizados 2026.",
  pathname: "/blog/diferenca-salario-bruto-liquido",
  openGraphType: "article",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Diferença Entre Salário Bruto e Líquido: Entenda de Uma Vez",
  description:
    "Salário bruto vs líquido: entenda a diferença, quais descontos existem e veja uma tabela comparativa.",
  url: "https://calculo-salario-liquido.vercel.app/blog/diferenca-salario-bruto-liquido",
  inLanguage: "pt-BR",
  datePublished: "2026-03-28",
  dateModified: "2026-03-28",
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
    "@id":
      "https://calculo-salario-liquido.vercel.app/blog/diferenca-salario-bruto-liquido",
  },
};

export default function DiferencaSalarioBrutoLiquidoPage() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <ContentHero
        eyebrow="Guia CLT"
        title="Diferença Entre Salário Bruto e Líquido: Entenda de Uma Vez"
        description="O salário bruto é o valor registrado no contrato de trabalho. O salário líquido é o que realmente chega na sua conta depois dos descontos obrigatórios. Entender essa diferença é o primeiro passo para planejar suas finanças."
      />

      <ContentBody>
        <BlogArticleHeader
          breadcrumbLabel="Bruto vs Líquido"
          date="28 de março de 2026"
          readingTime="7 min de leitura"
        />

        {/* O que é salário bruto */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          O que é salário bruto
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O <strong className="text-foreground">salário bruto</strong> (também
          chamado de salário nominal) é o valor total acordado entre empregado e
          empregador no contrato de trabalho. É a partir dele que todos os
          cálculos de desconto são feitos.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Esse é o valor que aparece na sua carteira de trabalho e no holerite
          antes de qualquer dedução. Ele serve como base de cálculo para INSS,
          IRRF e outros descontos previstos em lei ou em convenção coletiva.
        </p>

        {/* O que é salário líquido */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          O que é salário líquido
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O <strong className="text-foreground">salário líquido</strong> é o
          valor que sobra depois de aplicados todos os descontos obrigatórios e
          eventuais deduções autorizadas. Em outras palavras, é o dinheiro que
          efetivamente cai na sua conta bancária todo mês.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A fórmula geral é:
        </p>
        <p className="mt-4 rounded-lg border border-border bg-muted px-4 py-3 font-mono text-sm text-foreground">
          Líquido = Bruto &minus; INSS &minus; IRRF &minus; outros descontos
        </p>

        {/* Quais descontos existem */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Quais descontos existem entre o bruto e o líquido
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Os principais descontos que reduzem o salário bruto até chegar ao
          líquido são:
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          INSS (contribuição previdenciária)
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Desconto obrigatório para todos os trabalhadores CLT. As alíquotas são
          progressivas (7,5% a 14%) e incidem sobre faixas do salário, não sobre
          o valor total. O teto de contribuição em 2026 limita o desconto máximo.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          IRRF (Imposto de Renda Retido na Fonte)
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Incide sobre o salário após o desconto do INSS. Também é progressivo,
          com faixa de isenção para rendimentos mais baixos. Dependentes e pensão
          alimentícia judicial podem reduzir a base de cálculo.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Vale-transporte (VT)
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Se o trabalhador opta pelo VT, pode ser descontado até 6% do salário
          base. É um desconto facultativo: o empregado pode abrir mão do
          benefício.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Pensão alimentícia judicial
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Quando determinada por decisão judicial, a pensão é descontada
          diretamente na folha. O valor reduz a base de cálculo do IRRF.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Outros descontos possíveis
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Plano de saúde, empréstimo consignado e contribuição sindical também
          podem aparecer no holerite. Esses descontos variam de empresa para
          empresa e dependem de autorização do trabalhador ou previsão em acordo
          coletivo.
        </p>

        {/* Tabela comparativa */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Tabela comparativa: bruto vs líquido em 5 faixas
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A tabela abaixo mostra o salário líquido estimado para cinco faixas
          salariais, considerando apenas INSS e IRRF 2026, sem dependentes e sem
          outros descontos.
        </p>

        <div className="mt-8 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Salário bruto
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  INSS
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  IRRF
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Líquido
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  % descontado
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-left">R$&nbsp;2.000</td>
                <td className="px-4 py-3 text-right">R$&nbsp;155,69</td>
                <td className="px-4 py-3 text-right">R$&nbsp;0,00</td>
                <td className="px-4 py-3 text-right font-medium text-foreground">
                  R$&nbsp;1.844,31
                </td>
                <td className="px-4 py-3 text-right">7,8%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-left">R$&nbsp;3.500</td>
                <td className="px-4 py-3 text-right">R$&nbsp;308,60</td>
                <td className="px-4 py-3 text-right">R$&nbsp;0,00</td>
                <td className="px-4 py-3 text-right font-medium text-foreground">
                  R$&nbsp;3.191,40
                </td>
                <td className="px-4 py-3 text-right">8,8%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-left">R$&nbsp;5.000</td>
                <td className="px-4 py-3 text-right">R$&nbsp;501,51</td>
                <td className="px-4 py-3 text-right">R$&nbsp;0,00</td>
                <td className="px-4 py-3 text-right font-medium text-foreground">
                  R$&nbsp;4.498,49
                </td>
                <td className="px-4 py-3 text-right">10,0%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-left">R$&nbsp;8.000</td>
                <td className="px-4 py-3 text-right">R$&nbsp;921,51</td>
                <td className="px-4 py-3 text-right">R$&nbsp;1.037,85</td>
                <td className="px-4 py-3 text-right font-medium text-foreground">
                  R$&nbsp;6.040,64
                </td>
                <td className="px-4 py-3 text-right">24,5%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-left">R$&nbsp;12.000</td>
                <td className="px-4 py-3 text-right">R$&nbsp;988,09</td>
                <td className="px-4 py-3 text-right">R$&nbsp;2.119,55</td>
                <td className="px-4 py-3 text-right font-medium text-foreground">
                  R$&nbsp;8.892,36
                </td>
                <td className="px-4 py-3 text-right">25,9%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Por que a diferença não é linear */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Por que a diferença não é linear
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Olhando a tabela acima, percebe-se que o percentual descontado salta de
          forma significativa a partir de certo patamar. Isso acontece porque
          tanto o INSS quanto o IRRF são{" "}
          <strong className="text-foreground">progressivos</strong>.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          No INSS, cada faixa salarial tem sua própria alíquota. Você não paga
          14% sobre tudo: paga 7,5% sobre a primeira faixa, 9% sobre a segunda,
          e assim por diante. O mesmo princípio se aplica ao IRRF, que ainda
          conta com uma faixa de isenção para rendimentos mais baixos.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Na prática, quem ganha até cerca de R$&nbsp;5.000 brutos em 2026 sente
          apenas o peso do INSS. A partir daí, o IRRF começa a incidir e o
          desconto total cresce de forma mais acentuada.
        </p>

        {/* O que isso significa para propostas de emprego */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          O que isso significa para propostas de emprego
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Quando você recebe uma proposta de emprego, o valor informado quase
          sempre é o salário bruto. Saber converter esse número para líquido é
          essencial para avaliar se a oferta realmente atende suas necessidades.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Exemplo prático:</strong> imagine
          duas propostas: uma de R$&nbsp;7.000 brutos e outra de R$&nbsp;8.500
          brutos. A diferença bruta é de R$&nbsp;1.500, mas a diferença líquida
          será menor por causa da progressividade dos descontos. Usar uma
          calculadora de salário líquido ajuda a comparar as ofertas de forma
          realista, sem surpresas no primeiro holerite.
        </p>

        {/* Mitos comuns */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Mitos comuns
        </h2>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          &ldquo;O INSS desconta 14% do meu salário&rdquo;
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Mito.</strong> A alíquota de 14%
          incide apenas sobre a faixa mais alta. O desconto efetivo é sempre
          menor que 14% do salário total, porque as faixas anteriores têm
          alíquotas menores (7,5%, 9% e 12%).
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          &ldquo;Se eu ganhar R$&nbsp;5.001, já pago imposto de renda&rdquo;
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Tecnicamente sim, mas muito pouco.</strong>{" "}
          O IRRF incide sobre o que excede a faixa de isenção, após descontar o
          INSS. Para salários próximos ao limite, o valor do imposto é mínimo ou
          até zerado pela redução mensal prevista na Lei 15.270/2025.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          &ldquo;O FGTS é descontado do meu salário&rdquo;
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Mito.</strong> O FGTS (8% do
          salário bruto) é pago inteiramente pelo empregador. Ele não aparece
          como desconto no holerite do trabalhador e não reduz o salário líquido.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          &ldquo;Salário líquido = valor na conta&rdquo;
        </h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          <strong className="text-foreground">Quase sempre, mas não necessariamente.</strong>{" "}
          Na grande maioria dos casos, o líquido é o valor depositado. Porém,
          adiantamentos, empréstimos consignados ou outros acertos internos da
          empresa podem fazer com que o depósito seja ligeiramente diferente do
          líquido calculado.
        </p>

        {/* FAQ */}
        <h2 className="mt-16 font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl">
          Perguntas frequentes
        </h2>

        <div className="mt-8 flex flex-col divide-y divide-border">
          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O que vale mais: bruto alto com poucos benefícios ou bruto menor
              com mais benefícios?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Depende do valor dos benefícios. Plano de saúde, vale-alimentação
              e previdência privada com contrapartida do empregador podem
              representar milhares de reais por mês. Compare o pacote total
              (salário líquido + benefícios) das duas propostas, não apenas o
              bruto.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O salário bruto aparece na carteira de trabalho?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim. O valor registrado na CTPS (Carteira de Trabalho e
              Previdência Social) é sempre o salário bruto, também chamado de
              salário nominal ou salário-base.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Quem ganha por hora tem cálculo diferente?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              O cálculo de INSS e IRRF segue as mesmas tabelas. A diferença é
              que o salário mensal precisa ser estimado primeiro (valor da
              hora &times; horas trabalhadas no mês) para então aplicar os
              descontos.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Comissões e bônus entram no bruto?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim, comissões e bônus de natureza salarial compõem o salário
              bruto do mês em que são pagos. Sobre eles incidem INSS e IRRF
              normalmente, o que aumenta o desconto total naquele mês.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O salário mínimo de R$&nbsp;1.621 já é o líquido?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Não. O valor de R$&nbsp;1.621 é o salário mínimo bruto. Sobre ele
              incide o desconto de INSS (7,5% na primeira faixa), resultando em
              um líquido ligeiramente menor. Não há IRRF para esse valor.
            </p>
          </details>
        </div>

        {/* CTA */}
        <ContentCTA />

        {/* Related links */}
        <ContentRelatedLinks
          links={[
            {
              href: "/como-calcular-salario-liquido",
              label: "Como calcular salário líquido",
            },
            {
              href: "/tabela-inss-2026",
              label: "Tabela INSS 2026",
            },
            {
              href: "/tabela-irrf-2026",
              label: "Tabela IRRF 2026",
            },
          ]}
        />
      </ContentBody>
    </ContentPage>
  );
}
