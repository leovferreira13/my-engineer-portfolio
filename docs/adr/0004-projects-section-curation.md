# ADR 0004: Curated projects list for the portfolio surface

## Status

Accepted

## Context

The projects panel is driven by a static array in `src/features/portfolio/data/projects.ts`. Earlier iterations retained multiple professional entries that matched a CV-style layout; the portfolio direction (LEO-14) is to show only intentional, non-template work and a single additional product line.

## Decision

1. **Cardinality**: The public `PROJECTS` list contains exactly **two** entries: this site (`leoferreira.dev`) and **Smart Scout Football**.
2. **External product link**: Until a stable branded domain is confirmed in content workflow, the Smart Scout Football card links to the **public marketing site** at `https://smartscoutai.com/` (verified HTTP 200 from automation). The issue requested a temporary project website link; this URL is treated as that placeholder and can be swapped in data only when the final domain is agreed.
3. **Copy**: Descriptions stay short and honest; detailed narrative belongs in later iterations (per issue notes).

## Consequences

- Recruiters see a minimal, curated list aligned with product-engineer positioning.
- Updating the Smart Scout Football URL or metadata is a one-file change with no component churn.
- LLM and homepage exports that map `PROJECTS` automatically reflect the same curated set.
