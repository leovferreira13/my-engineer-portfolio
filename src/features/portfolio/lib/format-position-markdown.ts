import type { ExperiencePosition } from "../types/experiences"

/**
 * Plain-text markdown snippet for a single role or degree (used by LLM routes).
 */
export function formatPositionAsMarkdown(
  position: ExperiencePosition,
  contextLabel: string,
  options?: { headingPrefix?: "##" | "###" }
): string {
  const headingPrefix = options?.headingPrefix ?? "##"
  const skills =
    position.skills?.map((skill) => skill).join(", ") || "N/A"
  const durationEnd = position.employmentPeriod.end || "Present"
  const description = position.description?.trim() ?? ""
  return `${headingPrefix} ${position.title} | ${contextLabel}\n\nDuration: ${position.employmentPeriod.start} - ${durationEnd}\n\nSkills: ${skills}\n\n${description}`
}
