export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand-bg text-brand text-xs font-mono font-semibold tracking-wide uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
          Source leak &mdash; March 31, 2026
        </div>

        {/* Logo */}
        <div className="mb-6">
          <img src="/logo.jpg" alt="Claw Decode" className="w-24 h-24 md:w-32 md:h-32 rounded-3xl mx-auto shadow-xl object-cover" />
        </div>

        {/* Title */}
        <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-4 tracking-tight">
          Inside{" "}
          <span className="text-brand">Claude Code</span>
        </h1>

        {/* Subtitle — bigger, clearer */}
        <p className="text-xl md:text-2xl text-text font-semibold max-w-2xl mx-auto mb-3 leading-snug">
          Anthropic accidentally shipped their entire source code.<br />
          <span className="text-brand">We read all 512,000 lines.</span>
        </p>
        <p className="text-base md:text-lg text-text2 max-w-2xl mx-auto mb-8 leading-relaxed">
          Hidden virtual pets, an &quot;undercover mode&quot; that hides AI identity in open-source commits,
          internal model codenames, a dream system that organizes memories while you sleep &mdash;
          and 43 tools the public was never meant to see.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-6 md:gap-10 mb-8">
          {[
            ["512K", "Lines of Code"],
            ["43", "Tools"],
            ["7", "Hidden Features"],
            ["18", "Pet Species"],
            ["3", "Model Codenames"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-brand">{n}</div>
              <div className="text-[10px] md:text-xs text-text3 uppercase tracking-widest mt-1">{l}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3 justify-center flex-wrap mb-10">
          <a href="https://github.com/fattail4477/claw-decode" target="_blank"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-mono font-extrabold text-sm rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow-500/25 active:scale-95">
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            &#9733; Star on GitHub
          </a>
          <a href="#timeline"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-text font-mono font-bold text-sm rounded-xl hover:border-brand hover:text-brand transition-all">
            See what happened &darr;
          </a>
        </div>

        {/* How it started — with real tweet links */}
        <div className="border border-border rounded-2xl bg-white/80 backdrop-blur p-6 text-left max-w-2xl mx-auto">
          <div className="text-xs font-mono font-semibold text-text3 uppercase tracking-widest mb-4">How it started</div>
          <div className="space-y-4">
            <a href="https://x.com/Fried_rice/status/2038894956459290963" target="_blank" className="flex items-start gap-3 group">
              <span className="text-lg">🔍</span>
              <div>
                <div className="font-semibold text-sm group-hover:text-brand transition-colors">
                  @Fried_rice (Chaofan Shou) &middot; 4.5M+ views
                </div>
                <p className="text-text2 text-sm">&quot;Claude code source code has been leaked via a map file in their npm registry!&quot;</p>
                <span className="text-xs text-brand font-mono mt-1 inline-block">View original tweet &rarr;</span>
              </div>
            </a>
            <a href="https://x.com/theo/status/2038898807212224994" target="_blank" className="flex items-start gap-3 group">
              <span className="text-lg">🐦</span>
              <div>
                <div className="font-semibold text-sm group-hover:text-brand transition-colors">
                  @theo (Theo / t3.gg)
                </div>
                <p className="text-text2 text-sm">&quot;Claude Code just got open sourced again!&quot;</p>
                <span className="text-xs text-brand font-mono mt-1 inline-block">View tweet &rarr;</span>
              </div>
            </a>
            <a href="https://x.com/wesbos/status/2038958747200962952" target="_blank" className="flex items-start gap-3 group">
              <span className="text-lg">😂</span>
              <div>
                <div className="font-semibold text-sm group-hover:text-brand transition-colors">
                  @wesbos (Wes Bos)
                </div>
                <p className="text-text2 text-sm">Found 187 spinner verbs hidden in the codebase</p>
                <span className="text-xs text-brand font-mono mt-1 inline-block">View tweet &rarr;</span>
              </div>
            </a>
            <a href="https://x.com/GergelyOrosz/status/2038985760175505491" target="_blank" className="flex items-start gap-3 group">
              <span className="text-lg">📰</span>
              <div>
                <div className="font-semibold text-sm group-hover:text-brand transition-colors">
                  @GergelyOrosz (Pragmatic Engineer)
                </div>
                <p className="text-text2 text-sm">Coverage from one of the largest software engineering newsletters</p>
                <span className="text-xs text-brand font-mono mt-1 inline-block">View tweet &rarr;</span>
              </div>
            </a>
          </div>
          <div className="mt-4 pt-3 border-t border-border text-xs text-text3">
            Also covered by: <a href="https://www.theregister.com/2026/03/31/anthropic_claude_code_source_code/" target="_blank" className="hover:text-brand">The Register</a> &middot;{" "}
            <a href="https://gizmodo.com/source-code-for-anthropics-claude-code-leaks-at-the-exact-wrong-time-2000740379" target="_blank" className="hover:text-brand">Gizmodo</a> &middot;{" "}
            <a href="https://fortune.com/2026/03/31/anthropic-source-code-claude-code-data-leak-second-security-lapse-days-after-accidentally-revealing-mythos/" target="_blank" className="hover:text-brand">Fortune</a> &middot;{" "}
            <a href="https://venturebeat.com/technology/claude-codes-source-code-appears-to-have-leaked-heres-what-we-know" target="_blank" className="hover:text-brand">VentureBeat</a>
          </div>
        </div>
      </div>
    </section>
  );
}
