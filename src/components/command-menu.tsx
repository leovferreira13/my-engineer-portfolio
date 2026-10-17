"use client"
import {
  DownloadIcon,
  FolderIcon,
  HouseIcon,
  MonitorIcon,
  MoonIcon,
  NotebookPenIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"
import type { DocPreview } from "@/features/doc/types/document"
import { localizePath } from "@/i18n/config"
import { useI18n } from "@/i18n/provider"
export function CommandMenu({
  docs,
  enabledHotkeys = false,
}: {
  docs: DocPreview[]
  enabledHotkeys?: boolean
}) {
  const { locale, t } = useI18n(),
    router = useRouter(),
    { setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  useHotkeys(
    "mod+k, slash",
    (event) => {
      event.preventDefault()
      setOpen((value) => !value)
    },
    { enabled: enabledHotkeys }
  )
  const navigate = (path: string) => {
    setOpen(false)
    router.push(localizePath(path, locale))
  }
  return (
    <>
      <Button
        data-slot="command-menu-trigger"
        variant="outline"
        size="sm"
        className="gap-2 rounded-full text-muted-foreground"
        aria-label={t.search}
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-4" />
        <span className="sm:hidden">{t.search}</span>
        <span className="hidden sm:inline-flex">
          <Kbd>Ctrl K</Kbd>
        </span>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title={t.search}
        description={t.searchPlaceholder}
      >
        <CommandInput placeholder={t.searchPlaceholder} />
        <CommandList>
          <CommandEmpty>{t.noResults}</CommandEmpty>
          <CommandGroup heading={t.menu}>
            <CommandItem onSelect={() => navigate("/")}>
              <HouseIcon />
              {t.profile}
            </CommandItem>
            <CommandItem onSelect={() => navigate("/projects")}>
              <FolderIcon />
              {t.projects}
            </CommandItem>
            <CommandItem onSelect={() => navigate("/decisions")}>
              <NotebookPenIcon />
              {t.decisions}
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading={t.profile}>
            {(
              [
                ["about", t.about],
                ["experience", t.experience],
                ["stack", t.capabilities],
                ["education", t.education],
                ["awards", t.publications],
              ] as const
            ).map(([id, label]) => (
              <CommandItem key={id} onSelect={() => navigate(`/#${id}`)}>
                {label}
              </CommandItem>
            ))}
            <CommandItem
              onSelect={() => {
                setOpen(false)
                window.location.assign("/vcard")
              }}
            >
              <DownloadIcon />
              {t.downloadVcard}
            </CommandItem>
          </CommandGroup>
          {docs.length > 0 && (
            <CommandGroup heading={t.decisions}>
              {docs
                .filter((doc) => doc.category === "journal")
                .map((doc) => (
                  <CommandItem
                    key={doc.slug}
                    onSelect={() => navigate(`/decisions/${doc.slug}`)}
                  >
                    {doc.title}
                  </CommandItem>
                ))}
            </CommandGroup>
          )}
          <CommandGroup heading={t.theme}>
            {(
              [
                ["light", t.light, SunIcon],
                ["dark", t.dark, MoonIcon],
                ["system", t.system, MonitorIcon],
              ] as const
            ).map(([mode, label, Icon]) => (
              <CommandItem
                key={mode}
                onSelect={() => {
                  setTheme(mode)
                  setOpen(false)
                }}
              >
                <Icon />
                {label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
