import en from "@/i18n/messages/en.json"

import type { TechStack, TechStackSkillGroup } from "../types/tech-stack"
export const TECH_STACK_GROUP_ORDER: readonly TechStackSkillGroup[] = [
  "Product & delivery",
  "Backend & cloud",
  "Data engineering",
  "Applied AI",
  "Frontend",
]
export const TECH_STACK: TechStack[] = [
  {
    key: "product-&-delivery-0",
    title: "User discovery",
    href: "https://www.nngroup.com/articles/user-interviews/",
    skillGroup: "Product & delivery",
    categories: [],
  },
  {
    key: "product-&-delivery-1",
    title: "Workflow design",
    href: "https://www.nngroup.com/articles/task-analysis/",
    skillGroup: "Product & delivery",
    categories: [],
  },
  {
    key: "product-&-delivery-2",
    title: "Prioritization & technical scoping",
    href: "https://www.atlassian.com/agile/product-management",
    skillGroup: "Product & delivery",
    categories: [],
  },
  {
    key: "backend-&-cloud-0",
    title: "Python",
    href: "https://www.python.org/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "backend-&-cloud-1",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "backend-&-cloud-2",
    title: "Django",
    href: "https://www.djangoproject.com/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "backend-&-cloud-3",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "backend-&-cloud-4",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "backend-&-cloud-5",
    title: "Redis",
    href: "https://redis.io/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "backend-&-cloud-6",
    title: "AWS Lambda, SQS & API Gateway",
    href: "https://aws.amazon.com/",
    skillGroup: "Backend & cloud",
    categories: [],
  },
  {
    key: "data-engineering-0",
    title: "Databricks",
    href: "https://www.databricks.com/",
    skillGroup: "Data engineering",
    categories: [],
  },
  {
    key: "data-engineering-1",
    title: "PySpark",
    href: "https://spark.apache.org/docs/latest/api/python/",
    skillGroup: "Data engineering",
    categories: [],
  },
  {
    key: "data-engineering-2",
    title: "Azure Data Factory",
    href: "https://azure.microsoft.com/products/data-factory/",
    skillGroup: "Data engineering",
    categories: [],
  },
  {
    key: "data-engineering-3",
    title: "ETL & data modeling",
    href: "https://learn.microsoft.com/azure/architecture/data-guide/",
    skillGroup: "Data engineering",
    categories: [],
  },
  {
    key: "applied-ai-0",
    title: "LangGraph",
    href: "https://docs.langchain.com/oss/python/langgraph/overview",
    skillGroup: "Applied AI",
    categories: [],
  },
  {
    key: "applied-ai-1",
    title: "OpenAI tool calling",
    href: "https://platform.openai.com/docs/guides/function-calling",
    skillGroup: "Applied AI",
    categories: [],
  },
  {
    key: "applied-ai-2",
    title: "RAG & vector search",
    href: "https://www.databricks.com/product/machine-learning/vector-search",
    skillGroup: "Applied AI",
    categories: [],
  },
  {
    key: "applied-ai-3",
    title: "Behavioral evaluations & guardrails",
    href: "https://platform.openai.com/docs/guides/evals",
    skillGroup: "Applied AI",
    categories: [],
  },
  {
    key: "applied-ai-4",
    title: "LangSmith",
    href: "https://www.langchain.com/langsmith",
    skillGroup: "Applied AI",
    categories: [],
  },
  {
    key: "frontend-0",
    title: "React",
    href: "https://react.dev/",
    skillGroup: "Frontend",
    categories: [],
  },
  {
    key: "frontend-1",
    title: "Next.js",
    href: "https://nextjs.org/",
    skillGroup: "Frontend",
    categories: [],
  },
  {
    key: "frontend-2",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    skillGroup: "Frontend",
    categories: [],
  },
  {
    key: "frontend-3",
    title: "Vue.js",
    href: "https://vuejs.org/",
    skillGroup: "Frontend",
    categories: [],
  },
]
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
