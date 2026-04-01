// claude-pet --live: Terminal sidebar companion
import { roll } from './roll.js';
import { renderSprite, RARITY_STARS, RARITY_WEIGHTS, STAT_NAMES, type CompanionBones } from './sprites.js';
import { watch } from 'fs';
import { execSync } from 'child_process';
import { homedir } from 'os';
import { readFileSync, existsSync } from 'fs';
import { join, basename, extname } from 'path';

// ─── Colors ───
const R = '\x1b[0m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';
const ITALIC = '\x1b[3m';
const COLORS: Record<string, string> = {
  common: '\x1b[37m', uncommon: '\x1b[32m', rare: '\x1b[36m',
  epic: '\x1b[35m', legendary: '\x1b[33m',
};
const SPECIES_EMOJI: Record<string, string> = {
  duck:'🦆', goose:'🪿', blob:'🫧', cat:'🐱', dragon:'🐉', octopus:'🐙',
  owl:'🦉', penguin:'🐧', turtle:'🐢', snail:'🐌', ghost:'👻', axolotl:'🦎',
  capybara:'🐹', cactus:'🌵', robot:'🤖', rabbit:'🐰', mushroom:'🍄', chonk:'😺',
};
const HAT_NAMES: Record<string, string> = {
  none:'', crown:'👑', tophat:'🎩', propeller:'🧢', halo:'😇',
  wizard:'🧙', beanie:'🧶', tinyduck:'🐤',
};

// ─── Reactions ───
const FILE_REACTIONS: Record<string, string[]> = {
  '.ts': ['TypeScript? Fancy.','Types are your friend.','Another .ts...','Nice types!'],
  '.tsx':['React time!','Components go brrr.','JSX!'],
  '.js': ['Classic JS.','No types? Brave.','JS never dies.'],
  '.css':['Making it pretty?','CSS is art.','Flexbox or grid?'],
  '.py': ['Python! 🐍','Indentation matters.'],
  '.md': ['Docs! Rare.','README update?'],
  '.json':['Config change?','JSON again...'],
};
const IDLE_QUIPS = [
  '...','*yawn*','*fidget*','Waiting...','Still here!',
  '*stretch*','Need coffee?','Ship it!','You got this!',
  'Refactor time?','*peek*','Almost there...',
  'Nice progress.','*hum*','*blink blink*',
];
const COMMIT_REACTIONS = ['Shipped! 🚀','Another commit!','Clean commit.','Nice message.','Committed!'];
const HEARTS = ['  ♥    ♥  ','♥  ♥   ♥ ',' ♥   ♥  ♥','♥  ♥    ♥','·   ·  · '];

// ─── State ───
let bones: CompanionBones;
let color: string;
let tick = 0;
let bubble = '';
let bubbleTicks = 0;
let petTicks = 0;
let idleCount = 0;
const BUBBLE_MAX = 20;
const TICK_MS = 500;
const IDLE_SEQ = [0,0,0,0,1,0,0,0,-1,0,0,1,0,0,0];

function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]!; }

function renderBar(val: number, w = 10): string {
  const f = Math.round((val / 100) * w);
  return '█'.repeat(f) + '░'.repeat(w - f);
}

