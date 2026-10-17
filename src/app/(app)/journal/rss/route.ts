import { SITE_INFO } from "@/config/site"
import { getJournalEntries } from "@/features/journal/data/entries"

export const dynamic = "force-static"
function xml(value: string) {
  return value.replace(
    /[<>&"']/g,
    (char) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[char]!
  )
}
export function GET() {
  const items = getJournalEntries()
    .map(
      (entry) =>
        `<item><title>${xml(entry.metadata.title)}</title><link>${xml(`${SITE_INFO.url}/en/journal/${entry.slug}`)}</link><guid isPermaLink="true">${xml(`${SITE_INFO.url}/en/journal/${entry.slug}`)}</guid><description>${xml(entry.metadata.description)}</description><pubDate>${new Date(entry.metadata.createdAt).toUTCString()}</pubDate><category>${xml(entry.metadata.entryType)}</category></item>`
    )
    .join("\n")
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${xml(`Journal | ${SITE_INFO.name}`)}</title><link>${xml(`${SITE_INFO.url}/en/journal`)}</link><description>Decisions, releases, experiments, and lessons from my projects.</description>${items}</channel></rss>`,
    { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } }
  )
}
