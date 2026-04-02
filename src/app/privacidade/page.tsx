import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteLogo } from "@/components/site-logo";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da calculadora Salário Líquido, com resumo sobre dados tratados, funcionamento local da simulação e limitações do serviço.",
  alternates: {
    canonical: "/privacidade",
  },
};

const sections = [
  {
    title: "1. Escopo desta política",
    paragraphs: [
      "Esta Política de Privacidade descreve, em linguagem objetiva, como o site Salário Líquido trata informações relacionadas ao uso da calculadora de salário líquido CLT e das páginas públicas do serviço.",
      "O foco principal da ferramenta é oferecer simulações informativas sobre salário bruto, salário líquido, INSS, IRRF, dependentes e pensão judicial dentro das regras brasileiras de 2026.",
    ],
  },
  {
    title: "2. Como a calculadora funciona",
    paragraphs: [
      "Os valores digitados na calculadora são processados no próprio navegador para gerar a simulação exibida na tela. Em regra, o conteúdo informado nos campos da calculadora não depende de criação de conta nem de envio manual de cadastro.",
      "Ainda assim, acessos ao site podem gerar registros técnicos mínimos do ambiente de hospedagem e segurança, como endereço IP, data e hora da requisição, tipo de navegador, sistema operacional, URL acessada e eventos básicos de proteção contra abuso.",
    ],
  },
  {
    title: "3. Dados que podem ser tratados",
    paragraphs: [
      "Dependendo do uso do site, podem ser tratados: dados técnicos de navegação, parâmetros básicos de requisição, informações de segurança e os valores inseridos pelo próprio usuário durante a sessão local de cálculo.",
      "O site não foi estruturado para receber dados sensíveis além das informações que o próprio usuário voluntariamente insere para fins de simulação. Por isso, recomenda-se não preencher dados desnecessários, nomes completos, documentos pessoais ou qualquer informação que não seja exigida pela conta.",
    ],
  },
  {
    title: "4. Finalidades do tratamento",
    paragraphs: [
      "As informações técnicas podem ser tratadas para disponibilizar o site, manter estabilidade, prevenir fraude, corrigir erros, responder a incidentes, gerar estatísticas operacionais agregadas e cumprir obrigações legais ou regulatórias, quando aplicáveis.",
      "Os valores digitados na calculadora têm como finalidade imediata produzir o resultado da simulação exibida ao usuário.",
    ],
  },
  {
    title: "5. Compartilhamento",
    paragraphs: [
      "Poderá haver compartilhamento com provedores de infraestrutura, hospedagem, segurança, entrega de conteúdo e suporte operacional, sempre dentro do necessário para disponibilizar o site e manter sua integridade.",
      "Também poderá haver compartilhamento quando exigido por lei, ordem de autoridade competente ou para exercício regular de direitos em processos administrativos, arbitrais ou judiciais.",
    ],
  },
  {
    title: "6. Cookies e tecnologias semelhantes",
    paragraphs: [
      "O site pode utilizar cookies ou tecnologias semelhantes estritamente necessários para funcionamento, segurança, roteamento, balanceamento, prevenção de abuso e desempenho técnico.",
      "Se no futuro forem adotadas tecnologias adicionais de mensuração, personalização ou publicidade, esta política poderá ser atualizada para refletir a mudança.",
    ],
  },
  {
    title: "7. Retenção",
    paragraphs: [
      "Registros técnicos podem ser mantidos pelo tempo necessário para operação, segurança, auditoria, investigação de incidentes, cumprimento legal e preservação de direitos.",
      "As entradas feitas na calculadora não são apresentadas como histórico de conta do usuário dentro do próprio produto, já que o serviço não oferece área logada.",
    ],
  },
  {
    title: "8. Direitos do titular",
    paragraphs: [
      "Na medida em que a legislação aplicável reconhecer direitos relativos a dados pessoais, pedidos de confirmação, acesso, correção, anonimização, eliminação, oposição ou informação podem ser exercidos pelos meios que venham a ser disponibilizados no domínio oficial do serviço.",
      "Antes de atender solicitações, poderá ser necessária validação razoável da identidade do solicitante e da extensão do pedido.",
    ],
  },
  {
    title: "9. Limitações importantes",
    paragraphs: [
      "Esta política não transforma a calculadora em serviço de consultoria jurídica, contábil, tributária, trabalhista ou previdenciária. O site oferece uma referência informativa automatizada com base nas regras implementadas e nas entradas fornecidas pelo usuário.",
      "O resultado exibido não substitui holerite, parecer profissional, conferência com contador, departamento pessoal, advogado ou documentos oficiais do empregador.",
    ],
  },
  {
    title: "10. Alterações",
    paragraphs: [
      "A Política de Privacidade pode ser ajustada a qualquer momento para refletir mudanças legais, operacionais ou funcionais do serviço. A versão vigente será a publicada nesta página.",
    ],
  },
];

export default function PrivacyPage() {
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
                Política de Privacidade
              </p>
              <h1 className="font-display text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
                Regras de privacidade para o uso da calculadora de salário líquido.
              </h1>
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Última atualização: 2 de abril de 2026.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border bg-white p-6 text-sm leading-7 text-muted-foreground md:p-8">
              <p>
                Em resumo: a simulação funciona sem conta e foi pensada para operar
                localmente no navegador. Ainda assim, o acesso ao site pode gerar
                registros técnicos mínimos de infraestrutura, segurança e disponibilidade.
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
