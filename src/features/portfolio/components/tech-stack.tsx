import { localizedContent } from "@/i18n/content"
import { getI18n } from "@/i18n/request"

import { TECH_STACK_GROUPS } from "../data/tech-stack"
import { Panel, PanelHeader, PanelTitle } from "./panel"
import { TECH_STACK_ICONS } from "./tech-stack-icons"

export async function TechStack() {
  const { locale, t } = await getI18n()
  const content = localizedContent(locale)
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>{t.stack}</PanelTitle>
      </PanelHeader>
      <div>
        {TECH_STACK_GROUPS.map((group, index) => {
          const groupId = `stack-${group.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")}`
          return (
            <div
              key={group.title}
              className="grid items-start gap-y-2 border-b border-line py-4 last:border-b-0 sm:grid-cols-[12rem_1fr]"
            >
              <div id={groupId} className="px-4 text-sm">
                <span
                  className="mr-1.5 font-mono text-muted-foreground/80"
                  aria-hidden="true"
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {content.skill(group.title)}
              </div>
              <ul
                aria-labelledby={groupId}
                className="flex flex-wrap gap-1.5 px-4"
              >
                {group.items.map((item) => {
                  const Icon = TECH_STACK_ICONS[item.key]
                  return (
                    <li key={item.key} className="flex">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex h-6 items-center gap-1.5 rounded-full border border-line px-2 text-xs text-foreground"
                      >
                        {Icon ? <Icon /> : null}
                        {content.skill(item.title)}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
