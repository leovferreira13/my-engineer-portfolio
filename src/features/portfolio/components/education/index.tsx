import React from "react"

import { EDUCATION_ENTRIES } from "../../data/education"
import { ExperiencePositionItem } from "../experiences/experience-position-item"
import { Panel, PanelHeader, PanelTitle } from "../panel"

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        <div className="relative space-y-4 py-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
          {EDUCATION_ENTRIES.map((position) => (
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
