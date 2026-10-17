import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"
import { getJournalEntries } from "@/features/journal/data/entries"
import { languageTags, locales, localizePath } from "@/i18n/config"
import { HAS_PUBLIC_SITE_URL } from "@/lib/site-url"
export default function sitemap(): MetadataRoute.Sitemap {
  if (!HAS_PUBLIC_SITE_URL) return []
  return [
    ...["/", "/projects", "/decisions"].flatMap((path) =>
      locales.map((locale) => ({
        url: `${SITE_INFO.url}${localizePath(path, locale)}`,
        alternates: {
          languages: Object.fromEntries(
            locales.map((language) => [
              languageTags[language],
              `${SITE_INFO.url}${localizePath(path, language)}`,
            ])
          ),
        },
      }))
    ),
    ...getJournalEntries().map((entry) => ({
      url: `${SITE_INFO.url}/en/decisions/${entry.slug}`,
      lastModified: entry.metadata.updatedAt,
    })),
  ]
}
