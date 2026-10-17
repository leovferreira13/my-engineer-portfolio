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

const metadataSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1),
    category: z.literal("journal"),
    status: z.literal("published"),
    createdAt: isoDate,
    updatedAt: isoDate,
    projectId: z
      .string()
      .refine(
        (id) => PROJECTS.some((project) => project.id === id),
        "Unknown projectId: add the project to PROJECTS first"
      ),
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
  .refine(
    (metadata) => metadata.updatedAt >= metadata.createdAt,
    "updatedAt must be on or after createdAt"
  )

export type JournalEntry = Doc & { metadata: z.infer<typeof metadataSchema> }

export function getJournalEntries(): JournalEntry[] {
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
