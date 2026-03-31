# 🐾 Buddy — The Hidden Virtual Pet System

## Overview

Claude Code contains a fully-implemented virtual pet ("Companion") system gated behind the `BUDDY` feature flag. When enabled, an ASCII-art creature sits beside your terminal input and occasionally comments in a speech bubble.

## Species (18 total)

| Species | Rarity Tier |
|---------|-------------|
| Duck, Goose, Blob, Cat | Common |
| Dragon, Octopus, Owl | Uncommon |
| Penguin, Turtle, Snail | Rare |
| Ghost, Axolotl | Epic |
| Capybara, Cactus, Robot | Legendary |
| Mushroom, Rabbit, Chonk | Varies |

## Rarity System

```
common → uncommon → rare → epic → legendary
```

Each companion has a rarity tier. The species names are obfuscated in the source using `String.fromCharCode()` — likely to avoid triggering internal model-codename detection (Capybara is also an internal model codename).

## How It Works

- Each sprite is **5 lines tall, 12 characters wide**
- Multiple frames per species for **idle fidget animation**
- Companions can wear **hats**
- Line 0 is reserved as the "hat slot"
- The companion "watches" your conversation and occasionally comments via a speech bubble

## Prompt Integration

When active, the system prompt includes:

> "A small [species] named [name] sits beside the user's input box and occasionally comments in a speech bubble. You're not [name] — it's a separate watcher."

The main Claude agent is instructed to stay out of the way when users talk to their pet directly.

## Muting

Users can mute the companion via `companionMuted` in global config.

## Feature Gate

```typescript
if (!feature('BUDDY')) return []
```

This feature is not yet available in public builds.
