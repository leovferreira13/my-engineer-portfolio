"use client"

import { useEffect } from "react"

const STORAGE_KEY = "journal-timeline"

export function JournalTimelineMarker({ href }: { href: string }) {
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, href)
  }, [href])
  return null
}

export function readStoredTimelineHref() {
  return sessionStorage.getItem(STORAGE_KEY)
}
