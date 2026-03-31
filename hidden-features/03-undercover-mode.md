# 🕵️ Undercover Mode — Hiding Anthropic's Identity in Public Repos

## Overview

When Claude Code contributes to public or open-source repositories, it activates "Undercover Mode" — a safety system that strips all Anthropic-internal information from commits, PR titles, and descriptions.

## How It's Activated

- `CLAUDE_CODE_UNDERCOVER=1` — force ON
- **Auto mode (default):** Active UNLESS the repo remote matches an internal allowlist
- **There is NO force-OFF** — "This guards against model codename leaks"
- Only applies when `USER_TYPE === 'ant'` (Anthropic employees)

## The Undercover Instructions

When active, Claude receives these instructions:

> "You are operating UNDERCOVER in a PUBLIC/OPEN-SOURCE repository. Your commit messages, PR titles, and PR bodies MUST NOT contain ANY Anthropic-internal information. Do not blow your cover."

### NEVER include in commits:
- Internal model codenames (animal names like **Capybara, Tengu**, etc.)
- Unreleased model version numbers (e.g., opus-4-7, sonnet-4-8)
- Internal repo or project names

## What This Reveals

1. **Anthropic employees use Claude Code to contribute to public open-source repos** — and they've been doing it enough to need an automated safety system
2. **Internal model codenames follow an animal naming convention** — Capybara and Tengu are confirmed codenames
3. **There are unreleased model versions** — opus-4-7 and sonnet-4-8 are referenced as examples of things to hide
4. **The safe default is "assume everything is public"** — even if the repo check hasn't run yet, undercover mode stays ON

## Code Architecture

The system uses `getRepoClassCached()` to classify repos as 'internal' or 'external'. Only confirmed internal repos disable undercover mode. Everything else — including unchecked repos — defaults to undercover.
