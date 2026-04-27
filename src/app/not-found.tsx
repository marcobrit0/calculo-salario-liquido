import Link from "next/link";

import { ContentPage } from "@/components/content-page";

export default function NotFound() {
  return (
    <ContentPage>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32 lg:px-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Erro 404
        </p>
        <h1 className="mt-6 font-display text-4xl tracking-tight text-foreground md:text-6xl">
          Página não encontrada
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          O endereço acessado não existe ou foi movido. Volte para a calculadora
          ou explore os conteúdos disponíveis.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Ir para a calculadora
          </Link>
          <Link
            href="/blog"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ver conteúdos
          </Link>
        </div>
      </section>
    </ContentPage>
  );
}
