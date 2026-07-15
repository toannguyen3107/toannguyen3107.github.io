# Jeeves Writeup Publication Design

## Goal

Publish the Hack The Box Jeeves walkthrough as a coherent English Jekyll post while preserving the useful technical evidence from the author's Obsidian source.

## Source and Assets

- Use `D:\obsidian\DOC\note\note\05-CTF-Writeups\HTB\Jeeves.md` as the authoritative source.
- Copy its four referenced PNG files from the adjacent `images` directory into `assets/jeeves/`.
- Replace Obsidian embeds with descriptive, root-relative Jekyll image links.

## Content Structure

- Create `_posts/2026-04-17-HTB-Jeeves.md` with Chirpy-compatible metadata.
- Organize the walkthrough into reconnaissance, Jenkins discovery, initial access, user flag, privilege escalation, KeePass credential recovery, administrator access, and NTFS alternate data stream sections.
- Preserve commands and relevant output while removing redundant blank space and correcting short explanatory passages for logical flow.
- Translate the Vietnamese sentence about the failed JuicyPotato path into English.
- Redact the exact `user.txt` and `root.txt` values while retaining the retrieval commands.
- Keep intermediate lab credentials and hashes required to explain the intended HTB attack path.

## Compatibility and Delivery

- Do not modify the theme, site configuration, or GitHub Actions workflow.
- Validate front matter, code fences, image references, English-only prose, redaction, and the asset build.
- Review the final diff, push to `origin/main`, and confirm the GitHub Pages workflow and live URL.

## Success Criteria

- The post reads as one reproducible attack narrative rather than disconnected notes.
- All four images render from `/assets/jeeves/`.
- No Obsidian syntax, Vietnamese prose, or flag values remain.
- GitHub Pages builds and deploys successfully.
