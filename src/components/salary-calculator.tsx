"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import {
  DEFAULT_CALCULATOR_STATE,
  buildCalculatorHref,
  parseCalculatorSearchParams,
  type ShareableCalculatorState,
} from "@/lib/calculator-query";
import {
  formatPtBrCurrencyInput,
  formatPtBrIntegerInput,
  parseNonNegativeInteger,
  parsePtBrNumber,
} from "@/lib/pt-br";
import {
  calculateSalaryBreakdown,
  type CalculationMode,
} from "@/lib/salary";
import { cn } from "@/lib/utils";

import { SalaryCalculatorForm } from "@/components/salary-calculator/form";
import { SalaryCalculatorResults } from "@/components/salary-calculator/results";

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

const defaultShareStatus = "Copiar link desta simulação";

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
  return typeof window === "undefined" ? "" : window.location.search;
}

function getInitialStateFromLocation(search: string) {
  const params = Object.fromEntries(new URLSearchParams(search).entries());
  return parseCalculatorSearchParams(params);
}

function createInputState(initialState: ShareableCalculatorState) {
  return {
    mode: initialState.mode,
    salaryInput: formatPtBrCurrencyInput(initialState.amount),
    dependentsInput: formatPtBrIntegerInput(initialState.dependents),
    pensionInput: formatPtBrCurrencyInput(initialState.pension),
  };
}

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

  const parsedSalary = parsePtBrNumber(salaryInput);
  const parsedDependents = parseNonNegativeInteger(dependentsInput);
  const parsedPension = parsePtBrNumber(pensionInput);

  const result = calculateSalaryBreakdown({
    mode,
    amount: parsedSalary,
    dependents: parsedDependents,
    pension: parsedPension,
  });

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

  function handleReset() {
    setMode(DEFAULT_CALCULATOR_STATE.mode);
    setSalaryInput(formatPtBrCurrencyInput(DEFAULT_CALCULATOR_STATE.amount));
    setDependentsInput(formatPtBrIntegerInput(DEFAULT_CALCULATOR_STATE.dependents));
    setPensionInput(formatPtBrCurrencyInput(DEFAULT_CALCULATOR_STATE.pension));
  }

  async function handleCopyLink() {
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
  }

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
            <span className="inline-flex h-9 items-center rounded-full border border-border px-3 text-sm">
              Atualizado para abril de 2026
            </span>
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

          <p className="mt-6 text-sm leading-6 text-foreground">
            Resultado em segundos. Sem cadastro, sem e-mail, sem pegadinha.
          </p>

          <SalaryCalculatorForm
            mode={mode}
            salaryInput={salaryInput}
            dependentsInput={dependentsInput}
            pensionInput={pensionInput}
            setMode={setMode}
            setSalaryInput={setSalaryInput}
            setDependentsInput={setDependentsInput}
            setPensionInput={setPensionInput}
            onReset={handleReset}
            onCopyLink={handleCopyLink}
            shareStatus={shareStatus}
          />
        </div>

        <SalaryCalculatorResults result={result} labels={resultLabels[mode]} />
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
