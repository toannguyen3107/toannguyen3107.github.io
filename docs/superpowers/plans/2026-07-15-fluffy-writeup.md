# Fluffy Writeup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish an English HTB Fluffy walkthrough with its images, translate the remaining Vietnamese post, and deploy the verified site through the existing GitHub Pages workflow.

**Architecture:** Keep the existing Jekyll Chirpy architecture unchanged. Add one self-contained Markdown post and a dedicated asset directory, then update only the existing mixed-language post before running repository-level content and production-build checks.

**Tech Stack:** Jekyll, Chirpy, Markdown, Liquid, GitHub Actions, Ruby/Bundler, Node.js/npm

## Global Constraints

- Use `D:\obsidian\DOC\note\note\05-CTF-Writeups\HTB\Fluffy.md` as the authoritative source.
- Copy all five referenced images into a dedicated site asset directory.
- Redact the captured `user.txt` and `root.txt` values.
- Do not modify the Chirpy theme, site configuration, or GitHub Actions workflow.
- Preserve deployment from `main` through the existing GitHub Pages workflow.

---

### Task 1: Publish the Fluffy walkthrough

**Files:**
- Create: `_posts/2026-04-12-HTB-Fluffy.md`
- Create: `assets/fluffy/Fluffy.png`
- Create: `assets/fluffy/Fluffy-1.png`
- Create: `assets/fluffy/Pasted-image-20260412004301.png`
- Create: `assets/fluffy/Pasted-image-20260412004901.png`
- Create: `assets/fluffy/Pasted-image-20260412004921.png`
- Source: `D:\obsidian\DOC\note\note\05-CTF-Writeups\HTB\Fluffy.md`

**Interfaces:**
- Consumes: the authoritative Obsidian Markdown and its adjacent `images` directory.
- Produces: a Chirpy post whose five root-relative image URLs resolve under `/assets/fluffy/`.

- [ ] **Step 1: Copy and normalize the five image assets**

Copy the source PNG files without recompression, replacing spaces with hyphens in the three pasted-image filenames.

- [ ] **Step 2: Create the post with valid Chirpy front matter**

Use this exact metadata:

```yaml
---
title: "Hack The Box: Fluffy Walkthrough"
date: 2026-04-12 00:00:00 +0700
categories: [CTF, Hack The Box]
author: toancse
tags: [htb, active-directory, adcs, windows, penetration-testing]
---
```

Edit the source into concise English sections for reconnaissance, initial access, user access, AD CS enumeration, ESC16 exploitation, and administrator access. Use fenced command blocks, replace all Obsidian embeds with `/assets/fluffy/<filename>`, and replace both flag values with `[REDACTED]`.

- [ ] **Step 3: Verify source integrity and redaction**

Run:

```powershell
rg -n "!\[\[|2d4377b7b64d6937b029098d26412a65|40d8c6bae9c105a1c665e7ada2230440" _posts/2026-04-12-HTB-Fluffy.md
```

Expected: no matches.

Run a PowerShell check that extracts every `/assets/fluffy/*.png` reference and asserts that the corresponding file exists. Expected: five unique references and no missing files.

- [ ] **Step 4: Commit the walkthrough**

```bash
git add _posts/2026-04-12-HTB-Fluffy.md assets/fluffy
git commit -m "feat: publish HTB Fluffy walkthrough"
```

### Task 2: Translate the existing mixed-language post

**Files:**
- Modify: `_posts/2025-01-08-HTB-Lost-in-Hyperspace.md`

**Interfaces:**
- Consumes: the existing code samples, result values, and screenshot.
- Produces: the same walkthrough in natural English with valid UTF-8 text and unchanged technical meaning.

- [ ] **Step 1: Replace mojibake and Vietnamese prose**

Rewrite the introduction, analysis, result labels, and conclusion in English. Correct visible spelling errors such as `Challange` to `Challenge`, keep the NumPy/t-SNE code and numeric results intact, and preserve the existing image reference.

- [ ] **Step 2: Check published posts for Vietnamese or mojibake remnants**

Run:

```powershell
rg -n "Ã|Ä|á»|Ä‘|Đây|Kết quả|Theo kinh nghiệm|Ta thấy|Dùng" _posts
```

Expected: no matches.

- [ ] **Step 3: Commit the translation**

```bash
git add _posts/2025-01-08-HTB-Lost-in-Hyperspace.md
git commit -m "docs: translate existing writeup to English"
```

### Task 3: Validate and deploy

**Files:**
- Verify: `_posts/*.md`
- Verify: `assets/fluffy/*.png`
- Verify unchanged: `_config.yml`
- Verify unchanged: `.github/workflows/pages-deploy.yml`

**Interfaces:**
- Consumes: the content produced by Tasks 1 and 2.
- Produces: a successful production build and updated `origin/main`.

- [ ] **Step 1: Confirm only intended files changed**

Run `git status --short` and `git diff HEAD~2 -- _config.yml .github/workflows/pages-deploy.yml`. Expected: content/spec/plan changes only and no diff for the configuration or workflow.

- [ ] **Step 2: Install locked project dependencies**

Run `bundle install` and `npm install` using the versions configured by the repository. Expected: both commands exit successfully.

- [ ] **Step 3: Run the asset build**

Run `npm run build`. Expected: exit code 0.

- [ ] **Step 4: Run the production Jekyll build**

Run:

```bash
JEKYLL_ENV=production bundle exec jekyll build -d _site
```

Expected: exit code 0 and `_site/posts/HTB-Fluffy-Walkthrough/` is generated according to the configured permalink.

- [ ] **Step 5: Inspect the generated HTML**

Confirm the generated Fluffy page contains five valid image URLs, no Obsidian embed syntax, and no unredacted flag values. Confirm the Lost in Hyperspace page contains readable English.

- [ ] **Step 6: Push the verified commits**

```bash
git push origin main
```

Expected: the remote branch advances successfully and triggers `Build and Deploy`.
