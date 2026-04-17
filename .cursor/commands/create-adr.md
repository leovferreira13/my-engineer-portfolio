# Create ADR

Follow [`.agents/skills/create-adr/SKILL.md`](../../.agents/skills/create-adr/SKILL.md).

**Summary for this run**

1. Read [`docs/adr/template/adr-template.md`](../../docs/adr/template/adr-template.md).
2. Pick the next monotonic id: highest `docs/adr/[0-9][0-9][0-9][0-9]-*.md` + 1 (skip `template/`).
3. Add `docs/adr/NNNN-short-kebab-title.md` — **one decision per file**, YAML + sections from the template; set `status: active` when the decision is accepted (or `proposed` if still exploratory).
4. Never rewrite an already-`active` ADR to change history — **supersede** with a new `NNNN` file instead; on the old file set `status: superseded` and `superseded_by: "NNNN"`.
5. Update the **Active architecture decisions** list in [`docs/ARCHITECTURE.md`](../../docs/ARCHITECTURE.md) so it only reflects decisions still in force.

If the user supplied a topic or supersession target in the command prompt, use it as the primary input for title and `Context`/`Decision`.
