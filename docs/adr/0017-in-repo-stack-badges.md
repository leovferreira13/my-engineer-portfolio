---
type: ADR
id: "0017"
title: "In-repo Stack badges"
status: active
date: 2026-10-23
---

## Context

The profile listed curated tools as text pills under capability headings. The reference site now shows numbered rows of badges: a small monochrome icon where the product has a mark, and the name always visible. This repository already keeps 23 items in five skill groups, translations for those group labels, and an English markdown export. Copying the reference repository would replace that list. The older image-row approach loaded 32px files from a remote host or from `public/tech-stack-icons/`, and several current labels have no brand mark. This supersedes that image-resolution decision.

## Decision

**The Stack panel is an in-repo numbered badge list of the five curated skill groups.** All 23 titles, links, and groups stay. A badge includes an inline `currentColor` icon only for Python, FastAPI, Django, PostgreSQL, MongoDB, Redis, Databricks, PySpark, React, Next.js, TypeScript, and Vue.js. The other eleven items are text badges. Capability paragraphs stay in every dictionary and in the English markdown export, and they are not rendered in the panel. The UI does not sync the reference repository and does not request a remote icon host.

## Options considered

- **In-repo badge rows (chosen):** keeps the curated list, works in light and dark, and makes no image request.
- Sync the reference repository: brings a different tool list and drops the translations and markdown export.
- Restore the 32px image row: matches the older record, and practice labels would need a fake mark or a broken image.

## Consequences

Files in `public/tech-stack-icons/` stay on disk and are unused. A new brand icon is an inline mark for that exact product. Revisit this if image icons or a different curated list are wanted.
