# WC2026 Live Bracket — Design

**Date:** 2026-06-28
**Goal:** A self-contained web page showing the FIFA World Cup 2026 knockout bracket that updates from *real* match results, where "updating" = asking Claude Code to fetch current scores from the web and rewrite one data file.

## Decisions (from brainstorming)
- **Data source:** CC fetches from the web. No paid API, no key, no cost.
- **Output:** Single-page web app (HTML/CSS/JS), opens on a plain double-click.

## Architecture — two files + a readme

1. **`results.js`** — the single source of truth. Assigns `window.WC_DATA = {…}`:
   - `teams`: name → `{ code, flag }` lookup (32 knockout teams).
   - `matches`: every knockout match (R32 → Final + 3rd place), each with
     `id, round, home, away, score, date, venue`.
     - For the Round of 32, `home`/`away` are real country names.
     - For later rounds, they are wiring placeholders: `"Winner M74"`, `"Loser M101"`.
     - `score` is `null` until played, then a string like `"2-1"` or `"1-1 (4-3 pen)"`.
   - **This is the only file CC edits on an update.** CC just sets `score` on matches
     that have been played; everything downstream auto-advances.

2. **`index.html`** — self-contained (inline CSS + JS). Loads `results.js` via a
   `<script>` tag (works on `file://`, no server / CORS issues), then:
   - Resolves each slot: a team name → that team; `"Winner M##"` → the winner of
     match `##` if decided, else `TBD`; `"Loser M##"` similarly.
   - Determines a match winner from `score` (penalties decide if present).
   - Renders 6 columns (R32, R16, QF, SF, Final, with 3rd-place noted), flags,
     scores, highlights winners, shows a "last updated" stamp.

3. **`README.md`** — tells the friend the magic words: *"CC, update the bracket results."*

## Data flow
```
"update results" → CC web-fetches live WC2026 scores → rewrites results.js
                                                              │
        double-click index.html → reads WC_DATA → computes winners → draws bracket
```

## Starting state (as of 2026-06-28)
Real R32 draw is set (matches 73–88). No knockout score recorded yet — first match
(South Africa vs Canada) is today. Bracket renders the draw with everything past R32
as TBD; it fills in for real as games are played and the user re-runs the update.

## Out of scope (YAGNI)
- Group-stage tables (knockout bracket only).
- Live auto-refresh / polling. Updates are explicit, CC-driven.
- Predictions / odds.
