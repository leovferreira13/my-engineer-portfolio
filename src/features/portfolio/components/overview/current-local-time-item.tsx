"use client"

import { tzOffset } from "@date-fns/tz"
import { ClockIcon } from "lucide-react"
import { useEffect, useState } from "react"

import { useI18n } from "@/i18n/provider"

import { IntroItem, IntroItemContent, IntroItemIcon } from "./intro-item"

export function CurrentLocalTimeItem({ timeZone }: { timeZone: string }) {
  const { locale, t } = useI18n()
  const [time, setTime] = useState<{
    clock: string
    difference: number
  } | null>(null)
  useEffect(() => {
    function update() {
      const now = new Date()
      setTime({
        clock: new Intl.DateTimeFormat(locale === "br" ? "pt-BR" : locale, {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        }).format(now),
        difference: tzOffset(timeZone, now) + now.getTimezoneOffset(),
      })
    }
    update()
    const interval = setInterval(update, 60_000)
    return () => clearInterval(interval)
  }, [timeZone, locale])
  const minutes = Math.abs(time?.difference ?? 0)
  const duration = [
    Math.floor(minutes / 60) ? `${Math.floor(minutes / 60)}h` : "",
    minutes % 60 ? `${minutes % 60}m` : "",
  ]
    .filter(Boolean)
    .join(" ")
  const difference =
    time?.difference === 0
      ? t.sameTime
      : `${duration} ${(time?.difference ?? 0) > 0 ? t.timeAhead : t.timeBehind}`
  return (
    <IntroItem>
      <IntroItemIcon>
        <ClockIcon aria-hidden="true" />
      </IntroItemIcon>
      <IntroItemContent title={timeZone}>
        <span className="sr-only">{t.localTime}: </span>
        {time?.clock ?? "—"}
        {time && (
          <span className="text-muted-foreground">
            {" // "}
            {difference}
          </span>
        )}
      </IntroItemContent>
    </IntroItem>
  )
}
