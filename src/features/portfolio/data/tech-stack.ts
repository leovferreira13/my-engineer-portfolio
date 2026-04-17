import type { TechStack, TechStackSkillGroup } from "../types/tech-stack"

/** Display order for Stack panel section headings. */
export const TECH_STACK_GROUP_ORDER: readonly TechStackSkillGroup[] = [
  "Back end",
  "Data engineering",
  "AI",
] as const

export const TECH_STACK: TechStack[] = [
  // Back end
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    skillGroup: "Back end",
    categories: ["Language"],
  },
  {
    key: "django",
    title: "Django",
    href: "https://www.djangoproject.com/",
    skillGroup: "Back end",
    categories: ["Framework"],
    useLocalAsset: true,
  },
  {
    key: "fastapi",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    skillGroup: "Back end",
    categories: ["Framework"],
    useLocalAsset: true,
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    skillGroup: "Back end",
    categories: ["Language"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    skillGroup: "Back end",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    skillGroup: "Back end",
    categories: ["Containerization"],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    skillGroup: "Back end",
    categories: ["Database"],
    useLocalAsset: true,
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    skillGroup: "Back end",
    categories: ["Database"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    skillGroup: "Back end",
    categories: ["Database"],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    skillGroup: "Back end",
    categories: ["Database"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    skillGroup: "Back end",
    categories: ["Version Control"],
  },
  // Data engineering
  {
    key: "pandas",
    title: "pandas",
    href: "https://pandas.pydata.org/",
    skillGroup: "Data engineering",
    categories: ["Library"],
    useLocalAsset: true,
  },
  {
    key: "apache-spark",
    title: "Apache Spark",
    href: "https://spark.apache.org/",
    skillGroup: "Data engineering",
    categories: ["Data Processing"],
    useLocalAsset: true,
  },
  // AI
  {
    key: "claude",
    title: "Claude",
    href: "https://claude.ai/",
    skillGroup: "AI",
    categories: ["Tools", "AI"],
  },
  {
    key: "cursor",
    title: "Cursor",
    href: "https://cursor.com/",
    skillGroup: "AI",
    categories: ["Tools", "AI"],
    theme: true,
  },
]

const stackByGroup = (): Map<TechStackSkillGroup, TechStack[]> => {
  const map = new Map<TechStackSkillGroup, TechStack[]>()
  for (const item of TECH_STACK) {
    const bucket = map.get(item.skillGroup)
    if (bucket) {
      bucket.push(item)
    } else {
      map.set(item.skillGroup, [item])
    }
  }
  return map
}

/** Ordered sections for UI and LLM exports (stable heading order). */
export const TECH_STACK_GROUPS: { title: TechStackSkillGroup; items: TechStack[] }[] =
  (() => {
    const map = stackByGroup()
    return TECH_STACK_GROUP_ORDER.map((title) => ({
      title,
      items: map.get(title) ?? [],
    }))
  })()

export function formatTechStackForMarkdown(): string {
  return TECH_STACK_GROUPS.filter((g) => g.items.length > 0)
    .map(
      (g) =>
        `### ${g.title}\n\n${g.items.map((item) => `- [${item.title}](${item.href})`).join("\n")}`
    )
    .join("\n\n")
}
