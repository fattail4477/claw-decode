# CLAUDE.md — Project Context for AI Agents

## What Is This Project

`claw-decode` is a GitHub repo analyzing Claude Code's leaked source code (512K lines, leaked March 31 2026 via npm source map).

**Goal:** Be THE go-to resource for understanding Claude Code's architecture. Get stars by providing real value — not just analysis, but usable assets.

**Repo:** https://github.com/fattail4477/claw-decode
**Author:** Avery Chai

## Source Code Location

The leaked source code is at: `~/Desktop/claw-decode-sources/hangsman/src/`
- 1,884 TypeScript files
- Key files:
  - `src/constants/prompts.ts` — Main system prompt (914 lines)
  - `src/tools/*/prompt.ts` — Each tool's prompt
  - `src/buddy/` — Hidden virtual pet system
  - `src/tasks/DreamTask/` — Dream mode
  - `src/services/autoDream/` — Memory consolidation
  - `src/utils/undercover.ts` — Identity protection
  - `src/constants/cyberRiskInstruction.ts` — Safety rules
  - `src/memdir/` — Memory file system
  - `src/coordinator/` — Multi-agent orchestration

## What's Already Done

- ✅ README.md (English) + README_CN.md (Chinese)
- ✅ Full system prompt reconstruction (`prompts/FULL_SYSTEM_PROMPT.md`)
- ✅ Cheatsheet — one page reference (`CHEATSHEET.md`)
- ✅ 7 hidden feature deep-dives (`hidden-features/`)
- ✅ 40 tool definition extracts (`tool-definitions/`)
- ✅ Architecture diagrams with Mermaid (`architecture/`)
- ✅ "Steal These Patterns" guide (`guides/steal-these-patterns.md`)
- ✅ GitHub Sponsors + funding config
- ✅ Logo

## What Still Needs To Be Done

### Priority 1 — Usable Assets (things people can copy-paste into their own Claude Code)
- [ ] `usable/CLAUDE-md-templates/` — Best CLAUDE.md templates derived from source patterns
- [ ] `usable/custom-agents/` — .claude/agents/ configs for common workflows (code reviewer, test writer, doc generator, security auditor)
- [ ] `usable/settings-optimized.json` — Optimal settings.json with hidden options documented
- [ ] `usable/custom-commands/` — Useful slash commands people can add
- [ ] `usable/memory-templates/` — Memory file templates based on memdir patterns

### Priority 2 — More Content
- [ ] Complete tool prompts (full text, not just headers) in `tool-definitions/`
- [ ] `comparisons/` — vs Cursor, vs Copilot, vs Cline architecture comparison
- [ ] Extract ALL prompts from source into `prompts/` (buddy prompt, dream prompt, agent prompt, etc.)

### Priority 3 — Website
- [ ] GitHub Pages site in `/docs` — interactive, searchable, dark mode
- [ ] Make it look professional like broskiapp.com/source

## Rules

- Do NOT copy source code files directly into this repo
- Extract prompts, definitions, patterns — that's fair use analysis
- All content should be original analysis, not verbatim source
- Small code snippets (< 10 lines) for illustration are fine (fair use)
- Always commit and push after making changes:
  ```
  git add -A && git commit -m "descriptive message" && git push
  ```

## Writing Style

- English for main content, Chinese translations welcome as _CN.md variants
- Be specific and practical, not academic
- "Here's what you can steal" > "Here's what we observed"
- Include actionable takeaways in every document
