export type CalculationMode = "gross-to-net" | "net-to-gross";

type DeductionModel = "legal" | "simplified";

type SalaryCalculationInput = {
  mode: CalculationMode;
  amount: number;
  dependents: number;
  pension: number;
};

type SalaryBreakdown = {
  grossSalary: number;
  netSalary: number;
  primaryResult: number;
  secondaryResult: number;
  inss: number;
  pension: number;
  irrfBase: number;
  rawIrrf: number;
  irrfReduction: number;
  irrf: number;
  legalDeduction: number;
  simplifiedDeduction: number;
  selectedDeductionModel: DeductionModel;
  selectedDeductionLabel: string;
};

const INSS_BRACKETS = [
  { ceiling: 1621, rate: 0.075 },
  { ceiling: 2902.84, rate: 0.09 },
  { ceiling: 4354.27, rate: 0.12 },
  { ceiling: 8475.55, rate: 0.14 },
] as const;

const IRRF_BRACKETS = [
  { ceiling: 2428.8, rate: 0, deduction: 0 },
  { ceiling: 2826.65, rate: 0.075, deduction: 182.16 },
  { ceiling: 3751.05, rate: 0.15, deduction: 394.16 },
  { ceiling: 4664.68, rate: 0.225, deduction: 675.49 },
  { ceiling: Number.POSITIVE_INFINITY, rate: 0.275, deduction: 908.73 },
] as const;

const DEPENDENT_DEDUCTION = 189.59;
const SIMPLIFIED_MONTHLY_DISCOUNT = 607.2;
const ZERO_TAX_INCOME_LIMIT = 5000;
const REDUCTION_PHASE_OUT_LIMIT = 7350;
const REDUCTION_BASE = 978.62;
const REDUCTION_FACTOR = 0.133145;

function roundCurrency(value: number) {
  return Math.round(value * 100) / 100;
}

function clampPositive(value: number) {
  return roundCurrency(Math.max(0, value));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function calculateInss(grossSalary: number) {
  let previousCeiling = 0;
  let total = 0;

  for (const bracket of INSS_BRACKETS) {
    if (grossSalary <= previousCeiling) {
      break;
    }

    const taxableSlice = Math.min(grossSalary, bracket.ceiling) - previousCeiling;
    total += taxableSlice * bracket.rate;
    previousCeiling = bracket.ceiling;
  }

  return roundCurrency(total);
}

function calculateIrrfFromBase(irrfBase: number) {
  const bracket =
    IRRF_BRACKETS.find((item) => irrfBase <= item.ceiling) ?? IRRF_BRACKETS[IRRF_BRACKETS.length - 1];

  return clampPositive(irrfBase * bracket.rate - bracket.deduction);
}

function calculateMonthlyReduction(grossSalary: number, rawIrrf: number) {
  if (grossSalary <= ZERO_TAX_INCOME_LIMIT) {
    return rawIrrf;
  }

  if (grossSalary >= REDUCTION_PHASE_OUT_LIMIT) {
    return 0;
  }

  return clampPositive(Math.min(rawIrrf, REDUCTION_BASE - REDUCTION_FACTOR * grossSalary));
}

function calculateFromGross(
  grossSalary: number,
  dependents: number,
  pension: number
): SalaryBreakdown {
  const sanitizedGross = clampPositive(grossSalary);
  const sanitizedPension = clampPositive(pension);
  const sanitizedDependents = Math.max(0, Math.trunc(dependents));

  const inss = calculateInss(sanitizedGross);
  const legalDeduction = clampPositive(inss + sanitizedPension + sanitizedDependents * DEPENDENT_DEDUCTION);
  const simplifiedDeduction = SIMPLIFIED_MONTHLY_DISCOUNT;

  const selectedDeductionModel =
    legalDeduction > simplifiedDeduction ? "legal" : "simplified";
  const selectedDeductionLabel =
    selectedDeductionModel === "legal" ? "Deduções legais aplicadas" : "Desconto simplificado aplicado";
  const selectedDeductionAmount =
    selectedDeductionModel === "legal" ? legalDeduction : simplifiedDeduction;

  const irrfBase = clampPositive(sanitizedGross - selectedDeductionAmount);
  const rawIrrf = calculateIrrfFromBase(irrfBase);
  const irrfReduction = calculateMonthlyReduction(sanitizedGross, rawIrrf);
  const irrf = clampPositive(rawIrrf - irrfReduction);
  const netSalary = clampPositive(sanitizedGross - inss - sanitizedPension - irrf);

  return {
    grossSalary: sanitizedGross,
    netSalary,
    primaryResult: netSalary,
    secondaryResult: sanitizedGross,
    inss,
    pension: sanitizedPension,
    irrfBase,
    rawIrrf,
    irrfReduction,
    irrf,
    legalDeduction,
    simplifiedDeduction,
    selectedDeductionModel,
    selectedDeductionLabel,
  };
}

function solveGrossForNet(
  targetNetSalary: number,
  dependents: number,
  pension: number
) {
  const sanitizedTarget = clampPositive(targetNetSalary);
  const sanitizedPension = clampPositive(pension);
  let low = sanitizedTarget + sanitizedPension;
  let high = Math.max(low + 1000, sanitizedTarget * 1.8 + sanitizedPension + 1000);

  while (calculateFromGross(high, dependents, sanitizedPension).netSalary < sanitizedTarget) {
    high *= 1.5;

    if (high > 250000) {
      break;
    }
  }

  for (let index = 0; index < 80; index += 1) {
    const midpoint = (low + high) / 2;
    const netSalary = calculateFromGross(midpoint, dependents, sanitizedPension).netSalary;

    if (netSalary >= sanitizedTarget) {
      high = midpoint;
    } else {
      low = midpoint;
    }
  }

  const resolvedGross = roundCurrency(high);
  const breakdown = calculateFromGross(resolvedGross, dependents, sanitizedPension);

  return {
    ...breakdown,
    primaryResult: breakdown.grossSalary,
    secondaryResult: sanitizedTarget,
  };
}

export function calculateSalaryBreakdown({
  mode,
  amount,
  dependents,
  pension,
}: SalaryCalculationInput) {
  if (mode === "net-to-gross") {
    return solveGrossForNet(amount, dependents, pension);
  }

  return calculateFromGross(amount, dependents, pension);
}

export type { SalaryBreakdown };
