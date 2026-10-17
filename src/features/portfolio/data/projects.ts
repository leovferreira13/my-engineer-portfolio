import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "sports-data-visualizer",
    title: "Football, Visualized",
    period: { start: "10.2026" },
    link: "https://sports-data-visualizer-production.up.railway.app/en",
    repository: "https://github.com/leovferreira13/sports-data-visualizer",
    image: "/projects/football-visualized.png",
    imageAlt:
      "Football, Visualized: interactive pitch, expected goals estimate, and model features",
    summary:
      "An interactive football analytics app that makes expected goals tangible: move a shot, inspect its features, and explore the model behind the estimate.",
    description:
      "The interactive pitch lets visitors change shot conditions and inspect eight model features alongside an expected-goals estimate. I connected a reproducible StatsBomb Open Data pipeline to XGBoost training and evaluation, then brought inference into the browser with a Next.js/React interface.\n\nThe playground is available in five languages and includes methodology and evaluation results. It brings my data, applied ML, backend-to-interface integration, and product work into one public project: visitors can explore what the model does, while the repository exposes how the result was built.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "XGBoost",
      "StatsBomb Open Data",
    ],
    isExpanded: true,
  },
]
