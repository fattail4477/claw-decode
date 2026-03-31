const PATTERNS = [
  { n: "1", t: "Memory as Markdown", why: "No vector DB. No RAG pipeline. LLMs read/write text natively. Dream Mode handles maintenance. Human-readable — you can inspect and edit memories manually.", key: "Build the maintenance loop (consolidation), not a better database. An index file under 25KB + periodic pruning beats embeddings." },
  { n: "2", t: "Tool = Name + Prompt + Permission + Execute", why: "Each tool independently testable. Permissions are granular (auto/ask/deny). The prompt teaches the model when and how. Tools dynamically enabled/disabled via feature flags.", key: "The prompt field is the magic. Claude Code's tool prompts tell the model when to use it, when NOT to use it, and what to watch out for." },
  { n: "3", t: "Multi-Agent via Shared Task Lists", why: "Agents don't call each other directly. They coordinate through shared task CRUD. Any agent can pick up any task. Progress visible to all. No complex message routing needed.", key: "Role-based agents > general-purpose. Read-only agents (Explore, Plan) physically cannot break your code." },
  { n: "4", t: "Actions With Care Framework", why: "Every action classified by reversibility × blast radius. Reversible + low blast → do freely. Irreversible + high blast → always confirm. Authorization for one instance doesn't authorize all future instances.", key: "\"Measure twice, cut once\" — Claude Code's exact words. Users trust the agent more → give more autonomy over time." },
  { n: "5", t: "Static/Dynamic Prompt Split", why: "System prompt split at a boundary marker. Static portion (rules, tools, style) is identical across all users → cacheable globally. Dynamic portion (memory, env, MCP) changes per turn.", key: "With Anthropic's prompt caching, most of a 914-line prompt is free after the first call. Massive cost savings." },
];

export default function Patterns() {
  return (
    <section id="patterns" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1">For Builders</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">5 Patterns You Can Steal</h2>
        <p className="text-text2 mb-8 max-w-2xl">
          Practical architecture lessons from Claude Code. If you&apos;re building an AI agent, start here.
        </p>

        <div className="space-y-4">
          {PATTERNS.map(p => (
            <div key={p.n} className="bg-white border border-border rounded-xl p-6 hover:border-brand/20 transition-colors">
              <div className="flex items-start gap-4">
                <span className="font-mono text-3xl font-bold text-brand/20 leading-none">{p.n}</span>
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-lg mb-2">{p.t}</h3>
                  <p className="text-text2 text-sm leading-relaxed mb-3">{p.why}</p>
                  <div className="bg-surface2 border border-border rounded-lg p-4">
                    <div className="text-[10px] font-mono font-semibold text-brand uppercase tracking-widest mb-1">Key Insight</div>
                    <p className="text-sm font-medium leading-relaxed">{p.key}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
