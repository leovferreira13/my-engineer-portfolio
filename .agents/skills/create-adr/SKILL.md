---
name: create-adr
description: >-
  Creates or supersedes Architecture Decision Records (ADRs) under docs/adr/ using
  the repo template, monotonic numbering, and one decision per file. Updates
  docs/ARCHITECTURE.md so only active decisions are summarized. Use when the user
  invokes /create-adr, asks to record an architecture or product decision before
  structural work, add an ADR, supersede an ADR, or formalize a fork-specific choice.
---

# Create ADR (`/create-adr`)

Use this workflow **before** large structural or cross-cutting product changes so intent stays traceable in `docs/adr/`.

## Principles

1. **One decision per file** — never bundle unrelated choices in a single ADR.
2. **Immutable once active** — after `status: active` (or equivalent acceptance), **do not edit** the ADR body to “patch” history. Record follow-ups in a **new** ADR that **supersedes** the old one.
3. **Monotonic IDs** — filenames are `NNNN-short-kebab-title.md` where `NNNN` is a zero-padded decimal, **strictly increasing** over the life of the repo (next = max existing + 1).
4. **Template is canonical** — new and superseding ADRs MUST follow [`docs/adr/template/adr-template.md`](../../../docs/adr/template/adr-template.md): YAML frontmatter + `Context` / `Decision` / `Options considered` / `Consequences` / optional `Advice`.
5. **`docs/ARCHITECTURE.md` stays current** — after adding or superseding an ADR, update the **“Active architecture decisions”** subsection there so it only describes decisions still in force (see below).

## When to write an ADR

**Do**: new dependency or platform constraint, storage or data-model strategy, homepage/navigation/product scope, security or privacy posture, cross-cutting pattern agents must follow.

**Do not**: one-off bugfixes, purely stylistic tweaks, refactors that preserve behavior, routine dependency bumps unless they change architecture.

## Create a new ADR

1. **Read** [`docs/adr/template/adr-template.md`](../../../docs/adr/template/adr-template.md).
2. **Next number**: list `docs/adr/[0-9][0-9][0-9][0-9]-*.md` (ignore `docs/adr/template/`). Parse the leading `NNNN`; next id is `max + 1` (e.g. if highest is `0008`, next is `0009`).
3. **Filename**: `docs/adr/NNNN-short-title.md` — `short-title` in **kebab-case**, short and unique (e.g. `0009-api-rate-limiting-strategy.md`).
4. **Fill the template**:
   - Set `id` to `"NNNN"` (quoted string, matches filename).
   - Set `title` to a short human-readable title (may differ slightly from the slug).
   - Set `date` to the decision date (`YYYY-MM-DD`).
   - Set `status` to `proposed` while drafting; set to **`active`** once the team (or user) accepts the decision in the same change as the implementing code, unless the user explicitly keeps it `proposed`.
   - Omit `superseded_by` unless this file is superseding workflow on an older file (see below — the *new* file does not get `superseded_by`; the *old* file does).
5. **Body**: write `Context`, `Decision` (bold lead sentence), honest `Options considered`, and `Consequences` (including what would trigger re-evaluation).
6. **Architecture doc**: append or adjust the **Active architecture decisions** bullets in [`docs/ARCHITECTURE.md`](../../../docs/ARCHITECTURE.md) (see “ARCHITECTURE.md maintenance”).
7. **Commit**: same commit as the code/config change when possible.

### Legacy ADRs (no YAML frontmatter)

Older files may use `# ADR NNNN: Title` plus `## Status` / `Accepted`. **Do not rewrite** them for cosmetic migration unless the user asks. **New** ADRs always use the YAML template. When superseding a legacy ADR, apply the supersession rules on the legacy file as in the next section (prepend YAML or add a clear `Superseded by` stanza — prefer prepending YAML for consistency).

## Supersede an existing ADR

1. **Create** a new file with the **next** monotonic `NNNN` (do not reuse ids).
2. In the **new** ADR `Context` or `Decision`, state explicitly which ADR(s) it replaces (e.g. “Supersedes ADR 0003 for …”).
3. On the **old** ADR file **only** update metadata to mark it historical:
   - If it already has YAML: set `status: superseded` and set `superseded_by: "NNNN"` to the **new** ADR id.
   - If legacy: add YAML frontmatter at the top with `status: superseded`, `superseded_by: "NNNN"`, matching `id` / `title` / `date` as appropriate, **without** deleting the historical body.
4. **Do not** delete the old file unless the user explicitly requests archive policy change.
5. **Update `docs/ARCHITECTURE.md`**: remove or rewrite bullets so the **superseded** decision is no longer presented as current; the new ADR’s intent is reflected instead.

## ARCHITECTURE.md maintenance

[`docs/ARCHITECTURE.md`](../../../docs/ARCHITECTURE.md) includes an **Active architecture decisions** subsection. Keep it short:

- One bullet (or one row in a small table) per **active** ADR: `NNNN` — one-line summary with a markdown link to `docs/adr/NNNN-….md`.
- **Exclude** any ADR with `status: superseded` (YAML) or whose content is clearly marked superseded.
- After every new ADR or supersession, **refresh** this subsection in the **same** PR/commit when practical.

Do not copy full ADR text into `ARCHITECTURE.md`; link and summarize only.

## Optional: Cursor Command

To expose this as a slash command, add a project rule or Cursor command that tells the agent: “Follow `.agents/skills/create-adr/SKILL.md`.” Command name can be **`/create-adr`**.

## Checklist

- [ ] Template path read; new file uses YAML + required sections.
- [ ] `NNNN` is next monotonic id; filename matches `NNNN-short-title.md`.
- [ ] Exactly one decision (split if needed).
- [ ] If superseding: old ADR has `status: superseded` + `superseded_by`; new ADR references old id.
- [ ] `docs/ARCHITECTURE.md` active ADR subsection updated.
- [ ] No edits to previously `active` ADRs except supersession metadata on the old file.
