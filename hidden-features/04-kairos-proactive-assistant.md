# 🤖 KAIROS — The Proactive Persistent Assistant

## Overview

KAIROS is Claude Code's unreleased proactive assistant mode. Unlike the standard reactive CLI (you ask, it answers), KAIROS enables Claude to **initiate conversations**, run scheduled tasks, and send messages to users without being prompted.

## Key Components

### SendUserMessage (Brief Tool)
The primary communication channel in KAIROS mode. All user-visible responses must go through this tool:

> "Text outside this tool is visible in the detail view, but most won't open it — the answer lives here."

Messages have a `status` field:
- `normal` — replying to what the user asked
- `proactive` — Claude is initiating (a task finished, a blocker surfaced, needs input)

### Proactive Behavior Rules

From the source:
> "If you can answer right away, send the answer. If you need to go look — run a command, read files, check something — ack first in one line ('On it — checking the test output'), then work, then send the result. Without the ack they're staring at a spinner."

### Cron Scheduling
KAIROS integrates with the `/loop` command and ScheduleCron tool for recurring tasks. The cron system:
- Has jitter configuration to avoid thundering herd
- Supports recurring tasks with max age limits
- Is independently shippable from the main KAIROS flag
- Uses GrowthBook feature gates with a 5-minute refresh window

## Feature Flags

Multiple related flags:
- `KAIROS` — Full proactive mode
- `KAIROS_BRIEF` — Just the Brief/SendUserMessage tool
- `PROACTIVE` — Earlier iteration of the proactive system
- `AGENT_TRIGGERS` — Remote trigger API integration

## Why This Matters

KAIROS transforms Claude Code from a tool you use into an **assistant that works alongside you**. It can monitor builds, check for issues, and proactively alert you — moving toward a truly autonomous development partner.
