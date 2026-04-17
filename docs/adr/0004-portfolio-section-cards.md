# ADR 0004: Portfolio homepage sections as discrete cards

## Status

Accepted

## Context

The homepage composition still used full-width horizontal rules and a repeating diagonal line pattern between sections, plus vertical rails (`border-x border-line`) inherited from the upstream template. That reads as persistent grid chrome rather than intentional content blocks. ADR 0001 already scoped the homepage toward a CV-grounded narrative; the visual system should reinforce scan-friendly hierarchy without decorative noise.

## Decision

1. **Remove section separators that use the repeating line pattern** from the homepage flow (`/`): spacing between blocks is handled with vertical gap only.
2. **Treat each major homepage block as a card**: `Panel` (and the profile hero) use `rounded-xl`, `bg-background`, `text-card-foreground`, light `shadow-xs`, and a single grey outline via `ring-1 ring-border` instead of `screen-line-*` utilities and full-height side rails. The card fill matches the page gutter (`--background`) so blocks do not read as pure black against the slightly lighter zinc canvas. Section separation is read from the card contour only, not from a contrasting inset fill.
3. **Panel titles**: `PanelHeader` uses a simple bottom border on the semantic token `border-border` instead of `screen-line-bottom`.
4. **Interior grids** (social links, sponsors, optional components/blog grids): drop absolute overlay column borders; use per-cell borders on interactive tiles or neutral gap spacing so separation comes from the card edge and tile shapes, not a background grid.

## Consequences

- Docs, blog, and blocks routes can keep their existing lined backgrounds; only the portfolio homepage composition changes unless a component is shared (e.g. `CollapsibleList` borders now use `border-border` for consistency).
- Slightly more vertical rhythm from `gap-4` between cards; long pages remain readable and scroll targets (`scroll-mt`) are unchanged.
- Reverting to full-width line aesthetics is possible by restoring `screen-line-*` on `Panel` and the old `page.tsx` separator if a future milestone wants the template look back.
