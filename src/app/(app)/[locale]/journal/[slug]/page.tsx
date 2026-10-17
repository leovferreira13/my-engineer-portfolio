import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { MDX } from "@/components/mdx"
import { Prose } from "@/components/ui/typography"
import { SITE_INFO } from "@/config/site"
import {
  getJournalEntries,
  getJournalEntry,
} from "@/features/journal/data/entries"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { USER } from "@/features/portfolio/data/user"
import { localizePath } from "@/i18n/config"
import { getI18n } from "@/i18n/request"

export const dynamic = "force-dynamic"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { locale } = await getI18n()
  const entry = getJournalEntry((await params).slug)
  if (!entry) notFound()
  return {
    title: entry.metadata.title,
    description: entry.metadata.description,
    alternates: { canonical: localizePath(`/journal/${entry.slug}`, locale) },
    openGraph: {
      type: "article",
      title: entry.metadata.title,
      description: entry.metadata.description,
      url: localizePath(`/journal/${entry.slug}`, locale),
      publishedTime: entry.metadata.createdAt,
      modifiedTime: entry.metadata.updatedAt,
    },
  }
}
export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { locale, t } = await getI18n()
  const entry = getJournalEntry((await params).slug)
  if (!entry) notFound()
  const project = PROJECTS.find(
    (project) => project.id === entry.metadata.projectId
  )!
  const all = getJournalEntries().filter(
    (item) => item.metadata.projectId === project.id
  )
  const index = all.findIndex((item) => item.slug === entry.slug)
  const newer = all[index - 1],
    older = all[index + 1]
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: entry.metadata.title,
    description: entry.metadata.description,
    datePublished: entry.metadata.createdAt,
    dateModified: entry.metadata.updatedAt,
    url: `${SITE_INFO.url}${localizePath(`/journal/${entry.slug}`, locale)}`,
    author: { "@type": "Person", name: USER.displayName, url: SITE_INFO.url },
    about: {
      "@type": "SoftwareSourceCode",
      name: project.title,
      codeRepository: project.repository,
    },
  }
  return (
    <article className="mx-auto max-w-3xl py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Link
        href={localizePath(`/journal?project=${project.id}`, locale)}
        className="text-sm text-muted-foreground underline underline-offset-4"
      >
        ← {t.journal} · {project.title}
      </Link>
      <header className="mt-8 mb-8 space-y-4">
        <p className="font-mono text-xs text-muted-foreground">
          <time dateTime={entry.metadata.createdAt}>
            {entry.metadata.createdAt}
          </time>{" "}
          · {t[entry.metadata.entryType]}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          {entry.metadata.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {entry.metadata.description}
        </p>
        <p className="text-sm text-muted-foreground">
          {t.by} {USER.displayName} · {t.updated}{" "}
          <time dateTime={entry.metadata.updatedAt}>
            {entry.metadata.updatedAt}
          </time>
        </p>
        <div className="flex flex-wrap gap-4 text-sm underline underline-offset-4">
          <Link href={localizePath(`/projects#${project.id}`, locale)}>
            {t.aboutProject}
          </Link>
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.repository} ↗
            </a>
          )}
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {t.liveApp} ↗
          </a>
        </div>
        {entry.metadata.tags.length > 0 && (
          <p className="text-xs text-muted-foreground">
            {entry.metadata.tags.join(" · ")}
          </p>
        )}
      </header>
      {locale !== "en" && (
        <p className="mb-6 text-sm text-muted-foreground">
          {t.originalEnglish}
        </p>
      )}
      <Prose lang="en">
        <MDX code={entry.content} />
      </Prose>
      {entry.metadata.references.length > 0 && (
        <section className="mt-8 border-t border-line pt-6">
          <h2 className="text-lg font-semibold">{t.references}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {entry.metadata.references.map((ref) => (
              <li key={ref.url}>
                <a
                  className="underline underline-offset-4"
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ref.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
      <nav
        aria-label={t.moreNotes}
        className="mt-10 flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-sm"
      >
        {older && (
          <Link href={localizePath(`/journal/${older.slug}`, locale)}>
            ← {older.metadata.title}
          </Link>
        )}
        {newer && (
          <Link href={localizePath(`/journal/${newer.slug}`, locale)}>
            {newer.metadata.title} →
          </Link>
        )}
      </nav>
    </article>
  )
}
