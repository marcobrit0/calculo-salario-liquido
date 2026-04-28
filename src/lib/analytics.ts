"use client";

import posthog from "posthog-js";

import type { CalculationMode, SalaryBreakdown } from "@/lib/salary";

type AnalyticsProperties = Record<
  string,
  boolean | number | string | null | undefined
>;

export function captureEvent(
  eventName: string,
  properties: AnalyticsProperties = {}
) {
  if (typeof window === "undefined" || !posthog.__loaded) {
    return;
  }

  posthog.capture(eventName, properties);
}

export function getAmountBucket(amount: number) {
  if (amount <= 0) {
    return "0";
  }

  if (amount <= 2428.8) {
    return "0-2428";
  }

  if (amount <= 5000) {
    return "2429-5000";
  }

  if (amount <= 7350) {
    return "5001-7350";
  }

  if (amount <= 12000) {
    return "7351-12000";
  }

  return "12000+";
}

export function getCalculatorEventProperties({
  mode,
  amount,
  dependents,
  pension,
  result,
}: {
  mode: CalculationMode;
  amount: number;
  dependents: number;
  pension: number;
  result: SalaryBreakdown;
}) {
  return {
    mode,
    amount_bucket: getAmountBucket(amount),
    gross_salary_bucket: getAmountBucket(result.grossSalary),
    net_salary_bucket: getAmountBucket(result.netSalary),
    dependents_count: dependents,
    has_dependents: dependents > 0,
    has_judicial_pension: pension > 0,
    selected_deduction_model: result.selectedDeductionModel,
    has_irrf: result.irrf > 0,
    has_irrf_reduction: result.irrfReduction > 0,
  };
}
