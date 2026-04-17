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
      "B2B SaaS for veterinary clinics: clinical workflows, prescriptions, scheduling, billing, and analytics. Spanned hands-on engineering (Django, PostgreSQL, AWS, Vue) and product leadership — roadmap, UX bets, and regulated health-record changes shipped with the team.",
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
      "Current role: AI and automation for customer communications — from integration design to production behavior, with emphasis on reliability and measurable operator outcomes.",
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
      "Enterprise data platform work: lake-house style consolidation from relational DBs, SFTP, and APIs; CI/CD on Azure DevOps; close partnership with business stakeholders to turn reporting needs into maintainable pipelines.",
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
      "This site: portfolio, engineering journal (blog), and public artifacts — Portuguese-first writing where it fits the audience.",
  },
]
