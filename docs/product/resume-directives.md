# Software engineer resume directives

Product reference document: principles to guide content, tone, and priorities when the site (portfolio, blog, and derived materials) acts as a **career landing page**, aligned with the article *Software Engineer Resume* (Austen McDonald and Neo Kim, System Design One).

**Source material:** `Software Engineer Resume Directives.pdf` (newsletter post transcript).

---

## 1. Product vision: resume as a landing page

- Treat the resume as a **product**, not a static file.
- Goal: move each reader type to **take the next action** in the hiring funnel (pass ATS screening, get recruiter outreach, advance to technical review, win the hiring manager).
- The same logic applies to **LinkedIn** (literally a landing page) and, for this product, to **portfolio + blog**: complementary surfaces where impact, clarity, and hierarchy matter as much as in the resume PDF.

**Site implication:** posts and pages should reinforce **measurable impact**, **clear specialty**, and **verifiable proof**—what the article demands of resume bullets.

---

## 2. The four “users” of the resume

Each reads with different depth and intent; the material must serve **all four**.

| Persona | What they do | What they need to extract |
|--------|----------------|----------------------------|
| **Machines (ATS)** | Parse the document, score against the role | Structured data, keywords aligned to the posting, indexable technologies |
| **Recruiters / sourcers** | High-volume triage, seconds per resume | Visible minimum requirements, a hook aligned with the hiring manager’s mental model, brevity |
| **Interviewers** | Technical screening, interviews (including behavioral) | Conversation topics, technical depth, business impact, few red flags |
| **Hiring managers** | Deeper read of finalists | Fit with the team’s work, measurable scope and impact, ownership and growth signals, clear visual hierarchy |

### 2.1 ATS

- **Clean, parseable** formatting: overly creative layouts, tables, problematic multi-column designs, text boxes, icons, or images can break text extraction.
- **Standard** section titles (avoid “My journey” instead of “Professional experience”).
- **Minimum qualifications** easy to find (automated filters often mirror the job description).
- **Keywords** coherent with the posting; **named technologies** where they can be indexed.
- Modern systems do semantic matching (e.g. “built ML pipelines” and “ML infrastructure”); you do not need every variant, but accomplishments must be **substantively relevant** to the role.

### 2.2 Recruiters

- Decision often in **5–7 seconds** after the summary and a few bullets.
- Immediate check of years of experience, education, titles similar to the posting.
- Fast visual path to something **exciting**: recognizable brand, relevant project, repeated technology aligned with the role.
- **One page** in most cases (rare justified exceptions, e.g. executives).

### 2.3 Interviewers

- **Easy-to-find** accomplishments aligned with the company/team’s work.
- **Defensible** claims under scrutiny (technical detail in bullets).
- Signals of **technical depth** and **leadership**.
- Red flags: very short stints, unexplained gaps, narrative that does not sustain an interview.

### 2.4 Hiring managers

- Evidence that past work **looks like** what they are hiring for.
- **Measurable impact** with appropriate scope.
- Signals of **autonomy**, shipping work, and adaptability (including the article’s current read on readiness for ownership / “agentic” coding).
- **Visual hierarchy** so the important facts surface first.

---

## 3. Expected structure (baseline order)

Reference order; **adapt** to profile (e.g. new grads elevate projects; senior candidates can compress education).

1. **Contact** — name, email, LinkedIn (clickable link in PDF); phone if you want calls; GitHub/site only if they are **strong hiring assets** (see section 5).
2. **Summary** — 2–3 sentences, **always include** (strong opinion in the article), at the top.
3. **Work experience** — history with accomplishments, not only tasks.
4. **Education** — degrees, relevant coursework, honors.
5. **Projects** — side work, open source, portfolio (prioritize by profile).
6. **Skills** — honest “keyword soup” useful to machines and recruiters.

**Rule:** do not make readers hunt; they expect blocks in roughly this order.

---

## 4. Contact and links

- Include **LinkedIn** with a live URL; reasonable profile and cover photos.
- **GitHub / personal site:** only if they add value: repos with READMEs, tests, deployment; site live and representative.
- **US citizenship:** if applicable and not obvious from context, note it in the contact area.
- Avoid social links irrelevant to the role (exception: applying to a social company where the profile **is** the portfolio).

