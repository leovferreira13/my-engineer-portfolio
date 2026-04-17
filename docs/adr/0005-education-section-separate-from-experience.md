---
type: ADR
id: "0005"
title: "Dedicated Education section separate from Experience"
status: active
date: 2026-04-17
---

# ADR 0005: Dedicated Education section separate from Experience

## Context

Academic history was modeled as a synthetic `Experience` entry (`companyName: "Education"`), which grouped degrees with employers and diluted scanability. Product work (LEO-13) calls for education as a first-class homepage section with clear hierarchy next to professional experience.

## Decision

1. **Data split**: Degrees live in `src/features/portfolio/data/education.tsx` as `ExperiencePosition[]` (same shape as role rows for consistent UI).
2. **Homepage layout**: A new `Education` panel (`id="education"`) renders immediately after the Experience panel, using the same timeline and collapsible row components as jobs.
3. **Deep links**: Education rows use `id="education-{entryId}"` so anchors do not collide with `experience-{companyId}`.
4. **LLM exports**: `experience.md` lists work only; a new `education.md` route mirrors the split. `llms-full.txt` and `llms.txt` include an Education section and link respectively.

## Consequences

- Experience and education can evolve independently without fake “employer” records.
- Markdown consumers get clearer structure; two fetches instead of inferring education from a pseudo-company block.
- Reusing `ExperiencePosition` for education keeps the timeline UI consistent without a parallel component tree.
