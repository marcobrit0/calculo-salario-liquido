import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteLogo } from "@/components/site-logo";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Termos de Uso",
  description:
    "Termos de Uso da calculadora Salário Líquido, com regras de utilização, escopo da simulação, limitações de responsabilidade e condições gerais do serviço.",
  pathname: "/termos",
});

const sections = [
  {
    title: "1. Aceitação e finalidade",
    paragraphs: [
      "Ao acessar e utilizar o site Salário Líquido, o usuário declara que leu e concorda com estes Termos de Uso na extensão aplicável.",
      "O serviço oferece uma calculadora informativa para simular salário líquido CLT, salário bruto estimado, descontos de INSS, IRRF e efeitos da Lei 15.270/2025 com base nas regras implementadas no site.",
    ],
  },
  {
    title: "2. Natureza informativa do serviço",
    paragraphs: [
      "A calculadora não constitui consultoria jurídica, tributária, contábil, trabalhista, previdenciária, financeira ou de recursos humanos.",
      "Os resultados são estimativas automatizadas produzidas a partir dos dados inseridos pelo usuário e das regras programadas no serviço. Eles não substituem holerite, proposta contratual, recibo oficial, parecer profissional ou conferência com documentos da empresa.",
    ],
  },
  {
    title: "3. Escopo da simulação",
    paragraphs: [
      "O cálculo é direcionado ao contexto mensal de empregado CLT, trabalhador doméstico e trabalhador avulso dentro do recorte divulgado na própria página. Elementos como férias, 13º, horas extras, adicionais, PLR, benefícios, convenções coletivas, descontos internos, adiantamentos, empréstimos consignados e outras rubricas podem não estar incluídos.",
      "Por esse motivo, o usuário deve interpretar o resultado como referência inicial e não como garantia de valor líquido final devido em situação concreta.",
    ],
  },
  {
    title: "4. Responsabilidade do usuário",
    paragraphs: [
      "O usuário é responsável pela veracidade, adequação e atualização das informações digitadas na calculadora.",
      "Também cabe ao usuário avaliar se a simulação atende ao seu caso específico e, quando necessário, buscar validação profissional ou documental antes de tomar decisão trabalhista, tributária, contratual ou financeira.",
    ],
  },
  {
    title: "5. Disponibilidade e alterações",
    paragraphs: [
      "O site pode ser atualizado, suspenso, interrompido, corrigido ou modificado a qualquer tempo, com ou sem aviso prévio, inclusive para ajustes legais, técnicos, editoriais ou operacionais.",
      "Não há garantia de disponibilidade contínua, ausência de falhas, compatibilidade universal com todos os dispositivos ou atualização instantânea após qualquer mudança normativa.",
    ],
  },
  {
    title: "6. Limitação de responsabilidade",
    paragraphs: [
      "Na máxima extensão permitida pela legislação aplicável, o responsável pelo site não responde por perdas indiretas, lucros cessantes, decisões negociais, escolhas de contratação, divergências de folha, autuações, passivos ou prejuízos decorrentes do uso isolado da calculadora ou da interpretação do seu conteúdo.",
      "Ainda que o site busque consistência nas regras implementadas, podem ocorrer imprecisões, desatualizações temporárias, diferenças de arredondamento, mudanças legais supervenientes ou particularidades de holerite que alterem o resultado real.",
    ],
  },
  {
    title: "7. Propriedade intelectual e uso adequado",
    paragraphs: [
      "O conteúdo textual, visual, estrutural e lógico do site é protegido pelas normas aplicáveis de propriedade intelectual. O uso do serviço não transfere ao usuário titularidade sobre marca, layout, textos, código ou base editorial.",
      "É vedado utilizar o site para fins ilícitos, para tentativa de comprometimento da infraestrutura, para cópia automatizada abusiva, para engenharia reversa com finalidade indevida ou para qualquer uso que prejudique a disponibilidade do serviço para terceiros.",
    ],
  },
  {
    title: "8. Links externos",
    paragraphs: [
      "O site pode apontar para páginas de órgãos públicos, provedores ou outras referências externas. Esses destinos têm regras próprias, e o responsável pelo site não controla seu conteúdo, disponibilidade ou políticas.",
    ],
  },
  {
    title: "9. Privacidade",
    paragraphs: [
      "O tratamento de informações relacionadas ao uso do site segue a Política de Privacidade publicada em página própria, que integra estes Termos de Uso para fins de interpretação conjunta.",
    ],
  },
  {
    title: "10. Legislação aplicável",
    paragraphs: [
      "Estes Termos serão interpretados conforme a legislação brasileira aplicável, sem prejuízo de normas de proteção ao consumidor ou de proteção de dados eventualmente incidentes ao caso concreto.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <main className="bg-background text-foreground">
        <section className="border-b border-border bg-neutral-100">
          <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16">
            <div className="flex items-center justify-between gap-4">
              <SiteLogo href="/" />
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Voltar para a calculadora
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-16">
            <div className="flex flex-col gap-5">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Termos de Uso
              </p>
              <h1 className="font-display text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
                Condições para uso da calculadora de salário líquido.
              </h1>
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Última atualização: 2 de abril de 2026.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border bg-white p-6 text-sm leading-7 text-muted-foreground md:p-8">
              <p>
                Em resumo: o site entrega uma simulação informativa e não substitui
                validação com holerite, contrato, contador, departamento pessoal ou
                aconselhamento jurídico.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 lg:px-16">
            <div className="flex flex-col gap-10">
              {sections.map((section) => (
                <article key={section.title} className="border-t border-border pt-8 first:border-t-0 first:pt-0">
                  <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-foreground">
                    {section.title}
                  </h2>
                  <div className="mt-4 flex flex-col gap-4 text-base leading-7 text-muted-foreground">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
