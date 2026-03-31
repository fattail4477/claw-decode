const ROWS = [
  { feature: "Output Length", ext: '"Be concise"', int: "≤25 words between tools, ≤100 final" },
  { feature: "Code Comments", ext: "Not mentioned", int: '"Default to NO comments"' },
  { feature: "Verification", ext: "None required", int: "Mandatory for 3+ file edits" },
  { feature: "REPL Mode", ext: "Opt-in", int: "Default ON" },
  { feature: "Undercover", ext: "N/A (code stripped at build)", int: "Auto-enabled on public repos" },
  { feature: "Feature Flags", ext: "Stripped via dead code elimination", int: "All enabled" },
  { feature: "False Claims", ext: "Basic guardrails", int: '"Never claim all tests pass when output shows failures"' },
  { feature: "Git Skills", ext: "Full inline instructions in prompt", int: "/commit, /simplify, /commit-push-pr" },
];

export default function Compare() {
  return (
    <section id="compare" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1">Two Versions</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">Internal vs External Build</h2>
        <p className="text-text2 mb-4 max-w-2xl">
          Anthropic employees get a different Claude Code. Features are stripped at build time via Bun&apos;s{" "}
          <code className="font-mono text-xs bg-brand-bg text-brand px-1.5 py-0.5 rounded">feature()</code> macro &mdash; dead code elimination at the AST level.
        </p>
        <p className="text-text2 text-sm mb-8 max-w-2xl">
          <strong>Why this matters:</strong> The ≤25 word limit between tool calls explains why Claude Code feels so fast and terse.
          The mandatory verification agent for multi-file edits is why internal users report fewer broken builds.
          And <code className="font-mono text-xs">USER_TYPE === &apos;ant&apos;</code> is a build-time define, so the bundler constant-folds these checks away in public builds.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-mono text-xs text-text3 uppercase tracking-wider">Feature</th>
                <th className="text-left py-3 px-4 font-mono text-xs text-green uppercase tracking-wider">External (Public)</th>
                <th className="text-left py-3 px-4 font-mono text-xs text-brand uppercase tracking-wider">Internal (Anthropic)</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(r => (
                <tr key={r.feature} className="border-b border-border hover:bg-surface2 transition-colors">
                  <td className="py-3 px-4 font-mono font-semibold text-sm">{r.feature}</td>
                  <td className="py-3 px-4 text-text2">{r.ext}</td>
                  <td className="py-3 px-4 text-brand font-medium">{r.int}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
