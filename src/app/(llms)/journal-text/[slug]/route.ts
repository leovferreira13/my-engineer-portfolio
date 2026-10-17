import { notFound } from "next/navigation"

import { getLLMText } from "@/features/doc/lib/get-llm-text"
import { getJournalEntry } from "@/features/journal/data/entries"

export const dynamic = "force-dynamic"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const entry = getJournalEntry((await params).slug)
  if (!entry) notFound()
  return new Response(await getLLMText(entry), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
