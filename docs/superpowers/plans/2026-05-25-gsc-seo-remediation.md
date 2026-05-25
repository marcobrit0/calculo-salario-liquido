# GSC SEO Remediation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate the site onto a single canonical host with a *permanent* redirect, clean up Search Console registrations, force a recrawl of stale pages, and add targeted on-page coverage for four page-2 keywords — so the primary keywords stop being split across apex/www variants and climb out of page 5–7.

**Architecture:** The Next.js canonical/metadata layer is already correct (`src/lib/seo.ts` emits absolute `www` canonicals; `src/lib/site.ts` normalizes the base URL to `www`). The defects are at the **edge/infra and Search Console layers**, plus a few content gaps. This plan fixes the redirect to be permanent (308), removes a duplicate sitemap, requests reindexing, and makes small, on-tone content additions. No tax logic, constants, fonts, or palette are touched (see `CLAUDE.md` high-risk areas).

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind v4, Vercel hosting, `gsc-diagnose` CLI for Google Search Console.

> **Testing note (read before starting):** This repo has **no test runner** — `package.json` scripts are only `dev`, `build`, `start`, `lint`. Do **not** add a test framework; it is out of scope for a static marketing site. Each code task is verified by: (1) `npm run lint`, (2) `npm run build`, and (3) a rendered-HTML check against a locally served build using `curl … | grep`. Infra/Search-Console tasks are verified with `curl -I` and `gsc-diagnose`. Expected outputs are given for every check.

---

## Background / Evidence (zero-context summary)

Two `gsc-diagnose` passes on `sc-domain:calcularsalarioliquido.com.br` (2026-05-25, reports in repo root: `gsc-calcularsalarioliquido.com.br-2026-05-25.json` and `gsc-sa-calcularsalarioliquido.com.br-2026-05-25.json`) found:

1. **Host fragmentation suppressing head terms.** The exact target keywords rank on page 5–7, served largely via apex/`http` homepage variants:
   - `calculo salario liquido` — 49 impressions, **avg position 59**
   - `calculadora salario liquido` — 38 impressions, **avg position 55**
   - `calculadora de salário líquido` — pos 60
   The `www` homepage averages position 18.2; apex (`https://…/`) averages 59.9 and `http://…/` averages 68.5 for the same content. Google is splitting authority across three homepage hosts.

2. **The apex→www redirect is `307` (temporary), emitted by Vercel's edge** — confirmed via `curl -sI https://calcularsalarioliquido.com.br/` → `HTTP/2 307`, `server: Vercel`. A temporary redirect does **not** consolidate ranking signal, so Google keeps apex indexed. The `next.config.ts` `permanent: true` (308) rule **never fires** because Vercel intercepts the apex at the edge first.

3. **Duplicate sitemap registered in GSC** — both `https://www.calcularsalarioliquido.com.br/sitemap.xml` and `https://calcularsalarioliquido.com.br/sitemap.xml` are registered. The apex one reinforces apex indexing.

4. **Four pages last crawled before the canonical fix** show "Alternate page with proper canonical tag" (stale April crawls): `/blog`, `/blog/descontos-salario-clt`, `/tabela-inss-2026`, `/tabela-irrf-2026`. These need a forced recrawl. They currently hold page-1 positions on the *apex* variant (e.g. `tabela-irrf-2026` pos 4.2, `tabela-inss-2026` pos 9.2) — that ranking must transfer to `www`.

5. **Genuine page-2 near-wins (pos 11–20, content-tunable):** `desconto salario liquido` (12 impr, 11.8), `salario bruto vs liquido` (10 impr, 12.1), `salario clt 2026` (9 impr, 12.9), `salário líquido` (12 impr, 15.6).

**Priority order:** Workstream A (host consolidation) is the dominant lever and unblocks everything. B (content) is incremental. C verifies and sets up monitoring.

---

## File Structure

