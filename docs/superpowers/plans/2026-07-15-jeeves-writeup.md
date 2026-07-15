# Jeeves Writeup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a logically structured English HTB Jeeves walkthrough with four images and deploy it through the existing GitHub Pages workflow.

**Architecture:** Add one Chirpy Markdown post and one dedicated image directory without changing site code or deployment configuration. Normalize the Obsidian source into a linear attack narrative and validate it with deterministic content and build checks.

**Tech Stack:** Jekyll, Chirpy, Markdown, GitHub Actions, Node.js/npm

## Global Constraints

- Use `D:\obsidian\DOC\note\note\05-CTF-Writeups\HTB\Jeeves.md` as the authoritative source.
- Preserve commands and relevant technical output.
- Redact only the exact user and root flag values.
- Do not modify the theme, `_config.yml`, or `.github/workflows/pages-deploy.yml`.

---

### Task 1: Create the Jeeves post and assets

**Files:**
- Create: `_posts/2026-04-17-HTB-Jeeves.md`
- Create: `assets/jeeves/Jeeves-1.png`
- Create: `assets/jeeves/Jenkins-error-page.png`
- Create: `assets/jeeves/Jeeves-2.png`
- Create: `assets/jeeves/Jeeves-3.png`

**Interfaces:**
- Consumes: the Obsidian Markdown and four adjacent images.
- Produces: a Chirpy post with four valid `/assets/jeeves/*.png` references.

- [ ] **Step 1: Copy and normalize the image filenames**

Copy the four source PNGs without recompression and use the exact output filenames listed above.

- [ ] **Step 2: Create the post metadata and narrative**

Use this exact front matter:

```yaml
---
title: "Hack The Box: Jeeves Walkthrough"
date: 2026-04-17 00:00:00 +0700
categories: [CTF, Hack The Box]
author: toancse
tags: [htb, windows, jenkins, keepass, penetration-testing]
---
```

Arrange the source under these headings: `Reconnaissance`, `Jenkins Discovery`, `Initial Access`, `User Flag`, `Privilege Escalation`, `KeePass Credential Recovery`, `Administrator Access`, and `Root Flag: NTFS Alternate Data Stream`. Add short English transitions that explain why each command follows the prior result.

- [ ] **Step 3: Redact flags and validate Markdown**

Replace `e3232272596fb47950d59c4cf1e7066a` and `afbc5bd4b615a60648cec41c6ac92530` with `[REDACTED]`. Verify no `![[...]]` syntax remains, code fences are balanced, four unique image references resolve, and `git diff --check` reports no whitespace errors.

- [ ] **Step 4: Commit the post**

```bash
git add _posts/2026-04-17-HTB-Jeeves.md assets/jeeves
git commit -m "feat: publish HTB Jeeves walkthrough"
```

### Task 2: Validate and deploy

**Files:**
- Verify: `_posts/2026-04-17-HTB-Jeeves.md`
- Verify: `assets/jeeves/*.png`
- Verify unchanged: `_config.yml`
- Verify unchanged: `.github/workflows/pages-deploy.yml`

**Interfaces:**
- Consumes: Task 1 output.
- Produces: verified `origin/main` and a live GitHub Pages post.

- [ ] **Step 1: Run the production asset build**

Run `npm install` followed by `npm run build`. Expected: both exit successfully.

- [ ] **Step 2: Review the diff**

Check that only the Jeeves post and four assets differ from the implementation base, and confirm the configuration/workflow diff is empty.

- [ ] **Step 3: Merge and push**

Fast-forward the reviewed feature branch into `main`, run `git push origin main`, and verify local HEAD equals `refs/heads/main` on origin.

- [ ] **Step 4: Verify deployment**

Confirm the `Build and Deploy` workflow completes successfully and `https://toannguyen3107.github.io/posts/HTB-Jeeves/` returns HTTP 200 with the expected title.
