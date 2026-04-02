import { officialSourceLinks } from "@/lib/home-content";

export function SourcesSection() {
  return (
    <section className="border-t border-border bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-16">
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Fontes</p>
          <h2 className="max-w-2xl font-display text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
            Transparência para conferir o cálculo salário líquido em fontes oficiais.
          </h2>
          <p className="max-w-xl text-base leading-7 text-zinc-300">
            A fórmula usada pelo simulador parte de normas públicas. Por isso, os links
            abaixo ficam visíveis para quem quiser validar tabelas, faixas e a base
            legal da redução aplicada no IRRF.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {officialSourceLinks.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-2 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
            >
              <span className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                Fonte oficial {index + 1}
              </span>
              <span className="text-lg text-white transition-colors duration-200 group-hover:text-zinc-300">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
