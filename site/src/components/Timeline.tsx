"use client";
const EVENTS = [
  { time: "UTC ~04:23 ET", date: "Mar 31, 2026", title: "Discovery", desc: "Security researcher Chaofan Shou (@Fried_rice) discovers Claude Code's entire source via npm source map. Tweet gets 4.5M+ views.", color: "bg-red-500", icon: "🔍" },
  { time: "Minutes later", date: "Mar 31, 2026", title: "Goes Viral", desc: "Theo (t3.gg), Wes Bos, Pragmatic Engineer, and others share the news. The developer community explodes.", color: "bg-orange-500", icon: "🐦" },
  { time: "UTC ~02:00", date: "Mar 31, 2026", title: "GitHub Mirrors Appear", desc: "Multiple repos mirror the leaked source. hangsman, kuberwastaken, mehmoodosman among the first.", color: "bg-yellow-500", icon: "📦" },
  { time: "UTC ~04:00", date: "Mar 31, 2026", title: "22K Stars in Hours", desc: "The fastest-growing mirrors hit 22,000+ GitHub stars. HN and Reddit threads explode.", color: "bg-green-500", icon: "⭐" },
  { time: "UTC ~06:00", date: "Mar 31, 2026", title: "Analysis Begins", desc: "Blog posts, dev.to articles, and deep-dives start appearing. Hidden features discovered.", color: "bg-cyan", icon: "🔬" },
  { time: "UTC ~08:00", date: "Mar 31, 2026", title: "Anthropic Responds", desc: "DMCA takedown notices begin hitting mirrors. Some repos go private or get removed.", color: "bg-purple", icon: "⚖️" },
  { time: "Ongoing", date: "Mar 31, 2026", title: "This Analysis", desc: "Claw Decode publishes the complete breakdown: 43 tools, 7 hidden features, full system prompt reconstruction.", color: "bg-brand", icon: "📋" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1">What Happened</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">Timeline of the Leak</h2>
        <p className="text-text2 mb-10 max-w-2xl">
          From discovery to DMCA &mdash; everything happened in less than 12 hours.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-yellow-500 via-green-500 via-cyan to-brand hidden md:block" />

          <div className="space-y-6">
            {EVENTS.map((e, i) => (
              <div key={i} className="flex gap-5 group">
                {/* Dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className={`w-11 h-11 rounded-full ${e.color} text-white flex items-center justify-center text-lg shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    {e.icon}
                  </div>
                </div>
                {/* Card */}
                <div className="flex-1 bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-brand/20 transition-all">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="md:hidden text-xl">{e.icon}</span>
                    <span className="font-mono text-xs text-brand font-semibold">{e.time}</span>
                    <span className="text-xs text-text3">{e.date}</span>
                  </div>
                  <h3 className="font-mono font-bold text-base mb-1">{e.title}</h3>
                  <p className="text-text2 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
