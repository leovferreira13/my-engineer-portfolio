# ADR 0004: Portfolio tech stack data and icon resolution

## Status

Accepted

## Context

The homepage Stack panel lists technologies with 32px icons. Icons for most entries are loaded from the upstream `assets.chanhdai.com` bundle to match the original template. New stack items (for example PostgreSQL and Apache Spark) are not guaranteed to exist in that bundle, which would yield broken images.

## Decision

1. **Content**: The stack list in `src/features/portfolio/data/tech-stack.ts` is curated for the personal portfolio; it is not required to mirror every technology used in the site implementation (for example front-end framework icons may be omitted when they are template noise rather than career signal).
2. **Icon resolution**: Each stack entry may set `useLocalAsset: true` on the `TechStack` type. When set, the UI loads `/public/tech-stack-icons/[key].svg` instead of the CDN path. Keys without that flag continue to use `https://assets.chanhdai.com/images/tech-stack-icons/` for visual parity with existing assets.
3. **Local assets**: Local SVGs should follow the same nominal canvas as existing icons (100x100 viewBox) so layout and density stay consistent.

## Consequences

- New technologies can be added without waiting for CDN publishes.
- Duplication is possible if an icon is later added upstream; we can drop `useLocalAsset` and delete the local file when parity is confirmed.
