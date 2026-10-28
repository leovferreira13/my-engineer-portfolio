import assert from "node:assert/strict"
import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"

import puppeteer from "puppeteer"

const base = process.env.PORTFOLIO_BASE_URL || "http://localhost:3000"
const browser = await puppeteer.launch({
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
  pipe: true,
  args: process.env.CI ? ["--no-sandbox", "--disable-dev-shm-usage"] : [],
})
try {
  const page = await browser.newPage()
  const errors = []
  page.on("pageerror", (error) => errors.push(error.message))
  await page.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "reduce" },
  ])
  for (const locale of ["en", "br", "es", "nl", "de"]) {
    assert.equal(
      (
        await page.goto(`${base}/${locale}`, { waitUntil: "networkidle0" })
      ).status(),
      200
    )
    assert.equal(
      await page.$eval('section[aria-labelledby="profile-title"] p', (node) =>
        node.textContent.trim()
      ),
      "Product Engineer | SaaS, Applied AI & Backend Systems"
    )
    assert.equal(
      await page.$eval('section a[href="#experience"]', (node) =>
        node.getAttribute("href")
      ),
      "#experience"
    )
    assert.equal(
      await page.$eval(
        `section a[href="/${locale}/projects"]`,
        (node) => node.target
      ),
      "_blank"
    )
    assert.deepEqual(
      await page.$$eval("#experience-guiavet ol li", (nodes) =>
        nodes.map((node) => ({
          id: node.dataset.positionId,
          icon: Boolean(node.querySelector("svg")),
        }))
      ),
      [
        { id: "1", icon: true },
        { id: "2", icon: true },
        { id: "3", icon: true },
      ]
    )
    const experienceText = await page.$eval(
      "#experience",
      (node) => node.textContent
    )
    assert.doesNotMatch(
      experienceText,
      /50x|50 vezes|50 keer|50-fache|50 veces|80%|95%|99[.,]9/
    )
    const links = await page.$$eval('#stack a[href^="#"]', (nodes) =>
      nodes.map((node) => node.getAttribute("href"))
    )
    assert.equal(links.length, 27)
    for (const href of links) {
      await page.$eval(`#stack a[href="${href}"]`, (node) => node.click())
      await page.waitForFunction(
        (id) => document.activeElement?.id === id,
        {},
        href.slice(1)
      )
      const state = await page.$eval(href, (node) => ({
        expanded: node
          .querySelector("button[aria-expanded]")
          ?.getAttribute("aria-expanded"),
        highlighted: node.getAnimations().length > 0,
      }))
      assert.notEqual(
        state.expanded,
        "false",
        `${locale} ${href} stays collapsed`
      )
      assert.ok(state.highlighted, `${locale} ${href} has no arrival highlight`)
    }
    const same = "#experience-guiavet-2"
    await page.$eval(`#stack a[href="${same}"]`, (node) => node.click())
    await page.waitForFunction(
      () => document.activeElement?.id === "experience-guiavet-2"
    )
    assert.equal(
      await page.$eval(
        same,
        (node) =>
          Boolean(node.textContent.trim()) &&
          node.getBoundingClientRect().height > 0
      ),
      true
    )
    assert.equal(
      await page.$$eval(
        "#experience-guiavet button[aria-expanded]",
        (nodes) => nodes.length
      ),
      0
    )
    await page.setViewport({ width: 390, height: 844 })
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth
      ),
      false
    )
    await page.setViewport({ width: 1440, height: 1080 })
  }
  for (const [zone, expected] of [
    ["America/Sao_Paulo", "Same time as you"],
    ["Asia/Kolkata", "8h 30m behind you"],
    ["Asia/Kathmandu", "8h 45m behind you"],
    ["Pacific/Honolulu", "7h ahead of you"],
  ]) {
    await page.emulateTimezone(zone)
    await page.goto(`${base}/en`, { waitUntil: "networkidle0" })
    await page.waitForFunction(
      (text) => document.body.textContent.includes(text),
      {},
      expected
    )
  }
  await page.goto(`${base}/en#experience-qdois-1`, {
    waitUntil: "networkidle0",
  })
  await page.waitForFunction(
    () =>
      document
        .querySelector("#experience-qdois-1 button[aria-expanded]")
        ?.getAttribute("aria-expanded") === "true"
  )
  const response = await fetch(
    `${base}/resume/leonardo-ferreira-product-engineer-en.pdf`
  )
  assert.equal(response.status, 200)
  assert.match(response.headers.get("content-type"), /application\/pdf/)
  const hash = (bytes) => createHash("sha256").update(bytes).digest("hex")
  assert.equal(
    hash(Buffer.from(await response.arrayBuffer())),
    hash(
      await readFile("public/resume/leonardo-ferreira-product-engineer-en.pdf")
    )
  )
  assert.deepEqual(errors, [])
  console.log(
    "PASS: five locales; stack reveal, focus, repeat clicks and highlight; mobile overflow; shared anchor; visitor-relative fractional timezones; English PDF; no page errors."
  )
} finally {
  await browser.close()
}
