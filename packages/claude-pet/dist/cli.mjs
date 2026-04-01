var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/sprites.ts
function renderSprite(bones3, frame = 0) {
  const frames = BODIES[bones3.species];
  const body = frames[frame % frames.length].map(
    (line) => line.replaceAll("{E}", bones3.eye)
  );
  const lines = [...body];
  if (bones3.hat !== "none" && !lines[0].trim()) {
    lines[0] = HAT_LINES[bones3.hat];
  }
  if (!lines[0].trim() && frames.every((f) => !f[0].trim())) lines.shift();
  return lines;
}
var SPECIES, EYES, HATS, RARITIES, RARITY_WEIGHTS, RARITY_STARS, STAT_NAMES, BODIES, HAT_LINES;
var init_sprites = __esm({
  "src/sprites.ts"() {
    SPECIES = [
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
    EYES = ["\xB7", "\u2726", "\xD7", "\u25C9", "@", "\xB0"];
    HATS = ["none", "crown", "tophat", "propeller", "halo", "wizard", "beanie", "tinyduck"];
    RARITIES = ["common", "uncommon", "rare", "epic", "legendary"];
    RARITY_WEIGHTS = {
      common: 60,
      uncommon: 25,
      rare: 10,
      epic: 4,
      legendary: 1
    };
    RARITY_STARS = {
      common: "\u2605",
      uncommon: "\u2605\u2605",
      rare: "\u2605\u2605\u2605",
      epic: "\u2605\u2605\u2605\u2605",
      legendary: "\u2605\u2605\u2605\u2605\u2605"
    };
    STAT_NAMES = ["DEBUGGING", "PATIENCE", "CHAOS", "WISDOM", "SNARK"];
    BODIES = {
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
    HAT_LINES = {
      none: "",
      crown: "   \\^^^/    ",
      tophat: "   [___]    ",
      propeller: "    -+-     ",
      halo: "   (   )    ",
      wizard: "    /^\\     ",
      beanie: "   (___)    ",
      tinyduck: "    ,>      "
    };
  }
});

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
function roll(userId3) {
  const key = userId3 + SALT;
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
var RARITY_FLOOR, SALT;
var init_roll = __esm({
  "src/roll.ts"() {
    init_sprites();
    RARITY_FLOOR = {
      common: 5,
      uncommon: 15,
      rare: 25,
      epic: 35,
      legendary: 50
    };
    SALT = "friend-2026-401";
  }
});

// src/live.ts
var live_exports = {};
import { watch } from "fs";
import { execSync } from "child_process";
import { homedir } from "os";
import { readFileSync, existsSync } from "fs";
import { join, basename, extname } from "path";
function pick2(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function renderBar(val, w = 10) {
  const f = Math.round(val / 100 * w);
  return "\u2588".repeat(f) + "\u2591".repeat(w - f);
}
function render() {
  const cols = process.stdout.columns || 24;
  const rows = process.stdout.rows || 24;
  const lines = [];
  lines.push(`${BOLD}${color}${SPECIES_EMOJI[bones.species] || "\u{1F43E}"} ${bones.species.toUpperCase()}${R}`);
  lines.push(`${color}${RARITY_STARS[bones.rarity]} ${bones.rarity}${R} ${DIM}${HAT_NAMES[bones.hat]}${R}`);
  lines.push("");
  let spriteFrame;
  let blink = false;
  if (bubble || petTicks > 0) {
    spriteFrame = tick % 2;
  } else {
    const step = IDLE_SEQ[tick % IDLE_SEQ.length];
    if (step === -1) {
      spriteFrame = 0;
      blink = true;
    } else spriteFrame = step % 2;
  }
  if (petTicks > 0) {
    const h = HEARTS[Math.min(petTicks - 1, HEARTS.length - 1)];
    lines.push(`\x1B[31m${h}${R}`);
  }
  const sprite = renderSprite(bones, spriteFrame);
  for (const line of sprite) {
    const rendered = blink ? line.replaceAll(bones.eye, "-") : line;
    lines.push(`${color}${rendered}${R}`);
  }
  lines.push("");
  if (bubble && bubbleTicks > 0) {
    const fade = bubbleTicks <= 6;
    const bc = fade ? DIM : color;
    const maxW = Math.min(cols - 4, 20);
    const words = bubble.split(" ");
    const bLines = [];
    let cur = "";
    for (const w of words) {
      if (cur.length + w.length + 1 > maxW && cur) {
        bLines.push(cur);
        cur = w;
      } else cur = cur ? `${cur} ${w}` : w;
    }
    if (cur) bLines.push(cur);
    const boxW = Math.max(...bLines.map((l) => l.length)) + 2;
    lines.push(`${bc}\u256D${"\u2500".repeat(boxW)}\u256E${R}`);
    for (const l of bLines) {
      lines.push(`${bc}\u2502 ${ITALIC}${l.padEnd(boxW - 2)}${R}${bc} \u2502${R}`);
    }
    lines.push(`${bc}\u2570${"\u2500".repeat(boxW)}\u256F${R}`);
  }
  lines.push("");
  lines.push(`${DIM}\u2500\u2500 stats \u2500\u2500${R}`);
  for (const stat of STAT_NAMES) {
    const val = bones.stats[stat];
    const sc = val >= 80 ? "\x1B[32m" : val >= 50 ? "\x1B[33m" : "\x1B[31m";
    lines.push(`${DIM}${stat.slice(0, 5).padEnd(5)}${R} ${sc}${renderBar(val)}${R} ${DIM}${val}${R}`);
  }
  lines.push("");
  lines.push(`${DIM}p:pet t:talk q:quit${R}`);
  while (lines.length < rows) lines.push("");
  process.stdout.write("\x1B[H" + lines.slice(0, rows).map((l) => l + "\x1B[K").join("\n"));
}
function say(text) {
  bubble = text;
  bubbleTicks = BUBBLE_MAX;
  idleCount = 0;
}
function detectUserId() {
  const paths = [join(homedir(), ".claude", "config.json"), join(homedir(), ".config", "claude", "config.json")];
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
var R, BOLD, DIM, ITALIC, COLORS, SPECIES_EMOJI, HAT_NAMES, FILE_REACTIONS, IDLE_QUIPS, COMMIT_REACTIONS, HEARTS, bones, color, tick, bubble, bubbleTicks, petTicks, idleCount, BUBBLE_MAX, TICK_MS, IDLE_SEQ, args, userId, cleanup, lastCommit;
var init_live = __esm({
  "src/live.ts"() {
    init_roll();
    init_sprites();
    R = "\x1B[0m";
    BOLD = "\x1B[1m";
    DIM = "\x1B[2m";
    ITALIC = "\x1B[3m";
    COLORS = {
      common: "\x1B[37m",
      uncommon: "\x1B[32m",
      rare: "\x1B[36m",
      epic: "\x1B[35m",
      legendary: "\x1B[33m"
    };
    SPECIES_EMOJI = {
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
    HAT_NAMES = {
      none: "",
      crown: "\u{1F451}",
      tophat: "\u{1F3A9}",
      propeller: "\u{1F9E2}",
      halo: "\u{1F607}",
      wizard: "\u{1F9D9}",
      beanie: "\u{1F9F6}",
      tinyduck: "\u{1F424}"
    };
    FILE_REACTIONS = {
      ".ts": ["TypeScript? Fancy.", "Types are your friend.", "Another .ts...", "Nice types!"],
      ".tsx": ["React time!", "Components go brrr.", "JSX!"],
      ".js": ["Classic JS.", "No types? Brave.", "JS never dies."],
      ".css": ["Making it pretty?", "CSS is art.", "Flexbox or grid?"],
      ".py": ["Python! \u{1F40D}", "Indentation matters."],
      ".md": ["Docs! Rare.", "README update?"],
      ".json": ["Config change?", "JSON again..."]
    };
    IDLE_QUIPS = [
      "...",
      "*yawn*",
      "*fidget*",
      "Waiting...",
      "Still here!",
      "*stretch*",
      "Need coffee?",
      "Ship it!",
      "You got this!",
      "Refactor time?",
      "*peek*",
      "Almost there...",
      "Nice progress.",
      "*hum*",
      "*blink blink*"
    ];
    COMMIT_REACTIONS = ["Shipped! \u{1F680}", "Another commit!", "Clean commit.", "Nice message.", "Committed!"];
    HEARTS = ["  \u2665    \u2665  ", "\u2665  \u2665   \u2665 ", " \u2665   \u2665  \u2665", "\u2665  \u2665    \u2665", "\xB7   \xB7  \xB7 "];
    tick = 0;
    bubble = "";
    bubbleTicks = 0;
    petTicks = 0;
    idleCount = 0;
    BUBBLE_MAX = 20;
    TICK_MS = 500;
    IDLE_SEQ = [0, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0];
    args = process.argv.slice(2).filter((a) => a !== "--live");
    userId = args[0] || detectUserId();
    bones = roll(userId);
    color = COLORS[bones.rarity] || "";
    process.stdout.write("\x1B[?25l\x1B[2J");
    cleanup = () => {
      process.stdout.write("\x1B[?25h\x1B[2J\x1B[H");
    };
    process.on("exit", cleanup);
    process.on("SIGINT", () => {
      cleanup();
      process.exit(0);
    });
    process.on("SIGTERM", () => {
      cleanup();
      process.exit(0);
    });
    say(`Hi! I'm your ${bones.rarity} ${bones.species}!`);
    try {
      const watcher = watch(process.cwd(), { recursive: true }, (event, filename) => {
        if (!filename || filename.includes("node_modules") || filename.includes(".git") || filename.includes(".next")) return;
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
    lastCommit = "";
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
          cleanup();
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
      tick++;
      if (bubbleTicks > 0) bubbleTicks--;
      if (bubbleTicks === 0 && bubble) bubble = "";
      if (petTicks > 0) petTicks--;
      idleCount++;
      if (!bubble && idleCount > 40 + Math.floor(Math.random() * 40)) {
        say(pick2(IDLE_QUIPS));
      }
      render();
    }, TICK_MS);
    render();
  }
});

// src/cli.ts
init_roll();
init_sprites();
import { execSync as execSync2 } from "child_process";
import { homedir as homedir2 } from "os";
import { readFileSync as readFileSync2, existsSync as existsSync2 } from "fs";
import { join as join2 } from "path";
var RESET = "\x1B[0m";
var BOLD2 = "\x1B[1m";
var DIM2 = "\x1B[2m";
var COLORS2 = {
  common: "\x1B[37m",
  // white
  uncommon: "\x1B[32m",
  // green
  rare: "\x1B[36m",
  // cyan
  epic: "\x1B[35m",
  // purple
  legendary: "\x1B[33m"
  // yellow/gold
};
var HAT_NAMES2 = {
  none: "\u2014",
  crown: "\u{1F451} Crown",
  tophat: "\u{1F3A9} Top Hat",
  propeller: "\u{1F9E2} Propeller",
  halo: "\u{1F607} Halo",
  wizard: "\u{1F9D9} Wizard",
  beanie: "\u{1F9F6} Beanie",
  tinyduck: "\u{1F424} Tiny Duck"
};
var SPECIES_EMOJI2 = {
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
function detectUserId2() {
  const configPaths = [
    join2(homedir2(), ".claude", "config.json"),
    join2(homedir2(), ".config", "claude", "config.json")
  ];
  for (const p of configPaths) {
    try {
      if (existsSync2(p)) {
        const config = JSON.parse(readFileSync2(p, "utf-8"));
        if (config.oauthAccount?.accountUuid) return config.oauthAccount.accountUuid;
        if (config.userID) return config.userID;
      }
    } catch {
    }
  }
  try {
    const email = execSync2("git config --global user.email", { encoding: "utf-8" }).trim();
    if (email) return email;
  } catch {
  }
  return null;
}
function renderBar2(value, width = 20) {
  const filled = Math.round(value / 100 * width);
  return "\u2588".repeat(filled) + "\u2591".repeat(width - filled);
}
function animate(bones3) {
  const color2 = COLORS2[bones3.rarity] || "";
  const sprite0 = renderSprite(bones3, 0);
  const sprite1 = renderSprite(bones3, 1);
  let frame = 0;
  const interval = setInterval(() => {
    const sprite = frame % 2 === 0 ? sprite0 : sprite1;
    if (frame > 0) process.stdout.write(`\x1B[${sprite.length}A`);
    for (const line of sprite) {
      process.stdout.write(`${color2}    ${line}${RESET}
`);
    }
    frame++;
    if (frame >= 6) {
      clearInterval(interval);
      printInfo(bones3);
    }
  }, 400);
}
function printInfo(bones3) {
  const color2 = COLORS2[bones3.rarity] || "";
  const dropRate = RARITY_WEIGHTS[bones3.rarity];
  console.log();
  console.log(`  ${SPECIES_EMOJI2[bones3.species] || "\u{1F43E}"} ${BOLD2}${color2}${bones3.species.toUpperCase()}${RESET}`);
  console.log(`  ${color2}${RARITY_STARS[bones3.rarity]} ${bones3.rarity.toUpperCase()}${RESET} ${DIM2}(${dropRate}% drop rate)${RESET}`);
  console.log(`  Hat: ${HAT_NAMES2[bones3.hat]}  ${DIM2}|${RESET}  Eyes: ${bones3.eye}  ${bones3.shiny ? `${DIM2}|${RESET}  \u2728 SHINY!` : ""}`);
  console.log();
  console.log(`  ${BOLD2}Stats${RESET}`);
  for (const stat of STAT_NAMES) {
    const val = bones3.stats[stat];
    const barColor = val >= 80 ? "\x1B[32m" : val >= 50 ? "\x1B[33m" : "\x1B[31m";
    console.log(`  ${stat.padEnd(10)} ${barColor}${renderBar2(val)}${RESET} ${val}`);
  }
  console.log();
  const shareText = `I hatched a ${bones3.rarity} ${bones3.species} ${SPECIES_EMOJI2[bones3.species] || "\u{1F43E}"} in Claude Code's hidden pet system! ${RARITY_STARS[bones3.rarity]}`;
  console.log(`  ${DIM2}Share: "${shareText}"${RESET}`);
  console.log(`  ${DIM2}https://clawdecode.net/hatch${RESET}`);
  console.log();
}
var args2 = process.argv.slice(2);
if (args2.includes("--live")) {
  init_live();
  process.exit(0);
}
var userId2 = args2[0];
if (!userId2) {
  userId2 = detectUserId2() ?? void 0;
  if (userId2) {
    console.log(`
  ${DIM2}Auto-detected identity: ${userId2}${RESET}`);
  }
}
if (!userId2) {
  console.log(`
  ${BOLD2}\u{1F43E} claude-pet${RESET} \u2014 Hatch your hidden Claude Code companion

  ${DIM2}Usage:${RESET}
    npx claude-pet                    ${DIM2}# auto-detect from Claude Code config${RESET}
    npx claude-pet <github-username>  ${DIM2}# use any identifier${RESET}
    npx claude-pet <email>            ${DIM2}# use your email${RESET}

  ${DIM2}This uses the exact same algorithm Claude Code uses internally
  to assign you a companion. Same hash, same PRNG, same salt.
  The pet system exists in the code \u2014 Anthropic just hasn't enabled it yet.${RESET}

  ${DIM2}https://clawdecode.net${RESET}
`);
  process.exit(0);
}
console.log(`
  ${BOLD2}\u{1F43E} Hatching your Claude Code companion...${RESET}
`);
var bones2 = roll(userId2);
animate(bones2);
