import Link from "next/link"

import { USER } from "@/features/portfolio/data/user"

export function ProfileHeader() {
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
            Product Engineer · Rio de Janeiro, Brazil
          </p>
          <h1
            id="profile-title"
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            {USER.displayName}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
            I turn user problems into software, from the first question to
            production.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            5+ years across B2B SaaS, backend, data engineering, product
            leadership, and applied AI.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            <Link
              href="/projects"
              className="rounded-lg bg-foreground px-4 py-2 text-background transition-opacity hover:opacity-80"
            >
              Explore my work <span aria-hidden>↗</span>
            </Link>
            <a
              href="mailto:leovieiraf.599@gmail.com"
              className="rounded-lg border border-line px-4 py-2 transition-colors hover:bg-accent"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
