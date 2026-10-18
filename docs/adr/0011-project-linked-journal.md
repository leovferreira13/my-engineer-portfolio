---
type: ADR
id: "0011"
title: "Project-linked journal"
status: superseded
date: 2026-10-17
superseded_by: "0016"
---

## Context

The portfolio needs dated evidence of decisions and releases, but has no published notes yet. Template MDX documents must not be mistaken for personal writing.

## Decision

**Extend the existing MDX store with explicit `journal` category, draft/published status, dates, project ID, entry type, tags, and evidence references.** Publish only explicit, non-future entries. Validate published journal metadata, filter by project, provide RSS at `/journal/rss` and project-scoped previous/next links on `/<locale>/journal/[slug]`, and share publication rules with sitemap and exports.

## Options considered

An external CMS would add credentials and deployment dependencies. A plain unstructured blog would lose project links and evidence. Shared MDX with a narrow schema reuses rendering and keeps review in Git.

## Consequences

The initial empty state is intentional. Publishing requires a source change and deployment; dates alone do not trigger deployment. Reconsider storage if non-technical editing or collaborative publishing becomes a real requirement.