| File | Responsibility | Change |
|---|---|---|
| `next.config.ts` | Apex→www redirect rule | Modify: anchor the host-match regex so it can't match `www.` (loop-safe) and is the authoritative 308 once apex is assigned to the project |
| Vercel project domain settings | Edge routing for apex | Operational: stop the apex 307 edge redirect; let the 308 govern |
| Google Search Console (via `gsc-diagnose` + GSC UI) | Sitemap registrations, reindex requests | Operational: remove duplicate apex sitemap; request reindex of 4 stale URLs |
| `src/lib/site.ts` | FAQ content (feeds homepage FAQ section **and** `FAQPage` JSON-LD) | Modify: append 2 FAQ items targeting `salario clt 2026` and `desconto salario liquido` |
| `src/components/home/hero-section.tsx` | Homepage hero copy | Modify: tighten the subhead to include `salário líquido CLT` `2026` exact phrasing (H1 brand moment untouched) |

---

## Workstream A — Host consolidation (the dominant fix)

### Task A1: Make the `next.config.ts` apex redirect loop-safe and authoritative

**Files:**
- Modify: `next.config.ts:10-20`

**Why:** The current host match `value: "calcularsalarioliquido.com.br"` is an *unanchored* regex — it also matches `www.calcularsalarioliquido.com.br` as a substring. Today this is harmless only because Vercel's edge redirect intercepts the apex before Next.js runs. Once Task A2 routes the apex through the app (so the 308 governs), an unanchored match would redirect `www` → `www` and loop. Anchoring it (`^…$`) makes the rule correct and safe regardless of how the domain is configured.

- [ ] **Step 1: Read the current file to confirm the exact block**

Run: `cat next.config.ts`
Expected: the `has` array contains `value: "calcularsalarioliquido.com.br"` (no anchors).

- [ ] **Step 2: Anchor the host regex**

Replace the `has` entry's value. The file should read exactly:

```ts
import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            // Anchored so it matches ONLY the bare apex, never the www host.
            // Prevents a www→www redirect loop if the apex is assigned to this
            // project (Task A2) instead of redirected at Vercel's edge.
            value: "^calcularsalarioliquido\\.com\\.br$",
          },
        ],
        destination: "https://www.calcularsalarioliquido.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 3: Build to confirm config is valid**

Run: `npm run build`
Expected: build completes with no errors (look for `✓ Compiled successfully` / route table printed, exit code 0).

- [ ] **Step 4: Serve the build and verify the apex redirect + no www loop locally**

Run (in one terminal): `npm run start -- -p 3100`
Then in another terminal:

```bash
# Apex host header → expect a 308 permanent redirect to www
curl -sI -H "Host: calcularsalarioliquido.com.br" http://localhost:3100/tabela-inss-2026 | grep -iE "^(HTTP|location)"
# www host header → expect 200, NO redirect (no loop)
curl -sI -H "Host: www.calcularsalarioliquido.com.br" http://localhost:3100/ | grep -iE "^(HTTP|location)"
```

Expected:
- First command: `HTTP/1.1 308 Permanent Redirect` and `location: https://www.calcularsalarioliquido.com.br/tabela-inss-2026`
- Second command: `HTTP/1.1 200 OK` and **no** `location:` line

Stop the server (Ctrl-C) when done.

- [ ] **Step 5: Commit**

```bash
git add next.config.ts
git commit -m "fix(seo): anchor apex host redirect regex to be loop-safe and permanent"
```

---

### Task A2: Route the apex through the app so the 308 governs (Vercel — operational)

**Files:** none (Vercel dashboard). **This step requires the site owner; it cannot be done from code.**

**Why:** Production currently answers the apex with a Vercel **edge 307** (`server: Vercel`, temporary), so the 308 from Task A1 never runs and Google never sees a permanent move.

- [ ] **Step 1: Inspect current production behavior (baseline)**

Run: `curl -sI https://calcularsalarioliquido.com.br/ | grep -iE "^(HTTP|location|server)"`
Expected (the problem): `HTTP/2 307`, `location: https://www.calcularsalarioliquido.com.br/`, `server: Vercel`.

- [ ] **Step 2: Fix the redirect type in Vercel**

In the Vercel dashboard → the salary-calculator project → **Settings → Domains → `calcularsalarioliquido.com.br`**, do **one** of:
- **Preferred:** Remove the "Redirect to www…" configuration and **assign the apex domain directly to the project**. Requests then reach the deployment and `next.config.ts` (Task A1) issues the 308. This keeps the redirect owned in version-controlled code.
- **Alternative:** If you keep Vercel's domain-level redirect, change its status code from **Temporary (307)** to **Permanent (308)**.

Keep `www.calcularsalarioliquido.com.br` as the project's primary domain.

