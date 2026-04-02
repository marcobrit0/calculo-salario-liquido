# Salário Líquido

Calculadora de salário líquido CLT em PT-BR com foco em 2026:

- INSS progressivo válido a partir de janeiro de 2026
- Tabela mensal do IRPF publicada pela Receita Federal para 2026
- Redução mensal prevista na Lei 15.270/2025
- Simulação de bruto para líquido e líquido para bruto
- Dependentes e pensão alimentícia judicial

## Rodando localmente

```bash
npm install
npm run dev
```

## SEO técnico

- `src/app/sitemap.ts` gera o sitemap a partir das páginas estáticas encontradas em `src/app`
- `src/app/robots.ts` publica `robots.txt` com referência ao sitemap
- `src/app/manifest.ts` publica `manifest.webmanifest`
- canonicals, Open Graph, Twitter Card e metas de robôs ficam centralizados em `src/lib/seo.ts`

Variáveis úteis em produção:

- `NEXT_PUBLIC_SITE_URL`: URL canônica do site
- `GOOGLE_SITE_VERIFICATION`: token de verificação do Google Search Console
- `BING_SITE_VERIFICATION`: token de verificação do Bing Webmaster Tools

## Fontes oficiais usadas no motor de cálculo

- Receita Federal: https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026
- INSS: https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal
- Lei 15.270/2025: https://www.planalto.gov.br/ccivil_03/_Ato2023-2026/2025/Lei/L15270.htm

## Escopo da v1

Inclui a simulação mensal padrão para empregado CLT, empregado doméstico e trabalhador avulso no regime progressivo. Não inclui férias, 13º, horas extras, PLR, VT ou descontos internos de cada empresa.
