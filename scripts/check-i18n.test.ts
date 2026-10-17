import assert from "node:assert/strict"
import { test } from "node:test"

import { GET as llmsIndex } from "../src/app/(llms)/llms.txt/route"
import { GET as vcard } from "../src/app/vcard/route"
import { TECH_STACK_GROUP_ORDER } from "../src/features/portfolio/data/tech-stack"
import { formatPositionAsMarkdown } from "../src/features/portfolio/lib/format-position-markdown"
import {
  activeNavigation,
  formatPeriod,
  languageTags,
  locales,
  localizePath,
} from "../src/i18n/config"
import { localizedContent } from "../src/i18n/content"
import { getDictionary } from "../src/i18n/dictionaries"

test("all five locales have complete UI and stable professional content", () => {
  const keys = Object.keys(getDictionary("en").ui).sort()
  for (const locale of locales) {
    const dictionary = getDictionary(locale),
      content = localizedContent(locale)
    assert.deepEqual(Object.keys(dictionary.ui).sort(), keys)
    assert.ok(
      Object.values(dictionary.ui).every(
        (value) => typeof value === "string" && value.length > 0
      )
    )
    assert.ok(content.user.about.length > 500)
    assert.equal(content.projects.length, 1)
    assert.equal(
      content.projects[0].repository,
      "https://github.com/leovferreira13/sports-data-visualizer"
    )
    assert.equal(content.education[0].isExpanded, true)
    assert.equal(
      content.experiences[0].positions[0].employmentPeriod.end,
      undefined
    )
    if (locale !== "en") {
      assert.equal(Object.keys(dictionary.positions).length, 5)
      assert.equal(Object.keys(dictionary.education).length, 2)
      assert.equal(content.projects[0].link.endsWith(`/${locale}`), true)
      assert.notEqual(content.user.about, localizedContent("en").user.about)
      for (const experience of content.experiences)
        for (const position of experience.positions)
          assert.ok(dictionary.positions[`${experience.id}:${position.id}`])
    }
  }
  assert.equal(languageTags.br, "pt-BR")
})
test("language links preserve section, filters and anchors without duplicate prefixes", () => {
  assert.equal(
    localizePath("/en/projects?project=x#sports-data-visualizer", "br"),
    "/br/projects?project=x#sports-data-visualizer"
  )
  assert.equal(
    localizePath("/br/journal?project=sports-data-visualizer", "de"),
    "/de/journal?project=sports-data-visualizer"
  )
  assert.equal(localizePath("/journal/a-note", "nl"), "/nl/journal/a-note")
  assert.equal(localizePath("/br/decisions/a-note", "de"), "/de/journal/a-note")
  assert.equal(localizePath("/", "en"), "/en")
  assert.equal(
    localizePath("https://github.com/leovferreira13", "br"),
    "https://github.com/leovferreira13"
  )
})
test("profile navigation is not active on every localized subpage", () => {
  assert.equal(activeNavigation("/br/projects", "/br"), false)
  assert.equal(activeNavigation("/br", "/br"), true)
  assert.equal(activeNavigation("/de/journal/some-note", "/de/journal"), true)
  assert.equal(activeNavigation("/en/projects-other", "/en/projects"), false)
})
test("experience dates have localized months and preserve year-only education dates", () => {
  assert.match(formatPeriod("11.2025", "en"), /Nov.*2025/)
  assert.match(formatPeriod("11.2025", "br"), /nov.*2025/)
  assert.equal(formatPeriod("2017", "de"), "2017")
  assert.equal(getDictionary("en").ui.present, "Present")
  assert.equal(getDictionary("br").ui.present, "Atual")
})
test("vCard embeds the local portrait and canonical contact email", async () => {
  const response = await vcard()
  assert.equal(response.status, 200)
  const text = await response.text()
  assert.match(text, /PHOTO;ENCODING=b;TYPE=JPEG:/i)
  assert.match(text, /leovieiraf\.599@gmail\.com/)
})

test("capability explanations cover each group in every language", () => {
  for (const locale of locales) {
    const content = localizedContent(locale)
    assert.deepEqual(
      Object.keys(content.capabilityDescriptions),
      TECH_STACK_GROUP_ORDER
    )
    for (const description of Object.values(content.capabilityDescriptions))
      assert.ok(description.length > 100)
    assert.match(content.user.about, /Forward Deployed Engineering/)
    assert.match(content.user.about, /LangSmith/)
  }
})

test("machine index is inline UTF-8 text with real Markdown lines and current links", async () => {
  const response = llmsIndex()
  assert.equal(response.status, 200)
  assert.equal(
    response.headers.get("Content-Type"),
    "text/plain; charset=utf-8"
  )
  assert.equal(response.headers.get("Content-Disposition"), "inline")
  assert.equal(response.headers.get("Cache-Control"), "no-store")
  assert.equal(response.headers.get("X-Content-Type-Options"), "nosniff")
  const text = await response.text()
  assert.match(text, /^# Leonardo Ferreira\n\n> /)
  assert.match(text, /\n## Professional profile\n/)
  assert.match(text, /\/llms-full\.txt/)
  assert.match(text, /\/en\/journal/)
  assert.doesNotMatch(text, /\\n/)
  const position = localizedContent("en").experiences[0].positions[0]
  assert.match(
    formatPositionAsMarkdown(position, "Reach.ai"),
    /prelaunch testing/
  )
})
