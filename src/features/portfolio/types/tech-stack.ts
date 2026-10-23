export type TechStackSkillGroup =
  | "Language"
  | "Backend & cloud"
  | "Applied AI"
  | "Data engineering"
  | "Frontend"
  | "Product & delivery"
export type TechStack = {
  key: string
  title: string
  href: string
  skillGroup: TechStackSkillGroup
  categories: readonly string[]
}
