import { proposalComparisonMetrics } from "@/lib/home-content";

import { AnimatedComparisonBars } from "@/components/home/animated-comparison-bars";
import { SectionHeading } from "@/components/home/section-heading";

export function ProposalComparisonSection() {
  return (
    <section id="comparador-propostas" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Comparador de propostas"
            title="Compare duas propostas de emprego pelo líquido"
            description="Mesma calculadora, dois cenários lado a lado. Veja a diferença real no bolso."
            titleClassName="max-w-xl"
            descriptionClassName="max-w-lg"
          />

          <div className="rounded-[1.75rem] border border-black/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.06))] p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Cenários lado a lado
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Passe o mouse nas barras
              </p>
            </div>
            <AnimatedComparisonBars
              items={proposalComparisonMetrics}
              itemClassName="bg-white/60"
            />
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.06)] md:p-8">
          <p className="text-base leading-7 text-muted-foreground">
            Recebeu duas ofertas CLT com salários diferentes? A comparação pelo bruto
            esconde a realidade. Uma proposta de R$ 7.000 e outra de R$ 8.500 podem ter
            apenas R$ 900 de diferença no líquido — não R$ 1.500.
          </p>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            Use a calculadora acima para simular cada cenário e anote os resultados.
            Considere também benefícios não-salariais (plano de saúde, vale-refeição,
            bônus) que não entram no cálculo de INSS e IRRF.
          </p>
          <p className="mt-5 text-base leading-7 text-foreground">
            <strong>Dica:</strong> No modo líquido→bruto, defina quanto precisa receber
            por mês e descubra o bruto mínimo a negociar.
          </p>
        </div>
      </div>
    </section>
  );
}
