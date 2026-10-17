import React from "react"

import { localizedContent } from "@/i18n/content"
import { getI18n } from "@/i18n/request"

import { ExperiencePositionItem } from "../experiences/experience-position-item"
import { Panel, PanelHeader, PanelTitle } from "../panel"

export async function Education() {
  const { locale, t } = await getI18n()
  const content = localizedContent(locale)
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>{t.education}</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        <div className="relative space-y-4 py-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
          {content.education.map((position) => (
            <ExperiencePositionItem
              key={position.id}
              position={position}
              anchorId={`education-${position.id}`}
            />
          ))}
        </div>
      </div>
    </Panel>
  )
}
