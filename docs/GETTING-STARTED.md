# Getting started

Quick reference for running the project, especially in Cursor Cloud and similar environments.

## Dev server

`pnpm dev` uses `portless` (installed globally) to proxy via HTTPS at **https://leovferreira.localhost** (see `package.json` script and `next.config.ts` `allowedDevOrigins`). The actual Next.js dev server runs on a dynamic port (e.g. 4273, 4291). Use `curl http://localhost:<port>` to verify. Alternatively, run `npx next dev --port 3000` to skip portless and bind to a fixed port.

## Data and external services

No database or external services are required for core development: the app is entirely file-based (MDX content). All external API calls (GitHub, PostHog, OpenPanel) degrade gracefully without credentials.

## Environment variables

Copy `.env.example` to `.env.local`. The app works without real values; analytics and GitHub API features simply no-op.

## Registry build

`pnpm registry:build` requires `bun` (not installed in the default environment). Only needed when modifying registry components. Install with `npm install -g bun` if needed.

## Pre-commit hook

`.husky/pre-commit` runs `pnpm lint-staged`, which formats and lints staged files.

## Lint and type checks

See the **Commands** section in [`AGENTS.md`](../AGENTS.md) at the repository root. All listed commands pass cleanly on a fresh checkout.
