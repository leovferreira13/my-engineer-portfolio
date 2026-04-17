# Engineer portfolio · Leonardo Ferreira

Public source for **[leoferreira.dev](https://www.leoferreira.dev)** — a personal site that doubles as a concise engineering portfolio: who I am, how I work, and what I have shipped. The repository is meant to be readable by humans and by tooling (structured exports, MDX content).

## Intent

This work is a **portfolio-first career product**, not only a code demo: a fast, honest surface that moves each reader type (ATS, recruiter, interviewer, hiring manager) toward the **next step** in the hiring funnel—aligned with a strong resume and professional narrative on the homepage and in long-form content.

The default experience is **grounded narrative** (experience, education, curated projects, tech stack, publications) with navigation scoped to that story. The same surface should show **how** decisions are made—product framing, engineering trade-offs, and evolution over time—not only **what** shipped. That includes room for a structured **engineering journal**, **projects** with real context, and an **exportable CV**.

Product vision, goals, and how this maps to the repo are spelled out in **[`docs/VISION.md`](./docs/VISION.md)**.

## Documentation

| Document                                                                   | Role                                                                   |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`docs/VISION.md`](./docs/VISION.md)                                       | North star, Linear-aligned summary, and pointers to product directives |
| [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)                           | Map of `src/`, App Router, features, and active architectural summary  |
| [`docs/adr/`](./docs/adr/)                                                 | Architecture Decision Records (detail when a choice is stable)         |
| [`docs/GETTING-STARTED.md`](./docs/GETTING-STARTED.md)                     | Dev server, env, and tooling                                           |
| [`docs/product/resume-directives.md`](./docs/product/resume-directives.md) | Copy and structure rules for resume-as-landing-page consistency        |

The site began as a **fork of an open-source Next.js portfolio template**. Scope, navigation, content, and presentation were redirected for this positioning.

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

## Development

Local setup and production build: **[SETUP.md](./SETUP.md)**.

Agent-oriented repo notes: **[AGENTS.md](./AGENTS.md)**.
