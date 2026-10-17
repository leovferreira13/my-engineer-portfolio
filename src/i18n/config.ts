export const locales = ["en", "br", "nl", "es", "de"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"
export const languageNames: Record<Locale, string> = {
  en: "English",
  br: "Português",
  nl: "Nederlands",
  es: "Español",
  de: "Deutsch",
}
export const languageTags: Record<Locale, string> = {
  en: "en",
  br: "pt-BR",
  nl: "nl",
  es: "es",
  de: "de",
}
export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path
  const url = new URL(path, "https://portfolio.invalid")
  const segments = url.pathname.split("/").filter(Boolean)
  if (isLocale(segments[0] || "")) segments.shift()
  if (["journal", "decisions"].includes(segments[0])) segments[0] = "decisions"
  return `/${locale}${segments.length ? "/" + segments.join("/") : ""}${url.search}${url.hash}`
}
export function activeNavigation(path: string, href: string): boolean {
  const isProfile = /^\/(en|br|nl|es|de)\/?$/.test(href)
  return isProfile
    ? path.replace(/\/$/, "") === href.replace(/\/$/, "")
    : path === href || path.startsWith(`${href}/`)
}
export function formatPeriod(value: string, locale: Locale): string {
  const match = /^(\d{2})\.(\d{4})$/.exec(value)
  if (!match) return value
  return new Intl.DateTimeFormat(languageTags[locale], {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(Number(match[2]), Number(match[1]) - 1, 1)))
}
