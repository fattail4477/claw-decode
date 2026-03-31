# 🎭 Unreleased Feature Flags

## Overview

The leaked source reveals numerous features gated behind build-time feature flags. These are compiled out of public builds via dead code elimination but remain fully implemented in the source.

## Confirmed Feature Flags

| Flag | Description | Status |
|------|-------------|--------|
| `BUDDY` | Virtual pet companion system | Unreleased |
| `KAIROS` | Full proactive persistent assistant | Unreleased |
| `KAIROS_BRIEF` | SendUserMessage tool only | Partially shipped |
| `PROACTIVE` | Earlier proactive iteration | Unreleased |
| `CACHED_MICROCOMPACT` | Cached micro-compact context system | Internal |
| `VERIFICATION_AGENT` | Automatic verification subagent | Unreleased |
| `EXPERIMENTAL_SKILL_SEARCH` | Skill discovery/search system | Experimental |
| `TOKEN_BUDGET` | Token budget management | Unreleased |
| `UDS_INBOX` | Unix Domain Socket cross-session messaging | Unreleased |
| `AGENT_TRIGGERS` | Remote trigger API (cron via claude.ai) | Partially shipped (/loop) |

## How Feature Flags Work

Claude Code uses Bun's `feature()` macro for build-time dead code elimination:

```typescript
import { feature } from 'bun:bundle'

if (feature('BUDDY')) {
  // This entire block is removed from public builds
}
```

Combined with runtime GrowthBook feature gates for gradual rollout:
```typescript
getFeatureValue_CACHED_MAY_BE_STALE('some_feature_key')
```

## Internal vs External Builds

The source distinguishes builds via `USER_TYPE`:
- `'ant'` — Anthropic internal builds (all features enabled)
- External — Public npm builds (features DCE'd out)

This means **Anthropic employees have access to all these features internally** while they're being tested before public release.

## Notable Unreleased Capabilities

1. **DiscoverSkillsTool** — AI-powered skill search and recommendation
2. **ToolSearchTool** — Search through available tools dynamically
3. **REPLTool** — Interactive REPL mode (default-on for Anthropic employees)
4. **ForkSubagent** — Fork current context into a new subagent
5. **ScratchpadDir** — Persistent scratch space for agents
