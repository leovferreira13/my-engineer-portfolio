import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"
import { getJournalEntries } from "@/features/journal/data/entries"
import { HAS_PUBLIC_SITE_URL } from "@/lib/site-url"
export default function sitemap(): MetadataRoute.Sitemap {
  if (!HAS_PUBLIC_SITE_URL) return []
  return [
    ...["", "/projects", "/journal"].map((route) => ({
      url: `${SITE_INFO.url}${route}`,
    })),
    ...getJournalEntries().map((entry) => ({
      url: `${SITE_INFO.url}/journal/${entry.slug}`,
      lastModified: entry.metadata.updatedAt,
    })),
  ]
}
