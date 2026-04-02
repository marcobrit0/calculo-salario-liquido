import type { Dispatch, SetStateAction } from "react";

import type { SalaryBreakdown, CalculationMode } from "@/lib/salary";

export type SalaryCalculatorInputState = {
  mode: CalculationMode;
  salaryInput: string;
  dependentsInput: string;
  pensionInput: string;
};

export type SalaryCalculatorSetters = {
  setMode: Dispatch<SetStateAction<CalculationMode>>;
  setSalaryInput: Dispatch<SetStateAction<string>>;
  setDependentsInput: Dispatch<SetStateAction<string>>;
  setPensionInput: Dispatch<SetStateAction<string>>;
};

export type SalaryCalculatorLabels = {
  primary: string;
  secondary: string;
};

export type SalaryCalculatorResultProps = {
  result: SalaryBreakdown;
  labels: SalaryCalculatorLabels;
};
