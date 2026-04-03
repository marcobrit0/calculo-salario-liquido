import { payslipCheckSteps } from "@/lib/home-content";

import { SectionHeading } from "@/components/home/section-heading";

export function PayslipCheckSection() {
  return (
    <section id="holerite" className="border-t border-border bg-neutral-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.84fr_1.16fr] lg:px-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Conferir holerite"
            title="Como conferir se o seu holerite está certo"
            description="Use a calculadora como referência e compare com o contracheque real."
            titleClassName="max-w-xl"
            descriptionClassName="max-w-lg"
          />

          <div className="rounded-[1.75rem] border border-black/8 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Referência rápida
            </p>
            <div className="mt-6 grid gap-3">
              <div className="h-3 w-4/5 rounded-full bg-neutral-950" />
              <div className="h-3 w-3/5 rounded-full bg-neutral-700" />
              <div className="h-3 w-2/3 rounded-full bg-neutral-300" />
              <div className="h-3 w-1/2 rounded-full bg-neutral-200" />
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {payslipCheckSteps.map((item, index) => (
            <article
              key={item.title}
              className="animate-rise rounded-[1.75rem] border border-black/8 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-base leading-7 text-muted-foreground">
                <strong className="text-foreground">{item.title}</strong> {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
