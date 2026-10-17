import Link from "next/link"

import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"

import { getJournalEntries } from "../data/entries"
import { EntryList } from "./entry-list"

export function JournalPreview() {
  const entries = getJournalEntries().slice(0, 3)
  return (
    <Panel id="journal">
      <PanelHeader>
        <PanelTitle>Engineering Journal</PanelTitle>
      </PanelHeader>
      <PanelContent>
        {entries.length ? (
          <EntryList entries={entries} />
        ) : (
          <p className="text-sm leading-relaxed text-muted-foreground">
            No published entries yet. This is where I will share project
            decisions, release notes, experiments, and the evidence behind them.
          </p>
        )}
        <Link
          href="/journal"
          className="mt-4 inline-block text-sm underline underline-offset-4"
        >
          Visit the journal
        </Link>
      </PanelContent>
    </Panel>
  )
}
