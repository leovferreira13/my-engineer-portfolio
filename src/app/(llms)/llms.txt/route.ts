import { SITE_INFO } from "@/config/site"
import { getJournalEntries } from "@/features/journal/data/entries"
import { USER } from "@/features/portfolio/data/user"
export const dynamic = "force-static"
export function GET() {
  return new Response(
    `# ${USER.displayName}\n\n> ${USER.bio}\n\n- [About](${SITE_INFO.url}/about.md)\n- [Experience](${SITE_INFO.url}/experience.md)\n- [Education](${SITE_INFO.url}/education.md)\n- [Projects](${SITE_INFO.url}/projects.md)\n- [Journal](${SITE_INFO.url}/en/journal)\n\n## Published journal entries\n\n${
      getJournalEntries()
        .map(
          (entry) =>
            `- [${entry.metadata.title}](${SITE_INFO.url}/en/journal/${entry.slug}.mdx): ${entry.metadata.description}`
        )
        .join("\n") || "No published entries yet."
    }`,
    { headers: { "Content-Type": "text/markdown; charset=utf-8" } }
  )
}
