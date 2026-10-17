# Vision — engineer portfolio (product)

This document states **why this repository exists** as a product, how it should feel to visitors, and **where** directives and future-facing instructions live.

---

## North star

**Treat the public site as a career product**, not only a code demo: a fast, honest surface that moves each reader type (ATS, recruiter, interviewer, hiring manager) toward the **next step** in the hiring funnel—same framing as a strong resume and LinkedIn profile, extended to the homepage, exports, and long-form content.

The codebase remains capable of a **shadcn-style registry** and rich **MDX** documentation, but the **default experience** is **portfolio-first**: grounded narrative (experience, education, curated projects, stack, publications), minimal template chrome, and navigation scoped to that story unless explicitly re-enabled for maintainers.

That north star matches the **Linear project** [_Portfolio Product Engineer_](https://linear.app/leonardo-personal/project/portfolio-product-engineer-35f0a60bfa80/overview): treat the site as proof of **how** you decide and ship—not only **what** shipped—so recruiters and peers see product thinking, trade-offs, and evolution over time (including a structured **Journal** alongside projects and an **exportable CV**).

---

## Product vision (canonical in Linear)

The **authoritative long-form vision, goals, milestones, and notes** for this product live in Linear on the project above. The following is a **repo-local summary** so `VISION.md` stays useful offline and in code review; when Linear and this file diverge, **prefer Linear** for wording and priority, and refresh this section when the project description changes.

| In Linear             | Meaning for this repo                                                                                                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Summary**           | High-quality personal portfolio: projects, **engineering decisions**, and a **Journal** for product engineering.                                                                                                                        |
| **Vision**            | Show finished work **and** the decision trail: product framing, engineering trade-offs, execution over time.                                                                                                                                |
| **Goals**             | Projects with **GitHub** context; structured **Journal** (entries + rationale); strong **exportable resume**; signal product + engineering thinking to recruiters and peers.                                                                   |
| **Key surface areas** | **Projects** (descriptions, GitHub, highlighted decisions/outcomes); **Journal** (per-project or traceable narrative of trade-offs and learnings); **Resume** (impact-first, exportable); **Narrative layer** (why, not only what). |
| **Success**           | Clearly **not** a generic dev portfolio; recruiters grasp **impact and thinking** quickly; **consistent Journal** entries; projects show **depth**, not only breadth.                                                                            |
| **Non-goals**         | Beauty without substance; **static** project lists without context.                                                                                                                                                                         |
| **Principle**         | **Clarity of thinking** and visible decisions over chasing visual polish alone.                                                                                                                                                             |

**Inspiration / references** captured in the Linear project (for discovery, not as copy targets): [chanhdai.com](https://chanhdai.com/), [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com), [emmabostian/developer-portfolios](https://github.com/emmabostian/developer-portfolios).

**Linear documents** attached to the project (deep dives; use for execution detail):

- [Project Context — Portfolio Product Engineer](https://linear.app/leonardo-personal/document/project-context-portfolio-product-engineer-5b04a75671e3)
- [Product Decisions — Inspiration & Technical Reference](https://linear.app/leonardo-personal/document/product-decisions-inspiration-and-technical-reference-061a5d594285)
- [Issue Templates & Product Execution Rules](https://linear.app/leonardo-personal/document/issue-templates-and-product-execution-rules-ae301f534c27)
- [Product Vision — Resume Section](https://linear.app/leonardo-personal/document/product-vision-resume-section-268132b618e3)
- [Product Structure — Resume Page](https://linear.app/leonardo-personal/document/product-structure-resume-page-c6c7e4137d06)

---

## Living roadmap and context (Linear)

Structured **initiatives, issues, and delivery context** for this product are tracked in Linear:

**[Portfolio — Product Engineer (Linear project)](https://linear.app/leonardo-personal/project/portfolio-product-engineer-35f0a60bfa80/overview)**

Use that project for priorities, milestones, and copy or UX tasks that are not yet (or never need to be) frozen into ADRs. When a decision becomes stable and constrains code or UX, record it in an ADR per [`.agents/skills/create-adr/SKILL.md`](../.agents/skills/create-adr/SKILL.md) and summarize active decisions in [`docs/ARCHITECTURE.md`](./ARCHITECTURE.md).

> **Note:** With the **Linear** Cursor plugin enabled and authenticated, agents can read project and issue state via MCP (`plugin-linear-linear`). This repo’s [`.cursor/mcp.json`](../.cursor/mcp.json) only configures other MCP servers (e.g. shadcn); Linear is supplied by the plugin, not that file.

---

## Product directives and instructions (`docs/product/`)

These files define **what to say**, **how to prioritize**, and **which constraints** apply when editing portfolio-facing content or derived materials. They are the canonical product layer **below** vision and **above** implementation details in `src/`.

| Document                                                                                                       | Role                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`resume-directives.md`](./product/resume-directives.md)                                                       | **Directives:** resume-as-landing-page principles, four reader personas (ATS, recruiter, interviewer, hiring manager), structure, tone, impact language, links, and anti-patterns—applied consistently to the site, blog, and exports. |
| [`../assets/Software Engineer Resume Directives.pdf`](../assets/Software%20Engineer%20Resume%20Directives.pdf) | **Source transcript** for the article-backed rules summarized in `resume-directives.md` (keep PDF and markdown in sync when the product reference evolves).                                                                            |

**Future product docs:** add new files under `docs/product/` (e.g. messaging, IA, or content calendars) and **link them from this table** so vision, Linear, and repo-local directives stay discoverable from one place.

---

## How vision maps to the repo

| Layer                                | Where it lives                                                                                                  |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Vision (this file)                   | `docs/VISION.md`                                                                                                |
| Roadmap / execution context          | [Linear project](https://linear.app/leonardo-personal/project/portfolio-product-engineer-35f0a60bfa80/overview) |
| Copy & career product rules          | `docs/product/*.md` (see table above)                                                                           |
| Accepted structural & UX commitments | `docs/adr/*.md` + active summary in `docs/ARCHITECTURE.md`                                                      |
| Codebase map & registry              | `docs/ARCHITECTURE.md`                                                                                          |
| Agent rules & commands               | `AGENTS.md`                                                                                                     |

Success looks like: a visitor or recruiter understands **role, impact, and specialty** within seconds; a maintainer can align a change with **Linear → product doc → ADR → code** without guessing.

## Current public portfolio surface (2026-10-17)

Profile, Projects, and Journal form the hiring-facing navigation. The current narrative is Product Engineer: 5+ years across backend/data, product management, technical leadership, and applied AI, taking problems from discovery through production and iteration. Football, Visualized is the first public project. The project-linked Journal starts intentionally empty; no fabricated release history is required for launch. See ADRs 0009–0011, [JOURNAL.md](JOURNAL.md), and [DEPLOYMENT.md](DEPLOYMENT.md).

## Multilingual refinement (2026-10-17)

The public writing label is now **Journal**, focused on choices and evidence. The same professional profile is available in English (default), Portuguese, Dutch, Spanish, and German via explicit locale URLs. RSS subscription controls are removed; machine feeds and optional public English text exports remain available. ADRs 0012–0013 record the current routing and navigation decisions.