- [ ] **Step 3: Deploy (if you changed code in A1) and verify production is now permanent**

After the change propagates (and a deploy if needed):

```bash
curl -sI https://calcularsalarioliquido.com.br/ | grep -iE "^(HTTP|location)"
curl -sI https://calcularsalarioliquido.com.br/tabela-inss-2026 | grep -iE "^(HTTP|location)"
curl -sIL https://www.calcularsalarioliquido.com.br/ | grep -iE "^HTTP"
```

Expected:
- Apex root: `HTTP/2 308` (or `301`) → `location: https://www.calcularsalarioliquido.com.br/`
- Apex path: `308`/`301` → `location: https://www.calcularsalarioliquido.com.br/tabela-inss-2026`
- www root following redirects: a single `HTTP/2 200` (no loop, no extra hops)

Do not proceed to A3/A4 until the apex returns **308 or 301** (permanent).

---

### Task A3: Remove the duplicate apex sitemap from Search Console (operational)

**Files:** none (`gsc-diagnose` CLI).

**Why:** Two sitemaps are registered; the apex one (`https://calcularsalarioliquido.com.br/sitemap.xml`) reinforces apex indexing. Only the `www` sitemap should remain.

- [ ] **Step 1: List current sitemaps**

Run: `gsc-diagnose sitemaps list sc-domain:calcularsalarioliquido.com.br`
Expected: two entries — `https://www.calcularsalarioliquido.com.br/sitemap.xml` and `https://calcularsalarioliquido.com.br/sitemap.xml`.

- [ ] **Step 2: Remove the apex sitemap**

Run: `gsc-diagnose sitemaps remove sc-domain:calcularsalarioliquido.com.br https://calcularsalarioliquido.com.br/sitemap.xml`
Expected: success message (sitemap deleted).

- [ ] **Step 3: Confirm only the www sitemap remains**

Run: `gsc-diagnose sitemaps list sc-domain:calcularsalarioliquido.com.br`
Expected: one entry — `https://www.calcularsalarioliquido.com.br/sitemap.xml`, no warnings/errors.

---

### Task A4: Request reindexing of the four stale pages (GSC UI — operational)

**Files:** none (Google Search Console UI; the URL-Inspection *reindex request* is not exposed by `gsc-diagnose`, which is read-only for inspection).

**Why:** These four `www` URLs were last crawled in late April (before the canonical fix) and still show "Alternate page with proper canonical tag". A manual reindex request forces Google to recrawl with the corrected canonical + permanent redirect, transferring their page-1 apex rankings to `www`.

- [ ] **Step 1: For each URL below, open GSC → URL Inspection → paste the URL → "Request Indexing"**

```
https://www.calcularsalarioliquido.com.br/tabela-inss-2026
https://www.calcularsalarioliquido.com.br/tabela-irrf-2026
https://www.calcularsalarioliquido.com.br/blog/descontos-salario-clt
https://www.calcularsalarioliquido.com.br/blog
```

Expected: each shows "Indexing requested" / added to the priority crawl queue.

- [ ] **Step 2: Record the request date** for the C2 monitoring re-check (recrawl typically lands within 1–3 weeks).

---

## Workstream B — Page-2 content near-wins (incremental)

> These are small, on-tone additions in `pt-BR`. Per `CLAUDE.md`: keep search terms natural (not spammy), preserve the premium editorial tone, do not touch tax constants. All monetary figures below are copied from existing repo content (`src/lib/home-content.ts`) and are internally consistent.

### Task B1: Add two FAQ items targeting `salario clt 2026` and `desconto salario liquido`

**Files:**
- Modify: `src/lib/site.ts` (the `faqItems` array; ends at the `] as const;` around line 135)

**Why:** `faqItems` feeds both the homepage FAQ section (`src/components/home/faq-section.tsx`) and the `FAQPage` JSON-LD (`src/lib/home-content.ts` → `getHomePageJsonLd`). Adding entries improves on-page coverage and structured data in one place. Neither query currently has a dedicated answer; both sit at position 11–13.

- [ ] **Step 1: Append two items to `faqItems`**

Find the final FAQ object in `src/lib/site.ts` (the one ending `…Use o resultado como estimativa dos descontos obrigatórios.",\n  },`) immediately before the closing `] as const;`. Insert these two objects between that last `},` and `] as const;`:

