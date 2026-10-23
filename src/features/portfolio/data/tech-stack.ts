import en from "@/i18n/messages/en.json"

import type { TechStack, TechStackSkillGroup } from "../types/tech-stack"
export const TECH_STACK_GROUP_ORDER: readonly TechStackSkillGroup[] = [
  "Language",
  "Backend & cloud",
  "Applied AI",
  "Data engineering",
  "Frontend",
  "Product & delivery",
]
export const TECH_STACK = [
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    skillGroup: "Language",
    categories: [],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    skillGroup: "Language",
    categories: [],
  },
  {
    key: "fastapi",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "nginx",
    title: "Nginx",
    href: "https://nginx.org/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    skillGroup: "Backend & cloud",
    categories: ["Cloud"],
  },
  {
    key: "langgraph",
    title: "LangGraph",
    href: "https://docs.langchain.com/oss/python/langgraph/overview",
    skillGroup: "Applied AI",
    categories: [],
  },
  {
    key: "langsmith",
    title: "LangSmith",
    href: "https://www.langchain.com/langsmith",
    skillGroup: "Applied AI",
    categories: [],
  },
  {
    key: "openai",
    title: "OpenAI API",
    href: "https://platform.openai.com/",
    skillGroup: "Applied AI",
    categories: [],
  },
  {
    key: "claude",
    title: "Claude",
    href: "https://www.anthropic.com/claude",
    skillGroup: "Applied AI",
    categories: [],
  },
  {
    key: "aws-bedrock",
    title: "AWS Bedrock",
    href: "https://aws.amazon.com/bedrock/",
    skillGroup: "Applied AI",
    categories: [],
  },
  {
    key: "rag-and-hybrid-search",
    title: "RAG & Hybrid Search",
    href: "https://docs.langchain.com/oss/python/langchain/rag",
    skillGroup: "Applied AI",
    categories: [],
  },
  {
    key: "airflow",
    title: "Apache Airflow",
    href: "https://airflow.apache.org/",
    skillGroup: "Data engineering",
    categories: [],
  },
  {
    key: "spark",
    title: "Apache Spark",
    href: "https://spark.apache.org/",
    skillGroup: "Data engineering",
    categories: [],
  },
  {
    key: "snowflake",
    title: "Snowflake",
    href: "https://www.snowflake.com/",
    skillGroup: "Data engineering",
    categories: [],
  },
  {
    key: "data-lakes-and-warehouses",
    title: "Data Lakes & Warehouses",
    href: "https://aws.amazon.com/what-is/data-lake/",
    skillGroup: "Data engineering",
    categories: [],
  },
  {
    key: "etl-scraping-and-orchestration",
    title: "ETL, Scraping & Orchestration",
    href: "https://airflow.apache.org/docs/apache-airflow/stable/index.html",
    skillGroup: "Data engineering",
    categories: [],
  },
  {
    key: "vuejs",
    title: "Vue.js",
    href: "https://vuejs.org/",
    skillGroup: "Frontend",
    categories: [],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    skillGroup: "Frontend",
    categories: [],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    skillGroup: "Frontend",
    categories: [],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    skillGroup: "Frontend",
    categories: [],
  },
  {
    key: "system-design",
    title: "System Design",
    href: "https://aws.amazon.com/architecture/",
    skillGroup: "Product & delivery",
    categories: [],
  },
  {
    key: "technical-product-strategy",
    title: "Technical Product Strategy",
    href: "https://www.svpg.com/product-strategy/",
    skillGroup: "Product & delivery",
    categories: [],
  },
  {
    key: "project-and-delivery-management",
    title: "Project & Delivery Management",
    href: "https://www.atlassian.com/agile/project-management",
    skillGroup: "Product & delivery",
    categories: [],
  },
  {
    key: "ai-assisted-engineering",
    title: "AI-Assisted Engineering",
    href: "https://docs.github.com/en/copilot",
    skillGroup: "Product & delivery",
    categories: [],
  },
] as const satisfies readonly TechStack[]
export type TechStackKey = (typeof TECH_STACK)[number]["key"]
export const TECH_STACK_GROUPS = TECH_STACK_GROUP_ORDER.map((title) => ({
  title,
  items: TECH_STACK.filter((item) => item.skillGroup === title),
}))
export function formatTechStackForMarkdown(): string {
  return TECH_STACK_GROUPS.map(
    (group) =>
      `### ${group.title}\n\n${en.capabilityDescriptions[group.title]}\n\n${group.items.map((item) => `- [${item.title}](${item.href})`).join("\n")}`
  ).join("\n\n")
}
