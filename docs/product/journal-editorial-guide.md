# Journal editorial guide

This is the living editorial map for writing Journal posts. Use it with [JOURNAL.md](../JOURNAL.md), which owns metadata, routes, visibility and publication checks, and [resume directives](resume-directives.md), which cover the portfolio's professional narrative. Update this guide through normal review as the author's preferences evolve; do not treat one article's outline as a mandatory template for every entry type.

## Authorship and authority

The author defined and validated these editorial rules while reviewing the Journal’s first article. This guide records those decisions as an author-approved standard so subsequent writing routines, including AI-assisted workflows, apply them consistently. Editorial automation serves the author’s stated intent, voice and review decisions.

Read and apply this guide on every Journal assignment. The author may revise it as the writing evolves; update the recorded rules when a change is agreed. Length targets and suggested outlines retain the flexibility stated below, while evidence, public-source boundaries and approval requirements remain applicable to every post. Record substantive revisions with their date and author approval so the current guidance remains traceable.

## Purpose and audience

Explain how a real problem became a product, decision or experiment. Help readers understand the author's motivation, reasoning, alternatives and learning. Technologies support that story; a list of tools or completed tasks is not the story itself.

Write for a curious reader who may not know the project, while giving engineers and technical reviewers a path to deeper evidence. Prefer a few defensible posts over generic tutorials or inflated impact claims. Educational intent is an aim until feedback or evaluation demonstrates an outcome.

## Default length and narrative

For an introductory project retrospective, aim for **750–800 words**, including headings and link labels. Treat this as a working target, not a validation rule. Agree a different length when the subject needs it. A focused decision or experiment may be shorter; do not pad it to match this range.

Use a beginning, middle and end:

1. **Context and motivation.** Begin with the real problem and the author's connection to it. Explain who experiences the problem and why it matters. Give recognizable examples or questions before introducing technical details. Keep the opening readable without a heading if that flows naturally.
2. **Implementation or investigation.** Use one section with connected paragraphs. Explain how the first step enabled the next, how evidence shaped a choice, and what the result raised next. Cover the meaningful stages without reproducing an issue-by-issue changelog. Avoid a separate heading for every tool, task or implementation step.
3. **Conclusion and direction.** Explain what the first delivery made possible and what was learned. Place the broader long-term vision here, after the reader understands the actual work. Distinguish delivered behavior, open questions and possible future directions. Close with a useful next action or question, rather than repeating the stack.

For decisions and experiments, adapt that arc to the problem, alternatives, protocol, evidence, interpretation and next test. Use the entry-type guidance in [JOURNAL.md](../JOURNAL.md).

## Voice and level of detail

- Author articles in English; localized routes translate the interface, not the article.
- Use first person for the author's motivation and choices. Preserve the author's voice without inventing personal anecdotes or overstating individual ownership.
- Prefer concrete, accessible language and examples. Introduce specialized terms when they are needed, and explain their role.
- Connect paragraphs through the work's actual dependencies and reasoning. Avoid disconnected mini summaries, generic transitions and unsupported causal claims.
- Give most stages one concise paragraph. Include a second only when it materially helps the narrative.
- Summarize technical choices and their tradeoffs. Move exhaustive configuration, score tables, test inventories and implementation details into linked evidence unless they are the central subject of the post.

## Images, animation and explanatory context

Use screenshots, diagrams or short animations when they help readers understand the objective, interaction or specific point being discussed. Choose the format for its explanatory value: a screenshot can show the interface and related inputs; a short animation can show a meaningful change over time. Visuals are optional and should earn their place rather than serve as decoration or merely break up text.

Introduce or explain each visual in the surrounding prose or a descriptive caption, close to the relevant paragraph. It supplements the narrative and evidence; it must not carry an essential explanation on its own. Keep the text understandable without the image, provide meaningful alternative text, and distinguish illustrative scenes from measured evidence. Explain what a reader should notice instead of leaving an unexplained image or GIF between paragraphs.

Prefer accurate captures of the actual product over generated interface mockups. Use public-safe assets with appropriate source credit and reuse rights, avoiding private data. Check readability and layout on desktop and mobile. For animation, keep file size and motion modest, provide a static alternative or reduced-motion behavior, and never require playback to understand the point. When autoplay is appropriate, use muted inline playback, keep pause controls visible, and respect reduced-motion preferences by showing a still image until the reader explicitly starts playback. Agree new visuals as part of the article’s editorial review.

## Evidence and contextual links

Every post should offer specific links where readers can inspect important decisions, methods or results in greater depth. Prefer the released product's relevant results or methodology section for user-facing evidence, and a specific public GitHub document, PR, commit or report for engineering detail. A repository-homepage link alone is usually insufficient.

Place links naturally beside the claims they support. Link labels should explain what the reader will find. Do not overload every sentence or turn the article into a reference list. Use immutable commit links for historical numeric results where drift would change the claim; current product sections can use their stable public URLs.

Check the destination, including section anchors. Distinguish verification from assumption: source code showing an anchor exists is not a fresh check of the deployed page. Preserve enough context that the article remains useful without opening its links.

Separate:

- goals from demonstrated outcomes;
- training/selection comparisons from final held-out evaluation;
- aggregate checks from independent reruns of private computation;
- implementation parity from predictive quality;
- observed model responses from real-world causal effects;
- illustrative scenes and sparse evidence from supported generalization;
- completed delivery from future possibilities or commitments.

Record adverse findings and limitations that affect the reader's interpretation. Do not invent adoption, learning gains, performance figures or verification. When sources disagree, reconcile dates and scope before writing. An approved summary supplies context; it does not make every embedded technical claim verified.

## Repeatable writing workflow

1. Read this guide, JOURNAL.md, the project's relevant instructions and the portfolio's resume directives.
2. Gather the author's motivation, available project history, implemented code, decisions, issues/PRs and results. Keep private exports and working notes outside the public repository.
3. Map the proposed narrative to evidence. Identify missing sources, superseded plans and discrepancies. Make progress from available evidence and state material gaps.
4. Agree the angle and approximate length. Draft the complete article outside the portfolio first, with contextual references and an explicit separation of results, limitations and future vision.
5. Ask the author to review wording, narrative and personal claims. Incorporate revisions before implementation. Approval to draft is not approval to commit, publish or deploy.
6. When authorized to implement, preserve the approved prose, add the required metadata and use the normal branch/PR workflow. Keep the article in draft until publication is explicitly authorized; a draft PR and an article's publication status are separate controls.
7. Run the checks and capture requirements in JOURNAL.md and AGENTS.md. Public-route checks apply when preparing an explicitly authorized published entry; drafts are intentionally absent from those routes. Never imply an editor-only draft received public-page QA.
8. Merge and deploy only when separately authorized. A draft flag does not hide source in a public repository.

## Revision policy

Keep this guide reusable and public-safe. Do not copy chat transcripts, private support correspondence, internal source maps or project-specific experiment dumps into it. Capture a newly agreed editorial preference here and keep linked instructions consistent. Technical publication behavior remains owned by JOURNAL.md; architectural changes still follow the ADR process.

## Approved editorial revisions

- **2026-10-22:** the author validated the initial baseline during review of the first Football, Visualized retrospective: motivation, connected narrative, conclusion, introductory length target and specific evidence links.
- **2026-10-22:** the author requested an explicit record of that ownership and consistent application, and approved using contextual images or animation when they help explain the article. Visuals supplement the prose and need explanatory context.
- **2026-10-22:** the author requested muted, looping autoplay for the shot-geometry illustration, with pause controls and a static initial view for reduced-motion preferences. Topic labels should be human-readable and displayed as neutral tag badges.
