# Fluffy Writeup Publication Design

## Goal

Publish the Hack The Box Fluffy walkthrough as a polished English Jekyll post and ensure all existing posts are written in readable English without changing the site's deployment architecture.

## Source Material

- Use `D:\obsidian\DOC\note\note\05-CTF-Writeups\HTB\Fluffy.md` as the authoritative source.
- Copy the five images referenced by the source from its adjacent `images` directory into a dedicated site asset directory.
- Use `Fluffy.pdf` only as a visual cross-check if the Markdown source is ambiguous.

## Content Changes

- Create a Chirpy-compatible post titled `Hack The Box: Fluffy Walkthrough` with author, date, categories, and security-related tags.
- Preserve the technical sequence and useful commands while editing the prose for grammar, clarity, and consistent terminology.
- Replace Obsidian image embeds with root-relative Jekyll image paths.
- Redact the captured `user.txt` and `root.txt` values while retaining the commands that retrieve them.
- Translate the Vietnamese passages in `Lost In Hyperspace` into natural English and repair its mojibake encoding.
- Leave `First Blog` unchanged because it is already in English.

## Deployment and Compatibility

- Do not modify the Chirpy theme, site configuration, or GitHub Actions workflow.
- Preserve the existing `main`-branch GitHub Pages deployment flow.
- Validate front matter, Markdown links, referenced assets, and a production Jekyll build before publishing.

## Delivery

- Commit the content and asset changes with a descriptive commit message.
- Push the verified commit to `origin/main`, triggering the existing GitHub Pages workflow.

## Success Criteria

- The Fluffy post renders with all five images and readable command blocks.
- No Vietnamese prose or mojibake remains in published posts.
- The local production build succeeds.
- The changes are present on `origin/main`.
