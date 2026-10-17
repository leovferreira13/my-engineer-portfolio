import type { Metadata } from "next"

import { ProjectCard } from "@/features/portfolio/components/projects/project-card"
import { PROJECTS } from "@/features/portfolio/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Public projects by Leonardo Ferreira, with live demos, source code, and engineering notes.",
  alternates: { canonical: "/projects" },
}
export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl py-10 sm:py-14">
      <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        Proof of work
      </p>
      <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-4 mb-8 max-w-2xl leading-relaxed text-muted-foreground">
        Things I build to explore a problem, make an idea useful, and share how
        it works. Each project connects the product, the code, and the decisions
        behind it.
      </p>
      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
