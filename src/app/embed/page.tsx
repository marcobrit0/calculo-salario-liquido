import type { Metadata } from "next";

import { SalaryCalculator } from "@/components/salary-calculator";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Calculadora de salário líquido CLT 2026 — incorporar",
  description:
    "Versão incorporável da calculadora de salário líquido CLT 2026, com INSS 2026, IRRF 2026 e Lei 15.270/2025.",
  pathname: "/embed",
  robots: {
    index: false,
    follow: false,
  },
});

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-100 px-3 py-3 sm:px-4 sm:py-4">
      <h1 className="sr-only">Calculadora de salário líquido CLT 2026</h1>
      <SalaryCalculator />
      <p className="mt-3 text-center text-xs text-muted-foreground">
        <a
          href={siteConfig.url}
          target="_blank"
          rel="noopener"
          className="underline underline-offset-2"
        >
          Calculadora por Salário Líquido
        </a>
      </p>
      <p className="mt-1 text-center text-xs text-muted-foreground">
        Simulação informativa —{" "}
        <a
          href={siteConfig.url}
          target="_blank"
          rel="noopener"
          className="underline underline-offset-2"
        >
          fontes e metodologia no site
        </a>
      </p>
    </main>
  );
}
