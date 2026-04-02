import { interpretationTips } from "@/lib/home-content";

import { SectionHeading } from "@/components/home/section-heading";

export function InterpretationSection() {
  return (
    <section className="border-t border-border bg-neutral-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
        <SectionHeading
          eyebrow="Leitura da simulação"
          title="Como ler o resultado da calculadora"
          titleClassName="max-w-xl"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {interpretationTips.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-3 rounded-[1.5rem] border border-black/8 bg-white p-6"
            >
              <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
