import { mkdir } from "node:fs/promises"

import puppeteer from "puppeteer"

const base = process.env.PORTFOLIO_BASE_URL || "http://localhost:3000"
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
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: "light" },
    { name: "prefers-reduced-motion", value: "reduce" },
  ])
  await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 1 })
  await page.goto(base, { waitUntil: "networkidle0" })
  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all([...document.images].map((image) => image.decode()))
  })
  await page.screenshot({ path: "docs/screenshots/profile.png" })
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 })
  await page.reload({ waitUntil: "networkidle0" })
  await page.screenshot({
    path: "docs/screenshots/profile-mobile.png",
    fullPage: true,
  })
  console.log(
    "Saved desktop and mobile profile screenshots in docs/screenshots/."
  )
} finally {
  await browser.close()
}
