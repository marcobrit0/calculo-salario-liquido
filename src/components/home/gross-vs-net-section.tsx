import { grossVsNetBlocks } from "@/lib/home-content";

import { SectionHeading } from "@/components/home/section-heading";

export function GrossVsNetSection() {
  return (
    <section id="bruto-vs-liquido" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <SectionHeading
            eyebrow="Bruto vs líquido"
            title="Salário bruto vs líquido: o que cada um significa"
            titleClassName="max-w-xl"
          />

          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              {grossVsNetBlocks.map((item, index) => (
                <article
                  key={item.title}
                  className="animate-rise rounded-[1.75rem] border border-black/8 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <h3 className="font-display text-[2rem] leading-[1.02] tracking-[-0.04em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    <strong className="text-foreground">{item.title}</strong> {item.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="rounded-[2rem] border border-black/8 bg-neutral-100 p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-5">
                  <p className="text-base leading-7 text-muted-foreground">
                    <strong className="text-foreground">Por que a diferença importa:</strong> Quem
                    ganha R$ 5.000 brutos recebe R$ 4.498,49 líquidos — uma diferença de
                    R$ 501,51. Mas quem ganha R$ 10.000 brutos recebe R$ 7.442,36 líquidos
                    — uma diferença de R$ 2.557,64. Os descontos não são lineares: quanto
                    maior o bruto, maior a proporção descontada.
                  </p>
                  <p className="text-base leading-7 text-foreground">
                    Essa é a razão pela qual comparar ofertas de emprego pelo bruto pode
                    ser enganoso. Dois empregos com R$ 2.000 de diferença no bruto podem
                    ter R$ 1.200 de diferença no líquido.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/8 bg-white p-5">
                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
                        <span>R$ 5.000 bruto</span>
                        <span>R$ 4.498,49 líquido</span>
                      </div>
                      <div className="h-3 rounded-full bg-black/8">
                        <div className="h-3 w-[90%] rounded-full bg-neutral-950" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
                        <span>R$ 10.000 bruto</span>
                        <span>R$ 7.442,36 líquido</span>
                      </div>
                      <div className="h-3 rounded-full bg-black/8">
                        <div className="h-3 w-[74%] rounded-full bg-neutral-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
