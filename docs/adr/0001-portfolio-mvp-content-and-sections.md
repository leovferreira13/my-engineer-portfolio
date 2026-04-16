# ADR 0001: MVP portfolio content and optional homepage sections

## Status

Accepted

## Context

The site started as a forked portfolio plus shadcn registry template. The first product milestone is a CV-grounded personal homepage, not a component marketing surface.

## Decision

1. **Content source of truth**: Public professional profile information (primarily LinkedIn) is used for the first draft when the CV attachment cannot be read from automation. Email and phone are omitted until explicit values are provided (optional fields on `User`).
2. **Homepage scope**: Registry-oriented sections (components grid, blog strip from MDX, sponsors grid, GitHub contributions graph) are hidden by default for the portfolio MVP. They can be re-enabled with `NEXT_PUBLIC_SHOW_PORTFOLIO_REGISTRY_SECTIONS=true` for maintainers who still want the full template surface.
3. **Awards panel**: The existing "awards" UI is repurposed as **Publications** for the IEEE paper entry, avoiding a new component while keeping semantics clear in the panel title.

## Consequences

- Fewer moving parts on `/` for recruiters scanning impact and trajectory.
- The registry and docs remain available via routes; only the homepage composition changes by default.
- When enabling registry sections, ensure `GITHUB_CONTRIBUTIONS_API_URL` is set so the graph does not render empty.
