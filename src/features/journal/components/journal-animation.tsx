"use client"

import { useEffect, useRef, useSyncExternalStore } from "react"

const motionPreference = "(prefers-reduced-motion: reduce)"

function subscribe(onChange: () => void) {
  const query = window.matchMedia(motionPreference)
  query.addEventListener("change", onChange)
  return () => query.removeEventListener("change", onChange)
}

function prefersReducedMotion() {
  return window.matchMedia(motionPreference).matches
}

export function JournalAnimation({
  src,
  poster,
  label,
  describedBy,
}: {
  src: string
  poster: string
  label: string
  describedBy: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = useSyncExternalStore(
    subscribe,
    prefersReducedMotion,
    () => true
  )

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (reducedMotion) {
      video.pause()
      return
    }
    video.muted = true
    // Native controls remain available if the browser declines autoplay.
    void video.play().catch(() => {})
  }, [reducedMotion])

  return (
    <video
      ref={videoRef}
      controls
      autoPlay={!reducedMotion}
      loop={!reducedMotion}
      muted
      playsInline
      preload={reducedMotion ? "none" : "metadata"}
      poster={poster}
      width={1200}
      height={800}
      aria-label={label}
      aria-describedby={describedBy}
      className="w-full rounded-xl"
    >
      <source src={src} type="video/webm" />
      Use the static comparison below if your browser cannot play this
      animation.
    </video>
  )
}
