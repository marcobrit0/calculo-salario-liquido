import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteLogo } from "@/components/site-logo";

type ContentPageProps = {
  children: React.ReactNode;
  jsonLd?: Record<string, unknown>;
};

const navLinks = [
  { label: "Tabela INSS", href: "/tabela-inss-2026" },
  { label: "Tabela IRRF", href: "/tabela-irrf-2026" },
  { label: "Como calcular", href: "/como-calcular-salario-liquido" },
  { label: "Blog", href: "/blog" },
] as const;

export function ContentPage({ children, jsonLd }: ContentPageProps) {
  return (
    <>
      <main className="bg-background text-foreground">
        {jsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        ) : null}

        <header className="border-b border-border bg-background">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
            <SiteLogo href="/" />
            <div className="hidden items-center gap-2 md:flex">
              <nav className="flex items-center gap-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex h-9 items-center justify-center rounded-full px-4 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/#calculadora"
                className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                Calculadora
              </Link>
            </div>

            {/* Mobile nav */}
            <details className="group relative md:hidden">
              <summary className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border transition-colors hover:bg-accent">
                <svg
                  className="h-4 w-4 text-foreground group-open:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className="hidden h-4 w-4 text-foreground group-open:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </summary>
              <nav className="absolute right-0 top-full z-50 mt-2 flex w-56 flex-col gap-1 rounded-2xl border border-border bg-background p-3 shadow-lg">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/#calculadora"
                  className="mt-1 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
                >
                  Calculadora
                </Link>
              </nav>
            </details>
          </div>
        </header>

        {children}
      </main>

      <SiteFooter />
    </>
  );
}

type ContentHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ContentHero({ eyebrow, title, description }: ContentHeroProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="max-w-3xl animate-rise">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

type ContentBodyProps = {
  children: React.ReactNode;
};

export function ContentBody({ children }: ContentBodyProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  );
}

export function ContentCTA() {
  return (
    <div className="mt-12 rounded-2xl border border-border bg-neutral-950 p-8 text-center text-white md:p-10">
      <h2 className="font-display text-2xl tracking-[-0.03em] md:text-3xl">
        Calcule seu salário líquido
      </h2>
      <p className="mt-3 text-sm leading-6 text-zinc-400">
        Simulação com INSS 2026, IRRF 2026 e Lei 15.270/2025.
      </p>
      <Link
        href="/#calculadora"
        className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
      >
        Calcular meu salário líquido
      </Link>
    </div>
  );
}

type BlogArticleHeaderProps = {
  breadcrumbLabel: string;
  date: string;
  readingTime: string;
};

export function BlogArticleHeader({
  breadcrumbLabel,
  date,
  readingTime,
}: BlogArticleHeaderProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
      <nav className="flex items-center gap-1.5">
        <Link
          href="/blog"
          className="underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Blog
        </Link>
        <span className="text-border">/</span>
        <span className="text-foreground">{breadcrumbLabel}</span>
      </nav>
      <span className="text-border">·</span>
      <span>Equipe Salário Líquido</span>
      <span className="text-border">·</span>
      <time>{date}</time>
      <span className="text-border">·</span>
      <span>{readingTime}</span>
    </div>
  );
}

type ContentRelatedLinksProps = {
  links: ReadonlyArray<{ label: string; href: string }>;
};

export function ContentRelatedLinks({ links }: ContentRelatedLinksProps) {
  return (
    <p className="mt-8 text-sm text-muted-foreground">
      Veja também:{" "}
      {links.map((link, index) => (
        <span key={link.href}>
          {index > 0 ? " · " : ""}
          <Link
            href={link.href}
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        </span>
      ))}
    </p>
  );
}
