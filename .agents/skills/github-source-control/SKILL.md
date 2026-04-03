---
name: github-source-control
description: >-
  Manages Git branches, conventional commits, pushes, and pull requests on
  GitHub without pushing to protected branches. Use when the user confirms a
  work item is ready to commit, asks to commit or push changes, open a PR, or
  follow the project's GitHub source-control workflow.
---

# GitHub source control workflow

## When to apply

Follow this skill whenever the user states that a **work item is OK to commit**, or explicitly asks to **commit**, **push**, **branch**, or **open a pull request** under this workflow.

## Protected branches

- **Never push directly to `main` or `staging`.** Changes reach them only via **pull requests**.
- All implementable work lands on a **feature branch**, then a **PR** targets `main` (or `staging` when the user says that integration path is required).

## Base branch for new work

1. **Default:** create the new branch from `main` (update it first: `git fetch origin` and branch from `origin/main` unless the user is already on an up-to-date local `main`).
2. **If `staging` exists and the user says it is required** (e.g. integration queue, release train): create the branch from `staging` or `main` as the user specifies; if unclear, ask once which base they want.
3. Do not assume `staging` exists; verify with `git branch -a` or `git ls-remote` when relevant.

## Branch naming


| Type    | Pattern              |
| ------- | -------------------- |
| Feature | `feat/{short-name}`  |
| Fix     | `fix/{short-name}`   |
| Chore   | `chore/{short-name}` |


- Use **lowercase**, **hyphens** for words, and keep `{short-name}` concise and descriptive (no spaces).
- **Linked open issue:** if the user says the task comes from an open issue, prefix with the **issue identifier** before the descriptive part, for example:
  - `feat/42-user-profile-settings`
  - `fix/108-null-pointer-in-checkout`
  Use the project's real issue key format if not numeric (e.g. `ABC-42-feature-name`).

**New category (e.g. `docs/`, `refactor/`):** do **not** invent a new top-level prefix without documenting the proposed pattern in the PR or chat and **getting explicit user approval** for that naming convention.

## Commits

- Use **[Conventional Commits](https://www.conventionalcommits.org/)**: `type(scope): summary`
- Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `ci`, `perf`.
- Keep the **subject line short**; use the body only when needed for clarity (still concise).
- **One logical work item** can be one commit or a small series; avoid unrelated changes in the same commit.

Examples:

```text
feat(portfolio): add project filter to grid
fix(blog): correct excerpt truncation on mobile
chore(deps): bump eslint to latest patch
```

## Workflow (work item ready to commit)

1. Ensure working tree changes match what the user approved.
2. **Fetch** and choose **base** (`main` by default, or `staging` / user instruction).
3. **Create and checkout** a new branch using the naming rules above.
4. **Stage** only the intended files.
5. **Commit** with a conventional message.
6. **Push** the branch to `origin` (`git push -u origin <branch>`).
7. **Open a pull request** targeting `main` (or `staging` if the user required that path). Set title and body per below, and **assign the maintainer** (see below).

## PR assignee

- On **every** PR, add the **user's own GitHub account** (project maintainer) as **assignee**.
- Resolve the login from `git remote get-url origin` unless the user gives a different handle:
  - SSH: `git@github.com:OWNER/repo.git` → use `OWNER`
  - HTTPS: `https://github.com/OWNER/repo.git` → use `OWNER`
- With GitHub CLI: `gh pr create ... --assignee <login>` or after the fact `gh pr edit <number> --add-assignee <login>`. If `gh pr edit` fails (e.g. GraphQL noise), use the Issues API: `gh api repos/<owner>/<repo>/issues/<number> -X PATCH -f assignees[]=<login>`.
- If opening the PR in the browser, set assignees in the PR sidebar to that same user.

## Pull requests (agent scope)

**In scope:**

- Create the branch, commit, push, and **open the PR**.
- **Assign** the maintainer on every PR (see **PR assignee**).
- Fill in **title** (aligned with conventional style, e.g. same as primary commit subject or a clear summary) and **body** documenting:
  - What was implemented or fixed (feature/fix summary).
  - How to verify (if useful).
  - Link to the **issue** if one was given (`Fixes #123` / `Closes #123` when appropriate).

**Out of scope:**

- **Do not** request, wait for, or act on **review approvals** or merge decisions unless the user explicitly asks for something else in the moment.
- **Do not** merge the PR unless the user explicitly instructs you to merge (merging may still be restricted by repo rules).

Prefer **`gh pr create`** when GitHub CLI is available and authenticated; otherwise provide the **compare URL** (`https://github.com/<owner>/<repo>/compare/...`) and exact PR metadata (including **assignee = maintainer**) so the user can open it in one step, or use another method the user has configured.

## Quick checklist

- Branch from `main` unless user/staging rules say otherwise
- Branch name matches `feat/` / `fix/` / `chore/` (+ issue prefix if applicable)
- No push to `main` or `staging`
- Conventional commit message, brief
- PR opened with documented feature/fix; **maintainer added as assignee**; no approval workflow handled by the agent

