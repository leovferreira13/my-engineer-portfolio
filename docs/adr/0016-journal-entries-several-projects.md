---
type: ADR
id: "0016"
title: "Journal entries reference several projects"
status: active
date: 2026-10-18
---

## Context

ADR 0011 linked each published journal entry to one project id and put project-scoped previous/next notes on the entry page. A release note can cover more than one public project, and some notes are not about a project in the catalog. No journal MDX is on `main`. The catalog still contains only Football, Visualized. Adding projects is a separate delivery. ADR 0010 still owns catalog ids. ADR 0013 still owns the Journal name and routes.

## Decision

**A published journal entry requires `projectIds`, a list of catalog ids that may be empty. Order is display order only. An empty list means the post references no project.** Each id must exist in `PROJECTS`, must be a non-empty string, and must appear once. The old `projectId` key is rejected. A missing `projectIds` key is rejected. `[]` is the explicit empty value. A `?project=` filter includes the entry when any listed id matches, so an empty list appears only on the unfiltered timeline and on no project card. The title link from that timeline carries the active filter onto the entry URL. Back returns to that same timeline URL. Only when the entry was opened directly from that timeline title in the same tab does Back pop history, restoring the scroll position with the filter. A one-use in-memory handoff matches both URLs and is consumed on entry arrival; it requires no browser storage. Modified clicks retain native link behavior. Otherwise Back is a link and the timeline opens at the top. With no filter, Back returns to the unfiltered timeline. The entry page has no older/newer notes. It renders project links only when the list is non-empty. JSON-LD `about` is an array of `SoftwareSourceCode` in list order when the list is non-empty, and the property is omitted when the list is empty. Canonical journal and entry URLs omit the filter query. This supersedes ADR 0011, including that record's singular project ID and its project-scoped previous/next links.

## Options considered

- **Required `projectIds`, empty list allowed, reject `projectId`** (chosen). One key. `[]` is visible in review. A missing key cannot be mistaken for "no project".
- **Omit the key to mean no project.** Two shapes. The owner asked for an explicit list.
- **Require at least one id.** The owner wants posts that reference no project. Issue #24, as updated 2026-10-18T01:46:54Z, allows the empty list.
- **Keep older/newer scoped to the first id.** The owner rejected a primary project for navigation.
- **Back as a link only.** The filter is correct and scroll is lost.
- **`router.back()` only, filter not on the entry URL.** A shared link does not know the filter.

## Consequences

Authors write `[]` or a list of catalog ids. Validation fails for an unknown id, a duplicate, a blank item, a non-string item, a missing list, or the old key. It does not fail for `[]`. An empty-list post is absent from every project filter and every project card. Direct and shared visits open the right timeline at the top. Revisit a custom scroll offset only if `router.back()` resets scroll in practice.

## Advice

Eva wrote issue 24. The owner validated the entry-page rule on 2026-10-17 (Back returns to the same timeline filter and scroll position; older/newer notes are removed) and, after reading the revised plan, decided that `projectIds` may be empty.
