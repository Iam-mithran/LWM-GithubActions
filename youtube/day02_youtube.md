# Day 2 — YouTube Metadata

---

## Video Title

GitHub Actions Full Course — Variables, Contexts, Secrets & Multi-Job Pipelines with `needs`, `if` & Status Functions | Day 2

---

## Thumbnail

**Main text (large, bold):** `One Job → Many Jobs`
**Sub text:** `Day 2 — GitHub Actions Zero to Hero`
**Suggested visual elements:**
- Dark GitHub background (#0D1117) with GitHub Actions blue accent (#2088FF)
- A **pipeline graph** on the right: `build → test / lint → deploy` job boxes, with `deploy` shown **grey (skipped)** because `lint` failed — the exact "what to observe" moment from the video
- A masked **secret** chip on the left: `MY_API_KEY = ***`
- A bright pill showing the gotcha: `if: 'false'  →  TRUE`
- `needs · if · success() · failure()` badge
- Channel name: LearnWithMithran (bottom corner)

**Key message to convey at a glance:** Finish the fundamentals (variables, contexts, secrets), ship one full CI pipeline, then turn it into many jobs wired together with `needs`, `if` and status functions.

---

## Description

*Welcome back to Learn With Mithran! On Day 1 you shipped your first CI job. Today we finish the fundamentals, build a complete Node.js CI pipeline, and then turn one job into a real **multi-job pipeline** wired together with `needs`, `if` and status functions.*

We start by closing out the core language of GitHub Actions — **environment variables** and their three scopes (and why `$NAME` and `${{ env.NAME }}` are evaluated by different things), **contexts and expressions** (`github`, `runner`, `env`, `secrets`, `vars`, `needs`, plus the `toJSON` debugging trick), and **secrets vs variables** (masking, the fork-PR rule, and why putting a URL in a secret ruins your logs). Then we bring it all together in a **full Node.js CI capstone** — checkout → setup-node → install → lint → test — including the subfolder rule that trips everyone up (`working-directory` vs `cache-dependency-path`).

From there we go multi-job: why every job runs on its **own isolated machine** and what that breaks, connecting jobs into a **build → test → deploy DAG** with `needs`, making jobs and steps conditional with `if` (and the infamous `if: 'false'` that is actually **TRUE**), and finally the four **status functions** — `success()`, `failure()`, `always()`, `cancelled()` — and the invisible `if: success()` that explains every "why did my job turn grey?" moment. 🚀

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
🔹 `$NAME` vs `${{ env.NAME }}` — shell evaluation vs GitHub evaluation, and when each is allowed
🔹 Contexts and expressions — `github`, `runner`, `env`, `secrets`, `vars`, `needs`
🔹 The `toJSON()` debugging trick — dump a whole context instead of guessing
🔹 Context availability — why `secrets` and `needs` aren't available everywhere
🔹 Repository secrets — masking (`***`), the fork-PR rule, and `GITHUB_TOKEN`
🔹 Secrets vs variables — same UI, opposite purpose (and the URL-in-a-secret mistake)
🔹 Your first full Node.js CI pipeline — checkout → setup-node → install → lint → test
🔹 The subfolder rule — `working-directory` (for `run:`) vs `cache-dependency-path` (for `uses:`)
🔹 Reading a red build on purpose — break a test, read the failure, fix it green
🔹 Why every job runs on its own machine — and what that breaks (nothing is shared)
🔹 Order in the file means nothing — only `needs` creates order
🔹 `needs` — turning parallel jobs into a build → test → deploy DAG (with fan-in)
🔹 Why a failed dependency makes downstream jobs **skipped (grey)**, not failed
🔹 `if` conditionals on jobs and steps — operators, `contains()`, `startsWith()`, `endsWith()`
🔹 The quoting gotcha — why `if: 'false'` is actually TRUE
🔹 Status functions — `success()`, `failure()`, `always()`, `cancelled()`
🔹 The invisible default `if: success()` — the reason jobs turn grey, and how to override it

📌 *Who Is This Video For:*

💻 Anyone who finished Day 1 and wants to go from a single job to a real pipeline
🧑‍🎓 Students and freshers preparing for DevOps and cloud job roles
🛠️ Developers who copy-paste workflow YAML without really knowing how contexts, secrets and `if` work
🚀 DevOps, SRE and platform engineers standardizing multi-job builds
🔁 Anyone migrating pipelines from Jenkins, GitLab CI or CircleCI to the GitHub-native way
🏢 Teams that need to handle secrets and conditional deploys correctly

🔍 *Chapters:*
0:00 Intro — From One Job to a Real Pipeline
2:30 Recap of Day 1 + the Sample App
6:00 Environment Variables & the Three Scopes
14:00 `$NAME` vs `${{ env.NAME }}` — Shell vs GitHub Evaluation
19:00 Contexts & Expressions (+ the toJSON Debug Trick)
30:00 Secrets & Variables — Masking, Fork PRs, Secrets vs Variables
42:00 🚀 Capstone — Your First Full Node.js CI Pipeline
54:00 The Subfolder Rule — working-directory vs cache-dependency-path
1:00:00 Many Jobs — Parallel by Default and Fully Isolated
1:09:00 `needs` — Building a Build → Test → Deploy DAG
1:20:00 `if` Conditionals — and Why `if: 'false'` Is Actually TRUE
1:31:00 Status Functions — success, failure, always, cancelled
1:43:00 Day 2 Cheat Sheet & Recap
1:49:00 What's Next — Day 3 Preview

⏭️ *Coming in Day 3:* the rest of the pipeline — **job outputs** (passing data between jobs), **matrix builds** across Node versions and operating systems, **dependency caching**, **artifacts v4** (and the v4 matrix trap), **reusable workflows** and **composite actions**, least-privilege **`GITHUB_TOKEN` permissions**, **environments** with required-reviewer **approvals**, **concurrency** and timeouts — then the advanced hardening: **SHA-pinning** actions, **OIDC** keyless cloud auth, building and publishing your own **JavaScript/Docker actions**, **GHCR**, self-hosted runners, **CodeQL** and secret scanning, and the full hardened capstone.

👍 If this video helps you, like, subscribe, and turn on notifications for more hands-on content on GitHub Actions, DevOps, Azure, AWS, Linux, and Python.

#GitHubActions #CICD #DevOps #GitHubActionsTutorial #CIPipeline #GitHubActionsSecrets #GitHubActionsContexts #EnvironmentVariables #MultiJobPipeline #GitHubActionsNeeds #StatusFunctions #IfConditions #ContinuousIntegration #ContinuousDeployment #GitHub #DevOpsForBeginners #WorkflowAutomation #LearnWithMithran #GitHubActionsCourse #NodeJsCI #GitHubWorkflow #DevOpsTutorial #GreensTechnologies #DevOpsTraining #JenkinsAlternative

---

## Tags

github actions, github actions tutorial, github actions course, github actions full course, github actions environment variables, github actions env scopes, github actions contexts, github actions expressions, tojson github actions, github actions secrets, secrets vs variables github actions, github_token, github actions masking, github actions fork pull request secrets, github actions node ci, node.js ci pipeline, working-directory github actions, github actions multiple jobs, github actions parallel jobs, github actions needs, needs dependencies github actions, build test deploy pipeline, github actions if condition, if false is true github actions, github actions status functions, success failure always cancelled, github actions dag, ci cd pipeline tutorial, devops tutorial, devops for beginners, github actions 2026, learnwithmithran, greens technologies
