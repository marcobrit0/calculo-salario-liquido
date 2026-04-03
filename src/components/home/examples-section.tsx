import { formatCurrency } from "@/lib/salary";
import { exampleResults } from "@/lib/home-content";

import { SectionHeading } from "@/components/home/section-heading";

export function ExamplesSection() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-16">
        <SectionHeading
          eyebrow="Exemplos"
          title="Quanto sobra na prática: 3 faixas de salário simuladas"
          description="Cenários reais com os mesmos cálculos da ferramenta acima. Clique para ajustar no simulador."
          titleClassName="max-w-lg"
          descriptionClassName="max-w-md"
        />

        <div className="flex flex-col divide-y divide-border rounded-[2rem] border border-border bg-white">
          {exampleResults.map((item) => (
            <article
              key={item.title}
              className="group grid gap-5 px-6 py-6 transition-colors duration-300 hover:bg-neutral-50 md:grid-cols-[1fr_auto] md:px-8"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
                <div className="pt-2">
                  <a
                    href={item.href}
                    className="inline-flex h-10 items-center justify-center rounded-full border border-border px-4 text-sm font-medium text-foreground transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-100"
                  >
                    Ajustar no simulador
                  </a>
                </div>
              </div>

              <div className="grid gap-2 text-sm leading-6 text-foreground transition-transform duration-300 group-hover:translate-x-1 md:min-w-64">
                <div className="flex items-center justify-between gap-4">
                  <span>Líquido estimado</span>
                  <strong>{formatCurrency(item.result.netSalary)}</strong>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>INSS</span>
                  <strong>{formatCurrency(item.result.inss)}</strong>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>IRRF final</span>
                  <strong>{formatCurrency(item.result.irrf)}</strong>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Dedução escolhida</span>
                  <strong>{item.result.selectedDeductionLabel}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
