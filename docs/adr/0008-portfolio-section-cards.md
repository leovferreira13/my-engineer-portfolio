# ADR 0008: Portfolio homepage sections as discrete cards

## Status

Accepted

## Context

The homepage composition still used full-width horizontal rules and a repeating diagonal line pattern between sections, plus vertical rails (`border-x border-line`) inherited from the upstream template. That reads as persistent grid chrome rather than intentional content blocks. ADR 0001 already scoped the homepage toward a CV-grounded narrative; the visual system should reinforce scan-friendly hierarchy without decorative noise.

ADR 0004 through 0007 document later content and data decisions (experience curation, education split, tech stack icons, projects curation); this record is numbered **0008** so the index stays unique after those decisions landed on `main`.

## Decision

1. **Remove section separators that use the repeating line pattern** from the homepage flow (`/`): spacing between blocks is handled with vertical gap only.
2. **Treat each major homepage block as a card**: `Panel` sections use `rounded-xl`, `bg-background`, `text-card-foreground`, light `shadow-xs`, and a **full `border border-line` perimeter** (same token and box model as the sticky header inner row) so the **top edge of every card stays visible** in the vertical stack and against the page canvas. The hero block remains **`border-x border-b` only** with `rounded-t-none` so it still meets the header without a double top rule. Avoid `screen-line-*` utilities, full-height side rails, or a perimeter `ring` on cards—rings can sit slightly inside the content box and read as misaligned next to `border-line` rails. The card fill matches the page gutter (`--background`) so blocks do not read as pure black against the slightly lighter zinc canvas. Section separation is read from the card contour and vertical gap only, not from a contrasting inset fill.
3. **Profile hero and all homepage cards share header rails**: The first block sits directly under the header chrome (`md:max-w-3xl` + `px-2` gutter). The hero’s **top corners are square** (`rounded-t-none`) so the outline meets the header layout without a curved gap; the bottom keeps `rounded-b-xl`. Every **`Panel` below the hero** uses the same **`border-line` contour** (full border on the section) so **left and right edges line up with the hero and header** across the whole portfolio homepage. **No interior rule lines** in the hero (no column divider or stacked horizontal borders) and **no decorative “class name” teaser** above the display name, so identity reads as one block rather than a grid mock-up.
4. **Panel titles**: `PanelHeader` uses a simple bottom border on the semantic token `border-border` instead of `screen-line-bottom`.
5. **Interior grids** (social links, sponsors, optional components/blog grids): drop absolute overlay column borders; use per-cell borders on interactive tiles or neutral gap spacing so separation comes from the card edge and tile shapes, not a background grid. For **social links** with only two primary profiles (e.g. LinkedIn and GitHub), use a **two-column grid from `sm` upward** so both tiles share equal width and read as balanced; optional **`subtitle`** text under the title (handle or username) improves scan alignment between the two cells.
6. **Experience company rows**: Use **`border-border`** horizontal dividers between companies (`border-b` with `last:border-b-0`), not `screen-line-bottom`, so nested experience content matches the card system. Anchor ids use a configurable prefix defaulting to `experience` so they stay consistent with ADR 0005 (`experience-{id}` vs `education-{id}`).

## Consequences

- Docs, blog, and blocks routes can keep their existing lined backgrounds; only the portfolio homepage composition changes unless a component is shared (e.g. `CollapsibleList` borders now use `border-border` for consistency).
- Slightly more vertical rhythm from `gap-4` between cards; long pages remain readable and scroll targets (`scroll-mt`) are unchanged.
- Reverting to full-width line aesthetics is possible by restoring `screen-line-*` on `Panel` and the old `page.tsx` separator if a future milestone wants the template look back.
