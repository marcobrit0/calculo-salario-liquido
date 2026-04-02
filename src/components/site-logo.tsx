import Link from "next/link";

import { cn } from "@/lib/utils";

type SiteLogoProps = {
  href?: string;
  variant?: "light" | "dark";
  className?: string;
};

export function SiteLogo({
  href,
  variant = "dark",
  className,
}: SiteLogoProps) {
  const isLight = variant === "light";
  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex size-11 items-center justify-center overflow-hidden rounded-full backdrop-blur-sm",
          isLight
            ? "border border-white/16 bg-white/8"
            : "border border-black/10 bg-black/5"
        )}
      >
        <div
          className={cn(
            "absolute inset-[7px] rounded-full",
            isLight ? "border border-white/12" : "border border-black/10"
          )}
        />
        <span
          className={cn(
            "relative font-display text-xl tracking-[-0.08em]",
            isLight ? "text-white" : "text-black"
          )}
        >
          S
        </span>
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-display text-xl leading-none tracking-[-0.04em]",
            isLight ? "text-white" : "text-black"
          )}
        >
          Salário Líquido
        </span>
        <span
          className={cn(
            "text-[0.65rem] uppercase tracking-[0.34em]",
            isLight ? "text-zinc-500" : "text-zinc-500"
          )}
        >
          CLT 2026
        </span>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} aria-label="Ir para a página inicial">
      {content}
    </Link>
  );
}
