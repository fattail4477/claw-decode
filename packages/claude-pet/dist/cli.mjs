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
function renderSprite(bones3, frame2 = 0) {
  const frames = BODIES[bones3.species];
  const body = frames[frame2 % frames.length].map(
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
var R, BOLD, DIM, ITALIC, COLORS, SPECIES_EMOJI, HAT_NAMES, FILE_REACTIONS, IDLE_QUIPS, COMMIT_REACTIONS, HEARTS, bones, color, frame, bubble, bubbleTicks, petTicks, idleCount, BUBBLE_DURATION, TICK_MS, IDLE_SEQ, args, userId, watchDir, lastCommit;
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
      ".ts": ["TypeScript? Fancy.", "Types are your friend.", "Another .ts file...", "Nice types!"],
      ".tsx": ["React time!", "Components everywhere.", "JSX goes brrr."],
      ".js": ["Classic JavaScript.", "No types? Brave.", "JS never dies."],
      ".css": ["Making it pretty?", "CSS is art.", "Flexbox or grid?", "More CSS? Bold."],
      ".py": ["Python! \u{1F40D}", "Indentation matters.", "import antigravity"],
      ".md": ["Documentation! Rare.", "Words, not code. Nice.", "README update?"],
      ".json": ["Config change?", "JSON is fine.", "Another config file..."]
    };
    IDLE_QUIPS = [
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
    COMMIT_REACTIONS = [
      "Shipped! \u{1F680}",
      "Another commit!",
      "Git push?",
      "Clean commit.",
      "Nice message.",
      "History grows.",
      "Committed!"
    ];
    HEARTS = ["   \u2665    \u2665   ", "  \u2665  \u2665   \u2665  ", " \u2665   \u2665  \u2665   ", "\u2665  \u2665      \u2665 ", "\xB7    \xB7   \xB7  "];
    frame = 0;
    bubble = "";
    bubbleTicks = 0;
    petTicks = 0;
    idleCount = 0;
    BUBBLE_DURATION = 20;
    TICK_MS = 500;
    IDLE_SEQ = [0, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0];
    args = process.argv.slice(2).filter((a) => a !== "--live");
    userId = args[0] || detectUserId();
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
    watchDir = process.cwd();
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
  let frame2 = 0;
  const interval = setInterval(() => {
    const sprite = frame2 % 2 === 0 ? sprite0 : sprite1;
    if (frame2 > 0) process.stdout.write(`\x1B[${sprite.length}A`);
    for (const line of sprite) {
      process.stdout.write(`${color2}    ${line}${RESET}
`);
    }
    frame2++;
    if (frame2 >= 6) {
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
