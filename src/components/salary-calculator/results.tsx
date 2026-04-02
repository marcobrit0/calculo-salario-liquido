import { Calculator, Landmark, Scale, Wallet } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/salary";

import type { SalaryCalculatorResultProps } from "@/components/salary-calculator/types";

export function SalaryCalculatorResults({
  result,
  labels,
}: SalaryCalculatorResultProps) {
  return (
    <div className="flex flex-col gap-4 xl:sticky xl:top-10 xl:self-start">
      <div className="rounded-[1.5rem] bg-neutral-950 p-6 text-white md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
              {labels.primary}
            </p>
            <p className="mt-3 font-display text-[clamp(2.8rem,5vw,5rem)] leading-none tracking-[-0.05em]">
              {formatCurrency(result.primaryResult)}
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 text-sm text-zinc-300">
            <Badge variant="secondary">{result.selectedDeductionLabel}</Badge>
            <span>
              {labels.secondary}:{" "}
              <strong className="font-medium text-white">
                {formatCurrency(result.secondaryResult)}
              </strong>
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-3 border-t border-white/10 pt-6 md:grid-cols-3">
          <MetricItem
            icon={Calculator}
            label="INSS"
            value={formatCurrency(result.inss)}
          />
          <MetricItem icon={Scale} label="IRRF" value={formatCurrency(result.irrf)} />
          <MetricItem
            icon={Wallet}
            label="Base IRRF"
            value={formatCurrency(result.irrfBase)}
          />
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-black/8 bg-neutral-50 p-6">
        <div className="flex flex-col gap-3 text-sm leading-6 text-muted-foreground">
          <SummaryRow label="Salário bruto" value={formatCurrency(result.grossSalary)} />
          <Separator />
          <SummaryRow
            label="INSS do trabalhador"
            value={`- ${formatCurrency(result.inss)}`}
          />
          <Separator />
          <SummaryRow
            label="Pensão alimentícia"
            value={`- ${formatCurrency(result.pension)}`}
          />
          <Separator />
          <SummaryRow label="IRRF final" value={`- ${formatCurrency(result.irrf)}`} />
          <Separator />
          <SummaryRow
            label="Redução mensal da Lei 15.270/2025"
            value={
              result.irrfReduction ? formatCurrency(result.irrfReduction) : "R$ 0,00"
            }
          />
        </div>
      </div>

      <Alert>
        <Landmark className="size-4" />
        <AlertTitle>O cálculo escolhe automaticamente o regime mais vantajoso.</AlertTitle>
        <AlertDescription>
          {result.selectedDeductionLabel}. Deduções legais consideradas:{" "}
          {formatCurrency(result.legalDeduction)}. Desconto simplificado mensal:{" "}
          {formatCurrency(result.simplifiedDeduction)}.
        </AlertDescription>
      </Alert>

      {result.irrfReduction > 0 ? (
        <Alert>
          <Scale className="size-4" />
          <AlertTitle>Redução do IRRF aplicada.</AlertTitle>
          <AlertDescription>
            A renda mensal informada ficou dentro da faixa de redução prevista pela Lei
            15.270/2025, então o imposto calculado foi abatido em{" "}
            {formatCurrency(result.irrfReduction)}.
          </AlertDescription>
        </Alert>
      ) : null}

      <p className="text-sm leading-6 text-muted-foreground">
        Esse cálculo usa as tabelas oficiais de 2026. Para conferir, veja as fontes no
        final da página.
      </p>
    </div>
  );
}

function MetricItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Calculator;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 size-4 text-zinc-400" />
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{label}</p>
        <p className="mt-1 text-sm text-zinc-300">{value}</p>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span>{label}</span>
      <strong className="font-mono text-sm text-foreground">{value}</strong>
    </div>
  );
}
