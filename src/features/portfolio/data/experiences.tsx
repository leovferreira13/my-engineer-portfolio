import {
  BarChart3Icon,
  CodeXmlIcon,
  GraduationCapIcon,
  LayoutTemplateIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "reach-ai",
    companyName: "REACH.ai",
    companyWebsite: "https://www.reach.ai",
    positions: [
      {
        id: "1",
        title: "Software Engineer",
        employmentPeriod: {
          start: "11.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description:
          "- Helping businesses communicate better with customers through AI models and automation.",
        skills: ["Python", "AI", "Automation", "SaaS"],
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
        title: "Head Software Engineer",
        employmentPeriod: {
          start: "11.2024",
          end: "11.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Owned technical continuity of the SaaS platform while reducing infrastructure and operational costs through automation and lean delivery.
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
- Reduced churn complaints related to usability through UX redesigns (including patient timeline and faster health record workflows).
- Shortened vaccine registration flows by rethinking journeys and navigation.
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
          end: "12.2021",
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
        isExpanded: true,
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "1",
        title: "Universidade Federal de Minas Gerais (UFMG)",
        employmentPeriod: {
          start: "2017",
          end: "2022",
        },
        icon: <GraduationCapIcon />,
        description:
          "- Bachelor's degree, Control and Automation Engineering.\n- Strong foundation in mathematics, programming, and systems engineering (control systems, automation, and software development).",
        skills: [
          "Control systems",
          "Automation",
          "Software engineering",
          "Mathematics",
        ],
      },
      {
        id: "2",
        title: "Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG)",
        employmentPeriod: {
          start: "2014",
          end: "2016",
        },
        icon: <GraduationCapIcon />,
        description:
          "- Technical education in Mechatronics, Robotics, and Automation Engineering.",
        skills: ["Mechatronics", "Robotics", "Automation"],
      },
    ],
  },
]
