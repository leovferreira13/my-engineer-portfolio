# Professional portfolio validation

Validated on 2026-10-17 after the multilingual and QA refinement of PR #18.

## Current result

- Profile, Projects, and Journal in English (default), Portuguese, Dutch, Spanish, and German.
- Real locale routes: `/en`, `/br`, `/nl`, `/es`, `/de`, with `/projects` and `/journal` beneath each language.
- Server-rendered document language, translated professional content, localized titles, canonical URLs, and language alternates.
- Header language control beside the theme control; house icon for home; real GitHub and LinkedIn glyphs.
- Explicit localized Present dates; UFMG expanded by default; shared design-system All projects button.
- No visible RSS subscription or machine-export menu entry. Optional feeds and English `/llms.txt` exports remain available.
- Zero published journal entries.

## Automated and browser checks

| Check                  | Result                                                                                                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm test:content`    | PASS — 19 tests                                                                                                                                                       |
| `pnpm lint`            | PASS                                                                                                                                                                  |
| `pnpm check-types`     | PASS                                                                                                                                                                  |
| `pnpm build`           | PASS                                                                                                                                                                  |
| `git diff --check`     | PASS                                                                                                                                                                  |
| Localized public pages | PASS — profile, projects, and filtered journal across all five languages (15 pages)                                                                                   |
| Mobile profiles        | PASS — all five languages at 390×844 without horizontal overflow                                                                                                      |
| Desktop                | PASS — 1440×1080; no broken images or overflow                                                                                                                        |
| Language selection     | PASS — English default even with Portuguese Accept-Language; switching updates root HTML language, shared navigation, title, and page while preserving project filter |
| Theme controls         | PASS — light and dark                                                                                                                                                 |
| Current position       | PASS — localized Present text; no infinity symbol                                                                                                                     |
| UFMG                   | PASS — expanded by default                                                                                                                                            |
| GitHub card            | PASS — real SVG glyph                                                                                                                                                 |
| RSS interface          | PASS — no subscription buttons or menu entries                                                                                                                        |
| vCard                  | PASS — embedded JPEG portrait and canonical contact email                                                                                                             |
| Machine summaries      | PASS — current Journal terminology, no upstream identity or obsolete blog framing                                                                                     |
| Sitemap                | PASS — 15 locale/section URLs with alternate-language links when a public origin is configured                                                                        |
| Browser runtime        | PASS — no uncaught page errors                                                                                                                                        |

Tests cover draft/future/template exclusion, valid project IDs and dates, chronological ordering, evidence links, RSS escaping, complete translation keys, stable professional translations, locale links and anchors, active navigation, localized date formatting, UFMG expansion, and local portrait embedding.

The browser checks used a local production server and Puppeteer. Updated captures are in `docs/screenshots/`; the desktop is English and the full mobile capture is Portuguese. The available runtime was Node.js 24.19.0; the existing Railway target remains Node.js 22.

## Automated QA findings addressed

1. The hero contact CTA decodes `USER.email`, sharing the same source as Overview.
2. The vCard reads `/profile.jpg` from `public/` before JPEG conversion; no self-fetch or running server is required.
3. The architecture map identifies `doc`, `journal`, and `portfolio` as active features, with `blog`/`sponsor` retained only as utilities.
4. The full machine export uses Journal terminology, an appropriately named helper, and no empty certifications section or obsolete system blurb.

The command menu was also simplified to current localized navigation, themes, real decision entries, and the contact download. Removed brand-asset commands, obsolete metadata entries, RSS actions, and machine-summary links no longer appear there.

## Limits and publication

The retained registry Markdown pipeline still emits the previously recorded Turbopack file-tracing warning; compilation and production serving pass. Original authored decision entries are not silently translated. Publishing translated articles can be added explicitly once there is real writing.

No source deployment, merge, or repository visibility change is included. The existing Railway domain target was corrected from 3000 to 8080 on 2026-10-17; production still runs the prior `main` commit. README now links to the verified responding origin.

## Expanded positioning and controls (2026-10-17)

Reviewed the four role-specific CVs (Product Engineer, Forward Deployed Engineer, Backend, Applied AI), the Product/FDE/Applied AI cover letters, and the evidence bank. Expanded About with scannable customer, backend, and applied AI subsections; added tool-use explanations in every language; expanded Reach.ai details and public project context; qualified the prelaunch agent and internal latency result; added the approximate 90-to-15-second PDF-generation improvement. ADR 0014 records this content pattern.

The language control uses the theme tooltip design, displays Shift+L, and opens from that shortcut. G → L continues to navigate to Journal. Explore the journal uses the shared outline Button.

The prior local production build returned nonempty Markdown and displayed it in Chromium, so the reported blank browser view was not reproduced locally. Both `.txt` endpoints now explicitly return `text/plain; charset=utf-8`, `Content-Disposition: inline`, and `X-Content-Type-Options: nosniff`; production-build browser tests compare the entire displayed body with the fetched response and verify the expanded English export. The HTML head advertises `/llms.txt`. The singular `/llm.txt` remains 404, without redundant aliases. This verification does not establish behavior at an unprovided deployed URL.

## Footer, capture freshness, and production networking (2026-10-17)

- Explore the projects now uses the shared small outline Button, matching the other section actions. Verified in all five languages on desktop and mobile (10 views).
- Footer has no grid/border/separator lines; its links are LinkedIn then GitHub, matching the profile cards. Verified DOM order and absence of grid classes in all 10 views; inspected the dark-mode Journal/footer render.
- `capture:portfolio` explicitly sets dark mode, waits for fonts/images, verifies the profile and HTTP status, and rejects overflow. Regenerated and inspected the English desktop and Portuguese mobile captures from the current local production build. AGENTS.md requires recapture for every portfolio revision.
- The production-build text routes return nonempty UTF-8 text inline with nosniff and no-store; Chromium displays the complete fetched response. Inspected `/llms.txt` visually. Routes now render on demand to avoid long-lived static response caching.
- Local production server honored `PORT=8080`; `/en` returned 200 directly and `/` returned 308. Railway healthcheck changed to `/en` to avoid redirect-only health responses.
- Live Railway diagnosis: domain targeted 3000, runtime listened on 8080, and HTTP logs showed connection refused. Changed only the domain target to 8080; both `/` and `/llms.txt` then returned 200 with no upstream error. The deployment remains `main@9a0b833`, so public `/llms.txt` still contains the upstream template until PR #18 is integrated and deployed.
- Full lint, TypeScript, production build, 15 content tests, and diff whitespace checks pass. No source redeploy or merge was performed.

## Concise About and draft-first PR workflow (2026-10-17)

About now has three continuous, profile-centered paragraphs in every language (English: 155 words), without employer names, metrics, or subsection headings. Detailed experience and capability explanations remain in their own sections. README uses the same English introduction, and English text exports reuse USER.about. ADR 0015 supersedes 0014 and retains the detailed evidence approach outside About.

Regenerated dark-mode English desktop and Portuguese mobile screenshots from the current production build. Checked all five profile languages on desktop and mobile: three paragraphs, no About subheadings or employer names, no horizontal overflow. Verified the current About in the full machine export and both inline text routes. All 15 content tests, full lint, TypeScript, production build, formatting, and diff whitespace checks pass.

PR #20 was converted to draft before work and stays draft during the refinement phase. AGENTS.md now requires draft creation by default, with a ready-for-review transition only at the agreed final QA handoff. No merge or deployment was performed.

## QA correction: README domain changes (2026-10-17)

Addressed Iris review comment discussion_r4304236094 on PR #20. `site:url` now reads the current origin from the marked CTA and replaces that origin across README without reconstructing the block, preserving Explore my portfolio, blank lines, link paths, queries, and fragments. Other origins, including Football, Visualized and similarly named hosts, remain unchanged. GETTING-STARTED.md describes this behavior.

Four new regression tests exercise all ten actual README portfolio links, preserved copy/formatting, repeat invocation, URL suffixes, distinct hosts, invalid inputs, and the real CLI against a temporary README (including failure without writes). They are included in `test:content`; all 19 tests pass. Targeted ESLint, formatting, and whitespace checks pass. No website code or rendering changed, so the latest screenshots remain current and no new app build was needed. PR stays draft for the refinement phase. The review's separate branch-policy observation is not part of this P2 fix.
