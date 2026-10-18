import Link from "next/link"

import {
  entryListsProject,
  getJournalEntries,
} from "@/features/journal/data/entries"
import { formatPeriod, localizePath } from "@/i18n/config"
import { getI18n } from "@/i18n/request"

import type { Project } from "../../types/projects"

export async function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = await getI18n()
  const entries = getJournalEntries().filter((entry) =>
    entryListsProject(entry.metadata.projectIds, project.id)
  )
  return (
    <article
      id={project.id}
      className="overflow-hidden rounded-xl border border-line bg-background"
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.imageAlt || `${project.title} preview`}
          width={1440}
          height={960}
          className="aspect-3/2 w-full border-b border-line object-cover object-top"
        />
      )}
      <div className="space-y-4 p-5 sm:p-6">
        <p className="font-mono text-xs text-muted-foreground">
          {t.publicProject} · {formatPeriod(project.period.start, locale)}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">
          {project.title}
        </h2>
        <p className="leading-relaxed">{project.summary}</p>
        {project.description?.split("\n\n").map((paragraph) => (
          <p
            key={paragraph}
            className="text-sm leading-relaxed text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
        <ul className="flex flex-wrap gap-2" aria-label={t.projectTech}>
          {project.skills.map((skill) => (
            <li className="rounded-md bg-muted px-2 py-1 text-xs" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            {t.liveApp} <span aria-hidden>↗</span>
          </a>
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              {t.source} <span aria-hidden>↗</span>
            </a>
          )}
          <Link
            href={localizePath(`/journal?project=${project.id}`, locale)}
            className="underline underline-offset-4"
          >
            {t.engineeringNotes}
            {entries.length ? ` (${entries.length})` : ""}
          </Link>
        </div>
      </div>
    </article>
  )
}
