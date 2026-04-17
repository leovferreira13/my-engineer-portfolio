import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Leonardo",
  lastName: "Vieira Ferreira",
  displayName: "Leonardo Ferreira",
  username: "leovferreira13",
  gender: "male",
  pronouns: "he/him",
  bio: "Product Engineer shipping end-to-end: discovery, trade-offs, backend and data systems, and AI-enabled workflows.",
  flipSentences: [
    "Product Engineer",
    "Backend, data & AI",
    "From problem framing to production",
  ],
  address: "Rio de Janeiro, Brazil",
  email: "bGVvdmllaXJhZi41OTlAZ21haWwuY29t", // base64 encoded
  website: "https://www.leoferreira.dev",
  jobTitle: "Product Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "REACH.ai",
      website: "https://www.reach.ai",
      experienceId: "reach-ai",
    },
    {
      title: "Head Software Engineer (prior)",
      company: "Guiavet",
      website: "https://pro.guia.vet",
      experienceId: "guiavet",
    },
  ],
  about: `
- I work as a **Product Engineer**: clarifying outcomes with stakeholders, choosing sensible trade-offs, and owning delivery through **Python/Django**, **PostgreSQL**, **AWS**, and **Vue.js** when the UI needs to move with the product.
- Recent focus areas: **regulated workflows** (health tech), **data platforms and ETL**, and **AI-assisted automation** where reliability and operator trust matter as much as model quality.
- I care about **traceable decisions** (why this shape, why now, what we deferred) and about writing that narrative alongside the code — see the **Blog** for engineering notes and longer-form rationale.
`,
  avatar: "https://avatars.githubusercontent.com/u/65781172?v=4",
  ogImage: "https://avatars.githubusercontent.com/u/65781172?v=4",
  namePronunciationUrl: "",
  timeZone: "America/Sao_Paulo",
  keywords: [
    "Leonardo Ferreira",
    "Leonardo Vieira Ferreira",
    "Product Engineer",
    "REACH.ai",
    "Guiavet",
    "QDOIS",
    "Python",
    "Django",
    "AWS",
    "data engineering",
    "product engineering",
    "SaaS",
  ],
  dateCreated: "2026-04-16",
}
