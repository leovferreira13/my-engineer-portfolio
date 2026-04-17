# ADR 0002: Homepage section order for Product Engineer narrative

## Status

Accepted

## Context

ADR 0001 scoped the MVP homepage (registry sections off by default, publications label, social links). After MVP, the page still read like a template surface: high-visibility blocks (tech stack, sponsors, optional registry) appeared before the primary career story (experience and selected work).

## Decision

1. **Section order on `/`**: After identity (cover, header, overview, social, narrative panel), the homepage flows as **Recommendations (testimonials) → Experience → Selected work (projects) → Tech stack → GitHub contributions (when configured) → Sponsors → Components/Blog (when registry flag is on) → Publications → Certifications → Bookmarks**. Rationale: recruiters and peers see role context and impact before tooling lists and template-adjacent surfaces.
2. **Copy layer, not redesign**: Positioning changes are expressed through **existing panels** (`USER` bio/about, project descriptions, panel titles, LLM export text). No new homepage components for this iteration.
3. **Panel labels**: The former "About" panel title is **How I work**; the projects panel title is **Selected work**; screen-reader heading for testimonials is **Recommendations**, aligned with LinkedIn-sourced quotes rather than a generic "Wall of Love" metaphor.

## Consequences

- When `NEXT_PUBLIC_SHOW_PORTFOLIO_REGISTRY_SECTIONS=true`, Components and Blog still appear after stack and contributions, preserving the same narrative priority.
- Future structural splits (e.g. dedicated "Decisions" or journal teaser) can insert after **Selected work** without reordering again.
