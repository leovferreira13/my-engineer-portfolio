---
type: ADR
id: "0021"
title: "Consolidated company narrative with dated career progression"
status: active
date: 2026-10-28
---

## Context

Guiavet's three expandable role descriptions repeated responsibilities and hid product evidence. The owner approved one company chapter with selected achievements, emphasizing the monolithic backend foundation rather than PDF timing. This supersedes ADR 0004's requirement to merge consecutive roles into a single position record; its curation of irrelevant early placements remains in effect.

## Decision

**An employer may render a consolidated narrative with chronological, dated role progression and always-visible achievements.** Guiavet uses this presentation. Preserve the original titles, dates and role IDs in source so tenure, English exports and deep links remain accurate. Shared skill badges are deduplicated. Existing stack anchors focus and highlight the associated achievement group without requiring expansion.

Lead Guiavet with the owner-confirmed Python/Django monolithic backend foundation using Nginx and Docker, with separate API and worker processes, supporting the company from founding into the period after product-market fit. Product-market fit is company context, not an architectural outcome. Follow with core workflows, customer research, B2B expansion and leadership of five engineers. Remove PDF timing and the unresolved operation/churn percentages from this curated narrative in every language.

## Options considered

- **Consolidated presentation, preserved history (chosen):** quick evidence scanning while accurately showing promotions and keeping stable links.
- One record named after the final role: risks implying the entire tenure was spent in that role.
- Three expandable narratives: repeats details and hides relevant evidence.

## Consequences

Consolidated roles have no disclosure buttons. Other employers retain their current behavior. The new optional presentation flag must not alter historical dates or assign the final title to the entire company tenure. Revisit curation if a stronger confirmed delivery becomes available. Continue omitting irrelevant early placements rather than hiding them in UI.
