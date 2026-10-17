import Image from "next/image"

import { UTM_PARAMS } from "@/config/site"
import { getI18n } from "@/i18n/request"
import { addQueryParams } from "@/utils/url"

import {
  employmentMonths,
  formatEmploymentDuration,
} from "../../lib/employment-duration"
import type { Experience } from "../../types/experiences"
import { ExperiencePositionItem } from "./experience-position-item"

export async function ExperienceItem({
  experience,
  anchorPrefixId = "experience",
}: {
  experience: Experience
  anchorPrefixId?: string
}) {
  const { locale, t } = await getI18n()
  const firstType = experience.positions[0]?.employmentType
  const sharedEmploymentType = experience.positions.every(
    (position) => position.employmentType === firstType
  )
    ? firstType
    : undefined
  const months = employmentMonths(
    experience.positions.map((position) => position.employmentPeriod)
  )
  return (
    <div
      id={`${anchorPrefixId}-${experience.id}`}
      className="scroll-mt-14 space-y-4 border-b border-border py-4 last:border-b-0"
    >
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <div className="flex size-6 shrink-0 items-center justify-center select-none">
            {experience.companyLogo ? (
              <Image
                src={experience.companyLogo}
                alt={`${experience.companyName} logo`}
                width={24}
                height={24}
                quality={100}
                className="rounded-full"
                unoptimized
                aria-hidden
              />
            ) : (
              <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            )}
          </div>

          <h3 className="text-lg leading-snug font-semibold">
            {experience.companyWebsite ? (
              <a
                className="underline-offset-4 hover:underline"
                href={addQueryParams(experience.companyWebsite, UTM_PARAMS)}
                target="_blank"
                rel="noopener"
              >
                {experience.companyName}
              </a>
            ) : (
              experience.companyName
            )}
          </h3>

          {experience.isCurrentEmployer && (
            <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {t.present}
            </span>
          )}
        </div>

        {months !== undefined && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pl-9 text-sm text-muted-foreground">
            {sharedEmploymentType && (
              <>
                <dl>
                  <dt className="sr-only">{t.employmentType}</dt>
                  <dd>{sharedEmploymentType}</dd>
                </dl>
                <span aria-hidden="true">·</span>
              </>
            )}
            <dl>
              <dt className="sr-only">{t.totalTenure}</dt>
              <dd>{formatEmploymentDuration(months, locale)}</dd>
            </dl>
          </div>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem
            key={position.id}
            position={position}
            showEmploymentType={!sharedEmploymentType || months === undefined}
          />
        ))}
      </div>
    </div>
  )
}
