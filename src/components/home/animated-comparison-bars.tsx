"use client";

import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

import { useInView } from "@/components/home/use-in-view";

type AnimatedComparisonBarItem = {
  accent?: "dark" | "light" | "mid";
  detail: string;
  label: string;
  value: number;
  valueLabel: string;
};

type AnimatedComparisonBarsProps = {
  className?: string;
  itemClassName?: string;
  items: readonly AnimatedComparisonBarItem[];
};

const accentClasses = {
  dark: "bg-neutral-950",
  light: "bg-neutral-400",
  mid: "bg-neutral-700",
} as const;

export function AnimatedComparisonBars({
  className,
  itemClassName,
  items,
}: AnimatedComparisonBarsProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.22 });
  const maxValue = Math.max(...items.map((item) => item.value), 1);

  return (
    <div ref={ref} className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const width = Math.max((item.value / maxValue) * 100, 24);

        return (
          <button
            key={item.label}
            type="button"
            aria-label={`${item.label}. ${item.valueLabel}. ${item.detail}`}
            className={cn(
              "group block w-full rounded-[1.35rem] border border-black/8 bg-white/88 p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] focus:outline-none focus-visible:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-black/20",
              itemClassName
            )}
          >
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium text-foreground">{item.valueLabel}</span>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-black/8">
              <div
                className={cn(
                  "dynamic-line-fill h-full rounded-full transition-[filter] duration-200 group-hover:brightness-110 group-focus-visible:brightness-110",
                  accentClasses[item.accent ?? "dark"]
                )}
                style={
                  {
                    width: `${width}%`,
                    transitionDelay: `${index * 120}ms`,
                    ["--fill-scale" as string]: isInView ? 1 : 0,
                  } as CSSProperties
                }
              />
            </div>

            <p className="mt-3 text-xs leading-5 text-muted-foreground opacity-0 transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              {item.detail}
            </p>
          </button>
        );
      })}
    </div>
  );
}
