import { EDUCATION_ENTRIES } from "@/features/portfolio/data/education"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { USER } from "@/features/portfolio/data/user"

import type { Locale } from "./config"
import { getDictionary } from "./dictionaries"

export function localizedContent(locale: Locale) {
  const dictionary = getDictionary(locale)
  const skill = (value: string) => dictionary.skills[value] || value
  const experiences = EXPERIENCES.map((experience) => ({
    ...experience,
    positions: experience.positions.map((position) => {
      const translation =
        dictionary.positions[`${experience.id}:${position.id}`]
      return {
        ...position,
        title: translation?.title || position.title,
        description: translation?.description || position.description,
        employmentType:
          dictionary.employment[position.employmentType || ""] ||
          position.employmentType,
        skills: position.skills?.map(skill),
      }
    }),
  }))
  return {
    user: {
      ...USER,
      about: dictionary.about || USER.about,
      address: dictionary.profile.location,
    },
    experiences,
    education: EDUCATION_ENTRIES.map((position) => ({
      ...position,
      description: dictionary.education[position.id] || position.description,
      skills: position.skills?.map(skill),
    })),
    projects: PROJECTS.map((project) =>
      project.id === "sports-data-visualizer" && dictionary.project.length
        ? {
            ...project,
            link: project.link.replace(/\/en$/, `/${locale}`),
            summary: dictionary.project[0],
            description: dictionary.project[1],
            imageAlt: dictionary.project[2],
          }
        : project
    ),
    skill,
    capabilityDescriptions: dictionary.capabilityDescriptions,
  }
}
