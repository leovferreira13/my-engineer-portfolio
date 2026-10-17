# Getting started

Use Node.js 22 and pnpm 10.33.0. Run `pnpm install --frozen-lockfile`, copy `.env.example` to `.env.local`, then `pnpm dev` and open http://localhost:3000. Core portfolio and journal pages use local source data; no credentials, database, or external service is required.

`pnpm dev:portless` is an optional alternative when Portless is installed globally. Production uses `pnpm build` and `pnpm start`; Next reads `PORT` from the environment. See [DEPLOYMENT.md](DEPLOYMENT.md).

`APP_URL` is optional locally and required (or supplied through `RAILWAY_PUBLIC_DOMAIN`) for public canonical URLs, RSS, and sitemap. Blank analytics variables are disabled. Do not copy example keys from unrelated services.

Run `pnpm check-types`, `pnpm lint`, `pnpm test:content`, and `pnpm build` for implementation validation. `pnpm capture:portfolio` captures the running profile for the README. [JOURNAL.md](JOURNAL.md) covers writing and publishing.

The inherited registry build requires Bun; run it only when changing registry source. The pre-commit hook uses lint-staged to format/lint staged changes. No registry rebuild is needed for professional data or journal entries.
