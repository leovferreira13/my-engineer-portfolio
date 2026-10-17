# Getting started

Use Node.js 22 and pnpm 10.33.0. Run `pnpm install --frozen-lockfile`, copy `.env.example` to `.env.local`, then `pnpm dev` and open http://localhost:3000. Core portfolio and journal pages use local source data; no credentials, database, or external service is required.

`pnpm dev:portless` is an optional alternative when Portless is installed globally. Production uses `pnpm build` and `pnpm start`; Next reads `PORT` from the environment. See [DEPLOYMENT.md](DEPLOYMENT.md).

`APP_URL` is optional locally and required (or supplied through `RAILWAY_PUBLIC_DOMAIN`) for public canonical URLs, RSS, and sitemap. Blank analytics variables are disabled. Do not copy example keys from unrelated services.

Run `pnpm check-types`, `pnpm lint`, `pnpm test:content`, and `pnpm build` for implementation validation. `pnpm capture:portfolio` captures the running profile for the README. [JOURNAL.md](JOURNAL.md) covers writing and publishing.

The inherited registry build requires Bun; run it only when changing registry source. The pre-commit hook uses lint-staged to format/lint staged changes. No registry rebuild is needed for professional data or journal entries.

## Keep README captures current

For every portfolio revision, run a fresh production build and serve that revision locally before `pnpm capture:portfolio`. Set `PORTFOLIO_BASE_URL` if the local server uses another origin. The script explicitly loads `/en` for the desktop and `/br` for mobile, sets dark mode independently of saved preferences, and waits for fonts and images. It rejects HTTP errors, a different profile, or horizontal overflow. Inspect both screenshots and commit them with the implementation, even when the desktop crop happens to look unchanged. The mandatory rule is in `AGENTS.md`.

## Maintainer shortcuts

Add a public project to `src/features/portfolio/data/projects.ts` with a stable ID, verified live/source links, context, and an optional image. The [Journal guide](JOURNAL.md) covers project-linked posts, drafts, dates, and evidence references.

`pnpm site:url https://your-verified-domain` reads the current portfolio origin from the marked website link in README, then updates every occurrence of that origin in the README, including the screenshot, profile, project catalog, Journal, and five language links. It preserves link labels, formatting, paths, query strings, and anchors, and leaves external origins unchanged. Keep the existing HTTPS website link between the markers so future domain changes can be identified. Configure `APP_URL` in Railway separately. Optional English `/llms.txt` and `/llms-full.txt` exports use the profile data. The inherited component registry remains available in source but is outside the portfolio navigation.
