---
type: ADR
id: "0013"
title: "Journal as the public writing surface"
status: active
date: 2026-10-17
---

## Context

Supersedes ADR 0009 for public navigation labels and addresses. The writing surface records product and engineering choices; a longer header label was undesirable, while a generic blog label loses that purpose. The public name is **Journal**.

## Decision

**Use “Journal” in English, with translated labels, at `/<locale>/journal`.** Profile and Projects remain the other primary destinations. The left header link uses a house icon; LF remains the favicon. Navigation, keyboard search, exports, and documentation use the same terminology. RSS remains an optional machine-readable endpoint at `/journal/rss` with no subscription button or menu entry. `/llms.txt` and `/llms-full.txt` remain optional public English exports, outside user navigation.

Legacy unlocalized `/journal`, `/decisions`, and `/blog` paths redirect to their English equivalents under `/en/journal`. Localized `/decisions` URLs permanently redirect to `/journal` on the same locale.

## Options considered

- **Journal (chosen):** short, familiar, and aligned with the internal MDX `journal` category without the longer “Engineering Journal” label.
- Blog: familiar, but less specific to the product's purpose.
- Engineering Journal: expressive, but unnecessarily long in primary navigation.

## Consequences

The MDX `journal` category and internal module names remain stable; no content migration is needed. Reconsider the label only if the writing surface grows beyond decisions, releases, experiments, and retrospectives.
