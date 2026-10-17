import { ProjectCard } from "@/features/portfolio/components/projects/project-card"
import { localizedContent } from "@/i18n/content"
import { localizedMetadata } from "@/i18n/metadata"
import { getI18n } from "@/i18n/request"
export function generateMetadata() {
  return localizedMetadata("projects")
}
export default async function ProjectsPage() {
  const { locale, t } = await getI18n()
  return (
    <div className="mx-auto max-w-3xl py-10 sm:py-14">
      <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        {t.proof}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight">{t.projects}</h1>
      <p className="mt-4 mb-8 max-w-2xl leading-relaxed text-muted-foreground">
        {t.projectsIntro}
      </p>
      <div className="space-y-8">
        {localizedContent(locale).projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
