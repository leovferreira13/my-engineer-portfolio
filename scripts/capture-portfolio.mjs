import { mkdir } from "node:fs/promises"

import puppeteer from "puppeteer"

const base = new URL(process.env.PORTFOLIO_BASE_URL || "http://localhost:3000")
const browser = await puppeteer.launch({
  headless: process.env.PUPPETEER_HEADLESS_SHELL ? "shell" : true,
  pipe: true,
  ...(process.env.PUPPETEER_EXECUTABLE_PATH
    ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH }
    : {}),
  ...(process.env.CI
    ? {
        args: [
          "--no-sandbox",
          "--no-zygote",
          "--single-process",
          "--disable-dev-shm-usage",
        ],
      }
    : {}),
})
try {
  await mkdir("docs/screenshots", { recursive: true })
  const page = await browser.newPage()
  await page.evaluateOnNewDocument(() => localStorage.setItem("theme", "dark"))
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: "dark" },
    { name: "prefers-reduced-motion", value: "reduce" },
  ])
  await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 1 })
  async function openProfile(locale) {
    const response = await page.goto(new URL(`/${locale}`, base).href, {
      waitUntil: "networkidle0",
    })
    if (response.status() !== 200)
      throw new Error(`Profile returned HTTP ${response.status()}`)
    await page.waitForFunction(() =>
      document.documentElement.classList.contains("dark")
    )
    await page.evaluate(async () => {
      await document.fonts.ready
      await Promise.all([...document.images].map((image) => image.decode()))
      if (
        !document
          .querySelector("#profile-title")
          ?.textContent.includes("Leonardo Ferreira")
      )
        throw new Error("The capture source is not the current portfolio")
      if (document.documentElement.scrollWidth > innerWidth)
        throw new Error("The profile has horizontal overflow")
    })
  }
  await openProfile("en")
  await page.screenshot({ path: "docs/screenshots/profile.png" })
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 })
  await openProfile("br")
  await page.screenshot({
    path: "docs/screenshots/profile-mobile.png",
    fullPage: true,
  })
  console.log(
    "Saved current dark-mode English desktop and Portuguese mobile profiles in docs/screenshots/."
  )
} finally {
  await browser.close()
}
