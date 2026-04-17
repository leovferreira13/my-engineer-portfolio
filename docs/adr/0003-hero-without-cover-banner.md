# ADR 0003: Homepage hero without cover banner

## Status

Accepted

## Context

The homepage hero inherited a full-width patterned banner with a centered mark above the profile header. For the portfolio MVP (see ADR 0001), identity is better anchored by the avatar and name block alone, without an extra decorative band that reads as template chrome.

## Decision

1. **Remove the cover banner** (`ProfileCover`) from the homepage composition.
2. **Preserve header scroll behavior**: The sticky header mark uses `#js-cover-mark` to decide when to reveal the animated mark. That anchor moves to the profile avatar image so the interaction still tracks the primary hero visual.

## Consequences

- Less vertical chrome above the fold; clearer focus on name, role, and avatar.
- The brand context menu previously attached to the cover area is removed with the banner; header and profile remain the main navigation and identity surfaces.
