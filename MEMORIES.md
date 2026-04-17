# Memories (automation index)

This file is a **stable entry point** for scripts, hooks, and bots that need to **locate decisions and context** without scraping the whole tree. It does not duplicate policy; it **points** to the canonical sources.

## Canonical reference

**[`AGENTS.md`](./AGENTS.md)** — primary instructions for agents and humans: product rules, architecture pointer, ADR workflow, content system, coding standards, commands, GitHub workflow, and local/cloud tooling. **Automations should treat `AGENTS.md` as the root checklist** and follow links from there.

## Decisions and product context (read order)

| Need                                     | Location                                                                                              |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Product vision, Linear roadmap link, `docs/product/` index | [`docs/VISION.md`](./docs/VISION.md)                                                                  |
| Recorded product / UX / layout decisions | [`docs/adr/`](./docs/adr/) (one ADR per decision; YAML frontmatter; `status: active` vs `superseded`) |
| Active ADR summary + registry layout     | [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)                                                      |
| Portfolio copy / resume constraints      | [`docs/product/resume-directives.md`](./docs/product/resume-directives.md)                            |
| Repo intent (public description)         | [`README.md`](./README.md)                                                                            |

## Operational context

| Need                                                     | Location                                                                                           |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Dev server, env, Bun, Husky, cloud agents                | [`docs/GETTING-STARTED.md`](./docs/GETTING-STARTED.md)                                             |
| Ubuntu setup, production run, registry in other projects | [`SETUP.md`](./SETUP.md)                                                                           |
| Commits, branches, PRs                                   | [`.agents/skills/github-source-control/SKILL.md`](./.agents/skills/github-source-control/SKILL.md) |
| Other agent skills                                       | [`.agents/skills/`](./.agents/skills/)                                                             |

## Rules for automation authors

1. **Prefer `AGENTS.md`** for “what must hold” summaries; use this file only to **route** to the right path.
2. **Structural or product-scope changes** should have or update an ADR per `create-adr` skill; **do not** rely on chat history alone.
3. **Do not parse “memories” from conversation** when a file in the table above already states the rule.

When in doubt, open **`AGENTS.md`** first, then the linked doc for the task.
