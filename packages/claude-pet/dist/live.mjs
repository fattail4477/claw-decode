#!/usr/bin/env node

// src/sprites.ts
var SPECIES = [
  "duck",
  "goose",
  "blob",
  "cat",
  "dragon",
  "octopus",
  "owl",
  "penguin",
  "turtle",
  "snail",
  "ghost",
  "axolotl",
  "capybara",
  "cactus",
  "robot",
  "rabbit",
  "mushroom",
  "chonk"
];
var EYES = ["\xB7", "\u2726", "\xD7", "\u25C9", "@", "\xB0"];
var HATS = ["none", "crown", "tophat", "propeller", "halo", "wizard", "beanie", "tinyduck"];
var RARITIES = ["common", "uncommon", "rare", "epic", "legendary"];
var RARITY_WEIGHTS = {
  common: 60,
  uncommon: 25,
  rare: 10,
  epic: 4,
  legendary: 1
};
var RARITY_STARS = {
  common: "\u2605",
  uncommon: "\u2605\u2605",
  rare: "\u2605\u2605\u2605",
  epic: "\u2605\u2605\u2605\u2605",
  legendary: "\u2605\u2605\u2605\u2605\u2605"
};
var STAT_NAMES = ["DEBUGGING", "PATIENCE", "CHAOS", "WISDOM", "SNARK"];
var BODIES = {
  duck: [
    ["            ", "    __      ", "  <({E} )___  ", "   (  ._>   ", "    `--\xB4    "],
    ["            ", "    __      ", "  <({E} )___  ", "   (  ._>   ", "    `--\xB4~   "]
  ],
  goose: [
    ["            ", "     ({E}>    ", "     ||     ", "   _(__)_   ", "    ^^^^    "],
    ["            ", "    ({E}>     ", "     ||     ", "   _(__)_   ", "    ^^^^    "]
  ],
  blob: [
    ["            ", "   .----.   ", "  ( {E}  {E} )  ", "  (      )  ", "   `----\xB4   "],
    ["            ", "  .------.  ", " (  {E}  {E}  ) ", " (        ) ", "  `------\xB4  "]
  ],
  cat: [
    ["            ", "   /\\_/\\    ", "  ( {E}   {E})  ", "  (  \u03C9  )   ", '  (")_(")   '],
    ["            ", "   /\\_/\\    ", "  ( {E}   {E})  ", "  (  \u03C9  )   ", '  (")_(")~  ']
  ],
  dragon: [
    ["            ", "  /^\\  /^\\  ", " <  {E}  {E}  > ", " (   ~~   ) ", "  `-vvvv-\xB4  "],
    ["            ", "  /^\\  /^\\  ", " <  {E}  {E}  > ", " (        ) ", "  `-vvvv-\xB4  "]
  ],
  octopus: [
    ["            ", "   .----.   ", "  ( {E}  {E} )  ", "  (______)  ", "  /\\/\\/\\/\\  "],
    ["            ", "   .----.   ", "  ( {E}  {E} )  ", "  (______)  ", "  \\/\\/\\/\\/  "]
  ],
  owl: [
    ["            ", "   /\\  /\\   ", "  (({E})({E}))  ", "  (  ><  )  ", "   `----\xB4   "],
    ["            ", "   /\\  /\\   ", "  (({E})({E}))  ", "  (  ><  )  ", "   .----.   "]
  ],
  penguin: [
    ["            ", "  .---.     ", "  ({E}>{E})     ", " /(   )\\    ", "  `---\xB4     "],
    ["            ", "  .---.     ", "  ({E}>{E})     ", " |(   )|    ", "  `---\xB4     "]
  ],
  turtle: [
    ["            ", "   _,--._   ", "  ( {E}  {E} )  ", " /[______]\\ ", "  ``    ``  "],
    ["            ", "   _,--._   ", "  ( {E}  {E} )  ", " /[______]\\ ", "   ``  ``   "]
  ],
  snail: [
    ["            ", " {E}    .--.  ", "  \\  ( @ )  ", "   \\_`--\xB4   ", "  ~~~~~~~   "],
    ["            ", "  {E}   .--.  ", "  |  ( @ )  ", "   \\_`--\xB4   ", "  ~~~~~~~   "]
  ],
  ghost: [
    ["            ", "   .----.   ", "  / {E}  {E} \\  ", "  |      |  ", "  ~`~``~`~  "],
    ["            ", "   .----.   ", "  / {E}  {E} \\  ", "  |      |  ", "  `~`~~`~`  "]
  ],
  axolotl: [
    ["            ", "}~(______)~{", "}~({E} .. {E})~{", "  ( .--. )  ", "  (_/  \\_)  "],
    ["            ", "~}(______){~", "~}({E} .. {E}){~", "  ( .--. )  ", "  (_/  \\_)  "]
  ],
  capybara: [
    ["            ", "  n______n  ", " ( {E}    {E} ) ", " (   oo   ) ", "  `------\xB4  "],
    ["            ", "  n______n  ", " ( {E}    {E} ) ", " (   Oo   ) ", "  `------\xB4  "]
  ],
  cactus: [
    ["            ", " n  ____  n ", " | |{E}  {E}| | ", " |_|    |_| ", "   |    |   "],
    ["            ", "    ____    ", " n |{E}  {E}| n ", " |_|    |_| ", "   |    |   "]
  ],
  robot: [
    ["            ", "   .[||].   ", "  [ {E}  {E} ]  ", "  [ ==== ]  ", "  `------\xB4  "],
    ["            ", "   .[||].   ", "  [ {E}  {E} ]  ", "  [ -==- ]  ", "  `------\xB4  "]
  ],
  rabbit: [
    ["            ", "   (\\__/)   ", "  ( {E}  {E} )  ", " =(  ..  )= ", '  (")__(")  '],
    ["            ", "   (|__/)   ", "  ( {E}  {E} )  ", " =(  ..  )= ", '  (")__(")  ']
  ],
  mushroom: [
    ["            ", " .-o-OO-o-. ", "(__________)", "   |{E}  {E}|   ", "   |____|   "],
    ["            ", " .-O-oo-O-. ", "(__________)", "   |{E}  {E}|   ", "   |____|   "]
  ],
  chonk: [
    ["            ", "  /\\    /\\  ", " ( {E}    {E} ) ", " (   ..   ) ", "  `------\xB4  "],
    ["            ", "  /\\    /|  ", " ( {E}    {E} ) ", " (   ..   ) ", "  `------\xB4  "]
  ]
};
var HAT_LINES = {
  none: "",
  crown: "   \\^^^/    ",
  tophat: "   [___]    ",
  propeller: "    -+-     ",
  halo: "   (   )    ",
  wizard: "    /^\\     ",
  beanie: "   (___)    ",
  tinyduck: "    ,>      "
};
function renderSprite(bones2, frame2 = 0) {
  const frames = BODIES[bones2.species];
  const body = frames[frame2 % frames.length].map(
    (line) => line.replaceAll("{E}", bones2.eye)
  );
  const lines = [...body];
  if (bones2.hat !== "none" && !lines[0].trim()) {
    lines[0] = HAT_LINES[bones2.hat];
  }
  if (!lines[0].trim() && frames.every((f) => !f[0].trim())) lines.shift();
  return lines;
}

