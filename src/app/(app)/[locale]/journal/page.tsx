import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { EntryList } from "@/features/journal/components/entry-list"
import {
  entryListsProject,
  getJournalEntries,
} from "@/features/journal/data/entries"
import {
  journalListPath,
  readProjectFilter,
} from "@/features/journal/lib/timeline-href"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { localizePath } from "@/i18n/config"
import { localizedMetadata } from "@/i18n/metadata"
import { getI18n } from "@/i18n/request"
export function generateMetadata() {
  return localizedMetadata("journal")
}
export default async function JournalPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string | string[] }>
}) {
  const { locale, t } = await getI18n()
  const projectId = readProjectFilter((await searchParams).project)
  const selected = PROJECTS.find((project) => project.id === projectId)
  const entries = getJournalEntries().filter(
    (entry) =>
      !projectId || entryListsProject(entry.metadata.projectIds, projectId)
  )
  return (
    <div className="mx-auto max-w-3xl py-10 sm:py-14">
      <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        {t.decisionEyebrow}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight">{t.journal}</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
        {t.decisionIntro}
      </p>
      <nav
        aria-label={t.filterProjects}
        className="my-8 flex flex-wrap gap-2 text-sm"
      >
        <Link
          aria-current={!projectId ? "page" : undefined}
          className={`rounded-lg border border-line px-3 py-2 ${!projectId ? "bg-foreground text-background" : "hover:bg-accent"}`}
          href={localizePath("/journal", locale)}
        >
          {t.allProjects}
        </Link>
        {PROJECTS.map((project) => (
          <Link
            key={project.id}
            aria-current={projectId === project.id ? "page" : undefined}
            className={`rounded-lg border border-line px-3 py-2 ${projectId === project.id ? "bg-foreground text-background" : "hover:bg-accent"}`}
            href={localizePath(`/journal?project=${project.id}`, locale)}
          >
            {project.title}
          </Link>
        ))}
      </nav>
      {entries.length ? (
        <EntryList
          entries={entries}
          projectFilter={projectId}
          timelineHref={localizePath(journalListPath(projectId), locale)}
        />
      ) : (
        <section className="rounded-xl border border-dashed border-line p-8 sm:p-10">
          <p className="mb-4 font-mono text-xs text-muted-foreground">
            {selected
              ? selected.title
              : projectId
                ? t.unknownProject
                : t.journal}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            {projectId && !selected ? t.noProject : t.emptyTitle}
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {projectId && !selected ? t.chooseProject : t.emptyBody}
          </p>
          <Button variant="outline" size="sm" asChild className="mt-6">
            <Link href={localizePath("/projects", locale)}>
              {t.exploreProjects}
              <ArrowRightIcon aria-hidden="true" />
            </Link>
          </Button>
        </section>
      )}
    </div>
  )
}
