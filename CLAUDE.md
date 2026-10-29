# Gaurav Portfolio — UX Design & UX Research

Free GitHub Pages portfolio to get shortlisted for UX Designer / UX Researcher roles at MNCs.
**Reader:** senior UX hiring managers (10+ yrs). Skim <2 min, distrust fluff and template looks, want
problem → method → evidence → decision → measurable outcome. Show research rigor, not only visuals.

## Stack (fixed)
Plain HTML + CSS + minimal vanilla JS, no build/npm. GitHub Pages from `main` root (`.nojekyll`).
`index.html`, `work/<slug>.html`, `assets/{css,js,img}/`. WCAG 2.2 AA. Images ≤200KB, lazy, WebP/optimized SVG.

## Shared memory (read these, not the repo)
- `docs/STATE.md` — status + next steps. Read first every session.
- `content/<nn-slug>/index.md` — the only source of copy and facts. Never invent claims or metrics.
- `PRODUCT.md` — audience, goals, voice (Impeccable format). `DESIGN.md` — direction, tokens, type, motion rules.
- `assets/css/tokens.css` — the only place colors/type/spacing values live.
Every skill reads and writes these; none keeps its own copy (no ui-ux-pro-max `--persist`, no second style guide).

## Auto pipeline — invoke skills yourself (Skill tool) when the trigger matches; don't wait to be asked
| Trigger | Skill | Output |
|---|---|---|
| `PRODUCT.md` missing, before any UI work | `impeccable` → `init` (fill from this file + content/, ask only gaps) | PRODUCT.md |
| `DESIGN.md` missing, before first page | `design-taste-frontend` (direction), palette/font lookups via `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<q>" --domain <d>` | DESIGN.md + tokens.css |
| Writing/editing any HTML/CSS/JS | `ponytail` rules + `design-taste-frontend` house rules, following DESIGN.md | page |
| Research artifact (journey map, flow, 2×2, timeline, framework) | `diagram-design`, styled from tokens.css (first run: choose "local design-system") | inline SVG/HTML |
| Case-study scroll storytelling | `scroll-craft` — subtle, content-first, works with motion off, honours reduced-motion. No kie.ai | page section |
| Any visitor-facing prose written or rewritten | `humanizer` on that text only | copy |
| Page done (before commit) | `impeccable` → `critique` (or `audit`) on that file only; fix P0/P1 | fixes |
| Before every commit with code | `ponytail-review` on the diff | fixes |
| Before sharing the site | `ponytail-audit`, `design:accessibility-review` | report + fixes |
Manual only (never auto): `hallmark`, `ponytail-help`.

## Token rules
- Load each skill once per session; reuse its rules after. Never re-run a stage whose output file exists — read the file.
- One builder per page (taste). Don't run two skills for the same job.
- Read skill references by section, only when the skill points there. Never read `.claude/skills/**` data/CSV or whole folders.
- Skill scripts: run from project root with relative paths (`python3 .claude/skills/...`) so allow rules match.
- Reviews target changed files only. No subagents unless the user asks.
- Short replies; no recaps of unchanged code.

## Memory routine (automatic)
After each finished task: overwrite `docs/STATE.md` (≤40 lines: status, next 3 steps, open questions);
append lasting decisions to `docs/DECISIONS.md` (`- date — decision — why`). `/save` does the same on demand.

## Vendored skills (gitignored; reinstall from source if missing)
taste github.com/Leonxlnx/taste-skill@12af471 · impeccable pbakaus/impeccable@5e745ac (hooks off) ·
ui-ux-pro-max nextlevelbuilder/ui-ux-pro-max-skill@28b3b8d (core only, paths patched) ·
ponytail(+review,audit,help) DietrichGebert/ponytail@96608e0 (hooks off) · hallmark Nutlope/hallmark@8f6969f ·
humanizer blader/humanizer@0ef9fe5 · diagram-design cathrynlavery/diagram-design@0cf73c3 ·
scroll-craft nateherkai/scroll-craft@75d81f7. Local edits: `disable-model-invocation: true` on hallmark, ponytail-help.
Node-only checkers (taste lint/inspect, scroll-craft, hallmark) inactive until Node is installed.
