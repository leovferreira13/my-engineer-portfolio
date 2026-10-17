# Professional portfolio validation

Validated on 2026-10-17 after the multilingual and QA refinement of PR #18.

## Current result

- Profile, Projects, and Decision Log in English (default), Portuguese, Dutch, Spanish, and German.
- Real locale routes: `/en`, `/br`, `/nl`, `/es`, `/de`, with `/projects` and `/decisions` beneath each language.
- Server-rendered document language, translated professional content, localized titles, canonical URLs, and language alternates.
- Header language control beside the theme control; house icon for home; real GitHub and LinkedIn glyphs.
- Explicit localized Present dates; UFMG expanded by default; shared design-system All projects button.
- No visible RSS subscription or machine-export menu entry. Optional feeds and English `/llms.txt` exports remain available.
- Zero published decision-log entries.

## Automated and browser checks

| Check                  | Result                                                                                                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm test:content`    | PASS — 13 tests                                                                                                                                                       |
| `pnpm lint`            | PASS                                                                                                                                                                  |
| `pnpm check-types`     | PASS                                                                                                                                                                  |
| `pnpm build`           | PASS                                                                                                                                                                  |
| `git diff --check`     | PASS                                                                                                                                                                  |
| Localized public pages | PASS — profile, projects, and filtered decisions across all five languages (15 pages)                                                                                 |
| Mobile profiles        | PASS — all five languages at 390×844 without horizontal overflow                                                                                                      |
| Desktop                | PASS — 1440×1080; no broken images or overflow                                                                                                                        |
| Language selection     | PASS — English default even with Portuguese Accept-Language; switching updates root HTML language, shared navigation, title, and page while preserving project filter |
| Theme controls         | PASS — light and dark                                                                                                                                                 |
| Current position       | PASS — localized Present text; no infinity symbol                                                                                                                     |
| UFMG                   | PASS — expanded by default                                                                                                                                            |
| GitHub card            | PASS — real SVG glyph                                                                                                                                                 |
| RSS interface          | PASS — no subscription buttons or menu entries                                                                                                                        |
| vCard                  | PASS — embedded JPEG portrait and canonical contact email                                                                                                             |
| Machine summaries      | PASS — current Decision Log terminology, no upstream identity or obsolete blog framing                                                                                |
| Sitemap                | PASS — 15 locale/section URLs with alternate-language links when a public origin is configured                                                                        |
| Browser runtime        | PASS — no uncaught page errors                                                                                                                                        |

Tests cover draft/future/template exclusion, valid project IDs and dates, chronological ordering, evidence links, RSS escaping, complete translation keys, stable professional translations, locale links and anchors, active navigation, localized date formatting, UFMG expansion, and local portrait embedding.

The browser checks used a local production server and Puppeteer. Updated captures are in `docs/screenshots/`; the desktop is English and the full mobile capture is Portuguese. The available runtime was Node.js 24.19.0; the existing Railway target remains Node.js 22.

## Automated QA findings addressed

1. The hero contact CTA decodes `USER.email`, sharing the same source as Overview.
2. The vCard reads `/profile.jpg` from `public/` before JPEG conversion; no self-fetch or running server is required.
3. The architecture map identifies `doc`, `journal`, and `portfolio` as active features, with `blog`/`sponsor` retained only as utilities.
4. The full machine export uses Decision Log terminology, an appropriately named helper, and no empty certifications section or obsolete system blurb.

The command menu was also simplified to current localized navigation, themes, real decision entries, and the contact download. Removed brand-asset commands, obsolete metadata entries, RSS actions, and machine-summary links no longer appear there.

## Limits and publication

The retained registry Markdown pipeline still emits the previously recorded Turbopack file-tracing warning; compilation and production serving pass. Original authored decision entries are not silently translated. Publishing translated articles can be added explicitly once there is real writing.

No production deployment, merge, or repository visibility change is included. The actual portfolio URL and the GitHub repository Website setting should be set to the verified Railway origin after publication.
