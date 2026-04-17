import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "leoferreira-dev",
    title: "leoferreira.dev",
    period: {
      start: "06.2024",
    },
    link: "https://www.leoferreira.dev",
    skills: ["Personal site", "Blog", "Projects"],
    description:
      "Personal site with engineering notes and project highlights (Portuguese-first content).",
  },
  {
    id: "smart-scout-football",
    title: "Smart Scout Football",
    period: {
      start: "01.2024",
    },
    link: "https://smartscoutai.com/",
    skills: ["Football", "Scouting", "Product"],
    description:
      "Football scouting product; this entry will gain richer narrative and links in a later content pass.",
  },
]
