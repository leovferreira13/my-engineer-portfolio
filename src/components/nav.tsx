import Link from "next/link"
import React from "react"

import { activeNavigation } from "@/i18n/config"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/types/nav"

export function Nav({
  items,
  activeId,
  className,
  exactMatch = false,
}: {
  items: NavItem[]
  activeId?: string
  className?: string
  exactMatch?: boolean
}) {
  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-4", className)}
    >
      {items.map(({ title, href }) => {
        const active = exactMatch
          ? activeId === href
          : activeNavigation(activeId || "", href)

        return (
          <NavItem key={href} href={href} active={active}>
            {title}
          </NavItem>
        )
      })}
    </nav>
  )
}

export function NavItem({
  className,
  active,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean
}) {
  return (
    <Link
      className={cn(
        "font-mono text-sm font-medium text-muted-foreground transition-[color] hover:text-foreground",
        active && "text-foreground",
        className
      )}
      {...props}
    />
  )
}
