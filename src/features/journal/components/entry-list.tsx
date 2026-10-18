import Link from "next/link"

import { PROJECTS } from "@/features/portfolio/data/projects"
import { localizePath } from "@/i18n/config"
import { getI18n } from "@/i18n/request"

import type { JournalEntry } from "../data/entries"

export async function EntryList({ entries }: { entries: JournalEntry[] }) {
  const { locale, t } = await getI18n()
  return (
    <div className="space-y-4">
      {entries.map((entry) => {
        const projects = entry.metadata.projectIds.map(
          (id) => PROJECTS.find((project) => project.id === id)!
        )
        return (
          <article
            key={entry.slug}
            className="rounded-xl border border-line p-5"
          >
            <p className="mb-3 flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
              <time dateTime={entry.metadata.createdAt}>
                {entry.metadata.createdAt}
              </time>
              <span>
                · {t[entry.metadata.entryType]}
                {projects.length > 0
                  ? ` · ${projects.map((project) => project.title).join(" · ")}`
                  : null}
              </span>
            </p>
            <h2 className="text-xl font-semibold">
              <Link
                className="hover:underline"
                href={localizePath(`/journal/${entry.slug}`, locale)}
              >
                {entry.metadata.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {entry.metadata.description}
            </p>
            {entry.metadata.tags.length > 0 && (
              <p className="mt-3 text-xs text-muted-foreground">
                {entry.metadata.tags.join(" · ")}
              </p>
            )}
          </article>
        )
      })}
    </div>
  )
}
