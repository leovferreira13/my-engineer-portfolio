import { languageTags, type Locale } from "@/i18n/config"

import type { ExperiencePosition } from "../types/experiences"

type Period = ExperiencePosition["employmentPeriod"]

function monthIndex(value: string): number | undefined {
  const match = /^(0[1-9]|1[0-2])\.(\d{4})$/.exec(value)
  return match ? Number(match[2]) * 12 + Number(match[1]) - 1 : undefined
}

export function employmentMonths(
  periods: Period[],
  asOf = new Date()
): number | undefined {
  if (!periods.length) return undefined
  const currentMonth = asOf.getUTCFullYear() * 12 + asOf.getUTCMonth()
  const ranges: [number, number][] = []
  for (const period of periods) {
    const start = monthIndex(period.start)
    const end = period.end ? monthIndex(period.end) : currentMonth
    if (start === undefined || end === undefined || end < start)
      return undefined
    ranges.push([start, end])
  }
  ranges.sort((a, b) => a[0] - b[0])
  let [start, end] = ranges[0]
  let months = 0
  // Month-granularity dates include both endpoints. Merge promotions before
  // counting so a shared transition month never inflates company tenure.
  for (const [nextStart, nextEnd] of ranges.slice(1)) {
    if (nextStart <= end + 1) end = Math.max(end, nextEnd)
    else {
      months += end - start + 1
      ;[start, end] = [nextStart, nextEnd]
    }
  }
  return months + end - start + 1
}

export function formatEmploymentDuration(months: number, locale: Locale) {
  const years = Math.floor(months / 12)
  const remainder = months % 12
  const parts: string[] = []
  for (const [value, unit] of [
    [years, "year"],
    [remainder, "month"],
  ] as const) {
    if (value)
      parts.push(
        new Intl.NumberFormat(languageTags[locale], {
          style: "unit",
          unit,
          unitDisplay: "short",
        }).format(value)
      )
  }
  return new Intl.ListFormat(languageTags[locale], {
    style: "short",
    type: "unit",
  }).format(parts)
}
