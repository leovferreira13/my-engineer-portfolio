---
type: ADR
id: "0009"
title: "Professional portfolio navigation"
status: active
date: 2026-10-17
---

## Context

Supersedes ADR 0002. The hiring portfolio needs distinct places to understand the engineer, inspect public work, and read future engineering notes.

## Decision

**Use Profile (`/`), Projects (`/projects`), and Engineering Journal (`/journal`) as primary navigation**, on desktop, mobile, and keyboard search. Keep the existing responsive card visual system. Legacy `/blog` redirects to `/journal`; upstream personal posts are removed.

## Options considered

A single long homepage would keep setup smaller but bury project and journal exploration. The selected navigation gives each hiring question a stable destination.

## Consequences

Inherited registry features remain source utilities rather than portfolio navigation. Reconsider only if a new public surface serves the same audience.
