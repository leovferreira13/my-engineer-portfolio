import { Icons } from "@/components/icons"
import {
  GITHUB_USERNAME,
  LINKEDIN_PROFILE_URL,
  UTM_PARAMS,
} from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="mx-auto py-6 group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="flex items-center justify-center gap-5">
          <a
            className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
            href={`${LINKEDIN_PROFILE_URL}?utm_source=${encodeURIComponent(UTM_PARAMS.utm_source)}`}
            target="_blank"
            rel="noopener"
          >
            <Icons.linkedin className="size-4" />
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
            href={`https://github.com/${GITHUB_USERNAME}?utm_source=${encodeURIComponent(UTM_PARAMS.utm_source)}`}
            target="_blank"
            rel="noopener"
          >
            <Icons.github className="size-4" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>

      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-16 sm:h-2" />
      </div>
    </footer>
  )
}
