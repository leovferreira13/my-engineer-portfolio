"use client"
import { CheckIcon, LanguagesIcon, LoaderCircleIcon } from "lucide-react"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  languageNames,
  languageTags,
  locales,
  localizePath,
} from "@/i18n/config"
import { useI18n } from "@/i18n/provider"
export function LanguageSelector() {
  const { locale, t } = useI18n()
  const pathname = usePathname(),
    params = useSearchParams()
  const [open, setOpen] = useState(false),
    [pending, setPending] = useState(false)
  useHotkeys("shift+l", () => setOpen((value) => !value), {
    preventDefault: true,
  })
  useEffect(() => {
    const reset = () => setPending(false)
    window.addEventListener("pageshow", reset)
    return () => window.removeEventListener("pageshow", reset)
  }, [])
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Tooltip>
        <PopoverTrigger asChild>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={t.language}
                aria-busy={pending}
                aria-keyshortcuts="Shift+L"
              >
                {pending ? (
                  <LoaderCircleIcon className="size-4 animate-spin" />
                ) : (
                  <LanguagesIcon className="size-4" />
                )}
              </Button>
            }
          />
        </PopoverTrigger>
        <TooltipContent className="pr-2 pl-3">
          <div className="flex items-center gap-3">
            {t.language}
            <Kbd>⇧ L</Kbd>
          </div>
        </TooltipContent>
      </Tooltip>
      <PopoverContent align="end" className="w-44 p-1">
        <nav aria-label={t.language}>
          {locales.map((language) => {
            const href = localizePath(
              `${pathname}${params.size ? `?${params}` : ""}`,
              language
            )
            return (
              <a
                key={language}
                href={href}
                lang={languageTags[language]}
                hrefLang={languageTags[language]}
                aria-current={locale === language ? "page" : undefined}
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring"
                onClick={(event) => {
                  if (
                    event.metaKey ||
                    event.ctrlKey ||
                    event.shiftKey ||
                    event.altKey
                  )
                    return
                  setPending(true)
                  setOpen(false)
                  event.currentTarget.href = `${href}${window.location.hash}`
                }}
              >
                {languageNames[language]}
                {locale === language && <CheckIcon className="size-4" />}
              </a>
            )
          })}
        </nav>
      </PopoverContent>
    </Popover>
  )
}
