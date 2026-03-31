const FLAGS = [
  { f: "BUDDY", what: "Virtual pet companion system", s: "Unreleased" },
  { f: "KAIROS", what: "Full proactive persistent assistant", s: "Unreleased" },
  { f: "KAIROS_BRIEF", what: "SendUserMessage tool only", s: "Partial" },
  { f: "PROACTIVE", what: "Earlier proactive iteration", s: "Unreleased" },
  { f: "CACHED_MICROCOMPACT", what: "Context compression optimization", s: "Internal" },
  { f: "VERIFICATION_AGENT", what: "Auto-verification subagent", s: "Unreleased" },
  { f: "EXPERIMENTAL_SKILL_SEARCH", what: "AI-powered skill discovery", s: "Experimental" },
  { f: "TOKEN_BUDGET", what: "Token budget management", s: "Unreleased" },
  { f: "UDS_INBOX", what: "Unix Domain Socket messaging", s: "Unreleased" },
  { f: "AGENT_TRIGGERS", what: "Remote trigger API", s: "Partial (/loop)" },
];

export default function FeatureFlags() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1">Gated Features</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">Feature Flags</h2>
        <p className="text-text2 mb-8 max-w-2xl">
          Controlled via Bun&apos;s <code className="font-mono text-xs bg-brand-bg text-brand px-1.5 py-0.5 rounded">feature()</code> macro.
          Dead code elimination strips them from public builds at the AST level.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 font-mono text-xs text-text3 uppercase tracking-wider">Flag</th>
                <th className="text-left py-3 px-4 font-mono text-xs text-text3 uppercase tracking-wider">What It Enables</th>
                <th className="text-left py-3 px-4 font-mono text-xs text-text3 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {FLAGS.map(f => (
                <tr key={f.f} className="border-b border-border hover:bg-surface2 transition-colors">
                  <td className="py-3 px-4 font-mono font-semibold text-brand text-sm">{f.f}</td>
                  <td className="py-3 px-4 text-text2">{f.what}</td>
                  <td className="py-3 px-4 font-mono text-xs text-text3">{f.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
