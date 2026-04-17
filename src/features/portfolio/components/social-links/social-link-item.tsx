import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"

import { UTM_PARAMS } from "@/config/site"
import type { SocialLink } from "@/features/portfolio/types/social-links"
import { cn } from "@/lib/utils"
import { addQueryParams } from "@/utils/url"

export function SocialLinkItem({ icon, title, subtitle, href }: SocialLink) {
  return (
    <a
      className={cn(
        "flex min-h-14 min-w-0 cursor-pointer items-center gap-4 rounded-lg border border-border/80 bg-muted/20 p-4 pr-2 transition-[background-color,box-shadow] ease-out hover:bg-accent-muted hover:shadow-xs"
      )}
      href={addQueryParams(href, UTM_PARAMS)}
      target="_blank"
      rel="noopener"
    >
      <div className="relative size-8 shrink-0">
        <Image
          className="rounded-lg select-none corner-squircle supports-corner-shape:rounded-[50%]"
          src={icon}
          alt={title}
          width={32}
          height={32}
          quality={100}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10 corner-squircle ring-inset dark:ring-white/15 supports-corner-shape:rounded-[50%]" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
        <h3 className="font-medium">{title}</h3>
        {subtitle ? (
          <p className="truncate text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>

      <ArrowUpRightIcon className="size-4 shrink-0 self-center text-muted-foreground" />
    </a>
  )
}
