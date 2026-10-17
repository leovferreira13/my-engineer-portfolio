import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
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
        <PanelTitle>{t.journal}</PanelTitle>
      </PanelHeader>
      <PanelContent>
        {entries.length ? (
          <EntryList entries={entries} />
        ) : (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t.emptyPreview}
          </p>
        )}
        <Button variant="outline" size="sm" asChild className="mt-4">
          <Link href={localizePath("/journal", locale)}>
            {t.visitJournal}
            <ArrowRightIcon aria-hidden="true" />
          </Link>
        </Button>
      </PanelContent>
    </Panel>
  )
}
