import type { User } from "@/features/portfolio/types/user"
import { SITE_URL } from "@/lib/site-url"

export const USER: User = {
  firstName: "Leonardo",
  lastName: "Vieira Ferreira",
  displayName: "Leonardo Ferreira",
  username: "leovferreira13",
  gender: "male",
  pronouns: "he/him",
  bio: "Product Engineer specializing in Python backend systems for B2B SaaS and applied AI, with 5+ years across engineering, product, and technical leadership.",
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
I specialize in **Python backend engineering** for B2B SaaS: APIs, integrations, data models, and asynchronous workflows built with Django, FastAPI, PostgreSQL, and AWS.

My current direction is **hands-on engineering as an individual contributor**. My background in product management and leading five engineers helps me turn user research into technical scope, weigh delivery trade-offs, and connect implementation decisions to the workflows people rely on.

I am also building **applied AI systems**, including multi-turn agents with tool calling, scheduling integrations, behavioral evaluations, and observability. I bring the same focus to this work: clear system behavior, explicit failure handling, and evidence that a solution works.
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
