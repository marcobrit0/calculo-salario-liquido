import type { Metadata } from "next";

import { HomePage } from "@/components/home/home-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cálculo Salário Líquido CLT 2026",
  description:
    "Cálculo salário líquido CLT com INSS 2026, IRRF 2026 e redução da Lei 15.270/2025. Use a calculadora de salário líquido para simular bruto para líquido ou líquido para bruto.",
  pathname: "/",
});

export default function Page() {
  return <HomePage />;
}
