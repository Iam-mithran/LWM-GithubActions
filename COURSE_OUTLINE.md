# GitHub Actions: Zero to Advanced in 3 Days

A hands-on, project-driven course that takes you from *never having written a line of YAML* to *building secure, production-grade CI/CD pipelines* with GitHub Actions. Built for a YouTube audience, it is structured as three self-contained days of roughly **4–6 hours of video each**, mixing short concept explainers with live, buildable demos.

Everything is taught against the **current (2026) GitHub Actions platform and terminology** — current action versions, artifact actions **v4**, OIDC cloud authentication, SHA-pinning and immutable-actions guidance, and least-privilege `GITHUB_TOKEN` defaults.

---

## Who This Course Is For

- **Students** who know a little Git/GitHub and want a job-ready automation skill.
- **Working professionals** — developers, QA, DevOps, SREs, platform engineers — who want to standardize builds, tests, and deployments.
- Anyone migrating from Jenkins, GitLab CI, CircleCI, or Travis who wants the GitHub-native way.

### Prerequisites

- A free **GitHub account** and basic Git (clone, commit, push, pull request).
- Comfort with a terminal and a code editor (VS Code recommended).
- Familiarity with *any* one language/runtime (we use **Node.js** as the running example, plus a Python/Docker example) — you do **not** need to be an expert.
- **No prior YAML, CI/CD, or GitHub Actions experience required.** We start from zero.

---

## Learning Outcomes

By the end of the course you will be able to:

1. Explain CI/CD and how GitHub Actions implements it (events → workflows → jobs → steps → runners).
2. Read and write workflow YAML confidently, using triggers, contexts, expressions, and variables.
3. Consume Marketplace actions correctly and pin them safely.
4. Build multi-job pipelines with dependencies (`needs`), conditionals (`if`), job outputs, and **matrix** strategies.
5. Speed up and connect jobs using **dependency caching** and **artifacts (v4)**.
6. Choose correctly between **reusable workflows**, **composite actions**, and **custom (JavaScript/Docker) actions**, and build each.
7. Manage secrets, **environments**, and **deployment protection rules** (approvals, wait timers, branch policies).
8. Apply security hardening: **least-privilege `GITHUB_TOKEN`**, **SHA pinning / immutable actions**, third-party action risk management, secret scanning, and CodeQL.
9. Authenticate to cloud providers **without long-lived secrets using OIDC**.
10. Publish Docker images to **GHCR**, publish and version your own action, and ship a full capstone pipeline.

---

## Day 1 — Foundations: Your First CI Workflow

**Goal:** Demystify CI/CD and GitHub Actions, get comfortable with YAML and workflow anatomy, and ship a working continuous-integration workflow from scratch.

### Topics

1. **CI/CD & automation fundamentals**
   1. What CI/CD is and the problems it solves (integrate often, catch failures early, ship reliably).
   2. Where GitHub Actions fits vs. other CI tools; the GitHub Actions mental model.
   3. Actions pricing/minutes basics and free-tier expectations (public vs. private repos).
2. **YAML you actually need**
   1. Syntax essentials: key/value, indentation, lists, maps, multi-line strings (`|` and `>`), quoting gotchas.
   2. How YAML maps onto a workflow file.
3. **Workflow anatomy**
   1. The `.github/workflows/` directory and the workflow file.
   2. Core keys: `name`, `on`, `jobs`, `runs-on`, `steps`, `uses` vs. `run`.
   3. How a run executes: events → workflow → jobs → steps; the run/job/step UI and logs.
4. **Triggers (events)**
   1. `push` and `pull_request` (with branch/path filters as a preview).
   2. `workflow_dispatch` (manual runs with inputs) and `schedule` (cron).
   3. Filtering by branches, tags, and paths.
5. **Runners**
   1. GitHub-hosted runners: `ubuntu-latest`, `windows-latest`, `macos-latest`, and what's preinstalled.
   2. `runs-on` labels and when a runner matters (self-hosted is previewed for Day 3).
