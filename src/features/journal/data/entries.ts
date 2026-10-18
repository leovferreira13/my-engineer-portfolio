import { z } from "zod"

import { getDocsByCategory } from "@/features/doc/data/documents"
import type { Doc } from "@/features/doc/types/document"
import { PROJECTS } from "@/features/portfolio/data/projects"

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((value) => {
    const date = new Date(value)
    return (
      !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
    )
  }, "Use a real date in YYYY-MM-DD format")

export function journalMetadataSchema(
  projects: readonly { id: string }[] = PROJECTS
) {
  return z
    .object({
      title: z.string().min(1),
      description: z.string().min(1),
      category: z.literal("journal"),
      status: z.literal("published"),
      createdAt: isoDate,
      updatedAt: isoDate,
      projectId: z.unknown().optional(),
      projectIds: z.unknown().optional(),
      entryType: z.enum(["decision", "release", "experiment", "retrospective"]),
      tags: z.array(z.string()).default([]),
      references: z
        .array(
          z.object({
            label: z.string().min(1),
            url: z
              .string()
              .url()
              .refine(
                (url) => url.startsWith("https://"),
                "Reference links must use HTTPS"
              ),
          })
        )
        .default([]),
    })
    .superRefine((metadata, ctx) => {
      if (metadata.projectId !== undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "The projectId field is no longer accepted; use projectIds, a list of project ids",
          path: ["projectId"],
        })
      }
      const value = metadata.projectIds
      if (!Array.isArray(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            value === undefined
              ? "projectIds is required. Use [] when the entry has no project."
              : "projectIds must be a list of project ids",
          path: ["projectIds"],
        })
        return
      }
      if (value.length === 0) return
      const seen = new Set<string>()
      value.forEach((item, index) => {
        if (typeof item !== "string" || item.trim() === "") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Project id must be a non-empty string",
            path: ["projectIds", index],
          })
          return
        }
        const id = item.trim()
        if (seen.has(id)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Duplicate project id "${id}"`,
            path: ["projectIds", index],
          })
        }
        seen.add(id)
        if (!projects.some((project) => project.id === id)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Unknown project id "${id}": add the project to PROJECTS first`,
            path: ["projectIds", index],
          })
        }
      })
    })
    .refine(
      (metadata) => metadata.updatedAt >= metadata.createdAt,
      "updatedAt must be on or after createdAt"
    )
    .transform((metadata) => ({
      title: metadata.title,
      description: metadata.description,
      category: metadata.category,
      status: metadata.status,
      createdAt: metadata.createdAt,
      updatedAt: metadata.updatedAt,
      projectIds: (metadata.projectIds as string[]).map((id) => id.trim()),
      entryType: metadata.entryType,
      tags: metadata.tags,
      references: metadata.references,
    }))
}

export type JournalMetadata = z.infer<ReturnType<typeof journalMetadataSchema>>
export type JournalEntry = Doc & { metadata: JournalMetadata }

export function entryListsProject(
  projectIds: readonly string[],
  projectId: string
) {
  return projectIds.includes(projectId)
}

export function getJournalEntries(
  projects: readonly { id: string }[] = PROJECTS
): JournalEntry[] {
  const metadataSchema = journalMetadataSchema(projects)
  return getDocsByCategory("journal")
    .map((doc) => {
      const result = metadataSchema.safeParse(doc.metadata)
      if (!result.success)
        throw new Error(
          `Invalid journal entry ${doc.slug}: ${result.error.message}`
        )
      return { ...doc, metadata: result.data }
    })
    .sort(
      (a, b) =>
        b.metadata.createdAt.localeCompare(a.metadata.createdAt) ||
        a.slug.localeCompare(b.slug)
    )
}

export function getJournalEntry(slug: string) {
  return getJournalEntries().find((entry) => entry.slug === slug)
}
