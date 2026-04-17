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

function TechStackIconRow({ tech }: { tech: TechStack }) {
  const iconBase = tech.useLocalAsset
    ? "/tech-stack-icons"
    : REMOTE_TECH_ICON_BASE

  return (
    <li className="flex shrink-0">
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
  const orderedTech = TECH_STACK_GROUPS.flatMap((g) => g.items)

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul
          className="flex flex-nowrap items-center gap-4 overflow-x-auto overscroll-x-contain select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Technologies in stack order"
        >
          {orderedTech.map((tech) => (
            <TechStackIconRow key={tech.key} tech={tech} />
          ))}
        </ul>
      </PanelContent>
    </Panel>
  )
}
