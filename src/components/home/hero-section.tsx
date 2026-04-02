import { SiteLogo } from "@/components/site-logo";
import { heroHighlights, homeNavigationLinks } from "@/lib/home-content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%),linear-gradient(120deg,rgba(255,255,255,0.08),transparent_40%),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:auto,auto,56px_56px,56px_56px] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-10 lg:px-16">
        <div className="pointer-events-none sticky top-6 z-20">
          <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/12 bg-black/30 px-4 py-3 backdrop-blur-xl md:px-6">
            <SiteLogo href="/" variant="light" />
            <nav className="hidden items-center gap-2 md:flex">
              {homeNavigationLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm text-zinc-300 transition-colors hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col pb-24 pt-14 md:pb-28 md:pt-18">
          <div className="flex max-w-5xl animate-rise flex-col gap-8 md:gap-9">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-400">
              <span>Salário Líquido</span>
              <span className="text-zinc-600">/</span>
              <span>cálculo salário líquido</span>
              <span className="text-zinc-600">/</span>
              <span>CLT 2026</span>
            </div>

            <div className="max-w-5xl">
              <h1 className="max-w-5xl font-display text-[clamp(4rem,11vw,8.8rem)] leading-[0.88] tracking-[-0.06em] text-white">
                Descubra quanto do seu salário sobra depois dos descontos
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
                Simule INSS, IRRF e a nova isenção da Lei 15.270/2025 em segundos.
                Informe o bruto, veja o líquido. Ou informe o líquido desejado e descubra
                quanto precisa ganhar.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#calculadora"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
              >
                Calcular meu salário líquido
              </a>
              <a
                href="#metodologia"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/8"
              >
                Como funciona o cálculo
              </a>
            </div>

            <div className="grid gap-8 border-t border-white/12 pt-8 text-sm leading-6 text-zinc-300 md:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.title} className="flex animate-rise flex-col gap-2">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    {item.title}
                  </p>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
