---
type: ADR
id: "0019"
title: "Stack links to evidence of work"
status: active
date: 2026-10-28
---

## Context

Recruiters need to connect a listed capability to work that demonstrates it. Vendor documentation does not provide that evidence. This supersedes ADR 0017's link behavior, retaining its curated badge groups, icons, and source-only rendering.

## Decision

**Stack badges link to the specific professional role or public project that demonstrates their use.** Activating a link reveals a collapsed role, moves keyboard focus and scroll position to the destination, and highlights it for 3.5 seconds. Repeated clicks and shared anchors work too. Reduced-motion preferences disable smooth scrolling. Tools without confirmed work context remain non-link badges until the owner supplies evidence; do not guess employer attribution. External technology documentation stays available in the English reference export.

The header's primary work CTA links to professional experience; a secondary Projects CTA opens the localized catalog in another tab. The supplied English Product Engineer PDF is a secondary downloadable header action. Location and visitor-relative local time sit together below email, preserving fractional-hour offsets.

## Options considered

- **Evidence links (chosen):** demonstrate capabilities through existing work without duplicating the role descriptions.
- Vendor links: explain a technology without establishing the engineer's experience.
- Expanded roles everywhere: make the page longer without improving navigation from the stack.

## Consequences

New skills need an explicit evidence mapping. Role anchors must stay stable and translated pages retain identical IDs. Reconsider when a stronger or more recent example becomes available. The PDF is public by the owner's explicit request and needs deliberate replacement when a new resume is approved.