6. **Using Marketplace actions**
   1. `actions/checkout` (current **v5**) and `actions/setup-node` (current **v6**) — and how to read an action's README/inputs (`with`).
   2. Versioning references: `@v5` major tag vs. exact tag vs. commit **SHA** (why SHA matters — full deep-dive on Day 3).
7. **Variables, contexts, and secrets (intro)**
   1. Default environment variables and custom `env` at workflow/job/step scope.
   2. Contexts and expressions: `${{ github.* }}`, `${{ runner.* }}`, `${{ env.* }}`, `${{ secrets.* }}`.
   3. Adding a first repository **secret** and referencing it safely (never echo secrets).

> **Hands-on:** Build a Node.js CI workflow from an empty repo — trigger on push and pull request, check out the code, set up Node, install dependencies, run lint and tests, and read the results in the Actions tab. Add a manual `workflow_dispatch` run and a status badge in the README.

---

## Day 2 — Intermediate: Real Pipelines (Jobs, Matrix, Reuse)

**Goal:** Turn a single-job workflow into a real, multi-stage pipeline — parallelized, cached, connected by artifacts, and made maintainable with reusable building blocks and proper permissions.

### Topics

1. **Orchestrating jobs**
   1. `needs` for job dependencies and building a DAG (build → test → deploy).
   2. `if` conditionals and status functions (`success()`, `failure()`, `always()`, `cancelled()`).
   3. Passing data with **job outputs** and `steps.*.outputs` (using `$GITHUB_OUTPUT`).
2. **Matrix builds**
   1. `strategy.matrix` across versions/OSes; `include`/`exclude`.
   2. `fail-fast` and `max-parallel` for controlling matrix behavior.
3. **Caching and artifacts**
   1. **Dependency caching** with `actions/cache` (and built-in caching in setup actions).
   2. **Artifacts v4** — `actions/upload-artifact@v4` / `download-artifact@v4`; the v3 actions were fully retired (Jan 30, 2025), so v4 is the standard.
   3. v4 behavior to know: artifacts are **immutable**, artifact **names must be unique** per run (no appending across parallel jobs), and the `upload-artifact/merge` action for combining matrix outputs.
4. **Reuse: choosing the right building block**
   1. **Reusable workflows** (`on: workflow_call`, typed `inputs`/`secrets`/`outputs`) — reuse an entire workflow.
   2. **Composite actions** — bundle multiple steps into one local/shared action.
   3. **Custom actions** — JavaScript vs. Docker container actions (concept + when to reach for each; full build on Day 3).
   4. Decision guide: workflow-level reuse vs. step-level reuse.
5. **Environments, secrets, and token permissions**
   1. **Environments** and environment-scoped secrets/variables (e.g., `staging`, `production`).
   2. Repository vs. environment vs. organization secrets, and precedence.
   3. **`GITHUB_TOKEN` permissions**: the least-privilege model, the `permissions:` block, and setting read-only by default then elevating per-job.
6. **Concurrency and efficiency**
   1. `concurrency` groups and `cancel-in-progress` (e.g., cancel stale PR builds; serialize deploys).
   2. Timeouts, `continue-on-error`, and keeping pipelines fast and cheap.

> **Hands-on:** Build a multi-stage **build → test → deploy** pipeline. Run tests across a **matrix** of Node versions and OSes, cache dependencies, upload a build artifact and consume it in a later job, factor a shared job into a **reusable workflow**, gate the deploy behind a `production` **environment**, and lock down `GITHUB_TOKEN` with an explicit least-privilege `permissions:` block.

---

## Day 3 — Advanced: Security, OIDC, Custom Actions & Deployment

**Goal:** Harden and scale your pipelines the way production teams do — secure supply chain, keyless cloud auth, custom tooling, container publishing, and gated deployments — culminating in a full capstone.

### Topics

