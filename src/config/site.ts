import { USER } from "@/features/portfolio/data/user"
import { type Locale, localizePath } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { SITE_URL } from "@/lib/site-url"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: SITE_URL,
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export function getMainNav(locale: Locale): NavItem[] {
  const t = getDictionary(locale).ui
  return [
    { title: t.profile, href: localizePath("/", locale) },
    { title: t.projects, href: localizePath("/projects", locale) },
    { title: t.decisions, href: localizePath("/decisions", locale) },
  ]
}
export const MAIN_NAV = getMainNav("en")
export const MOBILE_NAV = [...MAIN_NAV]

export const GITHUB_USERNAME = "leovferreira13"
export const LINKEDIN_PROFILE_PATH = "leonardo-v-ferreira"
export const LINKEDIN_PROFILE_URL = `https://www.linkedin.com/in/${LINKEDIN_PROFILE_PATH}`
export const SOURCE_CODE_GITHUB_REPO = "leovferreira13/my-engineer-portfolio"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/leovferreira13/my-engineer-portfolio"

export const SPONSORSHIP_URL = "https://github.com/sponsors/leovferreira13"

export const UTM_PARAMS = {
  utm_source: "leonardo-portfolio",
}

/** When false, the homepage hides registry marketing (components grid) and the doc-driven blog strip. */
export const SHOW_PORTFOLIO_REGISTRY_SECTIONS =
  process.env.NEXT_PUBLIC_SHOW_PORTFOLIO_REGISTRY_SECTIONS === "true"