```ts
  {
    question: "Como fica o salário CLT em 2026?",
    answer:
      "Em 2026, o salário mínimo CLT é de R$ 1.621. Quem recebe o mínimo tem desconto apenas de INSS (R$ 121,58) e fica com cerca de R$ 1.499,42 líquidos. Quem ganha até R$ 5.000 fica isento de IRRF pela Lei 15.270/2025 — um salário de R$ 5.000 brutos resulta em R$ 4.498,49 líquidos. A partir dessa faixa, o IRRF passa a reduzir o líquido. Informe seu valor na calculadora para o número exato.",
  },
  {
    question: "Qual é o desconto do salário bruto para o líquido?",
    answer:
      "Os descontos obrigatórios que separam o bruto do líquido são dois: o INSS, progressivo de 7,5% a 14%, e o IRRF, que só incide acima da faixa de isenção. Para um salário de R$ 5.000 em 2026, o desconto é de R$ 501,51 de INSS e R$ 0 de IRRF. Vale-transporte, plano de saúde, consignado e contribuição sindical, quando existem, são descontos adicionais que variam por empresa e não entram nesta simulação.",
  },
```

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: build succeeds (the FAQ JSON-LD is generated at build time; a malformed string would fail here).

- [ ] **Step 4: Verify both questions render and appear in the FAQ JSON-LD**

Run (in one terminal): `npm run start -- -p 3100`
Then:

```bash
curl -s http://localhost:3100/ | grep -c "Como fica o salário CLT em 2026?"
curl -s http://localhost:3100/ | grep -c "Qual é o desconto do salário bruto para o líquido?"
```

Expected: each command prints `2` (once in the visible `<details>` FAQ, once inside the `application/ld+json` FAQPage block). Stop the server when done.

- [ ] **Step 5: Commit**

```bash
git add src/lib/site.ts
git commit -m "feat(seo): add FAQ coverage for 'salário CLT 2026' and salary deduction queries"
```

---

### Task B2: Tighten the hero subhead to include the `salário líquido CLT 2026` exact phrase

**Files:**
- Modify: `src/components/home/hero-section.tsx:48-52`

**Why:** `salário líquido` ranks 15.6 and the homepage `<h1>` (a brand moment we keep untouched per `CLAUDE.md`) does not contain the exact phrase. The subhead is the lowest-risk place to add `cálculo do salário líquido CLT` + `2026` naturally. The H1, palette, fonts, and layout are unchanged.

- [ ] **Step 1: Replace the subhead paragraph**

Find this block (lines ~48-52):

```tsx
              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
                Simule INSS, IRRF e a nova isenção da Lei 15.270/2025 em segundos.
                Informe o bruto, veja o líquido. Ou informe o líquido desejado e descubra
                quanto precisa ganhar.
              </p>
```

Replace it with:

```tsx
              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
                Faça o cálculo do salário líquido CLT de 2026 em segundos: simule
                INSS, IRRF e a nova isenção da Lei 15.270/2025. Informe o bruto e
                veja o líquido — ou informe o líquido desejado e descubra quanto
                precisa ganhar.
              </p>
```

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 4: Verify the new copy renders on the homepage**

Run (in one terminal): `npm run start -- -p 3100`
Then:

```bash
curl -s http://localhost:3100/ | grep -c "cálculo do salário líquido CLT de 2026"
```

Expected: prints `1`. Confirm the `<h1>` is unchanged:

```bash
curl -s http://localhost:3100/ | grep -c "Descubra quanto do seu salário sobra depois dos descontos"
```

Expected: prints `1`. Stop the server when done.

- [ ] **Step 5: Commit**

```bash
git add src/components/home/hero-section.tsx
git commit -m "feat(seo): reinforce 'salário líquido CLT 2026' phrase in hero subhead"
```

---

## Workstream C — Verification & monitoring

### Task C1: Full repo verification gate

**Files:** none.

- [ ] **Step 1: Lint the whole project**

Run: `npm run lint`
Expected: exit code 0, no errors.

- [ ] **Step 2: Production build**

