import assert from "node:assert/strict"
import { test } from "node:test"

import { journalAbout } from "../src/features/journal/lib/journal-about"
import {
  entryPath,
  journalListPath,
  readProjectFilter,
  shouldUseHistoryBack,
} from "../src/features/journal/lib/timeline-href"

test("timeline paths keep the active project filter", () => {
  assert.equal(readProjectFilter(undefined), undefined)
  assert.equal(readProjectFilter(""), undefined)
  assert.equal(readProjectFilter("   "), undefined)
  assert.equal(readProjectFilter([]), undefined)
  assert.equal(
    readProjectFilter("sports-data-visualizer"),
    "sports-data-visualizer"
  )
  assert.equal(
    readProjectFilter(["sports-data-visualizer", "other"]),
    "sports-data-visualizer"
  )
  assert.equal(journalListPath(undefined), "/journal")
  assert.equal(
    journalListPath("sports-data-visualizer"),
    "/journal?project=sports-data-visualizer"
  )
  assert.equal(entryPath("a note", undefined), "/journal/a%20note")
  assert.equal(
    entryPath("note", "sports-data-visualizer"),
    "/journal/note?project=sports-data-visualizer"
  )
  assert.equal(shouldUseHistoryBack(null, "/en/journal"), false)
  assert.equal(shouldUseHistoryBack("/en/journal", "/en/journal"), true)
  assert.equal(
    shouldUseHistoryBack(
      "/en/journal?project=sports-data-visualizer",
      "/en/journal"
    ),
    false
  )
})

test("journalAbout omits an empty project list", () => {
  assert.equal(journalAbout([]), undefined)
  assert.deepEqual(
    journalAbout([
      {
        title: "Football, Visualized",
        repository: "https://github.com/example/football",
      },
    ]),
    [
      {
        "@type": "SoftwareSourceCode",
        name: "Football, Visualized",
        codeRepository: "https://github.com/example/football",
      },
    ]
  )
})
