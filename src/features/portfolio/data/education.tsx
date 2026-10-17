import { GraduationCapIcon } from "lucide-react"

import type { ExperiencePosition } from "../types/experiences"

export const EDUCATION_ENTRIES: ExperiencePosition[] = [
  {
    id: "ufmg",
    isExpanded: true,
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
    id: "cefet-mg",
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
]
