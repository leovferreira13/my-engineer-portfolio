# Football, Visualized article illustration

Author-approved original editorial illustration, 2026-10-22. Assets live in `public/journal-assets/football-visualized/` and illustrate the introductory questions in `building-football-visualized.mdx`.

The graphic uses the Sports Data Visualizer field convention (105 × 68 m and 7.32 m goal) and its goal-opening geometry, from [`lib/scenario.ts`](https://github.com/leovferreira13/sports-data-visualizer/blob/main/lib/scenario.ts) and [`lib/geometry.ts`](https://github.com/leovferreira13/sports-data-visualizer/blob/main/lib/geometry.ts). A shooter follows a 20 m radius around the goal centre, from a central position to a 60-degree lateral offset and back. Distance and opening angle match the project functions at the central, intermediate and offset positions: 20 m throughout; openings 20.740758°, 17.032964° (36-degree offset) and 10.721511° (60-degree offset).

The angle is `atan2(abs(cross(post1 - shooter, post2 - shooter)), dot(post1 - shooter, post2 - shooter))`, in degrees. Both drawing axes use the same scale. The dotted arc is the constant-distance path; the yellow lines join the shooter to the posts.

This is an explanatory geometry scene, not an observed shot, model evaluation or xG probability. A real drag also changes other model inputs. No source shot records, external photographs or third-party diagram assets are included. Labels were rasterized with Noto Sans; no font files are distributed.

- `shot-geometry.webm`: silent animation with muted, inline, looping autoplay and native pause/play controls. Reduced-motion readers initially see the poster with explicit playback available; a live preference change pauses the animation.
- `shot-geometry-poster.png`: the intermediate frame displayed before playback, including for readers who prefer reduced motion or browsers that decline autoplay.
- `shot-geometry-comparison.png`: central and lateral positions side by side, available in a disclosure with image zoom.

The adjacent caption explains the point independently of playback. The static comparison remains available even when video playback is unsupported. Editorial usage and future revisions follow the [Journal editorial guide](../product/journal-editorial-guide.md).
