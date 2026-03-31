const PHASES = [
  { n: "Phase 1", t: "Orient", d: "ls the memory directory. Read ENTRYPOINT.md index. Skim existing topic files to avoid creating duplicates." },
  { n: "Phase 2", t: "Gather", d: "Check daily logs, find drifted memories, grep JSONL transcripts narrowly for things that matter." },
  { n: "Phase 3", t: "Consolidate", d: "Merge new into existing. Convert relative dates (\"yesterday\") to absolute (2026-03-31). Delete contradicted facts." },
  { n: "Phase 4", t: "Prune", d: "Keep index under 25KB and max lines. Remove stale pointers. Resolve contradictions between files." },
];

export default function DreamMode() {
  return (
    <section id="dream" className="py-20 bg-surface2">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-cyan uppercase tracking-widest mb-1">Hidden Feature &mdash; Dream Mode</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">Memory Consolidation</h2>
        <p className="text-text2 mb-4 max-w-2xl">
          When idle, Claude Code enters a 4-phase dream cycle &mdash; like a human organizing notes in their sleep.
        </p>
        <p className="text-text2 text-sm mb-8 max-w-2xl">
          <strong>Why this matters:</strong> Everyone building AI agents reaches for vector databases and RAG pipelines.
          Anthropic chose plain markdown files + a periodic consolidation loop. The insight is that LLMs are already great at reading/writing text &mdash;
          the bottleneck isn&apos;t storage, it&apos;s <em>maintenance</em>. Dream Mode is the maintenance.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PHASES.map(p => (
            <div key={p.n} className="bg-white border border-cyan/15 rounded-xl p-5">
              <div className="font-mono text-[10px] text-cyan uppercase tracking-widest mb-1">{p.n}</div>
              <h3 className="font-mono font-bold text-sm mb-2">{p.t}</h3>
              <p className="text-text2 text-sm leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-code-bg text-code-text rounded-xl p-5 font-mono text-xs leading-relaxed relative">
          <span className="absolute top-2 right-3 text-[10px] text-text3 uppercase tracking-widest">consolidationPrompt.ts</span>
          {`You are performing a dream — a reflective pass over your memory files.
Synthesize what you've learned recently into durable, well-organized
memories so that future sessions can orient quickly.

Session transcripts: large JSONL files — grep narrowly, don't read whole files.

Don't exhaustively read transcripts. Look only for things you already
suspect matter.`}
        </div>
      </div>
    </section>
  );
}
