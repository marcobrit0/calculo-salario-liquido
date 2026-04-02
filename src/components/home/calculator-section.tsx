import { SalaryCalculator } from "@/components/salary-calculator";

export function CalculatorSection() {
  return (
    <section className="relative z-10 bg-neutral-100 pb-20 pt-12 md:pt-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SalaryCalculator />
      </div>
    </section>
  );
}
