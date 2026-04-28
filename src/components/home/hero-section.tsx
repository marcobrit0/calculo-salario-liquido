import Link from "next/link";

import { SiteLogo } from "@/components/site-logo";
import { siteNavigationLinks } from "@/lib/home-content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%),linear-gradient(120deg,rgba(255,255,255,0.08),transparent_40%),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:auto,auto,56px_56px,56px_56px] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-10 lg:px-16">
        <div className="pointer-events-none sticky top-6 z-20">
          <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/12 bg-black/30 px-4 py-3 backdrop-blur-xl md:px-6">
            <SiteLogo href="/" variant="light" />
            <div className="hidden items-center gap-3 md:flex">
              <nav className="flex items-center gap-2">
                {siteNavigationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-posthog-event="navigation_link_clicked"
                    data-posthog-label={item.label}
                    data-posthog-href={item.href}
                    className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm text-zinc-300 transition-colors hover:bg-white/8 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <a
                href="#calculadora"
                data-posthog-event="hero_cta_clicked"
                data-posthog-label="Calcular salário"
                data-posthog-href="#calculadora"
                className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
              >
                Calcular salário
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col pb-20 pt-10 md:pb-24 md:pt-14">
          <div className="flex max-w-5xl animate-rise flex-col gap-6 md:gap-8">
            <div className="max-w-5xl">
              <h1 className="max-w-5xl font-display text-[clamp(3.1rem,8.8vw,7rem)] leading-[0.9] tracking-[-0.055em] text-white">
                Descubra quanto do seu salário sobra depois dos descontos
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
                Simule INSS, IRRF e a nova isenção da Lei 15.270/2025 em segundos.
                Informe o bruto, veja o líquido. Ou informe o líquido desejado e descubra
                quanto precisa ganhar.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#calculadora"
                data-posthog-event="hero_cta_clicked"
                data-posthog-label="Calcular meu salário líquido"
                data-posthog-href="#calculadora"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
              >
                Calcular meu salário líquido
              </a>
              <a
                href="#metodologia"
                data-posthog-event="hero_cta_clicked"
                data-posthog-label="Como funciona o cálculo"
                data-posthog-href="#metodologia"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/8"
              >
                Como funciona o cálculo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
