export default function Undercover() {
  return (
    <section id="undercover" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-red-500 uppercase tracking-widest mb-1">Hidden Feature &mdash; Undercover Mode</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">&quot;Do Not Blow Your Cover&quot;</h2>
        <p className="text-text2 max-w-2xl mb-4">
          When Anthropic employees use Claude Code on public repos, it automatically enters stealth mode.
          The instructions below are <strong>verbatim from the source code</strong>.
        </p>
        <p className="text-text2 text-sm mb-8 max-w-2xl">
          <strong>Why this matters:</strong> This proves Anthropic routinely uses Claude Code to contribute to open-source projects.
          There is <strong>NO force-OFF switch</strong> &mdash; if the system isn&apos;t sure it&apos;s in an internal repo, undercover mode stays on.
          This is defense-in-depth against accidentally leaking model codenames in public commits.
        </p>

        {/* Main prompt block */}
        <div className="bg-code-bg text-code-text rounded-2xl p-6 md:p-8 relative overflow-hidden border border-red-500/20">
          <span className="absolute top-3 right-4 text-[10px] text-red-400/50 uppercase tracking-widest font-mono">src/utils/undercover.ts</span>
          <div className="font-mono text-sm md:text-base leading-loose whitespace-pre-wrap">
            <span className="text-red-400 font-bold text-lg">## UNDERCOVER MODE &mdash; CRITICAL</span>
{`

You are operating `}<span className="text-red-400 font-bold">UNDERCOVER</span>{` in a PUBLIC/OPEN-SOURCE repository. Your commit
messages, PR titles, and PR bodies MUST NOT contain ANY Anthropic-internal
information. `}<span className="text-red-400 font-bold">Do not blow your cover.</span>{`

`}<span className="text-red-400 font-bold">NEVER</span>{` include in commit messages or PR descriptions:`}
            <ul className="list-none mt-2 space-y-1">
              {[
                "Internal model codenames (animal names like Capybara, Tengu, etc.)",
                "Unreleased model version numbers (e.g., opus-4-7, sonnet-4-8)",
                "Internal repo or project names (e.g., claude-cli-internal, anthropics/...)",
                "Internal tooling, Slack channels, or short links (e.g., go/cc, #claude-code-...)",
                'The phrase "Claude Code" or any mention that you are an AI',
                "Any hint of what model or version you are",
                "Co-Authored-By lines or any other attribution",
              ].map(item => (
                <li key={item} className="text-red-400">
                  <span className="mr-2">&bull;</span>{item}
                </li>
              ))}
            </ul>
{`
Write commit messages as a human developer would.

`}<span className="text-green font-semibold">GOOD:</span>{`
`}<span className="text-green">&bull; &quot;Fix race condition in file watcher initialization&quot;</span>{`
`}<span className="text-green">&bull; &quot;Add support for custom key bindings&quot;</span>{`
`}<span className="text-green">&bull; &quot;Refactor parser for better error messages&quot;</span>{`

`}<span className="text-red-400 font-semibold">BAD (never write these):</span>{`
`}<span className="text-red-400">&bull; &quot;Fix bug found while testing with Claude Capybara&quot;</span>{`
`}<span className="text-red-400">&bull; &quot;1-shotted by claude-opus-4-6&quot;</span>{`
`}<span className="text-red-400">&bull; &quot;Generated with Claude Code&quot;</span>{`
`}<span className="text-red-400">&bull; &quot;Co-Authored-By: Claude Opus 4.6 &lt;...&gt;&quot;</span>
          </div>
        </div>

        {/* Activation logic */}
        <div className="mt-4 bg-code-bg text-code-text rounded-xl p-5 font-mono text-xs leading-relaxed relative">
          <span className="absolute top-2 right-3 text-[10px] text-text3 uppercase tracking-widest">activation logic</span>
          {`// There is NO force-OFF. This guards against model codename leaks —
// if we're not confident we're in an internal repo, we stay undercover.
//
// Activation:
//   CLAUDE_CODE_UNDERCOVER=1 — force ON (even in internal repos)
//   Otherwise AUTO: active UNLESS repo remote matches internal allowlist
//   Safe default is ON — Claude may push to public remotes from a CWD
//   that isn't itself a git checkout (e.g. /tmp crash repro).`}
        </div>
      </div>
    </section>
  );
}
