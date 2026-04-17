import dynamic from "next/dynamic"

import { ChanhDaiMark } from "@/components/chanhdai-mark"
import { ChanhDaiWordmark } from "@/components/chanhdai-wordmark"

import { Panel, PanelHeader, PanelTitle } from "./panel"

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
)

export function Brand() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Brand</PanelTitle>
      </PanelHeader>

      <BrandContextMenu>
        <div className="grid grid-cols-[2rem_1fr]">
          <div className="flex h-28 items-center justify-center border-r border-dashed border-border bg-muted/20">
            <span className="rotate-270 text-sm text-muted-foreground select-none">
              Mark
            </span>
          </div>

          <div className="flex items-center justify-center border-b border-border pr-8">
            <ChanhDaiMark className="h-8 w-auto sm:h-12" />
          </div>

          <div className="flex h-28 items-center justify-center border-r border-dashed border-border bg-muted/20">
            <span className="rotate-270 text-sm text-muted-foreground select-none">
              Logotype
            </span>
          </div>

          <div className="flex items-center justify-center pr-8">
            <ChanhDaiWordmark className="h-6 w-auto sm:h-10" />
          </div>
        </div>
      </BrandContextMenu>
    </Panel>
  )
}
