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
I am a **Product Engineer** with **5+ years** across backend and data engineering, product management, and technical leadership. I connect user and business needs to practical software, taking problems from discovery through technical decisions, implementation, launch, and iteration.

**Adaptability is the thread through my work.** I enjoy learning an unfamiliar domain, listening to the people who know it, and working through ambiguity to understand what is useful to build. I am comfortable moving between customer conversations, product trade-offs, and the technical details that make a solution work in practice.

I bring strong **backend foundations** and product judgment to that process, with experience in APIs, data pipelines, integrations, and event-driven systems. More recently, I have been applying that background to **AI agents**, focusing on how they connect to real workflows, behave reliably, and can be evaluated and improved. I work best close to the problem, with ownership of both the engineering and the experience it creates.
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
