import { irrfTableRows } from "@/lib/home-content";

import { AnimatedColumnChart } from "@/components/home/animated-column-chart";
import { SectionHeading } from "@/components/home/section-heading";

export function IrrfTableSection() {
  return (
    <section id="tabela-irrf" className="border-t border-border bg-neutral-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.04fr_0.96fr] lg:px-16">
        <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-black/8 bg-neutral-50">
                  <th className="px-6 py-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Base de cálculo mensal
                  </th>
                  <th className="px-6 py-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Alíquota
                  </th>
                  <th className="px-6 py-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Parcela a deduzir
                  </th>
                </tr>
              </thead>
              <tbody>
                {irrfTableRows.map((item) => (
                  <tr key={item.taxBase} className="border-t border-black/8 first:border-t-0">
                    <td className="px-6 py-5 text-sm leading-6 text-foreground">{item.taxBase}</td>
                    <td className="px-6 py-5 text-sm font-medium text-foreground">{item.rate}</td>
                    <td className="px-6 py-5 text-sm leading-6 text-foreground">
                      {item.deduction}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-black/8 px-6 py-6 md:px-8">
            <p className="text-base leading-7 text-muted-foreground">
              A base de cálculo não é o salário bruto — é o bruto menos INSS e menos as
              deduções (legais ou simplificada). Depois do imposto calculado pela tabela,
              ainda pode haver a redução da Lei 15.270/2025, que beneficia rendas até
              determinada faixa.
            </p>
            <p className="mt-5 text-base leading-7 text-foreground">
              <strong>Desconto simplificado vs deduções legais:</strong> Se você não tem
              dependentes nem paga pensão, o desconto simplificado de R$ 607,20/mês tende
              a ser melhor. Com dependentes (R$ 189,59 cada) ou pensão judicial, as
              deduções legais podem compensar. A calculadora testa os dois.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Tabela IRRF 2026"
            title="Tabela do IRRF 2026: alíquotas e deduções"
            description="As faixas do imposto de renda retido na fonte usadas no cálculo mensal, combinadas com a redução aplicada para rendas até R$ 5.000."
            titleClassName="max-w-xl"
            descriptionClassName="max-w-lg"
          />

          <div className="rounded-[1.75rem] border border-black/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.06))] p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Dedução em foco
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Passe o mouse nas barras
              </p>
            </div>
            <AnimatedColumnChart
              chartHeightClassName="h-48"
              items={irrfTableRows.map((item, index) => ({
                label: item.taxBase,
                value: item.rateValue,
                valueLabel: item.rate,
                note: item.deduction === "—" ? "Sem dedução" : `Dedução ${item.deduction}`,
                detail:
                  item.deduction === "—"
                    ? "Faixa isenta na tabela mensal do IRRF."
                    : `Parcela a deduzir desta faixa: ${item.deduction}.`,
                tone: index > 2 ? "dark" : index > 0 ? "mid" : "light",
              }))}
              labelClassName="text-[10px]"
            />
            <div className="mt-6 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-foreground shadow-sm">
              R$ 607,20/mês
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
