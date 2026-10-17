import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { localizePath } from "@/i18n/config"
import { localizedContent } from "@/i18n/content"
import { getI18n } from "@/i18n/request"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel"
import { ProjectCard } from "./project-card"

export async function Projects() {
  const { locale, t } = await getI18n()
  const content = localizedContent(locale)
  return (
    <Panel id="projects">
      <PanelHeader className="flex flex-wrap items-center justify-between gap-3">
        <PanelTitle>{t.selectedWork}</PanelTitle>
        <Button variant="outline" size="sm" asChild className="shrink-0">
          <Link href={localizePath("/projects", locale)}>
            {t.allProjects}
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </PanelHeader>
      <PanelContent className="space-y-4">
        {content.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </PanelContent>
    </Panel>
  )
}
