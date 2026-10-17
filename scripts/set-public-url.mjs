import { readFileSync, writeFileSync } from "node:fs"
const input = process.argv[2]
if (!input) throw new Error("Usage: pnpm site:url https://your-verified-domain")
const url = new URL(input)
if (
  url.protocol !== "https:" ||
  url.username ||
  url.password ||
  url.pathname !== "/" ||
  url.search ||
  url.hash ||
  !/^[a-zA-Z0-9.-]+$/.test(url.hostname)
)
  throw new Error(
    "Use a public HTTPS origin without credentials, path, query, or fragment"
  )
const file = new URL("../README.md", import.meta.url)
const source = readFileSync(file, "utf8")
const pattern =
  /<!-- deployment-url:start -->[\s\S]*?<!-- deployment-url:end -->/
if (!pattern.test(source))
  throw new Error("README deployment markers are missing")
writeFileSync(
  file,
  source.replace(
    pattern,
    `<!-- deployment-url:start -->\n**[Visit the portfolio](${url.origin})**\n<!-- deployment-url:end -->`
  )
)
console.log(
  `README website link updated to ${url.origin}. Configure APP_URL in Railway separately.`
)
