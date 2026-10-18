import assert from "node:assert/strict"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { after, beforeEach, test } from "node:test"

import { GET as rss } from "../src/app/(app)/journal/rss/route"
import { getAllDocs } from "../src/features/doc/data/documents"
import {
  entryListsProject,
  getJournalEntries,
} from "../src/features/journal/data/entries"

const previous = process.cwd()
const fixtureRoot = mkdtempSync(join(tmpdir(), "portfolio-content-"))
const contentDir = join(fixtureRoot, "src/features/doc/content")
process.chdir(fixtureRoot)
beforeEach(() => {
  rmSync(contentDir, { recursive: true, force: true })
  mkdirSync(contentDir, { recursive: true })
})
after(() => {
  process.chdir(previous)
  rmSync(fixtureRoot, { recursive: true, force: true })
})

function entry(slug: string, overrides: Record<string, unknown> = {}) {
  const data: Record<string, unknown> = {
    title: `Entry ${slug}`,
    description: "Evidence and decisions",
    category: "journal",
    status: "published",
    createdAt: "2026-01-10",
    updatedAt: "2026-01-10",
    projectIds: ["sports-data-visualizer"],
    entryType: "decision",
    ...overrides,
  }
  if (
    ("projectId" in overrides && !("projectIds" in overrides)) ||
    ("projectIds" in overrides && overrides.projectIds === undefined)
  ) {
    delete data.projectIds
  }
  const frontmatter = Object.entries(data)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join("\n")
  writeFileSync(
    join(contentDir, `${slug}.mdx`),
    `---\n${frontmatter}\n---\n\n## Context\n\nA real project decision.\n`
  )
}