// ─── Render: build full frame as string[], then write once ───
function render() {
  const cols = process.stdout.columns || 24;
  const rows = process.stdout.rows || 24;
  const lines: string[] = [];

  // Header
  lines.push(`${BOLD}${color}${SPECIES_EMOJI[bones.species] || '🐾'} ${bones.species.toUpperCase()}${R}`);
  lines.push(`${color}${RARITY_STARS[bones.rarity]} ${bones.rarity}${R} ${DIM}${HAT_NAMES[bones.hat]}${R}`);
  lines.push('');

  // Sprite
  let spriteFrame: number;
  let blink = false;
  if (bubble || petTicks > 0) {
    spriteFrame = tick % 2;
  } else {
    const step = IDLE_SEQ[tick % IDLE_SEQ.length]!;
    if (step === -1) { spriteFrame = 0; blink = true; }
    else spriteFrame = step % 2;
  }

  if (petTicks > 0) {
    const h = HEARTS[Math.min(petTicks - 1, HEARTS.length - 1)]!;
    lines.push(`\x1b[31m${h}${R}`);
  }

  const sprite = renderSprite(bones, spriteFrame);
  for (const line of sprite) {
    const rendered = blink ? line.replaceAll(bones.eye, '-') : line;
    lines.push(`${color}${rendered}${R}`);
  }
  lines.push('');

  // Speech Bubble
  if (bubble && bubbleTicks > 0) {
    const fade = bubbleTicks <= 6;
    const bc = fade ? DIM : color;
    const maxW = Math.min(cols - 4, 20);
    const words = bubble.split(' ');
    const bLines: string[] = [];
    let cur = '';
    for (const w of words) {
      if (cur.length + w.length + 1 > maxW && cur) { bLines.push(cur); cur = w; }
      else cur = cur ? `${cur} ${w}` : w;
    }
    if (cur) bLines.push(cur);
    const boxW = Math.max(...bLines.map(l => l.length)) + 2;
    lines.push(`${bc}╭${'─'.repeat(boxW)}╮${R}`);
    for (const l of bLines) {
      lines.push(`${bc}│ ${ITALIC}${l.padEnd(boxW - 2)}${R}${bc} │${R}`);
    }
    lines.push(`${bc}╰${'─'.repeat(boxW)}╯${R}`);
  }
  lines.push('');

  // Stats
  lines.push(`${DIM}── stats ──${R}`);
  for (const stat of STAT_NAMES) {
    const val = bones.stats[stat];
    const sc = val >= 80 ? '\x1b[32m' : val >= 50 ? '\x1b[33m' : '\x1b[31m';
    lines.push(`${DIM}${stat.slice(0,5).padEnd(5)}${R} ${sc}${renderBar(val)}${R} ${DIM}${val}${R}`);
  }
  lines.push('');

  // Footer
  lines.push(`${DIM}p:pet t:talk q:quit${R}`);

  // Pad to fill screen (avoid leftover lines from previous frame)
  while (lines.length < rows) lines.push('');

  // Write entire frame at once: move to top-left, then output
  process.stdout.write('\x1b[H' + lines.slice(0, rows).map(l => l + '\x1b[K').join('\n'));
}

function say(text: string) {
  bubble = text;
  bubbleTicks = BUBBLE_MAX;
  idleCount = 0;
}

function detectUserId(): string {
  const paths = [join(homedir(), '.claude', 'config.json'), join(homedir(), '.config', 'claude', 'config.json')];
  for (const p of paths) {
    try {
      if (existsSync(p)) {
        const c = JSON.parse(readFileSync(p, 'utf-8'));
        if (c.oauthAccount?.accountUuid) return c.oauthAccount.accountUuid;
        if (c.userID) return c.userID;
      }
    } catch {}
  }
  try { return execSync('git config --global user.email', { encoding: 'utf-8' }).trim() || 'anon'; }
  catch { return 'anon'; }
}

// ─── Init ───
const args = process.argv.slice(2).filter(a => a !== '--live');
const userId = args[0] || detectUserId();
bones = roll(userId);
color = COLORS[bones.rarity] || '';

// Hide cursor, clear screen
process.stdout.write('\x1b[?25l\x1b[2J');
const cleanup = () => { process.stdout.write('\x1b[?25h\x1b[2J\x1b[H'); };
process.on('exit', cleanup);
process.on('SIGINT', () => { cleanup(); process.exit(0); });
process.on('SIGTERM', () => { cleanup(); process.exit(0); });

say(`Hi! I'm your ${bones.rarity} ${bones.species}!`);

// ─── File Watcher ───
try {
  const watcher = watch(process.cwd(), { recursive: true }, (event, filename) => {
    if (!filename || filename.includes('node_modules') || filename.includes('.git') || filename.includes('.next')) return;
    if (event !== 'change') return;
    if (bubbleTicks > 10) return;
    const ext = extname(filename);
    const reactions = FILE_REACTIONS[ext] || [`${basename(filename)} changed.`];
    say(pick(reactions));
  });
  watcher.on('error', () => {});
} catch {}

// ─── Git Watcher ───
let lastCommit = '';
try { lastCommit = execSync('git rev-parse HEAD 2>/dev/null', { encoding: 'utf-8' }).trim(); } catch {}
setInterval(() => {
  try {
    const head = execSync('git rev-parse HEAD 2>/dev/null', { encoding: 'utf-8' }).trim();
    if (head !== lastCommit && lastCommit) { lastCommit = head; say(pick(COMMIT_REACTIONS)); }
    lastCommit = head;
  } catch {}
}, 5000);

// ─── Keyboard ───
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (key: string) => {
    if (key === 'q' || key === '\x03') { cleanup(); process.exit(0); }
    if (key === 'p') { petTicks = 5; say('❤️ *purrs happily*'); }
    if (key === 't') { say(pick(IDLE_QUIPS)); }
  });
}

// ─── Main Loop ───
setInterval(() => {
  tick++;
  if (bubbleTicks > 0) bubbleTicks--;
  if (bubbleTicks === 0 && bubble) bubble = '';
  if (petTicks > 0) petTicks--;
  idleCount++;
  if (!bubble && idleCount > 40 + Math.floor(Math.random() * 40)) {
    say(pick(IDLE_QUIPS));
  }
  render();
}, TICK_MS);

render();