// src/roll.ts
function mulberry32(seed) {
  let a = seed >>> 0;
  return function() {
    a |= 0;
    a = a + 1831565813 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function hashString(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}
function rollRarity(rng) {
  const total = Object.values(RARITY_WEIGHTS).reduce((a, b) => a + b, 0);
  let roll2 = rng() * total;
  for (const rarity of RARITIES) {
    roll2 -= RARITY_WEIGHTS[rarity];
    if (roll2 < 0) return rarity;
  }
  return "common";
}
var RARITY_FLOOR = {
  common: 5,
  uncommon: 15,
  rare: 25,
  epic: 35,
  legendary: 50
};
function rollStats(rng, rarity) {
  const floor = RARITY_FLOOR[rarity];
  const peak = pick(rng, STAT_NAMES);
  let dump = pick(rng, STAT_NAMES);
  while (dump === peak) dump = pick(rng, STAT_NAMES);
  const stats = {};
  for (const name of STAT_NAMES) {
    if (name === peak) {
      stats[name] = Math.min(100, floor + 50 + Math.floor(rng() * 30));
    } else if (name === dump) {
      stats[name] = Math.max(1, floor - 10 + Math.floor(rng() * 15));
    } else {
      stats[name] = floor + Math.floor(rng() * 40);
    }
  }
  return stats;
}
var SALT = "friend-2026-401";
function roll(userId2) {
  const key = userId2 + SALT;
  const rng = mulberry32(hashString(key));
  const rarity = rollRarity(rng);
  return {
    rarity,
    species: pick(rng, SPECIES),
    eye: pick(rng, EYES),
    hat: rarity === "common" ? "none" : pick(rng, HATS),
    shiny: rng() < 0.01,
    stats: rollStats(rng, rarity)
  };
}

// src/live.ts
import { watch } from "fs";
import { execSync } from "child_process";
import { homedir } from "os";
import { readFileSync, existsSync } from "fs";
import { join, basename, extname } from "path";
var R = "\x1B[0m";
var BOLD = "\x1B[1m";
var DIM = "\x1B[2m";
var ITALIC = "\x1B[3m";
var COLORS = {
  common: "\x1B[37m",
  uncommon: "\x1B[32m",
  rare: "\x1B[36m",
  epic: "\x1B[35m",
  legendary: "\x1B[33m"
};
var SPECIES_EMOJI = {
  duck: "\u{1F986}",
  goose: "\u{1FABF}",
  blob: "\u{1FAE7}",
  cat: "\u{1F431}",
  dragon: "\u{1F409}",
  octopus: "\u{1F419}",
  owl: "\u{1F989}",
  penguin: "\u{1F427}",
  turtle: "\u{1F422}",
  snail: "\u{1F40C}",
  ghost: "\u{1F47B}",
  axolotl: "\u{1F98E}",
  capybara: "\u{1F439}",
  cactus: "\u{1F335}",
  robot: "\u{1F916}",
  rabbit: "\u{1F430}",
  mushroom: "\u{1F344}",
  chonk: "\u{1F63A}"
};
var HAT_NAMES = {
  none: "",
  crown: "\u{1F451}",
  tophat: "\u{1F3A9}",
  propeller: "\u{1F9E2}",
  halo: "\u{1F607}",
  wizard: "\u{1F9D9}",
  beanie: "\u{1F9F6}",
  tinyduck: "\u{1F424}"
};
var FILE_REACTIONS = {
  ".ts": ["TypeScript? Fancy.", "Types are your friend.", "Another .ts file...", "Nice types!"],
  ".tsx": ["React time!", "Components everywhere.", "JSX goes brrr."],
  ".js": ["Classic JavaScript.", "No types? Brave.", "JS never dies."],
  ".css": ["Making it pretty?", "CSS is art.", "Flexbox or grid?", "More CSS? Bold."],
  ".py": ["Python! \u{1F40D}", "Indentation matters.", "import antigravity"],
  ".md": ["Documentation! Rare.", "Words, not code. Nice.", "README update?"],
  ".json": ["Config change?", "JSON is fine.", "Another config file..."]
};
var IDLE_QUIPS = [
  "...",
  "*yawn*",
  "*fidget*",
  "Waiting...",
  "*blink*",
  "Still here!",
  "*stretch*",
  "Need coffee?",
  "*hum*",
  "Ship it!",
  "Looks good to me.",
  "*nap*",
  "You got this!",
  "Refactor time?",
  "*peek*",
  "Almost there...",
  "Nice progress."
];
var COMMIT_REACTIONS = [
  "Shipped! \u{1F680}",
  "Another commit!",
  "Git push?",
  "Clean commit.",
  "Nice message.",
  "History grows.",
  "Committed!"
];
var HEARTS = ["   \u2665    \u2665   ", "  \u2665  \u2665   \u2665  ", " \u2665   \u2665  \u2665   ", "\u2665  \u2665      \u2665 ", "\xB7    \xB7   \xB7  "];
var bones;
var color;
var frame = 0;
var bubble = "";
var bubbleTicks = 0;
var petTicks = 0;
var idleCount = 0;
var BUBBLE_DURATION = 20;
var TICK_MS = 500;
var IDLE_SEQ = [0, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0];
function pick2(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function clear() {
  process.stdout.write("\x1B[2J\x1B[H");
}
function moveTo(row, col) {
  process.stdout.write(`\x1B[${row};${col}H`);
}
function renderBar(val, w = 12) {
  const filled = Math.round(val / 100 * w);
  return "\u2588".repeat(filled) + "\u2591".repeat(w - filled);
}
function render() {
  const cols = process.stdout.columns || 24;
  const rows = process.stdout.rows || 20;
  clear();
  let row = 1;
  moveTo(row++, 1);
  process.stdout.write(`${BOLD}${color}${SPECIES_EMOJI[bones.species] || "\u{1F43E}"} ${bones.species.toUpperCase()}${R}`);
  moveTo(row++, 1);
  process.stdout.write(`${color}${RARITY_STARS[bones.rarity]} ${bones.rarity}${R} ${DIM}${HAT_NAMES[bones.hat]}${R}`);
  row++;
  let spriteFrame;
  let blink = false;
  if (bubble || petTicks > 0) {
    spriteFrame = frame % 2;
  } else {
    const step = IDLE_SEQ[frame % IDLE_SEQ.length];
    if (step === -1) {
      spriteFrame = 0;
      blink = true;
    } else spriteFrame = step % 2;
  }
  if (petTicks > 0) {
    const heartLine = HEARTS[Math.min(petTicks - 1, HEARTS.length - 1)];
    moveTo(row++, 1);
    process.stdout.write(`\x1B[31m${heartLine}${R}`);
  }
  const sprite = renderSprite(bones, spriteFrame);
  for (const line of sprite) {
    moveTo(row++, 1);
    const rendered = blink ? line.replaceAll(bones.eye, "-") : line;
    process.stdout.write(`${color}${rendered}${R}`);
  }
  row++;
  if (bubble && bubbleTicks > 0) {
    const fade = bubbleTicks <= 6;
    const bColor = fade ? DIM : "";
    const maxW = Math.min(cols - 2, 22);
    const words = bubble.split(" ");
    const lines = [];
    let cur = "";
    for (const w of words) {
      if (cur.length + w.length + 1 > maxW && cur) {
        lines.push(cur);
        cur = w;
      } else cur = cur ? `${cur} ${w}` : w;
    }
    if (cur) lines.push(cur);
    const boxW = Math.max(...lines.map((l) => l.length)) + 2;
    moveTo(row++, 1);
    process.stdout.write(`${bColor}\u256D${"\u2500".repeat(boxW)}\u256E${R}`);
    for (const l of lines) {
      moveTo(row++, 1);
      process.stdout.write(`${bColor}\u2502 ${ITALIC}${l.padEnd(boxW - 2)}${R}${bColor} \u2502${R}`);
    }
    moveTo(row++, 1);
    process.stdout.write(`${bColor}\u2570${"\u2500".repeat(boxW)}\u256F${R}`);
    row++;
  }
  if (!bubble && rows > 18) {
    moveTo(row++, 1);
    process.stdout.write(`${DIM}\u2500\u2500\u2500 stats \u2500\u2500\u2500${R}`);
    for (const stat of STAT_NAMES) {
      const val = bones.stats[stat];
      const sColor = val >= 80 ? "\x1B[32m" : val >= 50 ? "\x1B[33m" : "\x1B[31m";
      moveTo(row++, 1);
      process.stdout.write(`${DIM}${stat.slice(0, 4)}${R} ${sColor}${renderBar(val)}${R} ${DIM}${val}${R}`);
    }
    row++;
  }
  moveTo(rows - 1, 1);
  process.stdout.write(`${DIM}p:pet t:talk q:quit${R}`);
}
function say(text) {
  bubble = text;
  bubbleTicks = BUBBLE_DURATION;
}
function detectUserId() {
  const paths = [
    join(homedir(), ".claude", "config.json"),
    join(homedir(), ".config", "claude", "config.json")
  ];
  for (const p of paths) {
    try {
      if (existsSync(p)) {
        const c = JSON.parse(readFileSync(p, "utf-8"));
        if (c.oauthAccount?.accountUuid) return c.oauthAccount.accountUuid;
        if (c.userID) return c.userID;
      }
    } catch {
    }
  }
  try {
    return execSync("git config --global user.email", { encoding: "utf-8" }).trim() || "anon";
  } catch {
    return "anon";
  }
}
var args = process.argv.slice(2).filter((a) => a !== "--live");
var userId = args[0] || detectUserId();
bones = roll(userId);
color = COLORS[bones.rarity] || "";
process.stdout.write("\x1B[?25l");
process.on("exit", () => process.stdout.write("\x1B[?25h"));
process.on("SIGINT", () => {
  process.stdout.write("\x1B[?25h");
  process.exit(0);
});
process.on("SIGTERM", () => {
  process.stdout.write("\x1B[?25h");
  process.exit(0);
});
say(`Hi! I'm your ${bones.rarity} ${bones.species}!`);
var watchDir = process.cwd();
try {
  const watcher = watch(watchDir, { recursive: true }, (event, filename) => {
    if (!filename || filename.includes("node_modules") || filename.includes(".git")) return;
    if (event !== "change") return;
    if (bubbleTicks > 10) return;
    const ext = extname(filename);
    const reactions = FILE_REACTIONS[ext] || [`${basename(filename)} changed.`];
    say(pick2(reactions));
  });
  watcher.on("error", () => {
  });
} catch {
}
var lastCommit = "";
try {
  lastCommit = execSync("git rev-parse HEAD 2>/dev/null", { encoding: "utf-8" }).trim();
} catch {
}
setInterval(() => {
  try {
    const head = execSync("git rev-parse HEAD 2>/dev/null", { encoding: "utf-8" }).trim();
    if (head !== lastCommit && lastCommit) {
      lastCommit = head;
      say(pick2(COMMIT_REACTIONS));
    }
    lastCommit = head;
  } catch {
  }
}, 5e3);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding("utf-8");
  process.stdin.on("data", (key) => {
    if (key === "q" || key === "") {
      process.stdout.write("\x1B[?25h");
      clear();
      process.exit(0);
    }
    if (key === "p") {
      petTicks = 5;
      say("\u2764\uFE0F *purrs happily*");
    }
    if (key === "t") {
      say(pick2(IDLE_QUIPS));
    }
  });
}
setInterval(() => {
  frame++;
  if (bubbleTicks > 0) bubbleTicks--;
  if (bubbleTicks === 0 && bubble) bubble = "";
  if (petTicks > 0) petTicks--;
  idleCount++;
  if (!bubble && idleCount > 60 + Math.random() * 60) {
    say(pick2(IDLE_QUIPS));
    idleCount = 0;
  }
  render();
}, TICK_MS);
render();