---

## 5. Summary

- **At most 2–3 sentences**, **tailored to the role**: after reading, it should be clear **why** you fit that job.
- **Do not outsource the summary to generic AI:** interchangeable copy (results-driven, passionate, cross-functional, etc.) is easy to spot and does not communicate identity.
- Avoid lines that could describe **any** candidate; if it fits everyone, it differentiates no one.
- Prefer: **product type** (B2B, consumer, e-commerce), **technical specialty** (performance, design systems, accessibility), **differentiator** vs other applicants.
- Writing principle: **every line halves readership**—shorter copy is more likely to be read.
- A human, “creative” summary can beat AI buzzwords as long as it does not obscure fit with the role.

**Blog implication:** introductions and author bios should follow the same logic—specific, with a technical or product angle, not generic filler.

---

## 6. Experience bullets: impact before activity

Guiding formula: **“Delivered [business value] using [technology / approach].”**

- **Lead with the outcome**, not the activity; the activity supports the outcome.
- **Quantify and show scope:** percentages, dollar amounts, users, latency, project duration (numbers imply difficulty).
- Bullets become **interview topics**: they should be interesting and **defensible**.
- Include **leadership signals** (initiative, driving a project, mentorship) even without a manager title.
- **Order by relevance / impact**, not necessarily chronology within the same role.
- **Embed technologies** in accomplishments (helps ranking and credibility), not only in a trailing skills list.

### 6.1 Weak vs strong examples (from the article)

| Weak | Strong |
|------|--------|
| Worked on checkout and fixed bugs. | Reduced checkout abandonment by 12% by identifying and fixing a race condition in the payment flow using React and Stripe’s API. |
| Responsible for migrating the database. | Led a 6-month migration of 50M records from MySQL to PostgreSQL, coordinating across 3 teams with zero-downtime cutover. |
| Helped improve the CI/CD pipeline. | Cut deploy times from 45 minutes to 8 minutes by parallelizing test suites and implementing Docker layer caching, adopted by 12 engineering teams. |
| Mentored junior engineers. | Mentored 3 junior engineers through their first production launches, with one promoted to mid-level within 8 months. |

**Blog implication:** tutorials and case studies should, when possible, spell out **outcome**, **scope**, and **stack**—the same “proof” pattern as the resume.

---

## 7. Projects and proof of work

- Unpaid projects matter **most** for: **new grads** with little paid experience; or **pivoting** into a new technical area (e.g. AI without formal role history).
- Outside those cases, projects are **marginal**: they may tip a close call; they rarely carry the file alone.
- Prioritize vertical space for relevant **paid** work.
- **GitHub:** include if you have consistent contributions and polished repos (README, tests, deploy); pin the best; otherwise omit.
- **Side projects:** generic lines (“AI-powered todo app in React Native”) are weak; prefer a line with **personality and context** that shows initiative and genuine interest.
- **Technical writing / blog:** signals communication and depth; if you link it, make the **2–3 best** pieces easy to find.

**Product implication:** the blog is not “hobby filler”; it is a **proof asset**—a few strong posts beat many generic ones.

---

## 8. Skills section

- Keep a **ranked list** of technologies: keyword discovery and quick confirmation (“must know React”).
- List **only what you know** well enough to discuss in depth; inflated lists invite hard questions and hurt credibility.
- Avoid low-signal noise (e.g. padding with obvious basics like HTML).

---

## 9. Tailoring

Tailoring every application is expensive; suggested strategy:

- Extra effort for high-value **target companies**.
- Maintain a **small set of versions** by role type (e.g. senior IC front-end vs tech lead vs AI side projects vs data engineering).

### 9.1 How to read signal from the job description

1. **Repeated terms** weigh more than single mentions.
2. Separate **requirements** from **nice-to-haves**; focus energy on what appears at the **top** of the posting.
3. Identify the **core hiring problem** (“own our data pipeline” → reliability and ownership; “scale to 10x users” → performance and system design) and **mirror that language** honestly.
4. Distinguish **explicit tech**, **general skills**, and **filler** (“strong communication” on every post should not consume scarce resume space).

