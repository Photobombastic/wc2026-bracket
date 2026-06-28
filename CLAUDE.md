# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A self-contained FIFA World Cup 2026 knockout bracket that renders from a single data file and
auto-advances winners. No build step, no server, no dependencies, no API keys. Open `index.html`
in a browser (it loads `results.js` via a plain `<script>` tag, so `file://` works on a double-click).

## Run / preview

```bash
open index.html                 # macOS default browser
# headless screenshot via gstack browse (already installed):
B="$HOME/.claude/skills/gstack/browse/dist/browse"
"$B" goto "file://$(pwd)/index.html"; "$B" console --errors; "$B" screenshot /tmp/bracket.png
```

There is no test runner. Verify logic changes by evaluating `results.js` under Node and asserting,
e.g. a champion resolves once scores are filled (this is how the bracket wiring was validated):

```bash
node -e 'global.window={}; require("./results.js"); /* walk matches, assert winners */'
```

## Architecture: data vs. view (the core idea)

Everything hinges on a strict split. **Do not break it.**

- **`results.js`** — the single source of truth. Assigns one global `window.WC_DATA`:
  - `teams`: name → `{ code, flag, rating }`. `rating` = FIFA World Ranking points.
  - `matches`: every knockout match (`R32 → R16 → QF → SF → 3RD → FINAL`), each
    `{ id, round, home, away, score, date, venue }`.
  - Round of 32 `home`/`away` are real country names. **Later rounds are wiring placeholders**:
    the strings `"Winner M74"` / `"Loser M101"`. The view resolves them.
  - `score` is `null` until played, else `"2-1"` or `"1-1 (4-3 pen)"`.

- **`index.html`** — inline CSS + JS, all logic. Reads `WC_DATA` and:
  - `resolveSlot(slot)` turns a team name or a `"Winner M##"`/`"Loser M##"` string into a concrete
    team, or `null` if undecided (recursive over the match graph — it's a DAG, so it terminates).
  - `decide(match)` parses `score` (penalties decide a draw) and returns `{winner, loser}`.
  - `winProb(rA, rB)` = Elo expectancy `1/(1+10^(-(rA-rB)/400))`, shown only on **upcoming**
    matches (`score === null`) where **both** teams are confirmed. Played matches show goals instead.
  - Renders five columns (R32→Final) plus a champion banner and a third-place box under the final.

Implication: filling in a `score` is the *only* edit needed to advance the tournament. R16+ matchups,
the champion, and win-% all recompute from that. The data file never needs to know who won.

## Updating results (the intended workflow)

"Update the bracket" = fetch current scores from the web and **edit only `results.js`**:
1. Set `score` on matches that have been played. Use `"a-b"`, or `"a-b (x-y pen)"` for shootouts.
2. Bump `lastUpdated`.
3. **Never renumber match `id`s** — the bracket wiring (`"Winner M74"` etc.) depends on them.
4. Don't precompute winners or later-round teams by hand; the view derives them.

Ratings (`rating`, `ratingSource`, `ratingAsOf`) come from FIFA World Ranking points (Elo-based).
Refresh them the same way if win-% needs updating; the formula lives in the view.

## Conventions

- Dates are stored ISO (`YYYY-MM-DD`) in `results.js` and **formatted in the view** (`fmtDate`).
  Keep data canonical; format at render time. Same principle as winners and win-%.
- Plain ES5-ish browser JS, no framework, no bundler. Keep it dependency-free and double-click-runnable.
- `docs/plans/` holds the design doc; update it if the architecture changes.
