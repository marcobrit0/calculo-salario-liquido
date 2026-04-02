import type { CalculationMode } from "@/lib/salary";

export type ShareableCalculatorState = {
  mode: CalculationMode;
  amount: number;
  dependents: number;
  pension: number;
};

export const DEFAULT_CALCULATOR_STATE: ShareableCalculatorState = {
  mode: "gross-to-net",
  amount: 5000,
  dependents: 0,
  pension: 0,
};

const MODE_TO_QUERY_VALUE: Record<CalculationMode, string> = {
  "gross-to-net": "bruto-para-liquido",
  "net-to-gross": "liquido-para-bruto",
};

const QUERY_VALUE_TO_MODE = new Map(
  Object.entries(MODE_TO_QUERY_VALUE).map(([mode, value]) => [value, mode as CalculationMode])
);

function parseQueryNumber(value?: string | string[]) {
  const rawValue = Array.isArray(value) ? value[0] : value;

  if (!rawValue) {
    return 0;
  }

  const sanitized = rawValue.trim().replace(/\s+/g, "");
  const normalized =
    sanitized.includes(",") && sanitized.includes(".")
      ? sanitized.replace(/\./g, "").replace(",", ".")
      : sanitized.replace(",", ".");
  const numeric = Number(normalized.replace(/[^\d.-]/g, ""));

  return Number.isFinite(numeric) ? numeric : 0;
}

function parseDependents(value?: string | string[]) {
  const rawValue = Array.isArray(value) ? value[0] : value;
  const numeric = Number.parseInt((rawValue ?? "").replace(/[^\d-]/g, ""), 10);

  return Number.isFinite(numeric) ? Math.max(0, numeric) : 0;
}

function roundCurrency(value: number) {
  return Math.round(value * 100) / 100;
}

function clampPositive(value: number) {
  return roundCurrency(Math.max(0, value));
}

export function normalizeCalculatorState(state: ShareableCalculatorState): ShareableCalculatorState {
  return {
    mode: state.mode,
    amount: clampPositive(state.amount),
    dependents: Math.max(0, Math.trunc(state.dependents)),
    pension: clampPositive(state.pension),
  };
}

export function parseCalculatorSearchParams(searchParams: Record<string, string | string[] | undefined>) {
  const rawMode = Array.isArray(searchParams.modo) ? searchParams.modo[0] : searchParams.modo;
  const mode = QUERY_VALUE_TO_MODE.get(rawMode ?? "") ?? DEFAULT_CALCULATOR_STATE.mode;

  return normalizeCalculatorState({
    mode,
    amount: searchParams.valor ? parseQueryNumber(searchParams.valor) : DEFAULT_CALCULATOR_STATE.amount,
    dependents: searchParams.dependentes
      ? parseDependents(searchParams.dependentes)
      : DEFAULT_CALCULATOR_STATE.dependents,
    pension: searchParams.pensao ? parseQueryNumber(searchParams.pensao) : DEFAULT_CALCULATOR_STATE.pension,
  });
}

export function buildCalculatorHref(
  state: ShareableCalculatorState,
  options?: { includeHash?: boolean; includeDefaults?: boolean }
) {
  const normalizedState = normalizeCalculatorState(state);
  const params = new URLSearchParams();
  const includeDefaults = options?.includeDefaults ?? false;

  if (includeDefaults || normalizedState.mode !== DEFAULT_CALCULATOR_STATE.mode) {
    params.set("modo", MODE_TO_QUERY_VALUE[normalizedState.mode]);
  }

  if (includeDefaults || normalizedState.amount !== DEFAULT_CALCULATOR_STATE.amount) {
    params.set("valor", normalizedState.amount.toFixed(2));
  }

  if (includeDefaults || normalizedState.dependents !== DEFAULT_CALCULATOR_STATE.dependents) {
    params.set("dependentes", String(normalizedState.dependents));
  }

  if (includeDefaults || normalizedState.pension > 0) {
    params.set("pensao", normalizedState.pension.toFixed(2));
  }

  const query = params.toString();
  const hash = options?.includeHash === false ? "" : "#calculadora";

  return `/${query ? `?${query}` : ""}${hash}`;
}
