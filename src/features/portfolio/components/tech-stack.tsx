import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"

import { TECH_STACK_GROUPS } from "../data/tech-stack"
import type { TechStack } from "../types/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

const REMOTE_TECH_ICON_BASE =
  "https://assets.chanhdai.com/images/tech-stack-icons"

function groupHeadingId(title: string) {
  return `stack-group-${title.replace(/\s+/g, "-").toLowerCase()}`
}

function TechStackIconRow({ tech }: { tech: TechStack }) {
  const iconBase = tech.useLocalAsset
    ? "/tech-stack-icons"
    : REMOTE_TECH_ICON_BASE

  return (
    <li key={tech.key} className="flex">
      <Tooltip>
        <TooltipTrigger
          render={
            <a
              href={tech.href}
              target="_blank"
              rel="noopener"
              aria-label={tech.title}
            >
              {tech.theme ? (
                <>
                  <Image
                    src={`${iconBase}/${tech.key}-light.svg`}
                    alt={`${tech.title} light icon`}
                    width={32}
                    height={32}
                    className="hidden [html.light_&]:block"
                    unoptimized
                  />
                  <Image
                    src={`${iconBase}/${tech.key}-dark.svg`}
                    alt={`${tech.title} dark icon`}
                    width={32}
                    height={32}
                    className="hidden [html.dark_&]:block"
                    unoptimized
                  />
                </>
              ) : (
                <Image
                  src={`${iconBase}/${tech.key}.svg`}
                  alt={`${tech.title} icon`}
                  width={32}
                  height={32}
                  unoptimized
                />
              )}
            </a>
          }
        />
        <TooltipContent>
          <p>{tech.title}</p>
        </TooltipContent>
      </Tooltip>
    </li>
  )
}

export function TechStack() {
  const groups = TECH_STACK_GROUPS.filter((g) => g.items.length > 0)

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent className="flex flex-col gap-8">
        {groups.map((group) => (
          <section key={group.title} aria-labelledby={groupHeadingId(group.title)}>
            <h3
              id={groupHeadingId(group.title)}
              className="text-muted-foreground mb-3 text-xs font-medium tracking-wide uppercase"
            >
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-4 select-none">
              {group.items.map((tech) => (
                <TechStackIconRow key={tech.key} tech={tech} />
              ))}
            </ul>
          </section>
        ))}
      </PanelContent>
    </Panel>
  )
}
