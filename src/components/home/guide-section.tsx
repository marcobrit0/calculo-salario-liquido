import { guideBlocks } from "@/lib/home-content";

import { SectionHeading } from "@/components/home/section-heading";

export function GuideSection() {
  return (
    <section id="guia" className="border-t border-border bg-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Guia"
              title="Cálculo de salário líquido: o que você precisa saber"
              description="Os descontos que separam o bruto do líquido explicados sem jargão, com exemplos práticos."
              titleClassName="max-w-xl"
              descriptionClassName="max-w-lg"
            />

            <div className="rounded-[1.75rem] border border-black/8 bg-white px-6 py-5">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Leitura rápida
              </p>
              <p className="mt-3 text-sm leading-6 text-foreground">
                Primeiro entenda a ordem do cálculo. Depois compare o regime de dedução.
                Por fim, valide se existem rubricas fora da simulação.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white">
            {guideBlocks.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 border-t border-black/8 px-6 py-6 first:border-t-0 md:grid-cols-[4.5rem_15rem_1fr] md:gap-6 md:px-8 md:py-7"
              >
                <div className="flex items-start">
                  <span className="font-mono text-xs tracking-[0.28em] text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="max-w-xs font-display text-[1.9rem] leading-[1.02] tracking-[-0.035em] text-foreground">
                  {item.title}
                </h3>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}

            <div className="border-t border-black/8 bg-[linear-gradient(135deg,rgba(0,0,0,0.02),rgba(0,0,0,0.05))] px-6 py-6 md:px-8">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Resumo
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground">
                O salário líquido não depende só do bruto. Ele muda conforme a
                contribuição previdenciária, a forma de dedução escolhida no IRRF e a
                existência de abatimentos específicos previstos na legislação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
