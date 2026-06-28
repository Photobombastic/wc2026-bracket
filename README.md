# World Cup 2026 — Live Bracket ⚽

A self-contained knockout bracket for the FIFA World Cup 2026 that **updates from real match results**.
"Updating" means asking Claude Code to fetch the current scores from the web and rewrite one data file —
no server, no API key, no cost.

## 👋 Hey Shivam — this is a Claude Code demo

Max built this whole thing in one sitting with **Claude Code** (the AI coding agent in the terminal)
to show you what it can do. The bracket is the toy; the interesting part is *how* it got made. The
rough arc was:

1. **Talk it out first.** Before writing any code, Claude asked the one question that actually mattered —
   *where do "real results" come from?* — instead of guessing. (Answer: it fetches them off the web.)
2. **Get real data.** It pulled the actual Round-of-32 draw and every team's FIFA ranking off the web,
   not from memory. When an auto-extracted number looked wrong (it gave South Africa *Canada's* rating),
   it caught and re-checked it rather than shipping the mistake.
3. **Build, then prove it works.** It wrote the files, then simulated a full tournament in Node to
   confirm winners advance all the way to a champion before claiming "done."
4. **Iterate by just asking.** "Fix the date format." "Add a win % for each team." Each was one sentence;
   Claude made the change and re-checked it in a headless browser.
5. **Ship it.** Committed to git and pushed here to GitHub — which is how you're reading this.

**Want to poke at it yourself?** Open this folder in Claude Code and try asking:
- *"update the bracket results"* — it fetches current scores and fills in winners
- *"add the group-stage results too"* or *"draw connector lines between the rounds"* — watch it work

Two files worth reading to see how it all fits: **`CLAUDE.md`** (the architecture, written for an AI
teammate) and **`docs/plans/`** (the design Claude wrote before coding). The rest of this README is the
"how it works" detail.

---

## Use it

Double-click **`index.html`** (or open it in any browser). Winners advance automatically as scores come in.

## Update the results

Just ask Claude Code:

> **update the bracket results**

Claude Code will look up the current World Cup 2026 knockout scores online and edit
**`results.js`** for you. Refresh the page and the bracket re-draws — winners flow forward,
a champion appears once the final is decided.

## How it works (the 30-second tour)

| File | Role |
|------|------|
| `results.js` | The data. One `window.WC_DATA` object: the 32 teams and every knockout match (`R32 → Final` + 3rd place). **This is the only file that changes when results come in.** |
| `index.html` | The view. Reads `results.js`, figures out each match winner from the score, and fills the later rounds in automatically. Loaded with a plain `<script>` tag so it works on a double-click. |
| `docs/plans/` | The design doc Claude Code wrote before building. |

You only ever edit a match's `score`:

```js
score: null              // not played yet
score: "2-1"             // full-time (or after extra time)
score: "1-1 (4-3 pen)"   // draw decided on penalties — the page advances the penalty winner
```

Everything past the Round of 32 (`"Winner M74"`, `"Loser M101"` …) resolves on its own from those scores.
Don't renumber the matches — the bracket wiring depends on the match ids.

## Starting state

Built 2026-06-28. The real Round-of-32 draw is in; no knockout game has been played yet, so the bracket
shows the matchups with everything beyond R32 as **TBD**. It fills in for real as games happen and you
re-run the update.

*Results data: [Wikipedia — 2026 FIFA World Cup knockout stage](https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_knockout_stage).*
