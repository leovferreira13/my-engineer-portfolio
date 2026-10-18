"use client"

import Link from "next/link"
import type { ReactNode } from "react"

import { recordTimelineNavigation } from "../lib/timeline-navigation"

export function JournalEntryLink({
  href,
  timelineHref,
  children,
}: {
  href: string
  timelineHref?: string
  children: ReactNode
}) {
  return (
    <Link
      className="hover:underline"
      href={href}
      onNavigate={() => {
        recordTimelineNavigation(
          timelineHref ? { timelineHref, entryHref: href } : null
        )
      }}
    >
      {children}
    </Link>
  )
}
