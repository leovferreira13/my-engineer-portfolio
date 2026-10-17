import { readFileSync, writeFileSync } from "node:fs"
import { pathToFileURL } from "node:url"

export function updateReadmeOrigin(source, input) {
  if (!input)
    throw new Error("Usage: pnpm site:url https://your-verified-domain")
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

  const block = source.match(
    /<!-- deployment-url:start -->[\s\S]*?<!-- deployment-url:end -->/
  )?.[0]
  if (!block) throw new Error("README deployment markers are missing")
  const previousLink = block.match(/\[[^\]]+\]\((https:\/\/[^\s)]+)\)/)?.[1]
  if (!previousLink)
    throw new Error(
      "README deployment block must contain the current HTTPS website link"
    )

  const previousOrigin = new URL(previousLink).origin
  const escapedOrigin = previousOrigin.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  // Match an origin boundary so similarly named external hosts stay unchanged.
  return source.replace(
    new RegExp(`${escapedOrigin}(?=[/\\s?#)>"']|$)`, "g"),
    () => url.origin
  )
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const file = new URL("../README.md", import.meta.url)
  const next = updateReadmeOrigin(readFileSync(file, "utf8"), process.argv[2])
  writeFileSync(file, next)
  console.log(
    `README portfolio links updated to ${new URL(process.argv[2]).origin}. Configure APP_URL in Railway separately.`
  )
}
