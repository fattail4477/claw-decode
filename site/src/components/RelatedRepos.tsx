const REPOS = [
  { name: "fattail4477/claw-decode", desc: "This project — complete analysis, tool definitions, hidden features, full system prompt reconstruction, architecture patterns.", stars: "New", status: "This Repo", statusColor: "text-brand bg-brand-bg" },
  { name: "instructkr/claude-code-reverse", desc: "Sigrid Jin's Python rewrite of Claude Code internals. Also working on a Rust version. Deep technical analysis.", stars: "3K+", status: "Analysis", statusColor: "text-purple-600 bg-purple-50" },
  { name: "kuberwastaken/claude-code-source", desc: "Community-maintained mirror with active discussion and breakdown threads in issues.", stars: "15K+", status: "Mirror", statusColor: "text-blue-600 bg-blue-50" },
  { name: "dev.to/gabrielanhaia", desc: "English architecture deep-dive on DEV Community. Covers tool system, agent orchestration, and memory.", stars: "Blog", status: "Analysis", statusColor: "text-green-600 bg-green-50", url: "https://dev.to/gabrielanhaia/claude-codes-entire-source-code-was-just-leaked-via-npm-source-maps-heres-whats-inside-cjo" },
  { name: "alex000kim.com", desc: "Alex Kim's technical blog post with detailed breakdown of the leak timeline and source structure.", stars: "Blog", status: "Analysis", statusColor: "text-green-600 bg-green-50", url: "https://alex000kim.com/posts/2026-03-31-claude-code-source-leak/" },
];

export default function RelatedRepos() {
  return (
    <section id="repos" className="py-20 bg-surface2">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1">Ecosystem</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">Related Repositories</h2>
        <p className="text-text2 mb-8">The leak spawned an entire ecosystem of mirrors, analysis, and inspired projects.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {REPOS.map(r => (
            <div key={r.name}
              className={`bg-white border rounded-xl p-5 transition-all hover:shadow-md hover:-translate-y-0.5 ${r.name.includes("fattail") ? "border-brand/30 ring-1 ring-brand/10" : "border-border"}`}>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="font-mono text-sm font-bold text-text leading-tight break-all">{r.name}</div>
                <span className={`shrink-0 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${r.statusColor}`}>{r.status}</span>
              </div>
              <p className="text-text2 text-sm mb-3 leading-relaxed">{r.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-yellow-600">&#9733; {r.stars}</span>
                <a href={(r as any).url || `https://github.com/${r.name}`} target="_blank"
                  className="font-mono text-xs text-brand hover:underline">
                  View &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
