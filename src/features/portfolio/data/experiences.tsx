import { BarChart3Icon, CodeXmlIcon, LayoutTemplateIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "reach-ai",
    companyName: "REACH.ai",
    companyWebsite: "https://www.reach.ai",
    positions: [
      {
        id: "1",
        title: "Senior Software Engineer",
        employmentPeriod: {
          start: "11.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Develop **Python/FastAPI APIs and event-driven messaging flows** for a multi-tenant SaaS platform processing **20M+ SMS and emails monthly across all customers**. The system connects AWS SQS, Lambda, API Gateway, Aurora/RDS, MongoDB, Redis, and messaging providers.
- Implemented **Redis-backed idempotency across all customer accounts** to address duplicate-send issues in the platform's messaging workflows, alongside queue-processing improvements.
- Building a **multi-turn voice and SMS appointment agent** with Python, LangGraph, OpenAI tool calling, RAG, Claude, and AWS Bedrock. Integrate scheduling APIs for availability, booking, rescheduling, and cancellation.
- Designed behavioral evaluations, guardrails against unsupported responses, and observability through **LangSmith and internal audit logs**, so conversation behavior and tool calls can be inspected and improved.
- Achieved **approximately 2 seconds from the end of the customer's speech to the start of the agent's audio response in internal tests**. The agent is **in prelaunch testing**; customer adoption and operational outcomes have not yet been measured.`,
        skills: [
          "Python",
          "FastAPI",
          "AWS Lambda",
          "SQS",
          "Redis",
          "MongoDB",
          "LangGraph",
          "RAG",
          "Evaluations",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "guiavet",
    companyName: "Guiavet",
    companyWebsite: "https://pro.guia.vet",
    isConsolidated: true,
    positions: [
      {
        id: "1",
        title: "Head of Engineering & Product Lead",
        employmentPeriod: {
          start: "11.2024",
          end: "11.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- **Led five engineers**, owning prioritization, technical decisions, and delivery while remaining hands-on in implementation.`,
        skills: ["Python", "Django", "Vue.js", "AWS"],
        isExpanded: true,
      },
      {
        id: "2",
        title: "Product Manager",
        employmentPeriod: {
          start: "12.2023",
          end: "11.2024",
        },
        employmentType: "Full-time",
        icon: <LayoutTemplateIcon />,
        description: `- Turned **user research and usage data into redesigned clinic workflows**, simplifying consultation tasks and vaccination recording for multiple pets belonging to the same owner. Customers described a faster, more intuitive experience; usability-related reasons for cancellation became less frequent in exit interviews after the redesign.
- Expanded the product beyond solo practitioners to veterinarians serving other clinics and to clinics, adapting packaging and workflows to each B2B segment.`,
        skills: ["User discovery", "Workflow design", "Product management"],
      },
      {
        id: "3",
        title: "Software and Data Engineer",
        employmentPeriod: {
          start: "12.2021",
          end: "12.2023",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Built the **Python/Django monolithic backend foundation** with **Nginx and Docker**, separating **API and worker processes** to serve requests and run background workloads. This foundation supported the company from its founding through the period after product-market fit.
- Delivered core scheduling, medical records, prescription, and pharmacy workflows from technical scoping through launch and iteration, connecting product decisions to implementation.`,
        skills: ["Python", "Django", "PostgreSQL", "AWS", "Docker", "nginx"],
      },
    ],
  },
  {
    id: "qdois",
    companyName: "QDOIS - Data Intelligence",
    positions: [
      {
        id: "1",
        title: "Data Engineer",
        employmentPeriod: {
          start: "10.2020",
          end: "11.2021",
        },
        employmentType: "Internship and full-time",
        icon: <BarChart3Icon />,
        description: `- Built ETL pipelines and data workflows on Azure Data Factory and Azure Databricks (PySpark), consolidating relational DBs, SFTP, and APIs into a modern data lake architecture.
- Supported digital transformation by reducing infrastructure costs and enabling future BI, analytics, and ML initiatives.
- Established CI/CD with Azure DevOps and Git for automated deployments and environment consistency.
- Partnered with business stakeholders to translate requirements into scalable data models and pipelines.`,
        skills: [
          "Azure Data Factory",
          "Azure Databricks",
          "PySpark",
          "ETL",
          "Azure DevOps",
          "Git",
        ],
        isExpanded: true,
      },
    ],
  },
]
