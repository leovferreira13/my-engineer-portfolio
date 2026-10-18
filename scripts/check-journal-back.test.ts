import assert from "node:assert/strict"
import { test } from "node:test"

import { journalAbout } from "../src/features/journal/lib/journal-about"
import {
  entryPath,
  journalListPath,
  readProjectFilter,
  shouldUseHistoryBack,
} from "../src/features/journal/lib/timeline-href"
import {
  consumeTimelineNavigation,
  isPlainPrimaryClick,
  recordTimelineNavigation,
} from "../src/features/journal/lib/timeline-navigation"

test("arrival consumes the handoff even when Back is never clicked", () => {
  const href = "/en/journal"
  const entryHref = "/en/journal/first"
  recordTimelineNavigation({ timelineHref: href, entryHref })
  assert.equal(consumeTimelineNavigation(href, entryHref), true)
  // An entry-to-entry visit or later profile preview cannot reuse the handoff.
  assert.equal(consumeTimelineNavigation(href, "/en/journal/second"), false)
  assert.equal(consumeTimelineNavigation(href, entryHref), false)
  recordTimelineNavigation({ timelineHref: href, entryHref })
  recordTimelineNavigation(null)
  assert.equal(consumeTimelineNavigation(href, entryHref), false)
})

test("filtered timeline handoffs preserve the exact project and locale", () => {
  const href = "/br/journal?project=sports-data-visualizer"
  const entryHref = "/br/journal/first?project=sports-data-visualizer"
  recordTimelineNavigation({ timelineHref: href, entryHref })
  assert.equal(consumeTimelineNavigation(href, entryHref), true)
  recordTimelineNavigation({ timelineHref: href, entryHref })
  assert.equal(consumeTimelineNavigation("/en/journal", entryHref), false)
})

test("mismatched arrivals discard the handoff", () => {
  recordTimelineNavigation({
    timelineHref: "/en/journal",
    entryHref: "/en/journal/a",
  })
  assert.equal(consumeTimelineNavigation("/en/journal", "/en/journal/b"), false)
  assert.equal(consumeTimelineNavigation("/en/journal", "/en/journal/a"), false)
})

test("modified and non-primary clicks keep native link behavior", () => {
  const click = {
    button: 0,
    metaKey: false,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    defaultPrevented: false,
  }
  assert.equal(isPlainPrimaryClick(click), true)
  for (const modifier of [
    "metaKey",
    "ctrlKey",
    "shiftKey",
    "altKey",
    "defaultPrevented",
  ]) {
    assert.equal(isPlainPrimaryClick({ ...click, [modifier]: true }), false)
  }
  for (const button of [1, 2]) {
    assert.equal(isPlainPrimaryClick({ ...click, button }), false)
  }
})

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
})

test("history requires a direct click from the matching timeline to this entry", () => {
  const href = "/en/journal"
  const entryHref = "/en/journal/first"
  const navigation = { timelineHref: href, entryHref }
  assert.equal(shouldUseHistoryBack(navigation, href, entryHref), true)
  assert.equal(shouldUseHistoryBack(null, href, entryHref), false)
  assert.equal(
    shouldUseHistoryBack(navigation, href, "/en/journal/second"),
    false
  )
  assert.equal(
    shouldUseHistoryBack(navigation, `${href}?project=other`, entryHref),
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
