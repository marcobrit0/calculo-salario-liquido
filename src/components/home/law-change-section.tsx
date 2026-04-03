import { lawChangeBlocks } from "@/lib/home-content";

import { SectionHeading } from "@/components/home/section-heading";

export function LawChangeSection() {
  return (
    <section id="lei-15270" className="border-t border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.94fr_1.06fr] lg:px-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Lei 15.270/2025"
            title="Lei 15.270/2025: a nova isenção de imposto de renda"
            description="O que a lei mudou, quem é beneficiado e como a redução funciona na prática mensal."
            className="text-white"
            titleClassName="max-w-xl text-white"
            descriptionClassName="max-w-lg text-zinc-300"
          />

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-zinc-500">
              <span>Faixa de benefício</span>
              <span>2026</span>
            </div>
            <div className="mt-8">
              <div className="flex items-center justify-between font-mono text-xs tracking-[0.2em] text-zinc-400">
                <span>R$ 5.000</span>
                <span>R$ 7.350</span>
              </div>
              <div className="mt-4 h-3 rounded-full bg-white/10">
                <div className="h-3 w-[68%] rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {lawChangeBlocks.map((item, index) => (
            <article
              key={item.label ?? item.body}
              className="animate-rise rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-base leading-7 text-zinc-300">
                {item.label ? <strong className="text-white">{item.label}</strong> : null}
                {item.label ? " " : null}
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