test("an empty journal is valid", () => {
  assert.deepEqual(getJournalEntries(), [])
})
test("publication excludes drafts, future dates, and upstream blog content at the shared layer", () => {
  entry("published")
  entry("draft", { status: "draft" })
  entry("future", { createdAt: "2999-01-01", updatedAt: "2999-01-01" })
  entry("upstream", { category: "blog" })
  entry("component", { category: "components" })
  assert.deepEqual(
    getJournalEntries().map((item) => item.slug),
    ["published"]
  )
  assert.deepEqual(
    getAllDocs()
      .map((item) => item.slug)
      .sort(),
    ["component", "published"]
  )
})
test("entries sort by actual date, with deterministic slug order for ties", () => {
  entry("b")
  entry("a")
  entry("recent", { createdAt: "2026-02-01", updatedAt: "2026-02-01" })
  assert.deepEqual(
    getJournalEntries().map((item) => item.slug),
    ["recent", "a", "b"]
  )
})
test("a published entry must reference an existing project", () => {
  entry("bad-project", { projectIds: ["not-in-catalog"] })
  assert.throws(
    () => getJournalEntries(),
    /Unknown project id \\"not-in-catalog\\": add the project to PROJECTS first/
  )
})
test("two project ids are counted once under each project", () => {
  entry("both", {
    projectIds: [" sports-data-visualizer ", "fixture-second-project"],
  })
  assert.throws(
    () => getJournalEntries(),
    /Unknown project id \\"fixture-second-project\\": add the project to PROJECTS first/
  )
  const catalog = [
    { id: "sports-data-visualizer" },
    { id: "fixture-second-project" },
  ]
  const entries = getJournalEntries(catalog)
  const both = entries.find((item) => item.slug === "both")
  assert.ok(both)
  assert.deepEqual(both.metadata.projectIds, [
    "sports-data-visualizer",
    "fixture-second-project",
  ])
  for (const id of ["sports-data-visualizer", "fixture-second-project"]) {
    const matched = entries.filter((item) =>
      entryListsProject(item.metadata.projectIds, id)
    )
    assert.deepEqual(
      matched.map((item) => item.slug),
      ["both"]
    )
  }
})
test("a YAML block sequence of one project id is accepted", () => {
  writeFileSync(
    join(contentDir, "block.mdx"),
    `---
title: "Block"
description: "Evidence and decisions"
category: "journal"
status: "published"
createdAt: "2026-01-10"
updatedAt: "2026-01-10"
projectIds:
  - "sports-data-visualizer"
entryType: "decision"
---

## Context

A real project decision.
`
  )
  assert.deepEqual(getJournalEntries()[0]?.metadata.projectIds, [
    "sports-data-visualizer",
  ])
})
test("an empty projectIds list is valid and matches no project", () => {
  entry("no-project", { projectIds: [] })
  entry("only-first")
  const entries = getJournalEntries()
  const empty = entries.find((item) => item.slug === "no-project")
  assert.ok(empty)
  assert.deepEqual(empty.metadata.projectIds, [])
  assert.equal(
    entryListsProject(empty.metadata.projectIds, "sports-data-visualizer"),
    false
  )
  assert.equal(
    entries
      .filter((item) =>
        entryListsProject(item.metadata.projectIds, "sports-data-visualizer")
      )
      .some((item) => item.slug === "no-project"),
    false
  )
  assert.equal(
    entries.some((item) => item.slug === "no-project"),
    true
  )
})
test("a missing projectIds key is rejected", () => {
  entry("missing", { projectIds: undefined })
  assert.throws(
    () => getJournalEntries(),
    /projectIds is required\. Use \[\] when the entry has no project/
  )
})
test("projectIds rejects duplicates, blanks, non-strings, and a non-list", () => {
  entry("duplicate", {
    projectIds: ["sports-data-visualizer", "sports-data-visualizer"],
  })
  assert.throws(
    () => getJournalEntries(),
    /Duplicate project id \\"sports-data-visualizer\\"/
  )
  rmSync(join(contentDir, "duplicate.mdx"))
  entry("blank", { projectIds: [" "] })
  assert.throws(
    () => getJournalEntries(),
    /Project id must be a non-empty string/
  )
  rmSync(join(contentDir, "blank.mdx"))
  entry("number", { projectIds: [12] })
  assert.throws(
    () => getJournalEntries(),
    /Project id must be a non-empty string/
  )
  rmSync(join(contentDir, "number.mdx"))
  entry("text", { projectIds: "sports-data-visualizer" })
  assert.throws(
    () => getJournalEntries(),
    /projectIds must be a list of project ids/
  )
})
test("the old projectId key is rejected", () => {
  entry("old", { projectId: "sports-data-visualizer" })
  assert.throws(
    () => getJournalEntries(),
    (error: unknown) => {
      const message = String(error)
      assert.match(message, /projectId field is no longer accepted/)
      assert.match(
        message,
        /projectIds is required\. Use \[\] when the entry has no project/
      )
      assert.doesNotMatch(message, /at least one/)
      return true
    }
  )
  rmSync(join(contentDir, "old.mdx"))
  entry("old-and-empty", {
    projectId: "sports-data-visualizer",
    projectIds: [],
  })
  assert.throws(
    () => getJournalEntries(),
    /projectId field is no longer accepted/
  )
})
test("a published entry rejects impossible dates and backwards updates", () => {
  entry("bad-date", { createdAt: "2026-02-30", updatedAt: "2026-03-01" })
  assert.throws(() => getJournalEntries(), /real date/)
  rmSync(join(contentDir, "bad-date.mdx"))
  entry("backwards", { updatedAt: "2026-01-09" })
  assert.throws(() => getJournalEntries(), /updatedAt must/)
})
test("a published entry requires a recognized entry type and HTTPS references", () => {
  entry("bad-type", { entryType: "random" })
  assert.throws(() => getJournalEntries(), /Invalid journal entry/)
  rmSync(join(contentDir, "bad-type.mdx"))
  entry("bad-link", {
    references: [{ label: "Unsafe URL", url: "javascript:alert(1)" }],
  })
  assert.throws(() => getJournalEntries(), /HTTPS/)
})
test("RSS includes only published journal entries and escapes XML", async () => {
  entry("public", {
    title: "Model < 2 & trade-offs",
    description: 'An "experiment" & its evidence',
    entryType: "experiment",
  })
  entry("draft", { status: "draft" })
  entry("component", { category: "components" })
  const response = rss(),
    xml = await response.text()
  assert.match(response.headers.get("Content-Type")!, /application\/rss\+xml/)
  assert.equal((xml.match(/<item>/g) || []).length, 1)
  assert.match(xml, /Model &lt; 2 &amp; trade-offs/)
  assert.match(xml, /An &quot;experiment&quot; &amp; its evidence/)
  assert.doesNotMatch(xml, /Entry draft|Entry component/)
})
test("an empty feed contains a real channel and no fabricated posts", async () => {
  const xml = await rss().text()
  assert.match(xml, /Journal/)
  assert.doesNotMatch(xml, /<item>/)
})
