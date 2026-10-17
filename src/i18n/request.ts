import { headers } from "next/headers"

import { defaultLocale, isLocale } from "./config"
import { getDictionary } from "./dictionaries"
export async function getI18n() {
  const value = (await headers()).get("x-portfolio-locale") || defaultLocale
  const locale = isLocale(value) ? value : defaultLocale
  return {
    locale,
    dictionary: getDictionary(locale),
    t: getDictionary(locale).ui,
  }
}
