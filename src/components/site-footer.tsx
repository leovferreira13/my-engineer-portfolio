import { Icons } from "@/components/icons"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import {
  GITHUB_USERNAME,
  LINKEDIN_PROFILE_URL,
  SITE_INFO,
  SOURCE_CODE_GITHUB_URL,
  UTM_PARAMS,
} from "@/config/site"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-top mx-auto border-x border-line pt-4 group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link transition-[color] hover:text-foreground"
            href={`${LINKEDIN_PROFILE_URL}?utm_source=${encodeURIComponent(UTM_PARAMS.utm_source)}`}
            target="_blank"
            rel="noopener"
          >
            {SITE_INFO.name}
          </a>
          . The source code is available on{" "}
          <a
            className="link transition-[color] hover:text-foreground"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>

        <div className="screen-line-top screen-line-bottom flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4">
            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={`https://github.com/${GITHUB_USERNAME}?utm_source=${encodeURIComponent(UTM_PARAMS.utm_source)}`}
              target="_blank"
              rel="noopener"
            >
              <Icons.github className="size-4" />
              <span className="sr-only">GitHub</span>
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={`${LINKEDIN_PROFILE_URL}?utm_source=${encodeURIComponent(UTM_PARAMS.utm_source)}`}
              target="_blank"
              rel="noopener"
            >
              <Icons.linkedin className="size-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-16 sm:h-2" />
      </div>
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-line", className)} {...props} />
}
