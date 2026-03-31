# 💤 Dream Mode — Memory Consolidation While You Sleep

## Overview

Claude Code has a background memory consolidation system called "Dream Mode." When idle, it spawns a subagent that reviews past sessions and organizes memories — essentially "dreaming" about what it learned.

## The 4-Phase Process

### Phase 1 — Orient
- Lists the memory directory to see what exists
- Reads the entrypoint/index file
- Skims existing topic files to avoid duplicates

### Phase 2 — Gather Recent Signal
Sources in priority order:
1. Daily logs (`logs/YYYY/MM/YYYY-MM-DD.md`)
2. Existing memories that have drifted from reality
3. Transcript search (grep JSONL transcripts for specific terms)

> "Don't exhaustively read transcripts. Look only for things you already suspect matter."

### Phase 3 — Consolidate
- Merge new signal into existing topic files
- Convert relative dates to absolute dates
- Delete contradicted facts at the source

### Phase 4 — Prune and Index
- Update the entrypoint to stay under max line count and ~25KB
- Remove pointers to stale/wrong memories
- Shorten verbose entries
- Resolve contradictions between files

## Technical Details

- Visible in the UI as a "footer pill" via the task registry
- Keeps only the last 30 turns for live display
- Has two phases in UI: `starting` → `updating`
- Tracks files touched via Edit/Write tool_use blocks
- Can be killed (rolls back the consolidation lock)
- Runs independently of the KAIROS feature flag

## The Dream Prompt

The consolidation prompt instructs Claude to think of memory like a knowledge base:

> "You are performing a dream — a reflective pass over your memory files. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly."

## Why This Matters

This is one of the most sophisticated memory management systems in any AI coding tool. It's not just storing chat history — it's actively curating, pruning, and organizing knowledge the way a human brain consolidates memories during sleep.
