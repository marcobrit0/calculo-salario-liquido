import Link from "next/link";

import { SiteLogo } from "@/components/site-logo";

const navigationLinks = [
  { label: "Calculadora", href: "/#calculadora" },
  { label: "Metodologia", href: "/#metodologia" },
  { label: "Guia", href: "/#guia" },
  { label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { label: "Privacidade", href: "/privacidade" },
  { label: "Termos de uso", href: "/termos" },
];

const sourceLinks = [
  {
    label: "Receita Federal",
    href: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026",
  },
  {
    label: "INSS",
    href: "https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal",
  },
  {
    label: "Lei 15.270/2025",
    href: "https://www.planalto.gov.br/ccivil_03/_Ato2023-2026/2025/Lei/L15270.htm",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] lg:px-16">
        <div className="flex flex-col gap-4">
          <SiteLogo href="/" variant="light" />
          <p className="max-w-sm text-sm leading-6 text-zinc-300">
            Simulador de salário líquido CLT com regras brasileiras de 2026 para
            estimar descontos de INSS, IRRF e redução mensal prevista em lei.
          </p>
          <p className="text-xs leading-5 text-zinc-500">
            Conteúdo informativo. A conferência final deve considerar holerite,
            convenções coletivas, adicionais, benefícios e políticas internas da
            empresa.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xs uppercase tracking-[0.28em] text-zinc-500">
            Navegação
          </h2>
          <nav className="flex flex-col gap-3 text-sm text-zinc-300">
            {navigationLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xs uppercase tracking-[0.28em] text-zinc-500">Legal</h2>
          <nav className="flex flex-col gap-3 text-sm text-zinc-300">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xs uppercase tracking-[0.28em] text-zinc-500">
            Fontes oficiais
          </h2>
          <div className="flex flex-col gap-3 text-sm text-zinc-300">
            {sourceLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
