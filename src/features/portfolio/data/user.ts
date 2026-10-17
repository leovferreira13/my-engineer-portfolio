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
I am a **Product Engineer** with **5+ years** across backend and data engineering, product management, and technical leadership. I work from the user problem through discovery, technical decisions, implementation, launch, and iteration.

At **Guiavet**, I grew from Software Engineer to Product Manager and Head of Engineering & Product Lead. Working directly with veterinarians taught me to connect what happens in a product to what people need to get done. Research and usage data informed workflow redesigns that cut time for some critical operations by **up to 80%** and reduced **usability-related churn indicators by up to 95%** within one month of launch.

At **Reach.ai**, I build Python APIs and event-driven messaging systems handling **20M+ emails and SMS per month**. I am also building a voice and SMS appointment agent, connecting conversations to scheduling APIs with retrieval, tool orchestration, behavioral evaluations, and observability.

**Adaptability is the thread through my work.** I enjoy learning an unfamiliar domain, understanding its constraints, and deciding what is useful to build. I bring strong backend foundations and product judgment to that process, including when the right tool is applied AI.
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
  ],
  dateCreated: "2026-04-16",
}
