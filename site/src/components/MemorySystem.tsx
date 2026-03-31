export default function MemorySystem() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1">Architecture</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">Memory = Markdown Files</h2>
        <p className="text-text2 mb-8 max-w-2xl">
          No RAG. No vector embeddings. No Pinecone. Just markdown files in a directory with an index.
          Every memory has a type, a frontmatter header, and lives in its own file.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-code-bg text-green rounded-xl p-5 font-mono text-sm leading-relaxed">
{`Memory Directory/
├── ENTRYPOINT.md     ← Index (< 25KB)
├── user-prefs.md     ← Who the user is
├── project-ctx.md    ← Current project state
├── feedback-testing.md ← User corrections
└── logs/
    └── 2026/03/
        └── 2026-03-31.md  ← Daily log`}
          </div>
          <div className="space-y-3">
            {[
              { type: "user", color: "text-brand", desc: "Role, goals, preferences. Tailor future behavior to who the user is." },
              { type: "feedback", color: "text-purple", desc: "\"Don't do X\" / \"Keep doing Y\". Lead with the rule, then Why + How to apply." },
              { type: "project", color: "text-cyan", desc: "Ongoing work, deadlines, decisions. Always convert relative dates to absolute." },
              { type: "reference", color: "text-yellow", desc: "Pointers to external systems — Linear projects, Grafana dashboards, Slack channels." },
            ].map(m => (
              <div key={m.type} className="bg-surface2 border border-border rounded-lg p-4">
                <span className={`font-mono text-xs font-bold ${m.color} uppercase`}>{m.type}</span>
                <p className="text-text2 text-sm mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
