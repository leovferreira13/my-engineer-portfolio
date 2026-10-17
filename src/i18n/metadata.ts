import type { Metadata } from "next"

import { SITE_INFO } from "@/config/site"

import { languageTags, locales, localizePath } from "./config"
import { getI18n } from "./request"
export async function localizedMetadata(
  section: "profile" | "projects" | "journal"
): Promise<Metadata> {
  const { locale, dictionary, t } = await getI18n()
  const path = section === "profile" ? "/" : `/${section}`
  const title =
    section === "profile" ? "Leonardo Ferreira – Product Engineer" : t[section]
  const description =
    section === "profile"
      ? dictionary.profile.subtitle
      : section === "projects"
        ? t.projectsIntro
        : t.decisionIntro
  return {
    title: {
      absolute: `${title}${section === "profile" ? "" : " – Leonardo Ferreira"}`,
    },
    description,
    alternates: {
      canonical: localizePath(path, locale),
      languages: {
        ...Object.fromEntries(
          locales.map((language) => [
            languageTags[language],
            `${SITE_INFO.url}${localizePath(path, language)}`,
          ])
        ),
        "x-default": `${SITE_INFO.url}${localizePath(path, "en")}`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: localizePath(path, locale),
      locale: languageTags[locale].replace("-", "_"),
    },
  }
}
