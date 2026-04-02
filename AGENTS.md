# AGENTS.md

## Project Summary

This repository is a focused marketing + utility site for a Brazilian salary calculator:

- Product name: `Salário Líquido`
- Purpose: calculate `salário líquido CLT` for Brazil using 2026 rules
- Audience: Portuguese-speaking users in Brazil (`pt-BR`)
- Core use cases:
  - gross to net salary simulation
  - net to gross salary estimation
  - IRRF dependent deduction support
  - judicial alimony (`pensão alimentícia judicial`) support

The app is intentionally simple: one main landing page, one calculator, a few long-form explanatory sections, and two legal pages.

This is not a generic fintech dashboard. It is a content-led SEO landing page with a working calculator at the center.

## Business and Domain Context

The calculator is based on Brazilian 2026 payroll/tax assumptions for:

- `INSS` progressive employee contribution
- `IRRF 2026`
- monthly reduction from `Lei 15.270/2025`

Current v1 scope:

- standard monthly CLT simulation
- domestic worker and avulso references in copy/scope
- no 13th salary
- no vacation pay
- no overtime
- no PLR
- no transport vouchers or internal employer-specific deductions

Do not casually change tax logic, thresholds, deduction constants, labels, or legal wording. This repo is year-sensitive and search-intent-sensitive.

## Stack

- `Next.js 16` App Router
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `shadcn/ui`
- `lucide-react`

Package manager in repo today: `npm` (`package-lock.json` is committed).

Useful commands:

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Repo Structure

High-value files:

- `src/app/page.tsx`: main landing page and SEO content
- `src/components/salary-calculator.tsx`: client calculator UI
- `src/lib/salary.ts`: calculation engine and constants
- `src/lib/site.ts`: global site metadata, descriptions, keywords, FAQ
- `src/app/layout.tsx`: root metadata and font setup
- `src/app/globals.css`: design tokens, theme variables, global styling
- `src/components/site-logo.tsx`: brand mark
- `src/components/site-footer.tsx`: footer/nav/legal/source links
- `src/app/privacidade/page.tsx`: privacy page
- `src/app/termos/page.tsx`: terms page
- `src/app/opengraph-image.tsx`: OG image rendering
- `README.md`: short public summary and official source links
- `components.json`: shadcn config

## How the App Works

### Main UX

The home page is a long-form landing page with:

1. dark editorial hero
2. sticky nav
3. embedded calculator
4. methodology section
5. educational guide content
6. worked examples
7. interpretation help
8. official source links
9. FAQ
10. footer + legal links

The calculator is the main conversion point. Most surrounding copy exists to support SEO, trust, clarity, and structured search intent.

### Calculation Engine

The logic lives in `src/lib/salary.ts`.

Important details:

- modes:
  - `gross-to-net`
  - `net-to-gross`
- `net-to-gross` is solved numerically via binary search
- values are rounded to 2 decimals
- dependents are truncated to a non-negative integer
- pension is clamped to non-negative
- the engine compares:
  - legal deductions
  - simplified monthly deduction
- the UI shows which deduction model won

Current constants include:

- INSS brackets
- IRRF brackets
- dependent deduction
- simplified monthly discount
- zero-tax / reduction thresholds
- reduction base and factor

If tax rules change for a new year, review:

- `src/lib/salary.ts`
- `src/lib/site.ts`
- `src/app/page.tsx`
- `README.md`
- any legal/disclaimer copy mentioning year or scope

## Design System and Visual Language

This project already has a clear style. Preserve it.

### Overall Style

- editorial landing page, not SaaS dashboard chrome
- strong black/white neutral palette
- premium, calm, high-contrast visual tone
- big serif display headlines + clean sans-serif body copy
- rounded cards with soft shadows
- restrained motion
- dense SEO copy, but presented with generous spacing

### Fonts

Configured in `src/app/layout.tsx` and `src/app/globals.css`:

- body sans: `Geist`
- mono: `Geist Mono`
- display/heading serif: `Iowan Old Style`, fallback to Palatino/Book Antiqua/Georgia

Use:

- `font-display` for major headings and brand moments
- `font-sans` for body/UI
- `font-mono` for numeric/detail labels when appropriate

### Colors and Tokens

The theme is neutral and intentionally minimal:

