"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  formatPtBrCurrencyInput,
  formatPtBrIntegerInput,
  parseNonNegativeInteger,
  parsePtBrNumber,
} from "@/lib/pt-br";
import type { CalculationMode } from "@/lib/salary";

import type {
  SalaryCalculatorInputState,
  SalaryCalculatorSetters,
} from "@/components/salary-calculator/types";

type SalaryCalculatorFormProps = SalaryCalculatorInputState &
  SalaryCalculatorSetters & {
    onReset: () => void;
    onCopyLink: () => void;
    shareStatus: string;
  };

export function SalaryCalculatorForm({
  mode,
  salaryInput,
  dependentsInput,
  pensionInput,
  setMode,
  setSalaryInput,
  setDependentsInput,
  setPensionInput,
  onReset,
  onCopyLink,
  shareStatus,
}: SalaryCalculatorFormProps) {
  return (
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
              onBlur={() =>
                setSalaryInput((current) => formatPtBrCurrencyInput(parsePtBrNumber(current)))
              }
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
              onBlur={() =>
                setDependentsInput((current) =>
                  formatPtBrIntegerInput(parseNonNegativeInteger(current))
                )
              }
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
            onBlur={() =>
              setPensionInput((current) => formatPtBrCurrencyInput(parsePtBrNumber(current)))
            }
            className="h-11 text-base"
          />
          <FieldDescription>
            Informe apenas valores pagos por decisão judicial ou escritura pública.
          </FieldDescription>
        </Field>
      </FieldGroup>

      <div className="mt-2 flex flex-wrap items-center gap-3">
        <Button variant="outline" onClick={onReset}>
          Resetar simulação
        </Button>
        <Button variant="ghost" onClick={onCopyLink}>
          Copiar link
        </Button>
        <span className="text-sm text-muted-foreground">{shareStatus}</span>
      </div>
    </div>
  );
}
