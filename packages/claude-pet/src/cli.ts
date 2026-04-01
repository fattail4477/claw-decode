import { roll } from './roll.js';
import { renderSprite, RARITY_STARS, RARITY_WEIGHTS, STAT_NAMES } from './sprites.js';
import { execSync } from 'child_process';
import { homedir } from 'os';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

// ─── Colors ───
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';
const COLORS: Record<string, string> = {
  common:    '\x1b[37m',      // white
  uncommon:  '\x1b[32m',      // green
  rare:      '\x1b[36m',      // cyan
  epic:      '\x1b[35m',      // purple
  legendary: '\x1b[33m',      // yellow/gold
};

const HAT_NAMES: Record<string, string> = {
  none: '—', crown: '👑 Crown', tophat: '🎩 Top Hat', propeller: '🧢 Propeller',
  halo: '😇 Halo', wizard: '🧙 Wizard', beanie: '🧶 Beanie', tinyduck: '🐤 Tiny Duck',
};

const SPECIES_EMOJI: Record<string, string> = {
  duck: '🦆', goose: '🪿', blob: '🫧', cat: '🐱', dragon: '🐉', octopus: '🐙',
  owl: '🦉', penguin: '🐧', turtle: '🐢', snail: '🐌', ghost: '👻', axolotl: '🦎',
  capybara: '🐹', cactus: '🌵', robot: '🤖', rabbit: '🐰', mushroom: '🍄', chonk: '😺',
};

// ─── Try to detect Claude Code userId ───
function detectUserId(): string | null {
  // Try Claude Code config
  const configPaths = [
    join(homedir(), '.claude', 'config.json'),
    join(homedir(), '.config', 'claude', 'config.json'),
  ];
  for (const p of configPaths) {
    try {
      if (existsSync(p)) {
        const config = JSON.parse(readFileSync(p, 'utf-8'));
        if (config.oauthAccount?.accountUuid) return config.oauthAccount.accountUuid;
        if (config.userID) return config.userID;
      }
    } catch {}
  }

  // Try git email
  try {
    const email = execSync('git config --global user.email', { encoding: 'utf-8' }).trim();
    if (email) return email;
  } catch {}

  return null;
}

function renderBar(value: number, width = 20): string {
  const filled = Math.round((value / 100) * width);
  return '█'.repeat(filled) + '░'.repeat(width - filled);
}

function animate(bones: ReturnType<typeof roll>) {
  const color = COLORS[bones.rarity] || '';
  const sprite0 = renderSprite(bones, 0);
  const sprite1 = renderSprite(bones, 1);

  // Print with animation
  let frame = 0;
  const interval = setInterval(() => {
    const sprite = frame % 2 === 0 ? sprite0 : sprite1;
    // Move cursor up to overwrite
    if (frame > 0) process.stdout.write(`\x1b[${sprite.length}A`);
    for (const line of sprite) {
      process.stdout.write(`${color}    ${line}${RESET}\n`);
    }
    frame++;
    if (frame >= 6) {
      clearInterval(interval);
      printInfo(bones);
    }
  }, 400);
}

function printInfo(bones: ReturnType<typeof roll>) {
  const color = COLORS[bones.rarity] || '';
  const dropRate = RARITY_WEIGHTS[bones.rarity];

  console.log();
  console.log(`  ${SPECIES_EMOJI[bones.species] || '🐾'} ${BOLD}${color}${bones.species.toUpperCase()}${RESET}`);
  console.log(`  ${color}${RARITY_STARS[bones.rarity]} ${bones.rarity.toUpperCase()}${RESET} ${DIM}(${dropRate}% drop rate)${RESET}`);
  console.log(`  Hat: ${HAT_NAMES[bones.hat]}  ${DIM}|${RESET}  Eyes: ${bones.eye}  ${bones.shiny ? `${DIM}|${RESET}  ✨ SHINY!` : ''}`);
  console.log();

  // Stats
  console.log(`  ${BOLD}Stats${RESET}`);
  for (const stat of STAT_NAMES) {
    const val = bones.stats[stat];
    const barColor = val >= 80 ? '\x1b[32m' : val >= 50 ? '\x1b[33m' : '\x1b[31m';
    console.log(`  ${stat.padEnd(10)} ${barColor}${renderBar(val)}${RESET} ${val}`);
  }
  console.log();

  // Share prompt
  const shareText = `I hatched a ${bones.rarity} ${bones.species} ${SPECIES_EMOJI[bones.species] || '🐾'} in Claude Code's hidden pet system! ${RARITY_STARS[bones.rarity]}`;
  console.log(`  ${DIM}Share: "${shareText}"${RESET}`);
  console.log(`  ${DIM}https://clawdecode.net/hatch${RESET}`);
  console.log();
}

// ─── Main ───
const args = process.argv.slice(2);

// --live mode: launch sidebar companion
if (args.includes("--live")) {
  require("./live.js");
  process.exit(0);
}

let userId = args[0];

if (!userId) {
  userId = detectUserId() ?? undefined;
  if (userId) {
    console.log(`\n  ${DIM}Auto-detected identity: ${userId}${RESET}`);
  }
}

if (!userId) {
  console.log(`
  ${BOLD}🐾 claude-pet${RESET} — Hatch your hidden Claude Code companion

  ${DIM}Usage:${RESET}
    npx claude-pet                    ${DIM}# auto-detect from Claude Code config${RESET}
    npx claude-pet <github-username>  ${DIM}# use any identifier${RESET}
    npx claude-pet <email>            ${DIM}# use your email${RESET}

  ${DIM}This uses the exact same algorithm Claude Code uses internally
  to assign you a companion. Same hash, same PRNG, same salt.
  The pet system exists in the code — Anthropic just hasn't enabled it yet.${RESET}

  ${DIM}https://clawdecode.net${RESET}
`);
  process.exit(0);
}

console.log(`\n  ${BOLD}🐾 Hatching your Claude Code companion...${RESET}\n`);

const bones = roll(userId);
animate(bones);
