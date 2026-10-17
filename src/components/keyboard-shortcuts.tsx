"use client"
import { useRouter } from "next/navigation"
import { useHotkeys } from "react-hotkeys-hook"

import { localizePath } from "@/i18n/config"
import { useI18n } from "@/i18n/provider"
export function KeyboardShortcuts() {
  const router = useRouter(),
    { locale } = useI18n()
  useHotkeys("g>h", () => router.push(localizePath("/", locale)))
  useHotkeys("g>p", () => router.push(localizePath("/projects", locale)))
  useHotkeys("g>l", () => router.push(localizePath("/journal", locale)))
  return null
}
