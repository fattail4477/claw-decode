export default function Dalva() {
  return (
    <section className="py-20 bg-gradient-to-b from-surface2 to-white">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1">Coming Soon</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-3">Dalva</h2>
        <p className="text-text2 text-lg mb-8 max-w-xl mx-auto">
          We&apos;re building something new based on what we learned from this analysis. Join the waitlist to be the first to know.
        </p>
        <a href="https://tally.so" target="_blank"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-mono font-bold text-base rounded-xl hover:bg-brand-light transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/20">
          Join the Waitlist &rarr;
        </a>
        <p className="text-text3 text-xs mt-4 font-mono">No spam. Just one email when we launch.</p>
      </div>
    </section>
  );
}
