import { inssTableRows } from "@/lib/home-content";

import { SectionHeading } from "@/components/home/section-heading";

const barHeights = ["h-24", "h-32", "h-40", "h-48"] as const;

export function InssTableSection() {
  return (
    <section id="tabela-inss" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Tabela INSS 2026"
            title="Tabela do INSS 2026: faixas e alíquotas"
            description="As faixas progressivas do INSS que a calculadora usa para determinar o desconto previdenciário."
            titleClassName="max-w-xl"
            descriptionClassName="max-w-lg"
          />

          <div className="rounded-[1.75rem] border border-black/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.06))] p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Leitura visual
            </p>
            <div className="mt-8 flex items-end gap-3">
              {inssTableRows.map((item, index) => (
                <div
                  key={item.salaryRange}
                  className="flex flex-1 animate-rise flex-col items-center gap-3"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div
                    className={`w-full rounded-t-[1.5rem] bg-neutral-950 ${barHeights[index]}`}
                  />
                  <span className="font-mono text-xs tracking-[0.22em] text-muted-foreground">
                    {item.rate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-black/8 bg-neutral-50">
                  <th className="px-6 py-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Faixa de salário
                  </th>
                  <th className="px-6 py-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Alíquota
                  </th>
                </tr>
              </thead>
              <tbody>
                {inssTableRows.map((item) => (
                  <tr key={item.salaryRange} className="border-t border-black/8 first:border-t-0">
                    <td className="px-6 py-5 text-sm leading-6 text-foreground">
                      {item.salaryRange}
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-foreground">{item.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-black/8 px-6 py-6 md:px-8">
            <p className="text-base leading-7 text-muted-foreground">
              O INSS é progressivo — funciona como o imposto de renda. Você não paga
              14% sobre o salário inteiro. Paga 7,5% sobre a primeira faixa, 9% sobre
              o que excede até a segunda, e assim por diante. O desconto máximo possível
              em 2026 é de R$ 988,09.
            </p>
            <p className="mt-5 text-base leading-7 text-foreground">
              <strong>Por que isso importa:</strong> muita gente acha que ganhando R$
              5.000, paga 14% de INSS. Na verdade, o desconto efetivo fica em torno de
              10%. A calculadora acima já faz essa conta por faixas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
