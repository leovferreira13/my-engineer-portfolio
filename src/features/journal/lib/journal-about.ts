export function journalAbout(
  projects: readonly { title: string; repository?: string }[]
) {
  if (projects.length === 0) return undefined
  return projects.map((project) => ({
    "@type": "SoftwareSourceCode" as const,
    name: project.title,
    codeRepository: project.repository,
  }))
}
