# Day 1 — YouTube Metadata

---

## Video Title

GitHub Actions Full Course — CI/CD, YAML, Triggers & Runners | GitHub Actions for Beginners Day 1

---

## Thumbnail

**Main text (large, bold):** `Your First CI Pipeline`
**Sub text:** `Day 1 — GitHub Actions Zero to Hero`
**Suggested visual elements:**
- Dark GitHub background (#0D1117) with GitHub Actions blue accent (#2088FF)
- The GitHub Actions logo / green ✅ check-mark run in the Actions tab on the right
- A small YAML snippet card (`on: push`) floating on the left
- `NO INSTALL — 100% BROWSER` badge in a bright pill
- Channel name: LearnWithMithran (bottom corner)

**Key message to convey at a glance:** Automate GitHub from zero — no YAML experience, nothing to install.

---

## Description

*Welcome back to Learn With Mithran! In today's session, we start GitHub Actions completely from scratch — what CI/CD actually means, how to read and write workflow YAML, and how to make GitHub run your automation every single time you push code.*

In this video, we build up the GitHub Actions mental model from the ground up — events, workflows, jobs, steps and runners — then write real workflow files live in the browser. You'll master the `on:` trigger in every form (push, pull request, branch & path filters, manual button, cron schedule), understand `runs-on` and GitHub-hosted runners, learn the difference between `run` and `uses`, and finish with the two Marketplace actions you'll use in almost every pipeline you ever write: `actions/checkout` and `actions/setup-node`. 🚀

**Everything is 100% browser-based — no local setup, no installs, nothing to generate.** Every workflow file used in this video is prebuilt in the GitHub repo below. Copy, commit, watch it run.

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

🔹 What CI and CD really mean, and the problems they solve
🔹 Where GitHub Actions fits vs Jenkins, GitLab CI and other CI tools
🔹 GitHub Actions pricing — free for public repos, minutes for private repos
🔹 The browser-only workflow: create `.github/workflows/*.yml` without installing anything
🔹 YAML in 10 minutes — indentation, lists, maps, multi-line strings, and the #1 beginner mistake
🔹 Anatomy of a workflow — `name`, `on`, `jobs`, `runs-on`, `steps`
🔹 The 5-word mental model: Event → Workflow → Job → Step → Runner
🔹 Your first Hello World workflow, live in the Actions tab
🔹 Trigger deep dive: `push`, `pull_request`, `workflow_dispatch`, `schedule` (cron)
🔹 Branch and path filters — and why `paths` are matched from the repo root
🔹 Manual runs with inputs (dropdowns, text boxes, checkboxes)
🔹 Combining multiple events in one real-world CI trigger block
🔹 Runners and `runs-on` — Ubuntu vs Windows vs macOS, and what's preinstalled
🔹 `run` vs `uses` — shell commands vs reusable actions, and the `with:` block
🔹 `actions/checkout@v5` — why a fresh runner does NOT have your code on it
🔹 `actions/setup-node@v6` — Node versions, npm caching and `cache-dependency-path`
🔹 Action version pinning: `@v5` major tags vs exact tags vs commit SHAs
🔹 How to read run logs and debug a failing workflow

📌 *Who Is This Video For:*

💻 Complete beginners who have never written a line of YAML
🧑‍🎓 Students and freshers preparing for DevOps and cloud job roles
🛠️ Developers who want their tests to run automatically on every push
🚀 DevOps, SRE and platform engineers standardizing builds and deployments
🔁 Anyone migrating from Jenkins, GitLab CI, CircleCI or Travis
🏢 Teams adopting GitHub-native CI/CD for the first time

🔍 *Chapters:*
0:00 Intro — What You'll Learn in Day 1
2:30 What is CI/CD and Why It Exists
12:00 Where GitHub Actions Fits (vs Jenkins & Other CI Tools)
18:00 Pricing & Free Minutes — Public vs Private Repos
22:00 Browser-Only Setup — Create Your Practice Repo
28:00 YAML in 10 Minutes (Indentation, Lists, Maps, Multi-line)
40:00 Anatomy of a Workflow — Event → Workflow → Job → Step → Runner
50:00 Demo: Your First Hello World Workflow
58:00 Trigger — `on: push`
1:05:00 Trigger — `on: pull_request` (Gating Code Before Merge)
1:14:00 Branch & Path Filters (and the Repo-Root Gotcha)
1:24:00 Trigger — `workflow_dispatch` with Manual Inputs
1:33:00 Trigger — `schedule` / Cron Jobs in UTC
1:41:00 Combining Multiple Events in One Workflow
1:48:00 Runners & `runs-on` — Ubuntu, Windows, macOS
1:57:00 Steps: `run` vs `uses` (and the `with:` Block)
2:04:00 actions/checkout — Why the Runner Doesn't Have Your Code
2:14:00 actions/setup-node — Node Versions, Caching & Version Pinning
2:22:00 Day 1 Cheat Sheet & Recap
2:26:00 What's Next — Day 2 Preview

⏭️ *Coming in Day 2:* environment variables and scopes, contexts and expressions, repository secrets, and the full hands-on capstone — a complete Node.js CI pipeline that checks out, installs, lints and tests on every push and pull request, plus multi-job pipelines, `needs`, matrix builds, caching and artifacts.

👍 If this video helps you, like, subscribe, and turn on notifications for more hands-on content on GitHub Actions, DevOps, Azure, AWS, Linux, and Python.

#GitHubActions #CICD #DevOps #GitHubActionsTutorial #GitHubActionsForBeginners #YAML #ContinuousIntegration #ContinuousDeployment #GitHub #DevOpsForBeginners #WorkflowAutomation #LearnWithMithran #GitHubActionsCourse #CIPipeline #BuildAutomation #GitHubWorkflow #DevOpsTutorial #GitHubTutorial #AutomationTesting #SoftwareEngineering #GreensTechnologies #DevOpsTraining #ITTraining #CareerGuidance #JenkinsAlternative #GitHubRunners

---

## Tags

github actions, github actions tutorial, github actions for beginners, github actions full course, ci cd tutorial, ci cd pipeline, what is ci cd, github actions workflow, github actions yaml, yaml tutorial for beginners, github workflow tutorial, continuous integration tutorial, continuous deployment, devops tutorial, devops for beginners, github actions ci cd pipeline, actions checkout, actions setup node, github actions triggers, workflow dispatch, github actions cron, github runners, ubuntu latest runner, run vs uses github actions, github actions marketplace, jenkins vs github actions, github actions node js, learn github actions, learnwithmithran, github actions course 2026, devops training, greens technologies, github automation
