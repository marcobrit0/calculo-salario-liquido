import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Salário Líquido",
    short_name: "Salário Líquido",
    description: "Calculadora de salário líquido CLT com regras brasileiras de 2026.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#0a0a0a",
    lang: "pt-BR",
  };
}
