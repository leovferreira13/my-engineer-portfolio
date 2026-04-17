import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/base/ui/button"
import { SponsorItem } from "@/features/sponsor/components/sponsor-item"
import { SponsorItemPlus } from "@/features/sponsor/components/sponsor-item-plus"
import { SPONSORS } from "@/features/sponsor/data"
import type { SponsorTier } from "@/features/sponsor/types"

import { Panel, PanelDescription, PanelHeader, PanelTitle } from "./panel"

const FEATURED_TIERS = new Set<SponsorTier>([
  "osp",
  "platinum",
  "gold",
  "silver",
])

const FEATURED_SPONSORS = SPONSORS.filter((sponsor) =>
  FEATURED_TIERS.has(sponsor.tier)
)

export function Sponsors() {
  if (FEATURED_SPONSORS.length === 0) {
    return null
  }

  return (
    <Panel id="sponsors">
      <PanelHeader>
        <PanelTitle>Sponsors</PanelTitle>
        <PanelDescription>
          Grateful for the support that helps me grow and maintain high-quality
          projects.
        </PanelDescription>
      </PanelHeader>

      <div className="grid grid-cols-1 gap-4 px-4 pb-4 sm:grid-cols-2">
        {FEATURED_SPONSORS.map((item) => (
          <SponsorItem key={item.name} item={item} />
        ))}

        <SponsorItemPlus />
      </div>

      <div className="flex justify-center border-t border-border px-4 py-2">
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          size="sm"
          nativeButton={false}
          render={<Link href="/sponsors" />}
        >
          All Sponsors
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}
