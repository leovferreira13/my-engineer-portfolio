import Link from "next/link"

import { PROJECTS } from "@/features/portfolio/data/projects"

import type { JournalEntry } from "../data/entries"

export function EntryList({ entries }: { entries: JournalEntry[] }) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => {
        const project = PROJECTS.find(
          (project) => project.id === entry.metadata.projectId
        )!
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
                · {entry.metadata.entryType} · {project.title}
              </span>
            </p>
            <h2 className="text-xl font-semibold">
              <Link className="hover:underline" href={`/journal/${entry.slug}`}>
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
