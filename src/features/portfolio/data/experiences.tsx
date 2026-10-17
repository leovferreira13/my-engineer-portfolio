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
        employmentType: "Contract",
        icon: <CodeXmlIcon />,
        description: `- Engineered Python/FastAPI APIs and event-driven flows processing **20M+ SMS and emails monthly**, with **99.9% delivery reliability** and support for **50x peak throughput capacity** through queue processing and idempotency improvements.
- Building an appointment agent for **voice and SMS**: booking, rescheduling, and cancellation through LangGraph, tool calling, retrieval over business knowledge, and scheduling APIs.
- Designed behavioral evaluations, guardrails, Redis-backed idempotency, and observability with LangSmith and audit logs. Optimized median voice response latency to **approximately 2 seconds** in testing.`,
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
        description: `- Led five engineers, owning prioritization, technical decisions, and delivery as the B2B veterinary SaaS product matured.
- Owned technical continuity of the platform while reducing infrastructure and operational costs through automation and lean delivery.
- Led major improvements to the Health Records module: integrated drug reference data, built a pharmacy dispensing portal with external validation, customizable prescription templates (faster daily record creation), and optimized multi-page PDF generation (large performance improvement in rendering time).
- Delivered end-to-end product changes across backend (Python/Django), frontend (Vue.js), and AWS operations while coordinating with senior engineers under Agile practices.`,
        skills: [
          "Python",
          "Django",
          "PostgreSQL",
          "AWS",
          "Vue.js",
          "SaaS",
          "PDF generation",
          "Agile",
        ],
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
        description: `- Owned the product roadmap for Guiavet PRO, aligning stakeholders, leadership, design, and engineering under Agile practices.
- Ran competitive benchmarks, analytics, and customer interviews to inform product decisions.
- Used research and usage data to redesign clinic workflows, reducing time for some critical operations by **up to 80%** and **usability-related churn indicators by up to 95%** within one month after launch.
- Expanded the product beyond solo practitioners to veterinarians serving other clinics and to clinics, adapting packaging and workflows to each B2B segment.
- Expanded the customer base with new B2B-ready entities integrated with scheduling, health, and billing modules.
- Launched a professional website platform for veterinarians with SEO-oriented improvements (sitemaps, metadata, load-time improvements).
- Managed team capacity and delivery alignment across priorities and deadlines.`,
        skills: [
          "Product management",
          "Roadmapping",
          "UX",
          "B2B",
          "SEO",
          "Agile",
        ],
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
        description: `- Built and scaled core modules of Guiavet PRO using Django, PostgreSQL, and AWS.
- Led database modeling and domain-driven design discussions, balancing delivery speed and long-term maintainability.
- Built ETL pipelines and interactive dashboards with SQL for finance, adoption, and user behavior insights.
- Mentored junior engineers on backend and data engineering practices.
- Architected asynchronous workers (Django APScheduler + AWS SQS) for heavy workloads and cron-style jobs.
- Designed a dedicated microservice for scalable PDF generation integrated with health records.
- Improved scalability with nginx tuning and database-level caching for patient health metrics.`,
        skills: [
          "Python",
          "Django",
          "PostgreSQL",
          "AWS",
          "SQS",
          "ETL",
          "SQL",
          "nginx",
          "DDD",
        ],
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
        description: `- Started in a data analytics internship implementing Azure-based ETL and data pipelines, then continued as a full-time data engineer on the same team.
- Built ETL pipelines and data workflows on Azure Data Factory and Azure Databricks (PySpark), consolidating relational DBs, SFTP, and APIs into a modern data lake architecture.
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
        isExpanded: false,
      },
    ],
  },
]
