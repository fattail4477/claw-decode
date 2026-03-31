export default function Codenames() {
  return (
    <section id="codenames" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1">Leaked Intel</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">Internal Model Codenames</h2>
        <p className="text-text2 mb-8">Animal-themed codenames found in feature flags, code comments, and the undercover forbidden-terms list.</p>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Capybara", color: "text-yellow-600", border: "border-yellow-400/30", bg: "from-yellow-50", evidence: "Buddy species, code comments, model name obfuscation. So important they encode the string via String.fromCharCode() to avoid build scanners." },
            { name: "Tengu", color: "text-purple", border: "border-purple/30", bg: "from-purple-50", evidence: "Feature flag prefix: tengu_kairos_cron, tengu_hive_evidence. Next-gen feature set referenced in GrowthBook." },
            { name: "Numbat", color: "text-cyan", border: "border-cyan/30", bg: "from-sky-50", evidence: "\"Remove this section when we launch numbat\" — found in output efficiency section of prompts.ts." },
          ].map(c => (
            <div key={c.name} className={`border ${c.border} rounded-xl p-6 text-center bg-gradient-to-b ${c.bg} to-white`}>
              <div className={`font-mono text-3xl font-bold ${c.color}`}>{c.name}</div>
              <div className="text-xs text-text3 uppercase tracking-widest mt-1 mb-3">Model Codename</div>
              <p className="text-sm text-text2 text-left leading-relaxed">{c.evidence}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-code-bg text-code-text rounded-xl px-5 py-4 font-mono text-sm">
          Unreleased versions: <span className="text-yellow-400">claude-opus-4-7</span> &middot; <span className="text-yellow-400">claude-sonnet-4-8</span>
        </div>
      </div>
    </section>
  );
}
