import type { Metadata } from "next";

import { HomePage } from "@/components/home/home-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Calculadora de Salário Líquido CLT 2026 — Grátis Online",
  description:
    "Calcule salário líquido CLT em segundos com INSS 2026, IRRF 2026 e Lei 15.270/2025. Simule bruto para líquido ou líquido para bruto — grátis e atualizado.",
  pathname: "/",
});

export default function Page() {
  return <HomePage />;
}
