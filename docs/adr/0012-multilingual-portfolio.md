---
type: ADR
id: "0012"
title: "Five explicit portfolio languages"
status: active
date: 2026-10-17
---

## Context

The main professional portfolio must serve the same five languages as Football, Visualized, while English remains the default. Translating only the header would leave experience, project context, document language, and metadata inconsistent.

## Decision

**Use real locale-prefixed App Router pages for `en`, `br` (HTML `pt-BR`), `nl`, `es`, and `de`, with an explicit language control beside the theme control.** Root and legacy portfolio URLs redirect to English. Locale selection does not depend on cookies or browser language. UI messages and professional narratives are curated in source dictionaries, keyed to stable role/education IDs. Company names, project IDs, technologies, dates, and measured outcomes retain their meaning.

The request proxy supplies the locale to server components and the root HTML document. Language choices use document navigation, preserving page, query, and anchor, so shared layouts, `<html lang>`, title, and content change together. Regular navigation remains client-side within the chosen language. Localized pages have canonical URLs and alternate-language links in metadata and sitemap.

## Options considered

- **Locale URLs and server rendering (chosen):** explicit, shareable language versions with correct document language and metadata.
- Cookie-only selection: hides the language from shared links and indexing.
- Client-side string replacement: risks mixed-language frames and inconsistent metadata.
- Rewriting every locale URL to a single internal page: obscures App Router route boundaries; real locale segments are clearer to validate and maintain.

## Consequences

Professional copy changes require equivalent dictionary updates and tests. Language changes load a complete document; no mixed-language patching is needed. Existing decision-log entries remain in their original authored language, with translated surrounding UI and a visible original-language note. Article translations can be introduced explicitly when there is published content to translate.
