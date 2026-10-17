const configuredUrl =
  process.env.APP_URL ||
  (process.env.RAILWAY_PUBLIC_DOMAIN
    ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
    : undefined)

function resolveSiteUrl(value: string | undefined): string {
  if (!value) return "http://localhost:3000"
  const url = new URL(value)
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "APP_URL must be an HTTP(S) origin without credentials, path, query, or fragment"
    )
  }
  if (
    url.protocol !== "https:" &&
    !["localhost", "127.0.0.1"].includes(url.hostname)
  ) {
    throw new Error("APP_URL must use HTTPS for a public site")
  }
  return url.origin
}

export const SITE_URL = resolveSiteUrl(configuredUrl)
export const HAS_PUBLIC_SITE_URL =
  new URL(SITE_URL).protocol === "https:" &&
  !["localhost", "127.0.0.1"].includes(new URL(SITE_URL).hostname)
