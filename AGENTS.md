# AI Agent Guidelines for engineering portfolio

Guidance for coding agents working in this repository: **product boundaries** first, then **structure**, **content**, **implementation standards**, and **workflow / environment**.

---

## Product rules and recorded decisions

- **Vision and roadmap hub** (north star, Linear project, index of `docs/product/`): [`docs/VISION.md`](docs/VISION.md).
- The site is **portfolio-first**: the public homepage emphasizes CV-grounded narrative (experience, education, projects, stack); registry marketing and optional homepage strips are controlled by config and env (see ADRs).
- **Product and UX decisions** live in [`docs/adr/`](docs/adr/). Read the relevant ADR before changing homepage composition, navigation, portfolio data shapes, or section semantics.
- **Resume and copy constraints** (when editing portfolio narrative): [`docs/product/resume-directives.md`](docs/product/resume-directives.md).
- **Human-facing repo intent** (for context only): [`README.md`](README.md).

---

## Architecture and codebase layout

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for stack overview, how `app`, `features`, and `registry` relate, directory layout, shadcn registry types, generated outputs, and steps to add a new registry component.

---

## ADRs & docs

- **Workflow** (numbering, template, supersede rules, `ARCHITECTURE.md` summary): read and follow [`.agents/skills/create-adr/SKILL.md`](.agents/skills/create-adr/SKILL.md). In Cursor, map the slash command **`/create-adr`** to that skill when you want this flow by name.
- **When to record**: new dependency or platform constraint, storage strategy, product or homepage scope, cross-cutting patterns — **not** for routine bugfixes, cosmetic-only changes, or behavior-preserving refactors.
- **Same commit as code** when practical. After registry or dev-environment changes, update [`docs/GETTING-STARTED.md`](docs/GETTING-STARTED.md) if behavior for agents or setup changes.

---

## Content system

All content lives in `src/features/doc/content/` as MDX files. Journal entries and component docs are distinguished by the `category` field in frontmatter.

- **Data layer**: `src/features/doc/data/documents.ts` (`getAllDocs`, `getDocBySlug`, `getDocsByCategory`)
- **Journal UI**: `src/features/journal/`; inherited `blog` components remain only as registry utilities.
- **Translations**: `src/i18n/`; English default plus `br`, `nl`, `es`, `de`. `src/proxy.ts` maps public locale URLs to portfolio pages. Never translate employer/project identifiers or measured outcomes.

---

## Public-source boundary

Treat every committed file as publicly readable, including drafts, examples, agent configuration, and documentation. Never commit credentials, customer data, confidential employer material, private planning links, or raw private CV/cover-letter inputs. A Journal draft flag is not an access-control boundary. Keep private working notes outside this repository.

## Coding and implementation

- TypeScript strict mode; explicit types when necessary.
- kebab-case file naming.
- Descriptive names; comments only for “why”, not “what”.
- No emojis in code, comments, or commit messages.
- Tailwind CSS v4 syntax; support dark and light modes.
- Prefer SOLID-oriented structure; match patterns, naming, and import style in surrounding code when editing existing files.

---

## Commands

```bash
pnpm dev             # Dev server
pnpm build           # Production build
pnpm lint            # ESLint
pnpm format:write    # Prettier
pnpm check-types     # Type checking
pnpm registry:build  # Build shadcn registry
```

---

## README screenshot freshness

For **every revision to the portfolio's content, layout, styles, navigation, or behavior**, build and run the current revision locally, then run `pnpm capture:portfolio` against that server before committing. Inspect both captures and commit them with the change. The README's `docs/screenshots/profile.png` must always show the current English profile in **dark mode**; `profile-mobile.png` shows the current Portuguese profile in dark mode. Do not reuse an older capture or capture a deployed branch that lacks the changes under review. If a capture is visually identical, verify it was regenerated anyway. This is part of completing a portfolio revision, not an optional documentation task.

## GitHub source control

**Create every new pull request as a draft by default** (`gh pr create --draft` or API `draft: true`). Keep it in draft during implementation and user-requested refinements; convert an existing ready PR back to draft before continuing work. Only mark it ready for review at the agreed final QA handoff, after implementation, required checks, screenshots, and the PR description are complete. If the user says to keep it draft for now, leave it draft until they indicate the refinement phase is finished. Marking ready does not authorize merging or self-approving. This maintainer preference takes precedence over workflow examples that omit the draft flag.

When a work item is **ready to commit**, or the user asks for **commits**, **branches**, or **pull requests** under the agreed workflow, read and follow [`.agents/skills/github-source-control/SKILL.md`](.agents/skills/github-source-control/SKILL.md) (branch from `develop` by default, no direct push to `main`/`develop`, conventional commits, open PRs with a documented body).

Other project skills live under [`.agents/skills/`](.agents/skills/) (for example component docs and registry block classification).

---

## Local dev, cloud agents, and tooling

See [`docs/GETTING-STARTED.md`](docs/GETTING-STARTED.md) for the dev server (Portless / HTTPS), environment variables, `registry:build` and **Bun**, Husky / lint-staged, and how the app behaves without external services or credentials.

For full **Ubuntu laptop setup**, production run, and registry consumption notes, see [`SETUP.md`](SETUP.md).
