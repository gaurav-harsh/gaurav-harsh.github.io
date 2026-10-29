# Gaurav Portfolio — UX Design & UX Research

## Goal
Free GitHub Pages portfolio that gets Gaurav shortlisted for UX Designer / UX Researcher roles at MNCs.

## Primary user
Senior UX hiring managers (10+ yrs). They skim in under 2 minutes, distrust fluff and template looks,
and want: problem → method → evidence → decision → measurable outcome. Show research rigor, not only visuals.

## Stack (keep it this way unless told otherwise)
- Plain HTML + CSS + minimal vanilla JS. No framework, no build step, no npm.
- Hosted on GitHub Pages from `main` branch, repo root. Add `.nojekyll`.
- Structure: `index.html`, `work/<case-study>.html`, `assets/{css,js,img}/`.
- Accessibility target: WCAG 2.2 AA. Performance: fast on mobile, images ≤200KB, lazy-loaded.

## Skill routing (use ONE per job — don't stack them)
- Art direction / building a page → `design-taste-frontend`
- Critique, audit, polish, a11y/UX review → `impeccable` (e.g. `/impeccable critique`, `audit`, `polish`)
- Look up palettes, font pairs, UX rules → `ui-ux-pro-max` via its `search.py` script (cheap; prefer over reading data files)
- Copy for CTAs, case studies → `design:ux-copy`; accessibility pass → `design:accessibility-review`
- Visual check → built-in browser on a local file or `python3 -m http.server`

## Token rules
- Read `docs/STATE.md` first; don't re-explore the repo.
- Read files by line range; never read whole skill folders or `data/` CSVs.
- Never read or edit `.claude/skills/**` unless debugging a skill.
- Short replies. No recaps of unchanged code.

## Memory routine
- After each finished task (or when asked `/save`): overwrite `docs/STATE.md` (≤40 lines: current status, next 3 steps, open questions).
- Log lasting decisions as one line each in `docs/DECISIONS.md` (append; date + decision + why).
- Personal content (bio, projects, metrics) lives in `content/` — the single source of truth.

## Vendored skills (gitignored; reinstall from source if missing)
- design-taste-frontend — github.com/Leonxlnx/taste-skill @12af471 (MIT)
- impeccable — github.com/pbakaus/impeccable @5e745ac (Apache-2.0). Edit hooks NOT enabled (token cost).
- ui-ux-pro-max — github.com/nextlevelbuilder/ui-ux-pro-max-skill @28b3b8d (MIT), core skill only.