Run: `npm run build`
Expected: exit code 0; the route table lists `/`, `/tabela-inss-2026`, `/tabela-irrf-2026`, `/blog`, `/blog/diferenca-salario-bruto-liquido`, `/blog/descontos-salario-clt`, `/blog/isencao-imposto-renda-2026`, `/como-calcular-salario-liquido`, `/privacidade`, `/termos`.

- [ ] **Step 3: Confirm canonical + sitemap host integrity on the built site**

Run (in one terminal): `npm run start -- -p 3100`
Then:

```bash
# Every canonical must be on the www host
curl -s http://localhost:3100/tabela-inss-2026 | grep -o '<link rel="canonical" href="[^"]*"'
curl -s http://localhost:3100/ | grep -o '<link rel="canonical" href="[^"]*"'
# Sitemap must only contain www URLs (zero apex-without-www entries)
curl -s http://localhost:3100/sitemap.xml | grep -c "https://calcularsalarioliquido.com.br/"
```

Expected:
- Both canonicals point to `https://www.calcularsalarioliquido.com.br/...`
- The sitemap grep prints `0` (no bare-apex URLs; all are `www`). Stop the server when done.

---

### Task C2: Capture baseline and schedule the recrawl re-check

**Files:** none (creates dated GSC reports + a memory note).

**Why:** The effect of Workstream A is only visible after Google recrawls (typically 1–3 weeks). We need today's numbers as the before-baseline and a reminder to re-measure.

- [ ] **Step 1: Confirm today's baseline reports exist**

Run: `ls -1 gsc-*calcularsalarioliquido.com.br-2026-05-25.json`
Expected: both `gsc-calcularsalarioliquido.com.br-2026-05-25.json` (indexing) and `gsc-sa-calcularsalarioliquido.com.br-2026-05-25.json` (search analytics) are present. These are the before-state.

- [ ] **Step 2: After ~2–3 weeks (and after the A4 reindex requests have processed), re-run both passes**

```bash
gsc-diagnose sc-domain:calcularsalarioliquido.com.br
gsc-diagnose searchanalytics sc-domain:calcularsalarioliquido.com.br --days 90 --top 25
```

- [ ] **Step 3: Compare against baseline and confirm success criteria**

Success looks like:
- Indexing: the 4 "Alternate page with proper canonical tag" entries flip to "Submitted and indexed" on `www`.
- Search analytics: head terms (`calculo salario liquido`, `calculadora salario liquido`) improve from pos ~55–60 toward page 1–2; apex/`http` homepage rows shrink or disappear from `byPage`.
- The page-1 positions held by apex `tabela-inss-2026` / `tabela-irrf-2026` are now held by the `www` URLs.

- [ ] **Step 4: Record the outcome as a project memory** so future sessions know the consolidation state (e.g. a `project`-type memory: "calcularsalarioliquido.com.br standardized on www via 308; recrawl confirmed/pending as of <date>").

---

## Self-Review

**Spec coverage** (against the two diagnose findings):
- Finding 1 (head-term host fragmentation) → A1 + A2 (permanent redirect consolidates authority to www).
- Finding 2 (307 temporary redirect) → A2 (make it 308/301).
- Finding 3 (duplicate apex sitemap) → A3.
- Finding 4 (4 stale "alternate" pages; apex holds page-1 ranks) → A4 (reindex) + C2 (verify transfer).
- Finding 5 (page-2 near-wins) → B1 (`salario clt 2026`, `desconto salario liquido`) + B2 (`salário líquido`). `salario bruto vs liquido` (pos 12.1) is already well covered (homepage `#bruto-vs-liquido` section + `/blog/diferenca-salario-bruto-liquido`); it is consolidation-bound, not content-bound, so no new task — it benefits from A.

**Placeholder scan:** No TBD/TODO/"handle edge cases"/"similar to" — every code step shows the full replacement text and every command has an expected output.

**Consistency check:** FAQ figures in B1 (mínimo R$ 1.621, INSS R$ 121,58, líquido R$ 1.499,42; R$ 5.000 → INSS R$ 501,51, líquido R$ 4.498,49) match `src/lib/home-content.ts` (`heroHighlights`, `methodologySteps`, `homeExamples`, `grossVsNetMetrics`). Both B1 questions are distinct strings, so the C-step `grep -c … = 2` (visible + JSON-LD) is exact. The local-verify port (3100) and `npm run start -- -p 3100` invocation are identical across A1, B1, B2, C1.
