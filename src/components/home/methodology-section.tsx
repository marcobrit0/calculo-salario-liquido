import {
  excludedScopeItems,
  includedScopeItems,
  methodologySteps,
} from "@/lib/home-content";

import { SectionHeading } from "@/components/home/section-heading";

export function MethodologySection() {
  return (
    <section id="metodologia" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-16">
        <SectionHeading
          eyebrow="Metodologia"
          title="Como a calculadora chega no resultado"
          description="Três etapas, na mesma ordem que o departamento pessoal usa para fechar a folha."
          titleClassName="max-w-lg"
          descriptionClassName="max-w-md"
        />

        <div className="flex flex-col gap-10">
          {methodologySteps.map((item, index) => (
            <div key={item.title} className="flex flex-col gap-4">
              {index > 0 ? <div className="h-px w-full bg-border" /> : null}
              <div className="grid gap-3 md:grid-cols-[11rem_1fr] md:gap-6">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-base leading-7 text-muted-foreground">{item.body}</p>
              </div>
            </div>
          ))}

          <div className="grid gap-6 border-t border-border pt-6 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Inclui
              </h3>
              <ul className="flex flex-col gap-2 text-sm leading-6 text-foreground">
                {includedScopeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Fora do escopo
              </h3>
              <ul className="flex flex-col gap-2 text-sm leading-6 text-muted-foreground">
                {excludedScopeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
