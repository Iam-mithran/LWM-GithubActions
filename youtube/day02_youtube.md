# Day 2 — YouTube Metadata

---

## Video Title

GitHub Actions Full Course — Multi-Job Pipelines, Matrix, Caching, Artifacts & Reusable Workflows | Day 2

---

## Thumbnail

**Main text (large, bold):** `Build → Test → Deploy`
**Sub text:** `Day 2 — GitHub Actions Zero to Hero`
**Suggested visual elements:**
- Dark GitHub background (#0D1117) with GitHub Actions blue accent (#2088FF)
- A **pipeline graph** on the right: 3 connected job boxes with green ticks, and the last one showing a yellow ⏸️ "Waiting for approval" badge
- A 3×3 **matrix grid** icon on the left (Ubuntu / Windows / macOS × Node 20 / 22 / 24)
- `MATRIX · CACHE · ARTIFACTS` badge in a bright pill
- Channel name: LearnWithMithran (bottom corner)

**Key message to convey at a glance:** One job becomes a real pipeline — parallel, cached, and gated by a human before production.

---

## Description

*Welcome back to Learn With Mithran! On Day 1 you shipped a single CI job. Today we turn it into a real, multi-stage pipeline — the kind production teams actually run.*

We start by finishing Day 1's remaining topics — environment variables and their three scopes, contexts and expressions, repository secrets, and the full Node.js CI capstone — then go straight into real pipeline engineering. You'll connect jobs with `needs`, run them conditionally with `if` and status functions, pass data between jobs with outputs, test across a **matrix** of Node versions and operating systems, **cache** dependencies, share files with **artifacts v4**, and stop copy-pasting YAML forever using **reusable workflows** and **composite actions**. We finish by locking down `GITHUB_TOKEN` with least-privilege `permissions`, gating production behind a **required human approval** using environments, and controlling cost with `concurrency` and timeouts. 🚀

**Still 100% browser-based — no local setup, nothing to install.** Every workflow file used in this video is prebuilt in the GitHub repo below. Copy, commit, watch it run.

📂 *Get the course notes, diagrams and all workflow files from GitHub:*
- https://github.com/Iam-mithran/LWM-GithubActions

♾️ *Join the Discord:*
- https://discord.gg/N7GBNHBdqw

📢 *Follow Us on Social Media:*
- https://www.instagram.com/learnwithmithran/

☎️ *Contact Information:*
Phone Mithran: +91 91500 87745
Greens Technologys, Perumbakkam (https://maps.app.goo.gl/u34U3rXu8zPFfQh5A)

🧩 *Put the pieces together with this reference – watch here!*

☁️ Master core AWS services step-by-step – watch the full AWS playlist here (https://youtube.com/playlist?list=PLPLf8iqkntdMxtXT04-TG1WzDvBPUJ3qk&si=CFx_IMjpWcufkTme)
🛠️ Get hands-on with top DevOps tools and workflows – dive into the DevOps playlist here (https://youtube.com/playlist?list=PLPLf8iqkntdNaU9GbaZckoQalKPRJMvT6&si=eUAHHibEmDI4bQuP)
🧠 Level up your coding with practical Python lessons – start learning here (https://youtube.com/playlist?list=PLPLf8iqkntdNefseVlDOaRQ7zersK79AI&si=6UUBU90Q6Ov96g96)
🐧 Build your Linux fundamentals from scratch – explore the Linux series here (https://youtube.com/playlist?list=PLPLf8iqkntdMew0yP5Ad9pbaZki0Wf-2w&si=4uJ2EAYamtO6PZgz)

🎯 *Topics Covered*:

🔹 Environment variables and their three scopes — workflow, job and step, and which one wins
🔹 Contexts and expressions — `github`, `runner`, `env`, `needs`, `matrix`, `vars` and the `toJSON` debugging trick
🔹 Repository secrets — masking, the fork-PR rule, and secrets vs variables
🔹 Day 1 capstone — the complete Node.js CI pipeline, live
🔹 Why every job runs on its own machine, and what that breaks
🔹 `needs` — turning parallel jobs into a build → test → deploy DAG
🔹 `if` conditionals — and why `if: 'false'` is actually TRUE
🔹 Status functions — `success()`, `failure()`, `always()`, `cancelled()` and the invisible default
🔹 Job outputs — `$GITHUB_OUTPUT`, the three-link chain, and multi-line values
🔹 Matrix builds — versions × operating systems, `include` and `exclude`
🔹 `fail-fast` and `max-parallel` — controlling a matrix
🔹 Dependency caching — cache keys, `hashFiles()`, `restore-keys` and the immutable-key bug
🔹 Cache vs artifact — the difference people get wrong
🔹 Artifacts v4 — upload, download, and why v3 workflows now fail outright
🔹 The v4 matrix trap — "an artifact with this name already exists" and how to fix it
🔹 Merging matrix artifacts with `upload-artifact/merge` and `merge-multiple`
🔹 Reusable workflows — `workflow_call`, typed inputs, secrets and outputs
🔹 Composite actions — bundling steps, the mandatory `shell:`, and the checkout chicken-and-egg
🔹 Reusable workflow vs composite action vs custom action — the decision guide
🔹 `GITHUB_TOKEN` and least-privilege `permissions` — why the block is not additive
🔹 Environments — scoped secrets, secret precedence, and deployment URLs
🔹 Required reviewers — pausing a deploy until a human clicks Approve
🔹 `concurrency` — cancelling stale PR builds vs serialising deploys
🔹 `timeout-minutes` and `continue-on-error` — plus `outcome` vs `conclusion`
🔹 Full capstone — build → test → deploy with approval, artifacts and least privilege

📌 *Who Is This Video For:*

💻 Anyone who finished Day 1 and wants a real pipeline, not just a single job
🧑‍🎓 Students and freshers preparing for DevOps and cloud job roles
🛠️ Developers whose CI is slow, flaky, or full of copy-pasted YAML
🚀 DevOps, SRE and platform engineers standardizing builds and deployments
🔁 Anyone migrating multi-stage pipelines from Jenkins, GitLab CI or CircleCI
🏢 Teams that need approvals and least-privilege tokens before they can ship

🔍 *Chapters:*
0:00 Intro — From One Job to a Real Pipeline
3:00 Recap of Day 1 + What's New in the Sample App
8:00 Environment Variables & the Three Scopes
18:00 Contexts and Expressions (+ the toJSON Debug Trick)
30:00 Secrets — Masking, Fork PRs, Secrets vs Variables
40:00 Day 1 Capstone — The Full Node.js CI Pipeline
52:00 Many Jobs — Parallel by Default, and Fully Isolated
1:00:00 `needs` — Building a Build → Test → Deploy DAG
1:10:00 `if` Conditionals on Jobs and Steps
1:20:00 Status Functions — success, failure, always, cancelled
1:30:00 Job Outputs — Passing Data Between Jobs
1:42:00 Matrix Builds — One Job, Many Versions
1:52:00 Matrix `include` / `exclude` and Multi-OS Grids
2:02:00 `fail-fast` and `max-parallel`
2:10:00 Caching Dependencies — Keys, hashFiles and restore-keys
2:24:00 Cache vs Artifact — The Difference That Matters
2:30:00 Artifacts v4 — Upload and Download Between Jobs
2:42:00 The v4 Matrix Trap and How to Merge Artifacts
2:52:00 Reusable Workflows — `workflow_call` and Typed Inputs
3:06:00 Composite Actions — Bundling Repeated Steps
3:18:00 Which One Do I Use? The Reuse Decision Guide
3:24:00 GITHUB_TOKEN and Least-Privilege `permissions`
3:36:00 Environments, Scoped Secrets and Secret Precedence
3:46:00 Deployment Gates — Requiring a Human Approval
3:56:00 Concurrency — Cancel Stale Builds, Serialise Deploys
4:06:00 Timeouts and continue-on-error (outcome vs conclusion)
4:14:00 🚀 Capstone — The Full Build → Test → Deploy Pipeline
4:34:00 Day 2 Cheat Sheet & Recap
4:40:00 What's Next — Day 3 Preview

⏭️ *Coming in Day 3:* supply-chain security and pinning actions to a commit SHA, OIDC keyless authentication to AWS/Azure/GCP, building and publishing your own JavaScript and Docker actions, publishing images to GHCR, self-hosted runners, `workflow_run` and monorepo strategies, CodeQL and secret scanning, and the full hardened capstone pipeline.

👍 If this video helps you, like, subscribe, and turn on notifications for more hands-on content on GitHub Actions, DevOps, Azure, AWS, Linux, and Python.

#GitHubActions #CICD #DevOps #GitHubActionsTutorial #CIPipeline #MatrixBuild #ReusableWorkflows #CompositeActions #GitHubArtifacts #DependencyCaching #ContinuousIntegration #ContinuousDeployment #GitHub #DevOpsForBeginners #WorkflowAutomation #LearnWithMithran #GitHubActionsCourse #BuildAutomation #GitHubWorkflow #DevOpsTutorial #DeploymentApproval #LeastPrivilege #GitHubEnvironments #GreensTechnologies #DevOpsTraining #JenkinsAlternative

---

## Tags

github actions, github actions tutorial, github actions matrix, github actions matrix build, github actions cache, github actions artifacts, upload artifact v4, download artifact v4, github actions reusable workflow, workflow_call, composite action github actions, github actions needs, github actions job outputs, github_output, github actions if condition, github actions always failure success, github actions concurrency, cancel in progress, github actions permissions, github_token permissions, least privilege github actions, github environments, deployment approval github actions, required reviewers, github actions timeout, continue-on-error, ci cd pipeline tutorial, multi stage pipeline, build test deploy pipeline, devops tutorial, devops for beginners, github actions full course, github actions course 2026, learnwithmithran, greens technologies
