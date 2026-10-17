# Deployment on Railway

The portfolio is a Node.js Next.js application. It requires no database, persistent volume, or private API key. Deploy from the repository root using Node.js 22 and the pinned pnpm version.

`railway.toml` declares `pnpm build`, `pnpm start --hostname 0.0.0.0`, and a `/en` health check. Next.js reads Railway's `PORT` environment variable automatically. The domain target port must match the actual listening port in the runtime logs; do not assume the local default of 3000. `/en` returns 200 directly, whereas `/` redirects and is unsuitable for a strict 200 health check. The deployment retains the source MDX files; do not copy only `.next/` if making a custom image later, because journal reads require `src/features/doc/content/` at runtime.

## Origin and metadata

Set `APP_URL` to the final HTTPS origin. `RAILWAY_PUBLIC_DOMAIN` is a fallback. Neither is a secret. Configure these before the production build and redeploy after changes, because static pages and feeds embed the origin. An invalid origin fails early instead of silently publishing broken links. Without either setting, local development uses `http://localhost:3000`, with `noindex` and an empty sitemap.

Generate the Railway domain first if needed, then rebuild with that domain available. If a custom domain is added later, update `APP_URL`, redeploy, and update the README using `pnpm site:url <verified-origin>`.

## Verification after the first deployment

- `/en` (and `/br`, `/nl`, `/es`, `/de`): profile, working contact/LinkedIn/GitHub links, correct title and LF favicon.
- `/en/projects`: Football, Visualized links to the real app and public source.
- `/en/journal`: honest empty state; filter by project works.
- `/journal/rss`: valid RSS with no items until a real entry is published.
- `/sitemap.xml`: profile, projects, and Journal on the actual domain; no component/template pages.
- `/robots.txt`: public crawling enabled with the correct sitemap URL.
- `/llms.txt`, `/llms-full.txt`, `/about.md`, `/projects.md`: Leonardo's narrative; no upstream personal posts.
- `/og/simple`: portfolio-branded social image.
- `/blog`: redirects to `/en/journal`; upstream personal post URLs return 404.

The published domain is https://my-engineer-portfolio-production.up.railway.app. Production currently tracks `main`; PR #18 changes will only appear after the normal integration to `main` and a new deployment. Source code may be made public independently of deployment. No workflow in this change changes repository visibility or merges branches automatically.

## Optional analytics

Keys in `.env.example` are blank. Leave them blank to keep the portfolio free of optional tracking. If enabling a provider, configure the actual key and host in Railway and rebuild. Do not commit real tokens in the repository.

The default `/` URL redirects to `/en` independently of browser language. Each public locale route must serve the correct `<html lang>`, title, canonical, and alternate-language metadata. Profile/project/Journal routes render on the server; no external translation service or new environment setting is needed.

## 502 diagnosis on 2026-10-17

Runtime logs showed Next.js listening on **8080**, while the public domain targeted **3000**. Proxy logs reported `connection refused`. Updating only the domain target to **8080** restored HTTP 200 without redeploying. The running deployment was `e1e1bc0d-e7db-4c66-a478-63a5223daf8e`, from `main` commit `9a0b833`; it does not contain PR #18. In particular, its `/llms.txt` still returned the inherited template content and `text/markdown`. Verify the deployed commit before debugging a source change that has not been released.

The corrected text endpoints in this branch return inline UTF-8 text with `Cache-Control: no-store`, avoiding stale machine summaries. After integration, verify their headers and Leonardo identity on the public domain. Keep the domain target aligned with `PORT` on subsequent deployments.
