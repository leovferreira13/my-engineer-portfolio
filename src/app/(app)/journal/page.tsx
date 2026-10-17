import type { Metadata } from "next"
import Link from "next/link"

import { EntryList } from "@/features/journal/components/entry-list"
import { getJournalEntries } from "@/features/journal/data/entries"
import { PROJECTS } from "@/features/portfolio/data/projects"

export const metadata: Metadata = {
  title: "Engineering Journal",
  description:
    "Dated decisions, releases, experiments, and lessons from Leonardo Ferreira’s projects.",
  alternates: { canonical: "/journal" },
}

export default async function JournalPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>
}) {
  const { project: projectId } = await searchParams
  const selected = PROJECTS.find((project) => project.id === projectId)
  const entries = getJournalEntries().filter(
    (entry) => !projectId || entry.metadata.projectId === projectId
  )
  return (
    <div className="mx-auto max-w-3xl py-10 sm:py-14">
      <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        The thinking behind the work
      </p>
      <h1 className="text-4xl font-semibold tracking-tight">
        Engineering Journal
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
        A record of what changed, why I chose an approach, and what I learned.
        Release notes, engineering decisions, and experiments, connected to the
        projects they belong to.
      </p>
      <nav
        aria-label="Filter journal by project"
        className="my-8 flex flex-wrap gap-2 text-sm"
      >
        <Link
          aria-current={!projectId ? "page" : undefined}
          className={`rounded-lg border border-line px-3 py-2 ${!projectId ? "bg-foreground text-background" : "hover:bg-accent"}`}
          href="/journal"
        >
          All projects
        </Link>
        {PROJECTS.map((project) => (
          <Link
            key={project.id}
            aria-current={projectId === project.id ? "page" : undefined}
            className={`rounded-lg border border-line px-3 py-2 ${projectId === project.id ? "bg-foreground text-background" : "hover:bg-accent"}`}
            href={`/journal?project=${project.id}`}
          >
            {project.title}
          </Link>
        ))}
      </nav>
      {entries.length ? (
        <EntryList entries={entries} />
      ) : (
        <section className="rounded-xl border border-dashed border-line p-8 sm:p-10">
          <p className="mb-4 font-mono text-xs text-muted-foreground">
            {selected
              ? selected.title
              : projectId
                ? "Unknown project"
                : "Journal"}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            {projectId && !selected
              ? "No project found"
              : "The first entry is still ahead."}
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {projectId && !selected
              ? "Choose a project above to browse its engineering notes."
              : "There are no published notes yet. Future entries will capture the context, alternatives, trade-offs, evidence, and next steps behind each project."}
          </p>
          <Link
            className="mt-6 inline-block text-sm underline underline-offset-4"
            href="/projects"
          >
            Explore the projects
          </Link>
        </section>
      )}
      <Link
        prefetch={false}
        href="/journal/rss"
        className="mt-8 inline-block text-sm text-muted-foreground underline underline-offset-4"
      >
        Subscribe via RSS
      </Link>
    </div>
  )
}
