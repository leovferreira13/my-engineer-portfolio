# Professional portfolio validation

Validated on 2026-10-17 against the current Product Engineer CV, cover-letter narrative, public LinkedIn profile, and the sports-data-visualizer README and screenshot.

## Scope

- Profile: current product-engineering narrative, professional timeline, capabilities, education, publication, professional contact links, and a local profile photo.
- Public catalog: exactly one project, Football, Visualized, with the actual live app and repository.
- Engineering Journal: zero published entries; project filter, four entry types, dated MDX, evidence references, RSS, and project-linked navigation ready for real writing.
- Public repository presentation: README screenshot, actual project screenshot, upstream MIT notice, author identity, blank optional configuration, Railway setup, and explicit unpublished website status.

## Results

| Check                             | Result                                                                                                     |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `pnpm test:content`               | PASS — 8 tests                                                                                             |
| `pnpm lint`                       | PASS                                                                                                       |
| `pnpm check-types`                | PASS                                                                                                       |
| `pnpm build`                      | PASS — 73 generated routes/pages in the retained application                                               |
| `git diff --check`                | PASS                                                                                                       |
| Production HTTP smoke             | PASS — 15 core pages, feeds, text exports, and assets return 200                                           |
| Retired template/missing posts    | PASS — 404; `/blog` redirects to `/journal`                                                                |
| Public-origin configuration       | PASS — HTTPS origin propagates to sitemap and robots; local fallback stays noindex with empty sitemap      |
| Desktop 1440×1080                 | PASS — profile, projects, journal; no horizontal overflow or broken images                                 |
| Mobile 390×844                    | PASS — no horizontal overflow; menu exposes Profile, Projects, Engineering Journal and navigates correctly |
| Theme switching                   | PASS — light and dark render correctly                                                                     |
| Browser runtime                   | PASS — zero uncaught page errors in the final navigation check                                             |
| Final published journal inventory | PASS — zero entries; no test post or template post remains                                                 |

Content tests cover explicit publication, draft/future/template exclusion at the shared data layer, chronological ordering, project validation, impossible dates, backwards updates, valid entry types, HTTPS evidence links, and XML escaping. A temporary MDX fixture was also used to verify entry rendering and project/evidence links, then removed before the final empty-journal build.

The browser checks used a local production server and Puppeteer; desktop/mobile screenshots are in `docs/screenshots/`. The run used Node.js 24.19.0 and pnpm 10.33.0 in the available environment. The repository retains its Node.js 22 deployment target.

## Known inherited warning

Turbopack emits a file-tracing warning for the retained registry markdown pipeline (`remark-component` through `get-llm-text`). Compilation, type checks, page generation, and production serving complete successfully. No registry-source changes are required for portfolio content. Reassess its trace scope before moving to a minimal standalone deployment image.

## Deployment status

This change prepares the GitHub source and Railway configuration. A production portfolio URL has not been created or assumed. After deployment, verify the actual public origin, rebuild with `APP_URL` (or Railway's generated domain), and use `pnpm site:url <verified-origin>` to update the README.