**Tool suggested in the article:** paste the JD into an LLM to extract the top ~10 concepts and compare with your resume—as **analysis**, not a substitute for final copy.

### 9.2 Adjustment tactics

- Tune the **summary** to the role’s problem.
- **Reorder sections** (e.g. lift AI projects above experience if that is your only strong signal for AI roles).
- **Reorder bullets** within roles.
- **Expand or compress** roles by relevance; remove experience that **hurts** the story.
- **Reorder skills** or foreground what the posting requires.

---

## 10. Design, formatting, and scannability

- It does not need to be pretty; it needs to be **easy to use** for all four personas.
- **Most important content at the top** of the page and at the top of each section.
- **Clear visual flow** (type size and weight); use color sparingly.
- **PDF that exports clean text**; paste into Google Docs—if layout breaks, ATS may misread too.
- **One page** as default; save space: margins (down to ~1/2" per side), role headers on one line, older roles on one line or without bullets.
- **Two-column** layout optional: narrower column for contact, skills, education.
- **Hierarchy:** sub-bullets, strategic bolding; uniform blocks tire the eye.
- **Templates:** they do not get you hired; pick one that follows these principles and invest in **content**.

### 10.1 Scannable experience

- **Recognizable brands** and high-impact projects should jump out; readers weight the **start** of each section.
- **Minimum qualifications** (education, years) visible early (summary when appropriate).
- **More visual weight** on recent experience and flagship employers; compress what is distant in time or rarely read.

### 10.2 Gaps and awkward situations

- Reduce **gap** noise when reasonable (e.g. drop months on roles that hide an intra-year gap).
- Recent layoff: consider whether to update the end date immediately (the article notes resumes are expected to be somewhat stale for a period).
- Short-lived startups that shut down: a **one-line** explanation avoids unfair negative assumptions.

---

## 11. Common mistakes and what to avoid

- Empty **buzzwords** (results-driven, synergy, leverage…) and **interchangeable** bullets.
- **Zero impact:** activities only (“worked on the payments team”) with no sense of what changed.
- **Hard-to-read templates:** a reader should be able to decide in ~3 seconds.
- **Irrelevant information:** every line that does not serve the reader is a line where they might stop.
- **Wall of text:** no hierarchy, bolding, or visual breaks.
- **Unnecessary personal data:** age, photo (US context), full address—bias risk and wasted space.
- **Irrelevant jobs** without transferable skills or gap-filling purpose.
- **Social media** outside a direct professional use case.
- “**References available upon request**”—noise.
- **Hobbies** unless directly relevant to the company/role.
- **ATS tricks** (e.g. white text): high reputational risk.

---

## 12. Mindset: the resume is never “done”

- **Good enough to apply**, then **iterate** with feedback (peers, mentors, people who have hired engineers).
- If a bullet **does not survive** interview questions, cut it or prepare better.
- Expect **multiple revisions** (the article cites on the order of 3–4 with coaching clients).

**Product implication:** portfolio and blog should also evolve with **real feedback** (metrics, comments, interviews), like any product.

---

## 13. Executive summary (product checklist)

1. All four readers served: **ATS, recruiter, interviewer, hiring manager**.
2. **Standard**, parseable structure; **one page** in most cases.
3. **Short, human, role-specific summary**—not generic, not “AI-only.”
4. Bullets: **outcome → technology / context**, quantified, defensible, tech embedded.
5. **Honest skills** + **tailoring** by role type or target company.
6. **Visual hierarchy** and clean PDF; brands and impact **above the fold** mentally.
7. **No noise** (irrelevant personal detail, buzzwords, ATS tricks).
8. **Continuous iteration** based on real use in the hiring process.

---

## 14. Alignment with this repository (vision)

- The article positions the resume as a **product** and **landing page**; this site already treats the portfolio as a product in existing content (“Treat it like a product, not a static resume”).
- **Blog:** channel for **depth and communication**—aligned with technical writing as proof; when linked from a resume or LinkedIn, highlight the **2–3 strongest** posts.
- **LLMs and exportable content** (`llms.txt`, aggregated profile): keep copy **structured, factual, and scannable**, consistent with what ATS and recruiters extract from well-built PDFs.

This file should be the **normative reference** when defining copy, section structure, and quality criteria for career materials in this product.
