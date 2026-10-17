import type { User } from "@/features/portfolio/types/user"
import { SITE_URL } from "@/lib/site-url"

export const USER: User = {
  firstName: "Leonardo",
  lastName: "Vieira Ferreira",
  displayName: "Leonardo Ferreira",
  username: "leovferreira13",
  gender: "male",
  pronouns: "he/him",
  bio: "Product Engineer with 5+ years across backend, data, product leadership and applied AI. I take user problems from discovery to production.",
  flipSentences: ["Product Engineer", "Backend, data & applied AI"],
  address: "Rio de Janeiro, Brazil",
  email: "bGVvdmllaXJhZi41OTlAZ21haWwuY29t",
  website: SITE_URL,
  jobTitle: "Product Engineer",
  jobs: [
    {
      title: "Senior Software Engineer",
      company: "Reach.ai",
      website: "https://www.reach.ai",
      experienceId: "reach-ai",
    },
  ],
  about: `
I am a **Product Engineer** with **5+ years** across backend and data engineering, product management, and technical leadership. I take problems from discovery through technical decisions, implementation, launch, and iteration. Adaptability connects that work: learning an unfamiliar domain, listening to the people who know it, and deciding where to go deep.

### Product and customer workflows

At **Guiavet**, I progressed from Software Engineer to Product Manager and Head of Engineering & Product Lead. Working with veterinarians meant understanding how scheduling, medical records, prescriptions, and pharmacy workflows fit into a clinic's day. Research and usage data informed redesigns that cut time for some critical operations by **up to 80%** and reduced **usability-related churn indicators by up to 95%** within one month of launch.

I also led product expansion beyond solo practitioners to veterinarians serving other clinics and to clinics themselves, adapting packaging and workflows to each B2B segment. This combination of customer understanding, technical scoping, integrations, and end-to-end ownership is what draws me to **Forward Deployed Engineering**: working through an unfamiliar context until the solution fits the people using it.

### Backend systems that support the product

At **Reach.ai**, I engineer Python/FastAPI APIs and event-driven messaging flows for a multi-tenant platform processing **20M+ emails and SMS per month**, with **99.9% delivery reliability**. Queue processing improvements and Redis-backed idempotency supported **50x peak throughput capacity** while reducing duplicate-send risk. At Guiavet, I worked across Django domain modeling, PostgreSQL, asynchronous workers, and Vue.js, connecting architecture choices to daily workflows.

My data engineering foundation comes from **QDOIS**, where I integrated databases, APIs, and SFTP sources through Azure Data Factory and Databricks/PySpark. That experience still shapes how I think about data models, system boundaries, and the information a product needs to make useful decisions.

### Applied AI grounded in engineering

I am building a **voice and SMS appointment agent** at Reach.ai with Python, LangGraph, ReAct-style orchestration, OpenAI tool calling, and retrieval over business knowledge. The agent connects multi-turn conversations to availability, booking, rescheduling, and cancellation APIs. My work includes behavioral evaluations, response guardrails, Redis-backed idempotency, and observability through LangSmith and audit logs.

The agent is **in prelaunch testing**; internal voice tests reached **approximately 2 seconds median response latency**. This is a technical result from testing, with customer outcomes still to be measured after launch. I bring the same product judgment and backend discipline to AI work: understand the workflow, make integrations dependable, inspect failures, and improve against evidence.
`,
  avatar: "/profile.jpg",
  ogImage:
    "/og/simple?title=Leonardo%20Ferreira&description=Product%20Engineer%20%7C%20Backend%2C%20data%20%26%20applied%20AI",
  namePronunciationUrl: "",
  timeZone: "America/Sao_Paulo",
  keywords: [
    "Leonardo Ferreira",
    "Leonardo Vieira Ferreira",
    "Product Engineer",
    "Python",
    "FastAPI",
    "Django",
    "B2B SaaS",
    "AWS",
    "Applied AI",
    "LangGraph",
    "Data Engineering",
    "Forward Deployed Engineer",
    "Backend Engineering",
  ],
  dateCreated: "2026-04-16",
}
