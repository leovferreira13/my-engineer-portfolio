# Decision Log

The journal is a dated record of product and engineering work. It starts empty; publishing a real entry is an editorial action, not a prerequisite for launching the portfolio.

## Content contract

Entries live in `src/features/doc/content/<slug>.mdx`. Start from [the template](templates/journal-entry.mdx.example).

| Field                    | Contract                                                                                 |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| `category`               | `"journal"`; component docs are never journal posts                                      |
| `status`                 | `"draft"` or `"published"`; only explicit publication is public                          |
| `title`, `description`   | Specific headline and short summary                                                      |
| `createdAt`, `updatedAt` | Quoted, real `YYYY-MM-DD` dates; updated date cannot precede publication date            |
| `projectId`              | Stable ID from `PROJECTS`; validation fails for unknown projects                         |
| `entryType`              | `"decision"`, `"release"`, `"experiment"`, or `"retrospective"`                          |
| `tags`                   | Optional list of relevant topics                                                         |
| `references`             | Optional `{ label, url }` items; HTTPS links to a PR, commit, release, result, or source |

The slug is the filename and is the permanent address: `/<locale>/decisions/<slug>`. Avoid renaming a published file without adding a redirect. Keep project IDs stable for the same reason.

## What makes an entry useful

- **Decision:** the problem and constraints, alternatives, choice, trade-offs, and conditions for reconsideration.
- **Release:** the change as experienced by a user, its scope, verification, and any remaining limitations.
- **Experiment:** the hypothesis, protocol, evidence, interpretation, and next test. Separate measured results from expectations.
- **Retrospective:** what happened, what was learned, and what changes as a result.

Use the actual date of the work. Link evidence without claiming that repository creation or an automated commit alone proves an outcome. Do not publish employer internals, credentials, customer data, or non-public links. A short, defensible note is more useful than a generic tutorial.

## Publish

1. Copy the example to the MDX content directory with a descriptive filename.
2. Write in draft and set a valid project ID. Preview draft text in your editor; unpublished entries are intentionally unavailable through public routes.
3. Complete context, alternatives, decision, verification, limitations, and next steps as applicable. Add exact references.
4. Set `status: "published"`, run `pnpm test:content`, `pnpm check-types`, and `pnpm build`, then review the PR and deploy.
5. Check the entry page, its project filter, RSS, sitemap, and markdown export.

Drafts, future dates, and inherited non-journal content are excluded at the shared data layer. The date cutoff is UTC. Static surfaces reflect the latest build; a future date does not schedule a deployment. Publish/deploy on or after that date. A retired entry should be removed or unpublished and followed by a deployment.

Published entries are newest first, with stable slug ordering for ties. Each page links back to its project, source repository, live app, and adjacent notes for that project. Project pages show the count of published notes. Query filters do not change the canonical journal URL.

## Source of truth

- Professional content: `src/features/portfolio/data/`.
- Public MDX visibility: `src/features/doc/data/documents.ts`.
- Journal schema and chronology: `src/features/journal/data/entries.ts`.
- UI: `src/features/journal/components/` and `src/app/(app)/journal/`.

There is no CMS, database, external account, or client-side storage required to publish an entry.

## Interface languages

The five public language routes translate the interface and professional profile. Decision-log articles keep their original authored English text; other language views display an original-language note. No automatic article translation or duplicate post is created. `/journal/rss` remains a machine-readable English feed without a subscription button.
