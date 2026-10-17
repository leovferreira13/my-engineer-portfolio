import Link from "next/link"

import { PROJECTS } from "../../data/projects"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel"
import { ProjectCard } from "./project-card"

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader className="flex items-center justify-between gap-4">
        <PanelTitle>Selected work</PanelTitle>
        <Link className="text-sm underline underline-offset-4" href="/projects">
          All projects
        </Link>
      </PanelHeader>
      <PanelContent className="space-y-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </PanelContent>
    </Panel>
  )
}
