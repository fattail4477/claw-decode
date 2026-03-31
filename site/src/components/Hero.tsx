export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-5 pt-20 pb-16 relative overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand-bg text-brand text-xs font-mono font-semibold tracking-wide uppercase mb-8">
          <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
          Source leak &mdash; March 31, 2026
        </div>

        <h1 className="font-mono text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight">
          Inside{" "}
          <span className="text-brand">Claude Code</span>
        </h1>

        <div className="flex justify-center gap-8 md:gap-12 mb-6">
          {[
            ["512K", "Lines"],
            ["43", "Tools"],
            ["7", "Hidden Features"],
            ["18", "Pet Species"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-mono text-3xl md:text-4xl font-bold text-brand">{n}</div>
              <div className="text-xs text-text2 uppercase tracking-widest mt-1">{l}</div>
            </div>
          ))}
        </div>

        <p className="text-lg text-text2 max-w-xl mx-auto mb-8 leading-relaxed">
          Anthropic accidentally shipped their entire source code via an npm source map.
          We read every line. Here&apos;s what they were hiding.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <a href="https://github.com/fattail4477/claw-decode" target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-mono font-bold text-sm rounded-xl hover:bg-brand-light transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/20">
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            Star on GitHub
          </a>
          <a href="#pets"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text font-mono font-bold text-sm rounded-xl hover:border-brand hover:text-brand transition-all">
            Explore &darr;
          </a>
        </div>
      </div>
    </section>
  );
}
