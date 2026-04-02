import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-4xl leading-tight tracking-[-0.04em] text-foreground md:text-5xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("text-base leading-7 text-muted-foreground", descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
