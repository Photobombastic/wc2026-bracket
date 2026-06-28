/*
 * WC2026 knockout-stage data — the single source of truth for the bracket.
 *
 * HOW TO UPDATE: ask Claude Code "update the bracket results". It fetches the
 * current FIFA World Cup 2026 scores from the web and edits THIS file only.
 *
 * To record a result, set the match's `score`:
 *   score: "2-1"            regular-time / extra-time result
 *   score: "1-1 (4-3 pen)"  draw decided on penalties (the page advances the
 *                           penalty winner automatically)
 *   score: null             not played yet
 *
 * You only ever edit `score`. Everything past the Round of 32 auto-advances:
 * the page resolves "Winner M74" / "Loser M101" slots from the scores you enter.
 * Don't renumber matches — the bracket wiring depends on the ids.
 */
window.WC_DATA = {
  tournament: "FIFA World Cup 2026",
  lastUpdated: "2026-06-28",
  source: "https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_knockout_stage",

  // name -> { code, flag }
  teams: {
    "South Africa":           { code: "RSA", flag: "🇿🇦" },
    "Canada":                 { code: "CAN", flag: "🇨🇦" },
    "Germany":                { code: "GER", flag: "🇩🇪" },
    "Paraguay":               { code: "PAR", flag: "🇵🇾" },
    "Netherlands":            { code: "NED", flag: "🇳🇱" },
    "Morocco":                { code: "MAR", flag: "🇲🇦" },
    "Brazil":                 { code: "BRA", flag: "🇧🇷" },
    "Japan":                  { code: "JPN", flag: "🇯🇵" },
    "France":                 { code: "FRA", flag: "🇫🇷" },
    "Sweden":                 { code: "SWE", flag: "🇸🇪" },
    "Ivory Coast":            { code: "CIV", flag: "🇨🇮" },
    "Norway":                 { code: "NOR", flag: "🇳🇴" },
    "Mexico":                 { code: "MEX", flag: "🇲🇽" },
    "Ecuador":                { code: "ECU", flag: "🇪🇨" },
    "England":                { code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    "DR Congo":               { code: "COD", flag: "🇨🇩" },
    "United States":          { code: "USA", flag: "🇺🇸" },
    "Bosnia and Herzegovina": { code: "BIH", flag: "🇧🇦" },
    "Belgium":                { code: "BEL", flag: "🇧🇪" },
    "Senegal":                { code: "SEN", flag: "🇸🇳" },
    "Portugal":               { code: "POR", flag: "🇵🇹" },
    "Croatia":                { code: "CRO", flag: "🇭🇷" },
    "Spain":                  { code: "ESP", flag: "🇪🇸" },
    "Austria":                { code: "AUT", flag: "🇦🇹" },
    "Switzerland":            { code: "SUI", flag: "🇨🇭" },
    "Algeria":                { code: "ALG", flag: "🇩🇿" },
    "Argentina":              { code: "ARG", flag: "🇦🇷" },
    "Cape Verde":             { code: "CPV", flag: "🇨🇻" },
    "Colombia":               { code: "COL", flag: "🇨🇴" },
    "Ghana":                  { code: "GHA", flag: "🇬🇭" },
    "Australia":              { code: "AUS", flag: "🇦🇺" },
    "Egypt":                  { code: "EGY", flag: "🇪🇬" }
  },

  // Every knockout match. Edit `score` only.
  matches: [
    // --- Round of 32 ---
    { id: 73, round: "R32", home: "South Africa",  away: "Canada",                 score: null, date: "2026-06-28", venue: "SoFi Stadium, Inglewood" },
    { id: 74, round: "R32", home: "Germany",       away: "Paraguay",               score: null, date: "2026-06-29", venue: "Gillette Stadium, Foxborough" },
    { id: 75, round: "R32", home: "Netherlands",   away: "Morocco",                score: null, date: "2026-06-29", venue: "Estadio BBVA, Guadalupe" },
    { id: 76, round: "R32", home: "Brazil",        away: "Japan",                  score: null, date: "2026-06-29", venue: "NRG Stadium, Houston" },
    { id: 77, round: "R32", home: "France",        away: "Sweden",                 score: null, date: "2026-06-30", venue: "MetLife Stadium, East Rutherford" },
    { id: 78, round: "R32", home: "Ivory Coast",   away: "Norway",                 score: null, date: "2026-06-30", venue: "AT&T Stadium, Arlington" },
    { id: 79, round: "R32", home: "Mexico",        away: "Ecuador",                score: null, date: "2026-06-30", venue: "Estadio Azteca, Mexico City" },
    { id: 80, round: "R32", home: "England",       away: "DR Congo",               score: null, date: "2026-07-01", venue: "Mercedes-Benz Stadium, Atlanta" },
    { id: 81, round: "R32", home: "United States", away: "Bosnia and Herzegovina", score: null, date: "2026-07-01", venue: "Levi's Stadium, Santa Clara" },
    { id: 82, round: "R32", home: "Belgium",       away: "Senegal",                score: null, date: "2026-07-01", venue: "Lumen Field, Seattle" },
    { id: 83, round: "R32", home: "Portugal",      away: "Croatia",                score: null, date: "2026-07-02", venue: "BMO Field, Toronto" },
    { id: 84, round: "R32", home: "Spain",         away: "Austria",                score: null, date: "2026-07-02", venue: "SoFi Stadium, Inglewood" },
    { id: 85, round: "R32", home: "Switzerland",   away: "Algeria",                score: null, date: "2026-07-02", venue: "BC Place, Vancouver" },
    { id: 86, round: "R32", home: "Argentina",     away: "Cape Verde",             score: null, date: "2026-07-03", venue: "Hard Rock Stadium, Miami Gardens" },
    { id: 87, round: "R32", home: "Colombia",      away: "Ghana",                  score: null, date: "2026-07-03", venue: "Arrowhead Stadium, Kansas City" },
    { id: 88, round: "R32", home: "Australia",     away: "Egypt",                  score: null, date: "2026-07-03", venue: "AT&T Stadium, Arlington" },

    // --- Round of 16 ---
    { id: 89, round: "R16", home: "Winner M74", away: "Winner M77", score: null, date: "2026-07-04", venue: "Lincoln Financial Field, Philadelphia" },
    { id: 90, round: "R16", home: "Winner M73", away: "Winner M75", score: null, date: "2026-07-04", venue: "NRG Stadium, Houston" },
    { id: 91, round: "R16", home: "Winner M76", away: "Winner M78", score: null, date: "2026-07-05", venue: "MetLife Stadium, East Rutherford" },
    { id: 92, round: "R16", home: "Winner M79", away: "Winner M80", score: null, date: "2026-07-05", venue: "Estadio Azteca, Mexico City" },
    { id: 93, round: "R16", home: "Winner M83", away: "Winner M84", score: null, date: "2026-07-06", venue: "AT&T Stadium, Arlington" },
    { id: 94, round: "R16", home: "Winner M81", away: "Winner M82", score: null, date: "2026-07-06", venue: "Lumen Field, Seattle" },
    { id: 95, round: "R16", home: "Winner M86", away: "Winner M88", score: null, date: "2026-07-07", venue: "Mercedes-Benz Stadium, Atlanta" },
    { id: 96, round: "R16", home: "Winner M85", away: "Winner M87", score: null, date: "2026-07-07", venue: "BC Place, Vancouver" },

    // --- Quarter-finals ---
    { id: 97,  round: "QF", home: "Winner M89", away: "Winner M90", score: null, date: "2026-07-09", venue: "Gillette Stadium, Foxborough" },
    { id: 98,  round: "QF", home: "Winner M93", away: "Winner M94", score: null, date: "2026-07-10", venue: "SoFi Stadium, Inglewood" },
    { id: 99,  round: "QF", home: "Winner M91", away: "Winner M92", score: null, date: "2026-07-11", venue: "Hard Rock Stadium, Miami Gardens" },
    { id: 100, round: "QF", home: "Winner M95", away: "Winner M96", score: null, date: "2026-07-11", venue: "Arrowhead Stadium, Kansas City" },

    // --- Semi-finals ---
    { id: 101, round: "SF", home: "Winner M97", away: "Winner M98",  score: null, date: "2026-07-14", venue: "AT&T Stadium, Arlington" },
    { id: 102, round: "SF", home: "Winner M99", away: "Winner M100", score: null, date: "2026-07-15", venue: "Mercedes-Benz Stadium, Atlanta" },

    // --- Third place & Final ---
    { id: 103, round: "3RD",   home: "Loser M101",  away: "Loser M102",  score: null, date: "2026-07-18", venue: "Hard Rock Stadium, Miami Gardens" },
    { id: 104, round: "FINAL", home: "Winner M101", away: "Winner M102", score: null, date: "2026-07-19", venue: "MetLife Stadium, East Rutherford" }
  ]
};
