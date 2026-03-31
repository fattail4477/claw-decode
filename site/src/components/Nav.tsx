"use client";
export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Claw Decode" className="h-8 w-8 rounded-lg object-cover" />
          <span className="font-mono font-bold text-sm tracking-tight">
            <span className="text-brand">claw</span>decode
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text2">
          <a href="#pets" className="hover:text-brand transition-colors">Pets</a>
          <a href="#undercover" className="hover:text-brand transition-colors">Undercover</a>
          <a href="#secrets" className="hover:text-brand transition-colors">Secrets</a>
          <a href="#tools" className="hover:text-brand transition-colors">43 Tools</a>
          <a href="#patterns" className="hover:text-brand transition-colors">Patterns</a>
          <a href="https://github.com/fattail4477/claw-decode" target="_blank"
            className="bg-text text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-brand transition-colors">
            Star on GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
