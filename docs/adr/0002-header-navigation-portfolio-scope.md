---
type: ADR
id: "0002"
title: "Header navigation limited to portfolio scope"
status: active
date: 2026-04-17
---

# ADR 0002: Header navigation limited to portfolio scope

## Context

The global header still exposed registry-oriented destinations (Components, Blocks, Sponsors) inherited from the upstream template. ADR 0001 already scoped the homepage away from that surface; the primary navigation should match the portfolio positioning without removing underlying routes.

## Decision

1. **Primary nav items**: The sticky header’s main links (desktop and mobile sheet) are **Home** and **Blog** only.
2. **Command palette “Menu” group**: The quick links shown under the “Menu” heading mirror the same top-level destinations (Home, Blog, plus optional non-registry items such as Wall of Love that were not part of the removal list).
3. **Registry in command palette**: Dedicated “Components” and “Blocks” groups are removed from the command menu so those areas are not discoverable from the header/search entry point. Direct URLs and bookmarks remain valid for maintainers.

## Consequences

- Fewer distractions for visitors arriving from the portfolio narrative.
- Component and block documentation remain buildable and reachable by URL when needed; reintroducing palette sections is a small change if the site pivots back to registry marketing.
