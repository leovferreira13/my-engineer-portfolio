import { notFound, permanentRedirect } from "next/navigation"

import { getJournalEntry } from "@/features/journal/data/entries"
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!getJournalEntry(slug)) notFound()
  permanentRedirect(`/journal/${slug}`)
}