- shadcn base color: `neutral`
- shadcn style: `base-nova`
- CSS variables are enabled
- light theme only in practice, though `dark` variant support exists in CSS infra

Do not introduce random accent colors or purple gradients. If you add visual elements, keep them within the established neutral system.

### Motion

Custom animation is minimal:

- `animate-rise` is used for subtle entry motion

Avoid flashy micro-animations. Motion should support polish, not distract from the calculator.

## Content Strategy

This project is heavily SEO-informed.

Primary search intent centers around:

- `calculo salario liquido`
- `calculadora de salario liquido`
- `calcular salario liquido`
- `desconto salario`
- `salario bruto para liquido`
- `salario liquido para bruto`
- `inss 2026`
- `irrf 2026`
- `lei 15270 2025`

The site uses:

- metadata keywords in `src/lib/site.ts`
- FAQ content for search coverage
- JSON-LD in `src/app/page.tsx`
- official-source linking for credibility
- explanatory sections that answer common user questions directly

When editing copy:

- keep copy in `pt-BR`
- keep search terms natural, not spammy
- prefer short, clear sentences over legalistic jargon unless on legal pages
- preserve the trust-building tone
- keep the calculator as the centerpiece

## Writing Style

Preferred tone:

- clear
- direct
- practical
- high-trust
- informative without sounding bureaucratic

Avoid:

- English UI copy
- startup clichés
- playful fintech slang
- exaggerated marketing claims
- implying the result is legal/accounting advice

Important stylistic patterns already in the repo:

- many headings are short and explanatory
- subhead copy is pragmatic and search-intent aligned
- disclaimers are explicit
- long-form sections are broken into readable blocks/cards

## Branding

- Brand name: `Salário Líquido`
- Logo style: circular emblem with `S` and serif wordmark
- Supporting label: `CLT 2026`

This is a niche informational calculator brand, not a multi-product company brand system.

## Legal and Trust Guardrails

The app repeatedly positions itself as:

- informative
- a simulation
- not a substitute for payslips, contracts, payroll departments, accountants, or lawyers

Preserve this framing in:

- homepage explanatory copy
- footer disclaimer
- terms page
- privacy page

Do not introduce copy that overstates precision or promises guaranteed real payroll matches.

## Important Implementation Notes

### Internationalization

- language is `pt-BR`
- currency formatting uses `BRL`
- numeric input parsing accepts Brazilian-style commas

If you touch number parsing or formatting, verify the UX still behaves correctly for `pt-BR` input patterns like `5.000,00`.

### SEO and Metadata

The repo already includes:

- page metadata
- canonical URLs
- Open Graph metadata
- Twitter metadata
- sitemap/robots/manifest files
- JSON-LD for `WebApplication`, `WebPage`, and `FAQPage`

If you create new public pages, make sure metadata quality stays high and consistent.

### Environment

Base site URL comes from:

- `NEXT_PUBLIC_SITE_URL`

Fallback is:

- `https://calculo-salario-liquido.vercel.app`

### UI Libraries

The project uses shadcn/ui primitives in `src/components/ui`.
Prefer existing components and existing class patterns over inventing a parallel component system.

## Guidance for Future AI Agents

If you are modifying this repo:

1. Read `src/lib/salary.ts` before touching tax or calculator behavior.
2. Read `src/app/page.tsx` before changing layout/content hierarchy.
3. Read `src/app/globals.css` before changing fonts, tokens, or overall style.
4. Preserve `pt-BR` copy unless explicitly asked otherwise.
5. Keep the landing page premium, minimal, and editorial.
6. Keep official-source credibility and disclaimer language intact.
7. If updating the tax year, update all year references consistently across logic, metadata, copy, README, and legal text.

## Safe Change Areas

Usually safe:

- spacing/layout refinements
- accessibility improvements
- metadata improvements
- clearer copy in existing tone
- performance cleanup
- small UX polish in the calculator

High-risk areas:

- tax constants
- deduction logic
- binary search logic
- SEO keyword positioning
- legal page claims
- date/year references
- changing fonts or palette radically

## What “Good” Looks Like Here

A good change in this repo usually does at least one of these:

- improves clarity of the calculator
- improves trust or credibility
- improves search relevance without making copy spammy
- improves readability of dense financial/legal content
- preserves the premium monochrome visual system
- keeps domain logic explicit and conservative

If in doubt, optimize for clarity, credibility, and consistency over novelty.
