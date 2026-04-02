import { faqItems } from "@/lib/site";

import { SectionHeading } from "@/components/home/section-heading";

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes sobre calculadora de salário líquido."
          titleClassName="max-w-md"
        />

        <div className="flex flex-col divide-y divide-border">
          {faqItems.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="list-none text-lg font-medium leading-7 text-foreground">
                {item.question}
              </summary>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
