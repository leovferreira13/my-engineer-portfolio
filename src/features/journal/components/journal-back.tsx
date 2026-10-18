"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

import {
  consumeTimelineNavigation,
  isPlainPrimaryClick,
} from "../lib/timeline-navigation"

export function JournalBack({
  href,
  entryHref,
  label,
}: {
  href: string
  entryHref: string
  label: string
}) {
  const router = useRouter()
  const navigation = useRef<{ entryHref: string; canGoBack: boolean } | null>(
    null
  )
  useEffect(() => {
    // Consume on arrival, even if the reader leaves without clicking Back.
    // Keep the claimed result through React's development effect replay.
    if (navigation.current?.entryHref === entryHref) return
    navigation.current = {
      entryHref,
      canGoBack: consumeTimelineNavigation(href, entryHref),
    }
  }, [href, entryHref])
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground underline underline-offset-4"
      onClick={(event) => {
        if (!isPlainPrimaryClick(event)) return
        if (!navigation.current?.canGoBack) return
        navigation.current.canGoBack = false
        event.preventDefault()
        router.back()
      }}
    >
      ← {label}
    </Link>
  )
}
