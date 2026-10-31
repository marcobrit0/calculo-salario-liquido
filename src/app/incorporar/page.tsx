import type { Metadata } from "next";

import {
  ContentBody,
  ContentCTA,
  ContentHero,
  ContentPage,
  ContentRelatedLinks,
} from "@/components/content-page";
import { createAbsoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Incorpore a calculadora de salário líquido no seu site",
  description:
    "Copie o código e coloque a calculadora de salário líquido CLT 2026 no seu blog ou site de contabilidade, grátis e sem cadastro.",
  pathname: "/incorporar",
});

const embedUrl = createAbsoluteUrl("/embed");

const snippet = `<iframe src="${embedUrl}" width="100%" height="1700" style="border:0" title="Calculadora de salário líquido CLT 2026" loading="lazy" allow="clipboard-write"></iframe>`;

export default function Page() {
  return (
    <ContentPage>
      <ContentHero
        eyebrow="Para blogs e sites de contabilidade"
        title="Incorpore a calculadora de salário líquido"
        description="Cole o código abaixo em qualquer página do seu site. O visitante simula sem sair da sua página, e a calculadora é a mesma do site, com INSS 2026, IRRF 2026 e Lei 15.270/2025."
      />
      <ContentBody>
        <h2 className="font-display text-2xl tracking-[-0.03em] md:text-3xl">
          O código
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Copie e cole onde a calculadora deve aparecer. Sem cadastro e sem
          custo. Os valores são calculados no navegador; registros técnicos
          do acesso seguem a{" "}
          <a href="/privacidade" className="underline underline-offset-2">
            política de privacidade
          </a>
          .
        </p>
        <pre className="mt-6 overflow-x-auto rounded-2xl border border-border bg-neutral-950 p-5 text-sm leading-6 text-zinc-100">
          <code>{snippet}</code>
        </pre>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          O <code>height</code> de 1700 cobre telas estreitas, onde a
          calculadora empilha; em layouts largos pode baixar o valor. Para
          abrir com um valor já preenchido, adicione <code>?valor=3000</code>{" "}
          ao final da URL.
        </p>
        <ContentRelatedLinks
          links={[
            { href: "/", label: "Calculadora de salário líquido" },
            { href: "/tabela-inss-2026", label: "Tabela INSS 2026" },
            { href: "/tabela-irrf-2026", label: "Tabela IRRF 2026" },
          ]}
        />
        <ContentCTA />
      </ContentBody>
    </ContentPage>
  );
}
