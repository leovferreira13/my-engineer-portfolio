---
type: ADR
id: "0013"
title: "Decision Log as the public writing surface"
status: active
date: 2026-10-17
---

## Context

Supersedes ADR 0009 for public navigation labels and addresses. The writing surface records product and engineering choices; “Engineering Journal” is long for the header, while a generic blog label loses that purpose.

## Decision

**Use “Decision Log” in English, with translated labels, at `/<locale>/decisions`.** Profile and Projects remain the other primary destinations. The left header link uses a house icon; LF remains the favicon. Navigation, keyboard search, exports, and documentation use the same terminology. RSS remains an optional machine-readable endpoint with no subscription button or menu entry. `/llms.txt` and `/llms-full.txt` remain optional public English exports, outside user navigation.

## Options considered

- **Decision Log (chosen):** short and explicit about recording choices and evidence.
- Blog: familiar, but less specific to the product's purpose.
- Engineering Journal: expressive, but unnecessarily long in primary navigation.

## Consequences

The MDX `journal` category and internal module names remain stable; no content migration is needed. Legacy portfolio and journal addresses redirect to their English equivalents. Reconsider the label only if the writing surface grows beyond decisions, releases, experiments, and retrospectives.
