export default function Footer() {
  return (
    <footer className="py-16 text-center border-t border-border">
      <div className="max-w-6xl mx-auto px-5">
        <a href="https://github.com/fattail4477/claw-decode" target="_blank"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-mono font-bold text-base rounded-xl hover:bg-brand-light transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/20">
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
          Star on GitHub
        </a>
        <div className="mt-6 font-mono text-sm text-text3">
          Analysis by{" "}
          <a href="https://linkedin.com/in/averychai/" target="_blank" className="text-text2 hover:text-brand transition-colors">Avery Chai</a>
          {" "}&middot;{" "}
          <a href="https://x.com/chatoliciuh" target="_blank" className="text-text2 hover:text-brand transition-colors">@chatoliciuh</a>
        </div>
        <div className="mt-4 text-xs text-text3">
          This repo does not contain Anthropic&apos;s source code. Analysis &amp; commentary under Fair Use.
        </div>
      </div>
    </footer>
  );
}
