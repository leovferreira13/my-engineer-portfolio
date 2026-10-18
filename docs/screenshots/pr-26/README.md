# PR 26: Journal Back regression evidence

Captured on 2026-10-18 from a local production build with Chrome Headless Shell 155.0.8059.84, Node 24.19.0 and pnpm 10.33.0. The repository targets Node 22; that runtime was not used for this check.

The four captures use fifteen temporary local journal entries, removed after validation. No fixture MDX is committed. The regular profile captures were regenerated before introducing these fixtures.

| Flow                                                        | Before  | After   | `history.back()` calls |
| ----------------------------------------------------------- | ------- | ------- | ---------------------- |
| `/en/journal` → entry → Back                                | 1000 px | 1000 px | 1                      |
| `/en/journal?project=sports-data-visualizer` → entry → Back | 1000 px | 1000 px | 1                      |

- [Unfiltered before](unfiltered-before.png) / [after](unfiltered-after.png)
- [Filtered before](filtered-before.png) / [after](filtered-after.png)

Additional browser assertions passed:

- Timeline → profile preview → entry → Back opens `/en/journal` without popping history.
- Timeline → first entry → second entry → Back opens `/en/journal` without popping history.
- Ctrl, Cmd, Shift, Alt, middle and right clicks are not prevented by the Back handler. A following plain click still uses history.
- Direct entry visits and entry reloads use the timeline link.
- A throwing `window.sessionStorage` getter (`SecurityError`) does not break the timeline or Back.

Implementation validation: `pnpm test:content` (34 passed), `pnpm check-types`, `pnpm lint`, and `pnpm build` all exited 0. The build emitted an existing Turbopack file-tracing warning through `next.config.ts` and `remark-component.ts`.
