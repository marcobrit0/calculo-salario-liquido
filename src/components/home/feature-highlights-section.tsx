import { heroHighlights } from "@/lib/home-content";

export function FeatureHighlightsSection() {
  return (
    <section className="border-t border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-3">
          {heroHighlights.map((item, index) => (
            <article
              key={item.title}
              className="animate-rise rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  {item.title}
                </p>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/50 transition-transform duration-300 hover:scale-125" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20 transition-transform duration-300 hover:scale-125" />
                </div>
              </div>
              <p className="text-sm leading-6 text-zinc-300">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
