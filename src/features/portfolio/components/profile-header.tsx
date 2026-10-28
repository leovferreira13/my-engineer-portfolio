import Link from "next/link"

import { USER } from "@/features/portfolio/data/user"
import { getI18n } from "@/i18n/request"
import { decodeEmail } from "@/utils/string"

export async function ProfileHeader() {
  const { dictionary, t } = await getI18n()
  return (
    <section
      aria-labelledby="profile-title"
      className="rounded-b-xl border-x border-b border-line bg-background p-6 shadow-xs sm:p-8"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <img
          id="js-cover-mark"
          src={USER.avatar}
          alt="Leonardo Ferreira"
          width={112}
          height={112}
          fetchPriority="high"
          className="size-24 shrink-0 rounded-2xl border border-line object-cover sm:size-28"
        />
        <div className="min-w-0 flex-1">
          <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Product Engineer | SaaS, Applied AI &amp; Backend Systems
          </p>
          <h1
            id="profile-title"
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            {USER.displayName}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
            {dictionary.profile.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            <Link
              href="#experience"
              className="rounded-lg bg-foreground px-4 py-2 text-background transition-opacity hover:opacity-80"
            >
              {t.exploreWork} <span aria-hidden>↗</span>
            </Link>
            <a
              href="/resume/leonardo-ferreira-product-engineer-en.pdf"
              download
              className="rounded-lg border border-line px-4 py-2 transition-colors hover:bg-accent"
            >
              {t.downloadResume}
            </a>
            <a
              href={
                USER.email ? `mailto:${decodeEmail(USER.email)}` : undefined
              }
              className="rounded-lg border border-line px-4 py-2 transition-colors hover:bg-accent"
            >
              {t.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
