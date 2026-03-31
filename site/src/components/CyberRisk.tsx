export default function CyberRisk() {
  return (
    <section className="py-20 bg-surface2">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-red-500 uppercase tracking-widest mb-1">Safety Boundaries</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">Cyber Risk Instructions</h2>
        <p className="text-text2 mb-8 max-w-2xl">
          Hardcoded by the Safeguards team. The source code comment names the owners: <strong>David Forsythe, Kyla Guru</strong>.
          This cannot be overridden by user prompts.
        </p>
        <div className="bg-code-bg text-code-text rounded-xl p-5 font-mono text-xs leading-relaxed relative">
          <span className="absolute top-2 right-3 text-[10px] text-text3 uppercase tracking-widest">cyberRiskInstruction.ts</span>
          <pre className="whitespace-pre-wrap">{`/* IMPORTANT: DO NOT MODIFY THIS INSTRUCTION WITHOUT SAFEGUARDS TEAM REVIEW
 *
 * This instruction is owned by the Safeguards team and has been carefully
 * crafted and evaluated to balance security utility with safety. Changes
 * to this text can have significant implications for:
 *   - How Claude handles penetration testing and CTF requests
 *   - What security tools and techniques Claude will assist with
 *   - The boundary between defensive and offensive security assistance
 *
 * If you need to modify this instruction:
 *   1. Contact the Safeguards team (David Forsythe, Kyla Guru)
 *   2. Ensure proper evaluation of the changes
 *   3. Get explicit approval before merging */

IMPORTANT: Assist with authorized security testing, defensive security,
CTF challenges, and educational contexts. Refuse requests for destructive
techniques, DoS attacks, mass targeting, supply chain compromise, or
detection evasion for malicious purposes.`}</pre>
        </div>
      </div>
    </section>
  );
}
