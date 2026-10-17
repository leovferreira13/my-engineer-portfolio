import { TECH_STACK_GROUPS } from "../data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Capabilities & tools</PanelTitle>
      </PanelHeader>
      <PanelContent className="grid gap-6 sm:grid-cols-2">
        {TECH_STACK_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-semibold">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <li key={tech.key}>
                  <a
                    className="inline-block rounded-md border border-line px-2.5 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tech.title}
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
