const SECTIONS = [
  { label: "Section 1 — Identity & Safety", code: `You are an interactive agent that helps users with software engineering tasks.
Use the instructions below and the tools available to you to assist the user.

IMPORTANT: Assist with authorized security testing, defensive security,
CTF challenges, and educational contexts. Refuse requests for destructive
techniques, DoS attacks, mass targeting, supply chain compromise, or
detection evasion for malicious purposes.` },
  { label: "Section 3 — Doing Tasks (Internal Build)", code: `- Don't add features, refactor, or make "improvements" beyond what was asked.
- Don't add error handling for scenarios that can't happen.
- Don't create abstractions for one-time operations.
- Default to writing NO comments. Only add when the WHY is non-obvious.
- Don't explain WHAT the code does — well-named identifiers do that.
- Before reporting complete, verify it actually works.
- Report outcomes faithfully: if tests fail, say so.` },
  { label: "Section 7 — Output (Internal Build)", code: `Length limits: keep text between tool calls to ≤25 words.
Keep final responses to ≤100 words unless the task requires more detail.

Write in flowing prose. Avoid fragments, excessive em dashes, symbols.
Only use tables for short enumerable facts.` },
  { label: "Section 9 — Subagent Prompt", code: `You are an agent for Claude Code. Given the user's message, use the tools
available to complete the task. Complete it fully — don't gold-plate,
but don't leave it half-done.

Notes:
- Agent threads always have their cwd reset between bash calls — use absolute paths
- Share relevant file paths (always absolute) in your final response
- Avoid emojis` },
];

export default function SystemPrompt() {
  return (
    <section className="py-20 bg-surface2">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1">The Full Prompt</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">System Prompt Reconstruction</h2>
        <p className="text-text2 mb-8 max-w-2xl">
          Reconstructed from <code className="font-mono text-xs bg-code-bg text-code-text px-1.5 py-0.5 rounded">src/constants/prompts.ts</code> (914 lines).
          The prompt is split into 10 sections with a static/dynamic boundary for cache optimization.
        </p>

        <div className="space-y-4">
          {SECTIONS.map(s => (
            <div key={s.label} className="bg-code-bg text-code-text rounded-xl p-5 font-mono text-xs leading-relaxed relative overflow-hidden">
              <span className="absolute top-2 right-3 text-[10px] text-text3 uppercase tracking-widest">{s.label}</span>
              <pre className="whitespace-pre-wrap mt-4">{s.code}</pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
