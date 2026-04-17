# ADR 0004: Curate professional experience for narrative focus

## Status

Accepted

## Context

The resume-style experience list inherited granular roles at the same employer and early-career internships that diluted the story toward product engineering, backend, and data.

## Decision

1. **Single employer, one timeline row**: When multiple consecutive roles at the same company tell one arc (for example internship then full-time data engineering), they are represented as **one position** with a merged date range and a description that briefly acknowledges the progression.
2. **Remove early placements**: Internships and pre-professional roles that do not support the current positioning are omitted from the public experience data rather than hidden only in the UI, to keep the content model honest and avoid dead anchors.

## Consequences

- The experience section reads shorter and more intentional; recruiters see a coherent QDOIS chapter instead of two stacked titles.
- Re-adding a removed role later is a data-only change in `experiences.tsx`.
- Education remains in the same data file until a dedicated education section exists (see separate backlog issue).
