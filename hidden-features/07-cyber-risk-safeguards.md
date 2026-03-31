# 🔒 Cyber Risk Instruction — The Safeguards System

## Overview

Claude Code contains a hardcoded safety instruction specifically for security-related requests. The source code comments reveal it's owned by the **Safeguards team** with named individuals (David Forsythe, Kyla Guru).

## The Warning in Source

```
IMPORTANT: DO NOT MODIFY THIS INSTRUCTION WITHOUT SAFEGUARDS TEAM REVIEW

This instruction is owned by the Safeguards team and has been carefully
crafted and evaluated to balance security utility with safety. Changes
to this text can have significant implications for:
  - How Claude handles penetration testing and CTF requests
  - What security tools and techniques Claude will assist with
  - The boundary between defensive and offensive security assistance
```

## The Actual Instruction

> "Assist with authorized security testing, defensive security, CTF challenges, and educational contexts. Refuse requests for destructive techniques, DoS attacks, mass targeting, supply chain compromise, or detection evasion for malicious purposes."

## What It Allows

- Authorized penetration testing
- Defensive security work
- CTF (Capture The Flag) challenges
- Educational security contexts
- Dual-use tools **with clear authorization context**:
  - C2 frameworks
  - Credential testing
  - Exploit development

## What It Blocks

- Destructive techniques
- DoS attacks
- Mass targeting
- Supply chain compromise
- Detection evasion for malicious purposes

## Why This Matters

This reveals Anthropic's precise calibration of security assistance boundaries — a key concern for enterprise customers who use Claude Code for security work.
