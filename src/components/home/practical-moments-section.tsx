import { practicalMoments } from "@/lib/home-content";

import { SectionHeading } from "@/components/home/section-heading";

export function PracticalMomentsSection() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-16">
        <SectionHeading
          eyebrow="Quando usar"
          title="Quando faz sentido calcular o salário líquido"
          description="A simulação ajuda mais quando você precisa transformar bruto em decisão prática."
          titleClassName="max-w-lg"
          descriptionClassName="max-w-md"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {practicalMoments.map((item) => (
            <article
              key={item.title}
              className="border-t border-border pt-5 first:pt-0 md:first:border-t"
            >
              <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
