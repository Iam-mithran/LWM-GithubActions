# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is **course content**, not an application. It backs a 3-day YouTube series ("GitHub Actions: Zero to Advanced in 3 Days", channel LearnWithMithran, repo `Iam-mithran/LWM-GithubActions`). The deliverables are teaching documents and copy-paste-ready workflow YAML — the audience is expected to work **100% in the GitHub web UI with nothing installed locally**.

Two consequences that shape almost every edit:

- **There is deliberately no `.github/workflows/` directory here.** The files in [day-01/workflows/](day-01/workflows/) are *teaching artifacts* that learners copy into their own practice repo. Never move or copy them into `.github/workflows/` — that would make this repo run 15 demo workflows against itself. Nothing in this repo is meant to execute on push.
- **The course promises "nothing to generate."** `sample-app/package-lock.json` is committed on purpose so learners never run `npm install` locally. Don't delete it, don't add dependencies to `sample-app` (it is zero-dependency by design so a demo can't break on a missing package).

## Architecture: coupled artifacts that must stay consistent

The course's teaching content is spread across a few files that must agree with each other. Changing one usually means updating the others:

| Artifact | Role |
|---|---|
| [COURSE_OUTLINE.md](COURSE_OUTLINE.md) | The master blueprint — topic list and hands-on goal for all 3 days. Source of truth for scope. |
| [README.md](README.md) (repo root) | **The single teaching script** *and* self-study guide for the whole course. One document with `# Day 1` / `# Day 2` sections; each numbered section explains a keyword, links to its numbered workflow file, says "what to observe" in the Actions tab, and holds the mermaid diagrams. **There is one README, at the root — not one per day.** |
| `day-NN/workflows/NN-topic.yml` | The runnable demo files, numbered to match the README's section order. |
| `day-NN/actions/<name>/action.yml` | Local composite actions, when a day teaches them. |
| `youtube/dayNN_youtube.md` | Video title, thumbnail brief, description, "what you'll learn" bullets, timestamped chapters, and tags. |

The root README references workflows by relative markdown link (e.g. `[`11-setup-node.yml`](day-01/workflows/11-setup-node.yml)`), so **renaming or renumbering a file means fixing those links**. Insert `04a` style names rather than renumbering.

**The numeric prefix is the teaching order; the folder is not.** Numbers run continuously across the whole course: `01`–`11` = Day 1, `12`–`19` = Day 2, `20`–`34` = Day 3, and Day 3 continues from `35`. Files `12`–`34` all physically live under `day-02/workflows/` regardless of which day teaches them — this is deliberate (the boundaries shifted during recording). **Do not move files between `day-NN` folders to "match" the day**, and do not assume a file in `day-02/` is Day 2 content — check the number against the mapping above and against the README.

Day 1 (§1–7) and Day 2 (§8–15, through status functions) are written in the README. Day 3 (job outputs onward, files `20`–`34`) has its workflow files built but no teaching script yet.

## Conventions for workflow demo files

- Every file opens with a **comment block that teaches the concept** before any YAML. These comments are primary course content — they're what a learner reads when they open the file on GitHub. Preserve and extend them; don't strip them as "noise."
- Most single-concept demos trigger on `on: workflow_dispatch` so they can be run on demand during recording. The trigger-teaching files (02–07) and the capstone (15) are the exceptions that use real events.
- Inline comments call out the failure mode, not just the happy path (e.g. why `paths: 'src/**'` silently matches nothing, why `cache-dependency-path` is needed). That "here's the error message you'll actually see" style is the house style.
- Action versions are pinned to the **2026 platform state** the course teaches: `actions/checkout@v5`, `actions/setup-node@v6`, `actions/cache@v4`, artifact actions v4. Don't downgrade these to older majors seen elsewhere online.
- Several demos **fail on purpose** (a red matrix row, a denied API write, a hung step). That is the lesson, not a bug — check the file's header comment before "fixing" a failure.

Validate YAML after editing any workflow; a plain scalar containing `": "` is the error that actually shows up here:

```bash
python -c "import glob,yaml; [yaml.safe_load(open(f,encoding='utf-8')) or print('OK',f) for f in glob.glob('day-0*/workflows/*.yml')]"
```

## The `sample-app/` path coupling

`sample-app/` sits at the **repo root** (not under `day-01/`) because learners copy the whole folder into the root of their own repo, and the workflows hardcode that location. The folder name appears in three places that must all agree:

- `defaults.run.working-directory: sample-app` — applies to `run:` steps only
- `cache-dependency-path: 'sample-app/package-lock.json'` — for `uses:` steps, always relative to repo root
- `paths: ['sample-app/**']` in trigger filters

That `run:` vs `uses:` path asymmetry is itself a taught lesson in [README.md](README.md#11---your-first-ci-pipeline-capstone) — keep both spellings rather than "simplifying" one away.

## sample-app commands

Zero dependencies; uses Node's built-in test runner. Node is not installed in this dev environment, so these normally only run on a CI runner:

```bash
cd sample-app
npm run lint                        # node --check src/math.js (syntax only, no ESLint)
npm test                            # node --test  — discovers test/*.test.js
node --test test/math.test.js       # a single test file
npm run build                       # node build.js -> dist/ (added for Day 2 artifacts)
```

`package.json` is `"type": "module"` — the app uses ESM `import`/`export`. `dist/` is gitignored: Day 2 workflows rebuild it and upload it as an artifact, which is the point of the build stage.

Day 2 workflows use `npm ci` rather than Day 1's `npm install` (deterministic, and it fails loudly when `package.json` and the lockfile disagree). Adding a *script* to `package.json` doesn't invalidate the lockfile; adding a *dependency* would, and would also break the "zero dependencies, nothing to install" promise.

## Demo/recording workflow

Demos are recorded against a **throwaway practice repo**, not this one: one workflow file is created in the browser, run, watched in the Actions tab, then deleted before the next.

Day 2 breaks that one-file-at-a-time rule in three places, and the READMEs call out the setup explicitly:

- **28** needs **27** present at the same time (caller + callee).
- **29** needs `.github/actions/node-ci-setup/action.yml` copied alongside it.
- **34** (capstone) calls **27**, and needs the `staging` / `production` environments created in repo settings first.

Day 2 also depends on repo-level state a learner must create by hand: the `MY_API_KEY` secret (file 14), and the two environments with a required reviewer on `production` (files 31 and 34).
