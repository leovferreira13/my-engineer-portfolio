import { BriefcaseBusinessIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleChevronsIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import { Markdown } from "@/components/markdown"
import { Separator } from "@/components/ui/separator"
import { Tag } from "@/components/ui/tag"
import { ProseMono } from "@/components/ui/typography"
import { formatPeriod } from "@/i18n/config"
import { getI18n } from "@/i18n/request"
import { cn } from "@/lib/utils"

import {
  employmentMonths,
  formatEmploymentDuration,
} from "../../lib/employment-duration"
import type { ExperiencePosition } from "../../types/experiences"

export async function ExperiencePositionItem({
  position,
  anchorId,
  showEmploymentType = true,
}: {
  position: ExperiencePosition
  /** Optional DOM id for deep links (e.g. education-ufmg). */
  anchorId?: string
  showEmploymentType?: boolean
}) {
  const { locale, t } = await getI18n()
  const { start, end } = position.employmentPeriod
  const isOngoing = !end
  const months = employmentMonths([position.employmentPeriod])

  return (
    <Collapsible
      id={anchorId}
      className={cn(
        "relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background",
        anchorId && "scroll-mt-14"
      )}
      defaultOpen={position.isExpanded}
      disabled={!position.description?.trim()}
    >
      <CollapsibleTrigger
        className={cn(
          "group block w-full text-left",
          "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent-muted",
          "outline-none focus-visible:before:ring-2 focus-visible:before:ring-ring/50 focus-visible:before:ring-inset",
          "data-disabled:before:content-none"
        )}
      >
        <div className="relative z-1 mb-1 flex items-center gap-3">
          <div
            className={cn(
              "flex size-6 shrink-0 items-center justify-center rounded-lg",
              "bg-muted text-muted-foreground",
              "border border-muted-foreground/15 ring-1 ring-line ring-offset-1 ring-offset-background",
              "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            )}
          >
            {position.icon ?? <BriefcaseBusinessIcon />}
          </div>

          <h4 className="flex-1 font-medium text-balance">{position.title}</h4>

          <div className="shrink-0 text-muted-foreground group-data-disabled:hidden [&_svg]:size-4">
            <CollapsibleChevronsIcon duration={0.15} />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pl-9 text-sm text-muted-foreground">
          {showEmploymentType && position.employmentType && (
            <>
              <dl>
                <dt className="sr-only">{t.employmentType}</dt>
                <dd>{position.employmentType}</dd>
              </dl>

              <Separator
                className="data-vertical:h-4 data-vertical:self-center"
                orientation="vertical"
              />
            </>
          )}

          <dl>
            <dt className="sr-only">{t.employmentPeriod}</dt>
            <dd className="flex items-center gap-0.5">
              <span>{formatPeriod(start, locale)}</span>
              <span className="font-mono">—</span>
              {isOngoing ? (
                <span>{t.present}</span>
              ) : (
                <span>{formatPeriod(end!, locale)}</span>
              )}
            </dd>
          </dl>
          {months !== undefined && (
            <>
              <span aria-hidden="true">·</span>
              <span>{formatEmploymentDuration(months, locale)}</span>
            </>
          )}
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden">
        {position.description && (
          <ProseMono className="pt-2 pl-9">
            <Markdown>{position.description}</Markdown>
          </ProseMono>
        )}
      </CollapsibleContent>

      {Array.isArray(position.skills) && position.skills.length > 0 && (
        <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
          {position.skills.map((skill, index) => (
            <li key={index} className="flex">
              <Tag>{skill}</Tag>
            </li>
          ))}
        </ul>
      )}
    </Collapsible>
  )
}
