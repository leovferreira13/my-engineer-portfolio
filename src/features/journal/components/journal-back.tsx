"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { shouldUseHistoryBack } from "../lib/timeline-href"
import { readStoredTimelineHref } from "./journal-timeline-marker"

export function JournalBack({ href, label }: { href: string; label: string }) {
  const router = useRouter()
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground underline underline-offset-4"
      onClick={(event) => {
        if (!shouldUseHistoryBack(readStoredTimelineHref(), href)) return
        event.preventDefault()
        router.back()
      }}
    >
      ← {label}
    </Link>
  )
}