1. **Security hardening (supply chain)**
   1. **Pin actions to a full commit SHA**, not a tag/branch — why (the 2025 `tj-actions/changed-files` compromise) and how; using **Dependabot** to bump pinned SHAs.
   2. **Immutable actions / immutable releases** and org-level **SHA-pinning enforcement & action-blocking policies** (available since Aug 2025) that fail unpinned workflows.
   3. Reconfirming **least-privilege `GITHUB_TOKEN`** and safe secret handling; risks of `pull_request_target` and untrusted PR code (poisoned pipeline execution).
   4. **Secret scanning** / push protection and **CodeQL** code scanning as part of the pipeline.
2. **OIDC — keyless cloud authentication**
   1. Why long-lived cloud secrets are risky; how **OpenID Connect (OIDC)** issues **short-lived, scoped tokens** at runtime.
   2. Configuring a cloud provider to trust GitHub's OIDC provider (AWS role / Azure / GCP) and the `id-token: write` permission.
   3. Scoping trust with subject claims (repo, branch, environment).
3. **Self-hosted & scaled runners**
   1. When to use **self-hosted runners** (custom hardware, private network, licensed tools) and their security caveats (avoid on public repos).
   2. Runner groups and a note on modern scaling (Actions Runner Controller / runner scale sets).
4. **Advanced triggers & orchestration**
   1. `workflow_run` (chain workflows) and `repository_dispatch` (external events).
   2. **Reusable workflow chaining** and passing secrets/outputs between them.
   3. **Monorepo strategies**: path filters, per-path pipelines, and change detection.
5. **Deployment gates & approvals**
   1. **Deployment protection rules**: required reviewers/approvals, wait timers, and allowed branches on environments.
   2. Deployment history, and rollbacks/re-runs.
6. **Building and publishing**
   1. Build and push a **Docker image to GHCR** (GitHub Container Registry) with proper `packages: write` permission.
   2. Author, tag/version, and publish your **own custom action** (composite or JavaScript), following semantic version tags + moving major tag.
   3. Debugging: re-run with debug logging, step debugging, and running workflows locally with **`act`**.

> **Hands-on / Capstone:** Ship a complete, hardened delivery pipeline: all third-party actions **pinned to SHA**, least-privilege `permissions`, CodeQL + secret scanning enabled, a **Docker image built and pushed to GHCR**, and a deploy job that authenticates to a cloud provider via **OIDC (no static secrets)** and is gated behind a `production` environment with **required approval**. Bonus: extract a step into a **published custom action** and consume it back in the pipeline.

---

## Build Status

This document is the master blueprint. Each day is expanded into a teaching script, runnable workflow files, and YouTube metadata.

| Day | Teaching script | Workflow files | YouTube metadata | Status |
|-----|-----------------|----------------|------------------|--------|
| Day 1 | [`day-01/README.md`](day-01/README.md) | [`day-01/workflows/`](day-01/workflows/) `01`–`11` | [`youtube/day01_youtube.md`](youtube/day01_youtube.md) | ✅ Recorded |
| Day 2 | [`day-02/README.md`](day-02/README.md) | [`day-02/workflows/`](day-02/workflows/) `12`–`34` + [`day-02/actions/`](day-02/actions/) | [`youtube/day02_youtube.md`](youtube/day02_youtube.md) | ✅ Ready to record |
| Day 3 | — | — | — | 📝 Outline only |

**Workflow files are numbered continuously across the whole course**, not per day — the number is the teaching order. Day 3 will start at `35`.

> ⚠️ **Day 1 / Day 2 boundary changed during recording.** The Day 1 video ran long and stopped after `actions/setup-node`. Day 1 topic **7 (variables, contexts, secrets)** and the **Day 1 hands-on capstone** were moved to the start of Day 2, and their files (`12`–`15`) now live in [`day-02/workflows/`](day-02/workflows/). The topic lists below are the original blueprint; the day READMEs are the source of truth for what is actually taught where.

**Next:** expand Day 3 into a teaching script and workflow files, following the same pattern.
