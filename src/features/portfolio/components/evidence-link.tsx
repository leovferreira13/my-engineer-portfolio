"use client"

import { useEffect } from "react"

function revealEvidence(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  const trigger = target.querySelector<HTMLButtonElement>(
    'button[aria-expanded="false"]'
  )
  trigger?.click()
  target.getAnimations().forEach((animation) => animation.cancel())
  target.animate(
    [
      { backgroundColor: "var(--accent)", outline: "2px solid var(--border)" },
      {
        backgroundColor: "var(--accent)",
        outline: "2px solid var(--border)",
        offset: 0.85,
      },
      { backgroundColor: "transparent", outline: "2px solid transparent" },
    ],
    { duration: 3500, easing: "ease-out" }
  )
  requestAnimationFrame(() => {
    target.scrollIntoView({
      block: "start",
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    })
    target.focus({ preventScroll: true })
  })
}

export function EvidenceLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        if (
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        )
          return
        event.preventDefault()
        history.pushState(null, "", href)
        revealEvidence(href.slice(1))
      }}
    >
      {children}
    </a>
  )
}

export function EvidenceNavigation() {
  useEffect(() => {
    const reveal = () => {
      const id = location.hash.slice(1)
      if (id.startsWith("experience-") || id === "sports-data-visualizer")
        revealEvidence(id)
    }
    reveal()
    window.addEventListener("hashchange", reveal)
    return () => window.removeEventListener("hashchange", reveal)
  }, [])
  return null
}
