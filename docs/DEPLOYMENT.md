# Deployment on Railway

The portfolio is a Node.js Next.js application. It requires no database, persistent volume, or private API key. Deploy from the repository root using Node.js 22 and the pinned pnpm version.

`railway.toml` declares `pnpm build`, `pnpm start --hostname 0.0.0.0`, and a `/` health check. Next.js reads Railway's `PORT` environment variable automatically. The deployment retains the source MDX files; do not copy only `.next/` if making a custom image later, because journal reads require `src/features/doc/content/` at runtime.

## Origin and metadata

Set `APP_URL` to the final HTTPS origin. `RAILWAY_PUBLIC_DOMAIN` is a fallback. Neither is a secret. Configure these before the production build and redeploy after changes, because static pages and feeds embed the origin. An invalid origin fails early instead of silently publishing broken links. Without either setting, local development uses `http://localhost:3000`, with `noindex` and an empty sitemap.

Generate the Railway domain first if needed, then rebuild with that domain available. If a custom domain is added later, update `APP_URL`, redeploy, and update the README using `pnpm site:url <verified-origin>`.

## Verification after the first deployment

- `/en` (and `/br`, `/nl`, `/es`, `/de`): profile, working contact/LinkedIn/GitHub links, correct title and LF favicon.
- `/en/projects`: Football, Visualized links to the real app and public source.
- `/en/decisions`: honest empty state; filter by project works.
- `/journal/rss`: valid RSS with no items until a real entry is published.
- `/sitemap.xml`: profile, projects, and Journal on the actual domain; no component/template pages.
- `/robots.txt`: public crawling enabled with the correct sitemap URL.
- `/llms.txt`, `/llms-full.txt`, `/about.md`, `/projects.md`: Leonardo's narrative; no upstream personal posts.
- `/og/simple`: portfolio-branded social image.
- `/blog`: redirects to `/en/decisions`; upstream personal post URLs return 404.

The README's website link remains explicitly unpublished until a real deployed URL has been verified. Source code may be made public independently of deployment. No workflow in this change changes repository visibility or merges branches automatically.

## Optional analytics

Keys in `.env.example` are blank. Leave them blank to keep the portfolio free of optional tracking. If enabling a provider, configure the actual key and host in Railway and rebuild. Do not commit real tokens in the repository.

The default `/` URL redirects to `/en` independently of browser language. Each public locale route must serve the correct `<html lang>`, title, canonical, and alternate-language metadata. Profile/project/Decision Log routes render on the server; no external translation service or new environment setting is needed.
