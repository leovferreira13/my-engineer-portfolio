export type TechStackSkillGroup =
  | "Product & delivery"
  | "Backend & cloud"
  | "Data engineering"
  | "Applied AI"
  | "Frontend"
export type TechStack = {
  key: string
  title: string
  href: string
  skillGroup: TechStackSkillGroup
  categories: readonly string[]
}
