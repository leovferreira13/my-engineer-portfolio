import assert from "node:assert/strict"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { after, beforeEach, test } from "node:test"

import { GET as rss } from "../src/app/(app)/journal/rss/route"
import { getAllDocs } from "../src/features/doc/data/documents"
import { getJournalEntries } from "../src/features/journal/data/entries"

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
  const data = {
    title: `Entry ${slug}`,
    description: "Evidence and decisions",
    category: "journal",
    status: "published",
    createdAt: "2026-01-10",
    updatedAt: "2026-01-10",
    projectId: "sports-data-visualizer",
    entryType: "decision",
    ...overrides,
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
  entry("bad-project", { projectId: "not-in-catalog" })
  assert.throws(() => getJournalEntries(), /Unknown projectId/)
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
  assert.match(xml, /Engineering Journal/)
  assert.doesNotMatch(xml, /<item>/)
})
