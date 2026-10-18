import { shouldUseHistoryBack, type TimelineNavigation } from "./timeline-href"

// A one-use handoff within this document; reloads and new tabs use the link.
let pendingNavigation: TimelineNavigation | null = null

export function recordTimelineNavigation(value: TimelineNavigation | null) {
  pendingNavigation = value
}

export function consumeTimelineNavigation(href: string, entryHref: string) {
  const navigation = pendingNavigation
  pendingNavigation = null
  return shouldUseHistoryBack(navigation, href, entryHref)
}

export function isPlainPrimaryClick(event: {
  button: number
  metaKey: boolean
  ctrlKey: boolean
  shiftKey: boolean
  altKey: boolean
  defaultPrevented: boolean
}) {
  return (
    !event.defaultPrevented &&
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  )
}
