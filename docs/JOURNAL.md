# Journal

The journal is a dated record of product and engineering work. It starts empty; publishing a real entry is an editorial action, not a prerequisite for launching the portfolio.

## Content contract

Entries live in `src/features/doc/content/<slug>.mdx`. Start from [the template](templates/journal-entry.mdx.example).

| Field                    | Contract                                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `category`               | `"journal"`; component docs are never journal posts                                                                                                                                                                                   |
| `status`                 | `"draft"` or `"published"`; only explicit publication is public                                                                                                                                                                       |
| `title`, `description`   | Specific headline and short summary                                                                                                                                                                                                   |
| `createdAt`, `updatedAt` | Quoted, real `YYYY-MM-DD` dates; updated date cannot precede publication date                                                                                                                                                         |
| `projectIds`             | Required ordered list of stable ids from `PROJECTS`. `[]` is valid and means the post references no project. Each id must match a project. The same id cannot repeat. Blank items are invalid. The single `projectId` key is invalid. |
| `entryType`              | `"decision"`, `"release"`, `"experiment"`, or `"retrospective"`                                                                                                                                                                       |
| `tags`                   | Optional list of relevant topics                                                                                                                                                                                                      |
| `references`             | Optional `{ label, url }` items; HTTPS links to a PR, commit, release, result, or source                                                                                                                                              |

The slug is the filename and is the permanent address: `/<locale>/journal/<slug>`. Avoid renaming a published file without adding a redirect. Keep project IDs stable for the same reason.

## What makes an entry useful

- **Decision:** the problem and constraints, alternatives, choice, trade-offs, and conditions for reconsideration.
- **Release:** the change as experienced by a user, its scope, verification, and any remaining limitations.
- **Experiment:** the hypothesis, protocol, evidence, interpretation, and next test. Separate measured results from expectations.
- **Retrospective:** what happened, what was learned, and what changes as a result.

Use the actual date of the work. Link evidence without claiming that repository creation or an automated commit alone proves an outcome. Do not publish employer internals, credentials, customer data, or non-public links. A short, defensible note is more useful than a generic tutorial.

## Publish

1. Copy the example to the MDX content directory with a descriptive filename.
2. Write in draft and set `projectIds` to `[]` or to one or more ids from `PROJECTS`. Preview draft text in your editor; unpublished entries are intentionally unavailable through public routes.
3. Complete context, alternatives, decision, verification, limitations, and next steps as applicable. Add exact references.
4. Set `status: "published"`, run `pnpm test:content`, `pnpm check-types`, and `pnpm build`, then review the PR and deploy.
5. Check the entry page, its project filter, RSS, sitemap, and markdown export.

Drafts, future dates, and inherited non-journal content are excluded at the shared data layer. The date cutoff is UTC. Static surfaces reflect the latest build; a future date does not schedule a deployment. Publish/deploy on or after that date. A retired entry should be removed or unpublished and followed by a deployment.

Published entries are newest first, with stable slug ordering for ties. `projectIds` is an ordered display list. An empty list is a post with no project: it appears only on the unfiltered timeline, on no project card, with no project titles and no project links, and its JSON-LD omits `about`. A non-empty list is shown in that order on the meta line, the per-project links, and the JSON-LD `about` array. A project filter (`?project=<id>`) includes an entry when any listed id matches. An unknown `?project=` value still matches nothing. The title link from that timeline carries the same filter onto the entry. Back returns to that timeline URL. Only a direct timeline-title click in the same tab enables browser history, so the scroll position returns with it. A one-use in-memory handoff matches both the timeline and entry URLs and is consumed when the entry mounts. Profile previews, links from other entries, direct/shared visits, and reloads follow the link and open the timeline at the top. Modified clicks keep native link behavior. This shortcut does not use browser storage. The entry page has no older/newer notes. A project card counts a published entry once for each project it lists. The canonical journal URL and the canonical entry URL do not include the filter query.

## Source of truth

- Professional content: `src/features/portfolio/data/`.
- Public MDX visibility: `src/features/doc/data/documents.ts`.
- Journal schema and chronology: `src/features/journal/data/entries.ts`.
- UI: `src/features/journal/components/` and `src/app/(app)/journal/`.

There is no CMS, database, external account, or client-side storage required to publish an entry.

## Interface languages

The five public language routes translate the interface and professional profile. Journal articles keep their original authored English text; other language views display an original-language note. No automatic article translation or duplicate post is created. `/journal/rss` remains a machine-readable English feed without a subscription button.

## Drafts in a public repository

`status: "draft"` and future dates control publication on the website; they do not hide committed source files. In a public repository, anyone can read draft MDX, deleted content in Git history, and references included in it. Keep confidential notes, customer data, employer material, and private career documents outside the repository. Commit only content that is safe to read publicly, even before publication.
