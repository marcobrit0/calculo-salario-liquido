"use client";

import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

import { useInView } from "@/components/home/use-in-view";

type AnimatedColumnChartItem = {
  detail: string;
  label: string;
  note?: string;
  tone?: "dark" | "light" | "mid";
  value: number;
  valueLabel: string;
};

type AnimatedColumnChartProps = {
  chartHeightClassName?: string;
  className?: string;
  items: readonly AnimatedColumnChartItem[];
  labelClassName?: string;
};

const toneClasses = {
  dark: "bg-neutral-950",
  light: "bg-neutral-400",
  mid: "bg-neutral-700",
} as const;

export function AnimatedColumnChart({
  chartHeightClassName = "h-52",
  className,
  items,
  labelClassName,
}: AnimatedColumnChartProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const maxValue = Math.max(...items.map((item) => item.value), 1);

  return (
    <div ref={ref} className={cn("mt-8 flex items-end gap-3", className)}>
      {items.map((item, index) => {
        const targetHeight = item.value === 0 ? 12 : Math.max((item.value / maxValue) * 100, 26);

        return (
          <button
            key={item.label}
            type="button"
            aria-label={`${item.label}. ${item.note ? `${item.note}. ` : ""}${item.detail}`}
            className="group relative flex flex-1 flex-col items-center gap-3 rounded-[1.25rem] p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          >
            <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-4 w-44 -translate-x-1/2 translate-y-1 rounded-[1.15rem] border border-black/8 bg-white/96 p-3 text-left opacity-0 shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              <p className="text-xs font-medium leading-5 text-foreground">{item.label}</p>
              {item.note ? (
                <p className="mt-1 font-mono text-[11px] tracking-[0.2em] text-foreground">
                  {item.note}
                </p>
              ) : null}
              <p className="mt-2 text-[11px] leading-5 text-muted-foreground">{item.detail}</p>
            </div>

            <div
              className={cn(
                "relative flex w-full items-end overflow-hidden rounded-[1.5rem] bg-black/[0.04] px-1.5 pt-4",
                chartHeightClassName
              )}
            >
              <div className="absolute inset-x-0 bottom-0 h-px bg-black/10" />
              <div
                className={cn(
                  "dynamic-column-fill w-full rounded-t-[1.2rem] transition-[filter] duration-200 group-hover:brightness-110 group-focus-visible:brightness-110",
                  toneClasses[item.tone ?? "dark"]
                )}
                style={
                  {
                    height: `${targetHeight}%`,
                    transitionDelay: `${index * 90}ms`,
                    ["--fill-scale" as string]: isInView ? 1 : 0,
                  } as CSSProperties
                }
              />
            </div>

            <span
              className={cn(
                "font-mono text-[11px] tracking-[0.2em] text-muted-foreground transition-colors duration-200 group-hover:text-foreground group-focus-visible:text-foreground",
                labelClassName
              )}
            >
              {item.valueLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}
