/**
 * Desktop screenshots of the local portfolio (Next dev server).
 * Usage: PORT=3000 node scripts/portfolio-demo-screenshots.mjs
 */

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const outDir = path.join(root, "docs", "demo")

const PORT = process.env.PORT || "3000"
const base = `http://127.0.0.1:${PORT}`

const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 1 }

async function main() {
  const puppeteer = await import("puppeteer")
  fs.mkdirSync(outDir, { recursive: true })

  const browser = await puppeteer.default.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport(VIEWPORT)

    await page.goto(`${base}/`, {
      waitUntil: "networkidle2",
      timeout: 120_000,
    })

    await page.screenshot({
      path: path.join(outDir, "01-home-top.png"),
      fullPage: false,
    })

    await page.evaluate(() => window.scrollTo(0, 1200))
    await new Promise((r) => setTimeout(r, 400))
    await page.screenshot({
      path: path.join(outDir, "02-home-mid.png"),
      fullPage: false,
    })

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await new Promise((r) => setTimeout(r, 400))
    await page.screenshot({
      path: path.join(outDir, "03-home-footer.png"),
      fullPage: false,
    })

    console.log(`Wrote PNGs under ${path.relative(root, outDir)}/`)
  } finally {
    await browser.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
