import { BriefcaseBusinessIcon } from "lucide-react"

import { Markdown } from "@/components/markdown"
import { Tag } from "@/components/ui/tag"
import { ProseMono } from "@/components/ui/typography"
import { formatPeriod } from "@/i18n/config"
import { getI18n } from "@/i18n/request"

import type { ExperiencePosition } from "../../types/experiences"

export async function ConsolidatedExperience({
  positions,
  anchorPrefix,
}: {
  positions: ExperiencePosition[]
  anchorPrefix: string
}) {
  const { locale, t } = await getI18n()
  const achievements = [...positions].reverse()
  const skills = [
    ...new Set(achievements.flatMap((position) => position.skills ?? [])),
  ]
  return (
    <div className="space-y-4 pl-9">
      <ol className="space-y-2 border-l border-border pl-4">
        {positions.map((position) => (
          <li
            key={position.id}
            data-position-id={position.id}
            className="text-sm"
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background [&_svg]:size-4"
              >
                {position.icon ?? <BriefcaseBusinessIcon />}
              </span>
              <p className="font-medium">{position.title}</p>
            </div>
            <p className="pl-9 text-xs text-muted-foreground">
              {formatPeriod(position.employmentPeriod.start, locale)} —{" "}
              {position.employmentPeriod.end
                ? formatPeriod(position.employmentPeriod.end, locale)
                : t.present}
            </p>
          </li>
        ))}
      </ol>
      <div className="space-y-2">
        {achievements.map((position) => (
          <div
            key={position.id}
            id={`${anchorPrefix}-${position.id}`}
            tabIndex={-1}
            className="scroll-mt-22 rounded-md"
            aria-label={position.title}
          >
            <ProseMono className="[&_li]:my-0 [&_li+li]:mt-2 [&_li>p]:my-0 [&_ul]:my-0">
              <Markdown>{position.description ?? ""}</Markdown>
            </ProseMono>
          </div>
        ))}
      </div>
      <ul className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <li key={skill} className="flex">
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}
