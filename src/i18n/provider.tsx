"use client"
import { createContext, useContext } from "react"

import type { Locale } from "./config"
import type { UIStrings } from "./dictionaries"
const LocaleContext = createContext<{ locale: Locale; t: UIStrings } | null>(
  null
)
export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale
  messages: UIStrings
  children: React.ReactNode
}) {
  return (
    <LocaleContext.Provider value={{ locale, t: messages }}>
      {children}
    </LocaleContext.Provider>
  )
}
export function useI18n() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error("LocaleProvider is required")
  return value
}
