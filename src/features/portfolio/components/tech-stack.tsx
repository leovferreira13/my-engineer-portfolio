import { localizedContent } from "@/i18n/content"
import { getI18n } from "@/i18n/request"

import { TECH_STACK_GROUPS } from "../data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export async function TechStack() {
  const { locale, t } = await getI18n()
  const content = localizedContent(locale)
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>{t.capabilities}</PanelTitle>
      </PanelHeader>
      <PanelContent className="grid gap-6 sm:grid-cols-2">
        {TECH_STACK_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-semibold">
              {content.skill(group.title)}
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
              {content.capabilityDescriptions[group.title]}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <li key={tech.key}>
                  <a
                    className="inline-block rounded-md border border-line px-2.5 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.skill(tech.title)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </PanelContent>
    </Panel>
  )
}
