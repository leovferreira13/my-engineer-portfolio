import { compareDesc } from "date-fns"

import { CollapsibleList } from "@/components/collapsible-list"
import { getI18n } from "@/i18n/request"

import { AWARDS } from "../../data/awards"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { AwardItem } from "./award-item"

const SORTED_AWARDS = [...AWARDS].sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date))
})

export async function Awards() {
  const { dictionary, t } = await getI18n()
  return (
    <Panel id="awards">
      <PanelHeader>
        <PanelTitle>
          {t.publications}
          <PanelTitleSup>({AWARDS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={SORTED_AWARDS}
        max={3}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <AwardItem
            award={{
              ...item,
              prize: t.published,
              grade: t.research,
              description: dictionary.publication || item.description,
            }}
          />
        )}
      />
    </Panel>
  )
}
