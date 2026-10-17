import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { test } from "node:test"

import { updateReadmeOrigin } from "./set-public-url.mjs"

const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8")
const previousOrigin = new URL(
  readme.match(
    /<!-- deployment-url:start -->[\s\S]*?\]\((https:\/\/[^)]+)\)/
  )[1]
).origin
const nextOrigin = "https://portfolio.example.org"

test("domain changes update all ten current portfolio links and preserve README wording", () => {
  assert.equal(readme.split(previousOrigin).length - 1, 10)
  const result = updateReadmeOrigin(readme, nextOrigin + "/")
  assert.equal(result, readme.split(previousOrigin).join(nextOrigin))
  assert.ok(result.includes("**[Explore my portfolio](" + nextOrigin + ")**"))
  assert.ok(result.includes("https://sports-data.leoferreira.dev.br/en"))
  assert.equal(updateReadmeOrigin(result, nextOrigin), result)
})

test("origin replacement preserves paths, filters, anchors and distinct hosts", () => {
  const source = `${readme}\n[Filtered](${previousOrigin}/br/journal?project=football#entry)\n[External](${previousOrigin}.example.org/en)\n[Other port](${previousOrigin}:8443/en)\n`
  const result = updateReadmeOrigin(source, nextOrigin)
  assert.ok(result.includes(`${nextOrigin}/br/journal?project=football#entry`))
  assert.ok(result.includes(`${previousOrigin}.example.org/en`))
  assert.ok(result.includes(`${previousOrigin}:8443/en`))
})

test("invalid origins and missing source links fail before writing", () => {
  for (const input of [
    undefined,
    "http://example.org",
    "https://user:pass@example.org",
    "https://example.org/profile",
    "https://example.org?x=1",
    "https://example.org#profile",
  ])
    assert.throws(() => updateReadmeOrigin(readme, input))
  assert.throws(() => updateReadmeOrigin("No markers", nextOrigin), /markers/)
  assert.throws(
    () =>
      updateReadmeOrigin(
        "<!-- deployment-url:start -->\nNot published\n<!-- deployment-url:end -->",
        nextOrigin
      ),
    /current HTTPS/
  )
})

test("CLI updates a temporary README and rejects invalid input without changing it", () => {
  const root = mkdtempSync(join(tmpdir(), "portfolio-url-"))
  try {
    mkdirSync(join(root, "scripts"))
    const script = join(root, "scripts", "set-public-url.mjs")
    const file = join(root, "README.md")
    writeFileSync(
      script,
      readFileSync(new URL("./set-public-url.mjs", import.meta.url))
    )
    writeFileSync(file, readme)
    const invalid = spawnSync(
      process.execPath,
      [script, "https://example.org/invalid"],
      { encoding: "utf8" }
    )
    assert.notEqual(invalid.status, 0)
    assert.equal(readFileSync(file, "utf8"), readme)
    const valid = spawnSync(process.execPath, [script, nextOrigin], {
      encoding: "utf8",
    })
    assert.equal(valid.status, 0, valid.stderr)
    assert.equal(
      readFileSync(file, "utf8"),
      updateReadmeOrigin(readme, nextOrigin)
    )
  } finally {
    rmSync(root, { recursive: true })
  }
})
