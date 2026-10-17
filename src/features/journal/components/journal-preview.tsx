import Link from "next/link"

import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { localizePath } from "@/i18n/config"
import { getI18n } from "@/i18n/request"

import { getJournalEntries } from "../data/entries"
import { EntryList } from "./entry-list"
export async function JournalPreview() {
  const { locale, t } = await getI18n()
  const entries = getJournalEntries().slice(0, 3)
  return (
    <Panel id="journal">
      <PanelHeader>
        <PanelTitle>{t.decisions}</PanelTitle>
      </PanelHeader>
      <PanelContent>
        {entries.length ? (
          <EntryList entries={entries} />
        ) : (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t.emptyPreview}
          </p>
        )}
        <Link
          href={localizePath("/decisions", locale)}
          className="mt-4 inline-block text-sm underline underline-offset-4"
        >
          {t.visitDecisions}
        </Link>
      </PanelContent>
    </Panel>
  )
}
