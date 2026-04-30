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
    "Isenção de Imposto de Renda 2026: Quem Ganha Até R$ 5.000 Não Paga IR",
  description:
    "A Lei 15.270/2025 zerou o imposto de renda para quem ganha até R$ 5.000/mês. Entenda como funciona a nova isenção, quem é beneficiado e quanto você economiza.",
  pathname: "/blog/isencao-imposto-renda-2026",
  openGraphType: "article",
});

const pageUrl = createAbsoluteUrl("/blog/isencao-imposto-renda-2026");
const homeUrl = createAbsoluteUrl("/");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Isenção de Imposto de Renda 2026: Quem Ganha Até R$ 5.000 Não Paga IR",
  description:
    "A Lei 15.270/2025 zerou o imposto de renda para quem ganha até R$ 5.000/mês.",
  url: pageUrl,
  inLanguage: "pt-BR",
  datePublished: "2026-04-04",
  dateModified: "2026-04-04",
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

export default function IsencaoImpostoRenda2026() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <ContentHero
        eyebrow="Lei 15.270/2025"
        title="Isenção de Imposto de Renda 2026: Quem Ganha Até R$ 5.000 Não Paga IR"
        description="A maior mudança no Imposto de Renda em anos: quem recebe até R$ 5.000 por mês não paga mais IRRF. Entenda o que mudou, quem é beneficiado e quanto você economiza."
      />

      <ContentBody>
        <BlogArticleHeader
          breadcrumbLabel="Isenção IR 2026"
          date="4 de abril de 2026"
          readingTime="6 min de leitura"
        />

        {/* O que a Lei 15.270/2025 mudou */}
        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          O que a Lei 15.270/2025 mudou
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A Lei 15.270/2025 não alterou a tabela progressiva do Imposto de
          Renda. Em vez disso, criou um{" "}
          <strong className="text-foreground">
            mecanismo de redução do imposto devido
          </strong>{" "}
          que, na prática, zera o IRRF para quem recebe até R$ 5.000 brutos
          por mês e reduz parcialmente o imposto para quem ganha entre
          R$ 5.000,01 e R$ 7.350.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A tabela de alíquotas e faixas continua a mesma. O que muda é que,
          após o cálculo do imposto pela tabela progressiva, o sistema aplica
          uma redução que pode anular total ou parcialmente o valor do IRRF
          retido na fonte.
        </p>

        {/* As três faixas de impacto */}
        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          As três faixas de impacto
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O efeito prático da lei pode ser resumido em três faixas:
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Salário bruto mensal
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

        {/* Quanto você economiza na prática */}
        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Quanto você economiza na prática
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A tabela abaixo compara o IRRF antes e depois da Lei 15.270/2025
          para diferentes faixas salariais. Os valores são aproximados e
          consideram um trabalhador CLT sem dependentes e sem pensão
          alimentícia.
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Salário bruto
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  IRRF antes da lei
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  IRRF com a lei
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Economia mensal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">R$ 3.000</td>
                <td className="px-4 py-3 text-right">~R$ 12</td>
                <td className="px-4 py-3 text-right">R$ 0,00</td>
                <td className="px-4 py-3 text-right">~R$ 12</td>
              </tr>
              <tr>
                <td className="px-4 py-3">R$ 4.000</td>
                <td className="px-4 py-3 text-right">~R$ 90</td>
                <td className="px-4 py-3 text-right">R$ 0,00</td>
                <td className="px-4 py-3 text-right">~R$ 90</td>
              </tr>
              <tr>
                <td className="px-4 py-3">R$ 5.000</td>
                <td className="px-4 py-3 text-right">~R$ 313</td>
                <td className="px-4 py-3 text-right">R$ 0,00</td>
                <td className="px-4 py-3 text-right">~R$ 313</td>
              </tr>
              <tr>
                <td className="px-4 py-3">R$ 6.000</td>
                <td className="px-4 py-3 text-right">~R$ 398</td>
                <td className="px-4 py-3 text-right">~R$ 260</td>
                <td className="px-4 py-3 text-right">~R$ 138</td>
              </tr>
              <tr>
                <td className="px-4 py-3">R$ 7.000</td>
                <td className="px-4 py-3 text-right">~R$ 634</td>
                <td className="px-4 py-3 text-right">~R$ 515</td>
                <td className="px-4 py-3 text-right">~R$ 119</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quem é beneficiado */}
        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Quem é beneficiado
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A isenção e a redução parcial se aplicam a todos os contribuintes
          pessoa física com rendimentos tributáveis na fonte, incluindo:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">Trabalhadores CLT</strong> —
            empregados com carteira assinada no setor privado
          </li>
          <li>
            <strong className="text-foreground">Servidores públicos</strong> —
            federais, estaduais e municipais
          </li>
          <li>
            <strong className="text-foreground">
              Empregados domésticos
            </strong>{" "}
            — registrados via eSocial
          </li>
          <li>
            <strong className="text-foreground">
              Trabalhadores avulsos
            </strong>{" "}
            — portuários e não portuários
          </li>
          <li>
            <strong className="text-foreground">
              Aposentados e pensionistas do INSS
            </strong>{" "}
            — que recebem benefício tributável
          </li>
        </ul>

        {/* Como é aplicada */}
        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Como é aplicada
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A redução é{" "}
          <strong className="text-foreground">
            aplicada automaticamente
          </strong>{" "}
          pela fonte pagadora no momento do cálculo da folha de pagamento.
          O trabalhador não precisa solicitar nada — nem cadastro nem
          declaração — para ter direito ao benefício.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Os sistemas de folha de pagamento e o eSocial já incorporam o
          mecanismo de redução. Ao processar a folha mensal, o empregador
          calcula o IRRF pela tabela progressiva e, em seguida, aplica a
          redução prevista na Lei 15.270/2025. O resultado é o valor
          efetivamente retido — que pode ser zero para salários até
          R$ 5.000.
        </p>

        {/* O que a lei NÃO muda */}
        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          O que a lei NÃO muda
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Apesar do impacto significativo, há pontos que permanecem
          inalterados:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground">
          <li>
            <strong className="text-foreground">
              Contribuição ao INSS
            </strong>{" "}
            — as alíquotas e faixas do INSS continuam as mesmas. A redução
            se aplica exclusivamente ao IRRF.
          </li>
          <li>
            <strong className="text-foreground">
              Tabela progressiva do IRRF
            </strong>{" "}
            — as faixas, alíquotas e parcelas a deduzir da tabela do IR não
            foram alteradas. A lei criou um desconto sobre o imposto
            calculado, não uma nova tabela.
          </li>
          <li>
            <strong className="text-foreground">
              Obrigatoriedade da declaração anual
            </strong>{" "}
            — mesmo que você não pague IRRF mensal, pode ser obrigado a
            entregar a declaração anual de IR dependendo dos seus
            rendimentos totais, bens e outras condições estabelecidas pela
            Receita Federal.
          </li>
          <li>
            <strong className="text-foreground">
              Outras fontes de renda
            </strong>{" "}
            — rendimentos de aluguéis, investimentos, trabalho autônomo e
            outras fontes continuam tributados normalmente. A redução
            mensal se aplica ao rendimento do trabalho retido na fonte.
          </li>
        </ul>

        {/* Impacto na declaração anual de IR */}
        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Impacto na declaração anual de IR
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A redução do IRRF na fonte não elimina automaticamente a
          necessidade de declarar o Imposto de Renda anualmente. Na
          declaração anual, a Receita Federal considera a{" "}
          <strong className="text-foreground">
            soma de todos os rendimentos do ano
          </strong>
          , não apenas o salário mensal.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Quem teve IRRF zerado durante o ano por conta da redução pode,
          dependendo da renda total anual e de outros critérios, ser
          obrigado a declarar — e até ter imposto a pagar no ajuste anual.
          A isenção mensal garante que o trabalhador não tenha retenção na
          folha, mas o acerto final depende da declaração.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Se você tem apenas uma fonte de renda salarial e ganha até
          R$ 5.000 por mês, é provável que não tenha imposto a pagar no
          ajuste anual. Mas se tiver outras rendas, bens acima do limite ou
          outras condições de obrigatoriedade, a declaração continua
          necessária.
        </p>

        {/* FAQ */}
        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Perguntas frequentes
        </h2>
        <div className="mt-6 flex flex-col divide-y divide-border">
          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Quem ganha R$ 5.001 paga IR?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Tecnicamente, sim. Quem recebe R$ 5.001 brutos ultrapassa o
              limite da isenção total e passa a ter uma pequena retenção de
              IRRF. Na prática, porém, o valor é mínimo — poucos centavos
              — porque a redução parcial ainda se aplica nessa faixa de
              transição.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              A isenção vale para o 13º salário?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              O 13º salário possui tributação exclusiva na fonte, com
              cálculo próprio separado do salário mensal. A aplicação da
              redução ao 13º depende da regulamentação específica da
              Receita Federal para o período.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Quem tem duas fontes de renda é beneficiado?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              A retenção mensal do IRRF é feita separadamente por cada fonte
              pagadora. Assim, cada empregador aplica a redução sobre o
              salário que paga. Porém, na declaração anual, os rendimentos
              são somados, e o contribuinte pode ter imposto adicional a
              pagar no ajuste.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Quem ganha exatamente R$ 5.000 brutos está isento?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Na prática, sim. A redução prevista na Lei 15.270/2025 anula
              integralmente o IRRF calculado para quem recebe até R$ 5.000
              brutos por mês. O imposto é calculado pela tabela
              progressiva, mas a redução zera o valor retido.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              A lei pode ser revogada?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Qualquer lei pode ser alterada ou revogada por outra lei
              aprovada pelo Congresso Nacional. No entanto, a ampliação da
              faixa de isenção é politicamente improvável de ser revertida,
              dada a sua popularidade e o impacto direto na renda de
              milhões de trabalhadores.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Preciso mudar algo no eSocial ou no sistema de folha?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Empregadores e departamentos de pessoal precisam garantir que
              seus sistemas de folha de pagamento estejam atualizados com
              as regras da Lei 15.270/2025. A maioria dos softwares de
              folha já incorporou a atualização automaticamente. Caso
              contrário, é necessário verificar com o fornecedor do sistema.
            </p>
          </details>
        </div>

        {/* CTA */}
        <ContentCTA />

        {/* Related links */}
        <ContentRelatedLinks
          links={[
            {
              href: "/tabela-irrf-2026",
              label: "Tabela IRRF 2026",
            },
            {
              href: "/tabela-inss-2026",
              label: "Tabela INSS 2026",
            },
            {
              href: "/como-calcular-salario-liquido",
              label: "Como calcular salário líquido",
            },
          ]}
        />
      </ContentBody>
    </ContentPage>
  );
}
