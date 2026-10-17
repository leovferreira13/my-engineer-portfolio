import { format } from "date-fns"

import { SITE_INFO } from "@/config/site"
import { getLLMText } from "@/features/doc/lib/get-llm-text"
import { getJournalEntries } from "@/features/journal/data/entries"
import { AWARDS } from "@/features/portfolio/data/awards"
import { EDUCATION_ENTRIES } from "@/features/portfolio/data/education"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { formatTechStackForMarkdown } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"
import { formatPositionAsMarkdown } from "@/features/portfolio/lib/format-position-markdown"

const allPosts = getJournalEntries()

const aboutText = `## About

${USER.about.trim()}

### Personal Information

- First Name: ${USER.firstName}
- Last Name: ${USER.lastName}
- Display Name: ${USER.displayName}
- Location: ${USER.address}
- Website: ${USER.website}

### Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}

### Tech Stack

${formatTechStackForMarkdown()}\n`

const experienceText = `## Experience

${EXPERIENCES.map((item) =>
  item.positions
    .map((position) =>
      formatPositionAsMarkdown(position, item.companyName, {
        headingPrefix: "###",
      })
    )
    .join("\n\n")
).join("\n\n")}
`

const educationText = `## Education

${EDUCATION_ENTRIES.map((position) =>
  formatPositionAsMarkdown(position, "Education", { headingPrefix: "###" })
).join("\n\n")}
`

const projectsText = `## Projects

${PROJECTS.map((item) => {
  const skills = `\n\nSkills: ${item.skills.join(", ")}`
  const description = item.description ? `\n\n${item.description.trim()}` : ""
  return `### ${item.title}\n\nProject URL: ${item.link}\nRepository: ${item.repository ?? ""}${skills}${description}`
}).join("\n\n")}
`

const awardsText = `## Publications

${AWARDS.map((item) => `### ${item.prize} | ${item.title}\n\n${item.description}`).join("\n\n")}
`

async function getDecisionContent() {
  const text = await Promise.all(
    allPosts.map(
      async (item) =>
        `---\ntitle: "${item.metadata.title}"\ndescription: "${item.metadata.description}"\nlast_updated: "${format(new Date(item.metadata.updatedAt), "MMMM d, yyyy")}"\nsource: "${SITE_INFO.url}/en/decisions/${item.slug}"\n---\n\n${await getLLMText(item)}`
    )
  )
  return text.join("\n\n")
}

async function getContent() {
  return `This document contains comprehensive information about ${USER.displayName}'s professional profile, portfolio, and decision-log content. It includes professional details, work experience, education, projects, publications, and published decision-log entries. This data is formatted for consumption by Large Language Models (LLMs) to provide accurate and up-to-date information about ${USER.displayName}'s background, skills, and expertise as a Product Engineer.

# Leonardo Ferreira

> Product Engineer | B2B SaaS, user workflows & applied AI.

${aboutText}
${experienceText}
${educationText}
${projectsText}
${awardsText}

## Decision Log

${await getDecisionContent()}`
}

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(await getContent(), {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
