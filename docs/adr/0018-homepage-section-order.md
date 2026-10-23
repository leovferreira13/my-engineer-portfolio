---
type: ADR
id: "0018"
title: "Profile homepage section order"
status: active
date: 2026-10-23
---

## Context

The profile placed the tool panel after selected work and the journal preview last. Readers met roles and projects before the stack, and journal notes only after publications. The concise About copy stays as already decided.

## Decision

**After About, the profile order is Stack, Experience, Journal, Selected work, Education, and Awards.** The profile header, overview, and social links stay above About. Command-menu jumps to those homepage anchors follow the same order.

## Options considered

- **Stack before experience, journal before selected work (chosen):** the stack is visible before roles, and journal notes appear before projects.
- Keep the previous order: tools and the journal preview stay at the end of the page.

## Consequences

New homepage sections need an explicit place in this order. This does not change About copy, experience entries, or journal posts.
