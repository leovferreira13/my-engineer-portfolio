export function readProjectFilter(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value
  if (raw === undefined || raw.trim() === "") return undefined
  return raw
}

export function journalListPath(filter: string | undefined) {
  if (!filter) return "/journal"
  return `/journal?project=${encodeURIComponent(filter)}`
}

export function entryPath(slug: string, filter: string | undefined) {
  const path = `/journal/${encodeURIComponent(slug)}`
  if (!filter) return path
  return `${path}?project=${encodeURIComponent(filter)}`
}

export function shouldUseHistoryBack(stored: string | null, href: string) {
  return stored !== null && stored === href
}
