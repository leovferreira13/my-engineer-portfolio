import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "guiavet-pro",
    title: "Guiavet PRO",
    period: {
      start: "12.2021",
      end: "11.2025",
    },
    link: "https://pro.guia.vet",
    skills: [
      "SaaS",
      "Python",
      "Django",
      "PostgreSQL",
      "AWS",
      "Vue.js",
      "Health records",
      "ETL",
    ],
    description:
      "Veterinary practice management platform: clinical workflows, prescriptions, scheduling, billing, and analytics — delivered across engineering and product leadership roles.",
    isExpanded: true,
  },
  {
    id: "reach-ai",
    title: "REACH.ai",
    period: {
      start: "11.2025",
    },
    link: "https://www.reach.ai",
    skills: ["AI", "Automation", "SaaS", "Customer communications"],
    description:
      "Engineering work focused on AI models and automation to help businesses communicate better with customers.",
  },
  {
    id: "qdois-data",
    title: "Enterprise data platform (QDOIS)",
    period: {
      start: "10.2020",
      end: "12.2021",
    },
    link: "https://www.linkedin.com/company/qdoisdata",
    skills: [
      "Azure Data Factory",
      "Azure Databricks",
      "PySpark",
      "ETL",
      "Azure DevOps",
    ],
    description:
      "ETL and lake-house style consolidation for operational sources (relational DBs, SFTP, APIs), plus CI/CD and collaboration with business stakeholders.",
  },
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
]
