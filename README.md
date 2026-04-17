# Engineer portfolio · Leonardo Ferreira

[![License](https://img.shields.io/github/license/leovferreira13/my-engineer-portfolio?label=License)](https://github.com/leovferreira13/my-engineer-portfolio/blob/main/LICENSE)

Public source for **[leoferreira.dev](https://www.leoferreira.dev)** — a personal site that doubles as a concise engineering portfolio: who I am, how I work, and what I have shipped. The repository is meant to be readable by humans and by tooling (structured exports, MDX, registry metadata).

## Intent

This work is a **portfolio-first** product: the homepage tells a grounded professional story (experience, education, curated projects, tech stack, publications) instead of leading with component marketing or template chrome. The codebase still includes a **shadcn-style registry** and **MDX-powered blog/docs** so reusable UI and writing can evolve alongside the CV narrative.

The site began as a **fork of an open-source Next.js portfolio and registry template**. Scope, navigation, content splits, and visual treatment were intentionally redirected for my positioning; those choices are **documented as Architecture Decision Records** under [`docs/adr/`](./docs/adr/).

## What the ADRs capture

| ADR                                                                   | Topic                                                                                       |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [0001](./docs/adr/0001-portfolio-mvp-content-and-sections.md)         | MVP homepage scope, social links, optional registry sections behind env, publications panel |
| [0002](./docs/adr/0002-header-navigation-portfolio-scope.md)          | Header and command palette limited to portfolio scope (Home, Blog)                          |
| [0003](./docs/adr/0003-hero-without-cover-banner.md)                  | Hero without cover banner; identity anchored on avatar and name                             |
| [0004](./docs/adr/0004-experience-section-narrative-curation.md)      | Experience list curated for a single coherent narrative                                     |
| [0005](./docs/adr/0005-education-section-separate-from-experience.md) | Education as its own section and exports, separate from employers                           |
| [0006](./docs/adr/0006-portfolio-tech-stack-icons.md)                 | Tech stack data, skill groups, local vs remote icons                                        |
| [0007](./docs/adr/0007-projects-section-curation.md)                  | Curated projects list for the public surface                                                |
| [0008](./docs/adr/0008-portfolio-section-cards.md)                    | Homepage sections as discrete cards and shared layout rules                                 |

For a structural map of `src/` (App Router, `features/`, registry pipeline), see [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md). For dev server, env, and tooling notes, see [`docs/GETTING-STARTED.md`](./docs/GETTING-STARTED.md).

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4** and **shadcn/ui**
- **MDX** for blog and documentation-style content
- **pnpm** and **TypeScript** (strict)

## Highlights (site)

- Light/dark themes, responsive layout, SEO-oriented metadata
- Centralized **MDX** content with categories (blog vs docs)
- **JSON-LD**, sitemap, robots, RSS where applicable
- **AI-oriented** text exports (e.g. `llms.txt` style routes)
- Optional **PostHog** / **OpenPanel** analytics and consent tooling (degrade without keys)
- **PWA**-oriented configuration where enabled in the app
- **shadcn registry** for installable blocks/components (see [SETUP.md](./SETUP.md))

## Development

Local setup, production build, and registry workflow: **[SETUP.md](./SETUP.md)**.

Agent-oriented repo notes: **[AGENTS.md](./AGENTS.md)**.
