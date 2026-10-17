import React from "react"

import { localizedContent } from "@/i18n/content"
import { getI18n } from "@/i18n/request"

import { Panel, PanelHeader, PanelTitle } from "../panel"
import { ExperienceItem } from "./experience-item"

export async function Experiences() {
  const { locale, t } = await getI18n()
  const content = localizedContent(locale)
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>{t.experience}</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {content.experiences.map((experience) => (
          <ExperienceItem
            key={experience.id}
            experience={experience}
            anchorPrefixId="experience"
          />
        ))}
      </div>
    </Panel>
  )
}
