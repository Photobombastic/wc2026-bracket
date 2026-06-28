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

  // Win % for upcoming matches is computed from `rating` below, using the
  // Elo win-expectancy formula: P(A) = 1 / (1 + 10^(-(ratingA - ratingB)/400)).
  // `rating` = official FIFA/Coca-Cola World Ranking points (itself Elo-based).
  ratingSource: "FIFA World Ranking points via Sofascore",
  ratingAsOf: "2026-06-28",

  // name -> { code, flag, rating }   (rating = FIFA ranking points)
  teams: {
    "South Africa":           { code: "RSA", flag: "🇿🇦", rating: 1428.38 },
    "Canada":                 { code: "CAN", flag: "🇨🇦", rating: 1559.48 },
    "Germany":                { code: "GER", flag: "🇩🇪", rating: 1735.77 },
    "Paraguay":               { code: "PAR", flag: "🇵🇾", rating: 1505.35 },
    "Netherlands":            { code: "NED", flag: "🇳🇱", rating: 1753.57 },
    "Morocco":                { code: "MAR", flag: "🇲🇦", rating: 1755.10 },
    "Brazil":                 { code: "BRA", flag: "🇧🇷", rating: 1765.86 },
    "Japan":                  { code: "JPN", flag: "🇯🇵", rating: 1661.58 },
    "France":                 { code: "FRA", flag: "🇫🇷", rating: 1870.70 },
    "Sweden":                 { code: "SWE", flag: "🇸🇪", rating: 1509.79 },
    "Ivory Coast":            { code: "CIV", flag: "🇨🇮", rating: 1540.87 },
    "Norway":                 { code: "NOR", flag: "🇳🇴", rating: 1557.44 },
    "Mexico":                 { code: "MEX", flag: "🇲🇽", rating: 1687.48 },
    "Ecuador":                { code: "ECU", flag: "🇪🇨", rating: 1598.52 },
    "England":                { code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", rating: 1828.02 },
    "DR Congo":               { code: "COD", flag: "🇨🇩", rating: 1474.43 },
    "United States":          { code: "USA", flag: "🇺🇸", rating: 1671.23 },
    "Bosnia and Herzegovina": { code: "BIH", flag: "🇧🇦", rating: 1387.22 },
    "Belgium":                { code: "BEL", flag: "🇧🇪", rating: 1742.24 },
    "Senegal":                { code: "SEN", flag: "🇸🇳", rating: 1684.07 },
    "Portugal":               { code: "POR", flag: "🇵🇹", rating: 1767.85 },
    "Croatia":                { code: "CRO", flag: "🇭🇷", rating: 1714.87 },
    "Spain":                  { code: "ESP", flag: "🇪🇸", rating: 1874.71 },
    "Austria":                { code: "AUT", flag: "🇦🇹", rating: 1597.40 },
    "Switzerland":            { code: "SUI", flag: "🇨🇭", rating: 1650.06 },
    "Algeria":                { code: "ALG", flag: "🇩🇿", rating: 1571.03 },
    "Argentina":              { code: "ARG", flag: "🇦🇷", rating: 1877.27 },
    "Cape Verde":             { code: "CPV", flag: "🇨🇻", rating: 1371.11 },
    "Colombia":               { code: "COL", flag: "🇨🇴", rating: 1698.35 },
    "Ghana":                  { code: "GHA", flag: "🇬🇭", rating: 1346.88 },
    "Australia":              { code: "AUS", flag: "🇦🇺", rating: 1579.34 },
    "Egypt":                  { code: "EGY", flag: "🇪🇬", rating: 1562.37 }
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
