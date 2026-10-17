import type { Locale } from "./config"
import br from "./messages/br.json"
import de from "./messages/de.json"
import en from "./messages/en.json"
import es from "./messages/es.json"
import nl from "./messages/nl.json"
export type UIStrings = typeof en.ui
export type Dictionary = Omit<
  typeof en,
  "skills" | "employment" | "positions" | "project" | "education"
> & {
  positions: Record<string, { title: string; description: string }>
  project: string[]
  education: Record<string, string>
  skills: Record<string, string>
  employment: Record<string, string>
}
const dictionaries: Record<Locale, Dictionary> = { en, br, nl, es, de }
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
