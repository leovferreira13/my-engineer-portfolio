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
      "Built end to end with a reproducible StatsBomb Open Data pipeline, XGBoost training and evaluation, and browser inference. The five-language playground exposes eight model features alongside the pitch, with methodology and results available in the app. A portfolio project connecting data engineering, model validation, and an interface people can explore.",
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
