"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Calculator, Landmark, Scale, Wallet } from "lucide-react";

import {
  DEFAULT_CALCULATOR_STATE,
  buildCalculatorHref,
  parseCalculatorSearchParams,
  type ShareableCalculatorState,
} from "@/lib/calculator-query";
import {
  calculateSalaryBreakdown,
  formatCurrency,
  type CalculationMode,
} from "@/lib/salary";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function parseLocaleNumber(value: string) {
  const sanitized = value.trim().replace(/\s+/g, "");

  if (!sanitized) {
    return 0;
  }

  const normalized = sanitized.includes(",") && sanitized.includes(".")
    ? sanitized.replace(/\./g, "").replace(",", ".")
    : sanitized.replace(",", ".");

  const numeric = Number(normalized.replace(/[^\d.-]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function parseDependents(value: string) {
  const numeric = Number.parseInt(value.replace(/[^\d-]/g, ""), 10);
  return Number.isFinite(numeric) ? Math.max(0, numeric) : 0;
}

function formatCurrencyInput(value: string) {
  const numeric = parseLocaleNumber(value);
  return numeric ? numeric.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "";
}

function formatDependentsInput(value: string) {
  const numeric = parseDependents(value);
  return String(numeric);
}

const resultLabels = {
  "gross-to-net": {
    primary: "Salário líquido estimado",
    secondary: "Salário bruto informado",
  },
  "net-to-gross": {
    primary: "Salário bruto estimado",
    secondary: "Líquido desejado",
  },
} as const;

function subscribeToLocationChange(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);

  return () => {
    window.removeEventListener("popstate", onStoreChange);
  };
}

function getLocationSearchSnapshot() {
  return window.location.search;
}

function getServerLocationSearchSnapshot() {
  return "";
}

function getInitialStateFromLocation(search: string) {
  const params = Object.fromEntries(new URLSearchParams(search).entries());
  return parseCalculatorSearchParams(params);
}

function formatAmountForInput(value: number) {
  return value
    ? value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "";
}

function createInputState(initialState: ShareableCalculatorState) {
  return {
    mode: initialState.mode,
    salaryInput: formatAmountForInput(initialState.amount),
    dependentsInput: String(initialState.dependents),
    pensionInput: formatAmountForInput(initialState.pension),
  };
}

const defaultShareStatus = "Copiar link desta simulação";

function SalaryCalculatorPanel({
  className,
  initialState,
}: {
  className?: string;
  initialState: ShareableCalculatorState;
}) {
  const initialInputState = createInputState(initialState);
  const [mode, setMode] = useState<CalculationMode>(initialInputState.mode);
  const [salaryInput, setSalaryInput] = useState(initialInputState.salaryInput);
  const [dependentsInput, setDependentsInput] = useState(initialInputState.dependentsInput);
  const [pensionInput, setPensionInput] = useState(initialInputState.pensionInput);
  const [shareStatus, setShareStatus] = useState(defaultShareStatus);

  const parsedSalary = parseLocaleNumber(salaryInput);
  const parsedDependents = parseDependents(dependentsInput);
  const parsedPension = parseLocaleNumber(pensionInput);

  const result = calculateSalaryBreakdown({
    mode,
    amount: parsedSalary,
    dependents: parsedDependents,
    pension: parsedPension,
  });

  const labels = resultLabels[mode];

  useEffect(() => {
    const nextUrl = buildCalculatorHref(
      {
        mode,
        amount: parsedSalary,
        dependents: parsedDependents,
        pension: parsedPension,
      },
      { includeHash: false }
    );

    const nextHash = window.location.hash === "#calculadora" ? "#calculadora" : "";
    window.history.replaceState({}, "", `${nextUrl}${nextHash}`);
  }, [mode, parsedDependents, parsedPension, parsedSalary]);

  useEffect(() => {
    if (shareStatus === defaultShareStatus) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShareStatus(defaultShareStatus);
    }, 2200);

    return () => window.clearTimeout(timeoutId);
  }, [shareStatus]);

  return (
    <section
      id="calculadora"
      className={cn(
        "animate-rise rounded-[2rem] border border-black/8 bg-white p-6 text-black shadow-[0_32px_80px_rgba(0,0,0,0.12)] md:p-8 lg:p-10",
        className
      )}
    >
      <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:gap-12">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Badge variant="outline">Atualizado para abril de 2026</Badge>
            <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              empregado CLT
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <h2 className="font-display text-4xl leading-none tracking-[-0.04em] text-black md:text-5xl">
              Calculadora de salário líquido para CLT.
            </h2>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              Informe o valor mensal, escolha entre bruto para líquido ou líquido para
              bruto e confira os descontos de INSS, IRRF e a redução mensal da Lei
              15.270/2025.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <FieldGroup>
              <Field>
                <FieldLabel>Modo de cálculo</FieldLabel>
                <ToggleGroup
                  value={[mode]}
                  onValueChange={(value) => {
                    if (value[0]) {
                      setMode(value[0] as CalculationMode);
                    }
                  }}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <ToggleGroupItem value="gross-to-net" className="flex-1">
                    Bruto para líquido
                  </ToggleGroupItem>
                  <ToggleGroupItem value="net-to-gross" className="flex-1">
                    Líquido para bruto
                  </ToggleGroupItem>
                </ToggleGroup>
              </Field>
            </FieldGroup>

            <div className="grid gap-5 md:grid-cols-2">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="salary-value">
                    {mode === "gross-to-net"
                      ? "Salário bruto mensal"
                      : "Salário líquido desejado"}
                  </FieldLabel>
                  <Input
                    id="salary-value"
                    inputMode="decimal"
                    placeholder="5.000,00"
                    value={salaryInput}
                    onChange={(event) => setSalaryInput(event.target.value)}
                    onBlur={() => setSalaryInput((current) => formatCurrencyInput(current))}
                    className="h-11 text-base"
                  />
                  <FieldDescription>
                    Informe apenas a remuneração mensal fixa usada no cálculo principal.
                  </FieldDescription>
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="dependents">Dependentes no IRRF</FieldLabel>
                  <Input
                    id="dependents"
                    inputMode="numeric"
                    placeholder="0"
                    value={dependentsInput}
                    onChange={(event) => setDependentsInput(event.target.value)}
                    onBlur={() => setDependentsInput((current) => formatDependentsInput(current))}
                    className="h-11 text-base"
                  />
                  <FieldDescription>
                    Use a quantidade considerada no imposto de renda.
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </div>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="pension">Pensão alimentícia judicial mensal</FieldLabel>
                <Input
                  id="pension"
                  inputMode="decimal"
                  placeholder="0,00"
                  value={pensionInput}
                  onChange={(event) => setPensionInput(event.target.value)}
                  onBlur={() => setPensionInput((current) => formatCurrencyInput(current))}
                  className="h-11 text-base"
                />
                <FieldDescription>
                  Informe apenas valores pagos por decisão judicial ou escritura pública.
                </FieldDescription>
              </Field>
            </FieldGroup>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setMode("gross-to-net");
                  setSalaryInput("5.000,00");
                  setDependentsInput("0");
                  setPensionInput("");
                }}
              >
                Resetar simulação
              </Button>
              <Button
                variant="ghost"
                onClick={async () => {
                  const url = `${window.location.origin}${buildCalculatorHref({
                    mode,
                    amount: parsedSalary,
                    dependents: parsedDependents,
                    pension: parsedPension,
                  })}`;

                  try {
                    await window.navigator.clipboard.writeText(url);
                    setShareStatus("Link copiado para compartilhar esta simulação");
                  } catch {
                    setShareStatus("Não foi possível copiar o link agora");
                  }
                }}
              >
                Copiar link
              </Button>
              <span className="text-sm text-muted-foreground">{shareStatus}</span>
            </div>
          </div>
        </div>

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
              <div className="flex items-start gap-3">
                <Calculator className="mt-0.5 size-4 text-zinc-400" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">INSS</p>
                  <p className="mt-1 text-sm text-zinc-300">{formatCurrency(result.inss)}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Scale className="mt-0.5 size-4 text-zinc-400" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">IRRF</p>
                  <p className="mt-1 text-sm text-zinc-300">{formatCurrency(result.irrf)}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Wallet className="mt-0.5 size-4 text-zinc-400" />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Base IRRF
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    {formatCurrency(result.irrfBase)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-black/8 bg-neutral-50 p-6">
            <div className="flex flex-col gap-3 text-sm leading-6 text-muted-foreground">
              <div className="flex items-center justify-between gap-4">
                <span>Salário bruto</span>
                <strong className="font-mono text-sm text-foreground">
                  {formatCurrency(result.grossSalary)}
                </strong>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span>INSS do trabalhador</span>
                <strong className="font-mono text-sm text-foreground">
                  - {formatCurrency(result.inss)}
                </strong>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span>Pensão alimentícia</span>
                <strong className="font-mono text-sm text-foreground">
                  - {formatCurrency(result.pension)}
                </strong>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span>IRRF final</span>
                <strong className="font-mono text-sm text-foreground">
                  - {formatCurrency(result.irrf)}
                </strong>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span>Redução mensal da Lei 15.270/2025</span>
                <strong className="font-mono text-sm text-foreground">
                  {result.irrfReduction ? formatCurrency(result.irrfReduction) : "R$ 0,00"}
                </strong>
              </div>
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
                A renda mensal informada ficou dentro da faixa de redução prevista pela
                Lei 15.270/2025, então o imposto calculado foi abatido em{" "}
                {formatCurrency(result.irrfReduction)}.
              </AlertDescription>
            </Alert>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function SalaryCalculator({ className }: { className?: string }) {
  const locationSearch = useSyncExternalStore(
    subscribeToLocationChange,
    getLocationSearchSnapshot,
    getServerLocationSearchSnapshot
  );
  const initialState =
    locationSearch === ""
      ? DEFAULT_CALCULATOR_STATE
      : getInitialStateFromLocation(locationSearch);

  return (
    <SalaryCalculatorPanel
      key={locationSearch || "default"}
      className={className}
      initialState={initialState}
    />
  );
}
