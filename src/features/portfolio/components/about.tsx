import { Markdown } from "@/components/markdown"
import { Prose } from "@/components/ui/typography"
import { localizedContent } from "@/i18n/content"
import { getI18n } from "@/i18n/request"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export async function About() {
  const { locale, t } = await getI18n()
  const content = localizedContent(locale)
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>{t.about}</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <Markdown>{content.user.about}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  )
}
