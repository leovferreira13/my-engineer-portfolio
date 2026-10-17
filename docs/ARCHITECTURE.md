# Architecture

This document describes how the codebase is organized and how the main subsystems fit together.

## Overview

The site is a **Next.js 16** application using the **App Router**: server and client components, layouts, and route handlers under `src/app/`. It combines a **portfolio** surface, a **Journal**, and a **shadcn-style component registry** that publishes installable snippets (blocks, components, hooks, examples, and shared lib code).

**Stack**: TypeScript, Tailwind CSS v4, shadcn/ui, MDX, pnpm, Railway.

At a high level:

- **`src/app/`** wires URLs to pages and owns global layout concerns.
- **`src/features/`** holds domain-oriented modules (documentation/blog data, portfolio, sponsors). Feature code prefers colocation of UI, data access, and types specific to that area.
- **`src/registry/`** is the **source of truth** for registry items; a build step emits **`src/__registry__/`** and **`public/r/*.json`** for consumers and the in-site docs experience.
- **`src/components/`** is shared UI used across features and routes.

## Project structure

| Directory                              | Purpose                                                                                      |
| -------------------------------------- | -------------------------------------------------------------------------------------------- |
| `src/app/`                             | App Router pages, layouts, API routes                                                        |
| `src/components/`                      | Shared UI components                                                                         |
| `src/registry/`                        | Registry source (components, hooks, blocks, examples, lib)                                   |
| `src/__registry__/`                    | Auto-generated registry files (**DO NOT EDIT**)                                              |
| `src/features/`                        | Active features: `doc`, `journal`, `portfolio`; retained `blog`/`sponsor` registry utilities |
| `src/config/`                          | Site (`site.ts`) and registry (`registry.ts`) configuration                                  |
| `src/hooks/`, `src/lib/`, `src/utils/` | Hooks, libraries, utilities                                                                  |

**Key files**: `components.json` (shadcn config), `src/features/portfolio/data/` (portfolio data), `.env.example` (env vars).

## Architecture Decision Records

Fork-specific **product and structure** choices live in [`docs/adr/`](./adr/). Use the project skill [`.agents/skills/create-adr/SKILL.md`](../.agents/skills/create-adr/SKILL.md) when creating or superseding ADRs (Cursor: **`/create-adr`** once mapped to that skill). New ADRs follow [`docs/adr/template/adr-template.md`](./adr/template/adr-template.md): one decision per file, monotonic `NNNN` ids, **no edits** to an ADR after it is `active` — supersede with a new file instead.

### Active architecture decisions

The list below is the **living summary of decisions still in force**. Update it whenever you add or supersede an ADR (same commit as the ADR change when possible).

- **[0001](./adr/0001-portfolio-mvp-content-and-sections.md)** — Portfolio MVP scope; optional registry sections via env; publications panel.
- **[0003](./adr/0003-hero-without-cover-banner.md)** — Hero without cover banner; scroll anchor on avatar.
- **[0004](./adr/0004-experience-section-narrative-curation.md)** — Experience list curated for narrative focus.
- **[0005](./adr/0005-education-section-separate-from-experience.md)** — Education as a first-class section and exports, separate from employers.
- **[0006](./adr/0006-portfolio-tech-stack-icons.md)** — Tech stack data, skill groups, local vs remote icons.
- **[0008](./adr/0008-portfolio-section-cards.md)** — Homepage sections as discrete cards; shared border treatment.

- **[0010](./adr/0010-public-project-catalog.md)** — Growing public project catalog with source/demo links; supersedes 0007.
- **[0011](./adr/0011-project-linked-journal.md)** — Explicit MDX publication, project links, chronology, evidence, RSS, and honest empty state.

- **[0012](./adr/0012-multilingual-portfolio.md)** — Five explicit locale URLs and server-rendered translations; English default.
- **[0013](./adr/0013-journal-navigation.md)** — Journal navigation and optional machine exports; supersedes 0009.

- **[0014](./adr/0014-expanded-professional-narrative.md)** — Expanded Product Engineer narrative, adjacent role evidence, and multilingual capability explanations reused by English exports.

## Portfolio and Journal

`src/features/portfolio/data/` is the professional content and project catalog. `src/features/journal/` validates published notes from the shared MDX store. Public pages live at `/<locale>`, `/<locale>/projects`, `/<locale>/journal`, and `/<locale>/journal/[slug]`; the journal feed is `/journal/rss`. Legacy `/decisions` URLs redirect to `/journal` on the same locale. Drafts, future dates, and component documentation do not enter the journal, its navigation, RSS, sitemap, or profile exports. See [JOURNAL.md](JOURNAL.md).

`src/lib/site-url.ts` resolves an explicit `APP_URL`, Railway public domain, or local-only fallback. Static metadata needs a rebuild after changing domains. [DEPLOYMENT.md](DEPLOYMENT.md) covers the Railway contract.

## Component registry

The registry is built on **shadcn/ui** conventions: each item type is declared in a `_registry.ts` file and built into generated artifacts for the site and for distribution.

| Type                 | File                                   |
| -------------------- | -------------------------------------- |
| `registry:component` | `src/registry/components/_registry.ts` |
| `registry:hook`      | `src/registry/hooks/_registry.ts`      |
| `registry:block`     | `src/registry/blocks/_registry.ts`     |
| `registry:example`   | `src/registry/examples/_registry.ts`   |
| `registry:lib`       | `src/registry/lib/_registry.ts`        |

**NEVER EDIT** auto-generated files: `src/__registry__/index.tsx`, `src/__registry__/registry.autogenerated.json`, `public/r/*.json`.

### Adding a new component

1. Create the component under `src/registry/[name]/`.
2. Register it in the appropriate `_registry.ts` file for its type.
3. Add an example under `src/registry/examples/`.
4. Run `pnpm registry:build` (requires `bun`; see [`GETTING-STARTED.md`](GETTING-STARTED.md)).
5. Add MDX documentation under `src/features/doc/content/` with `category: "components"`.

For narrative content (blog vs docs), see the **Content System** section in [`AGENTS.md`](../AGENTS.md).

`src/i18n/` holds curated UI and professional translations with stable role and education IDs. `src/app/(app)/[locale]/` contains real localized routes. `src/proxy.ts` supplies request locale and English-default redirects. The header language selector performs document navigation to keep shared chrome and HTML language consistent.
