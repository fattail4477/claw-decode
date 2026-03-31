"use client";
import { useState } from "react";

const TOOLS = [
  { n: "FileRead", c: "Core", d: "Read file contents with line ranges" },
  { n: "FileWrite", c: "Core", d: "Create or overwrite files" },
  { n: "FileEdit", c: "Core", d: "Surgical text replacement" },
  { n: "Glob", c: "Core", d: "Pattern-based file search" },
  { n: "Grep", c: "Core", d: "Content search across files" },
  { n: "NotebookEdit", c: "Core", d: "Jupyter notebook cell editing" },
  { n: "Bash", c: "Exec", d: "Shell command execution" },
  { n: "PowerShell", c: "Exec", d: "Windows PowerShell" },
  { n: "REPL", c: "Exec", d: "Interactive REPL mode", int: true },
  { n: "Agent", c: "Agent", d: "Spawn subagents with different capabilities" },
  { n: "TeamCreate", c: "Agent", d: "Create multi-agent teams" },
  { n: "TeamDelete", c: "Agent", d: "Remove teams" },
  { n: "SendMessage", c: "Agent", d: "Cross-session agent messaging" },
  { n: "TaskCreate", c: "Task", d: "Create coordination tasks" },
  { n: "TaskGet", c: "Task", d: "Retrieve task details" },
  { n: "TaskList", c: "Task", d: "List all tasks" },
  { n: "TaskUpdate", c: "Task", d: "Update task state" },
  { n: "TaskStop", c: "Task", d: "Stop running tasks" },
  { n: "TaskOutput", c: "Task", d: "Collect task results" },
  { n: "TodoWrite", c: "Task", d: "Manage todo items" },
  { n: "WebSearch", c: "Web", d: "Search the web" },
  { n: "WebFetch", c: "Web", d: "Fetch & extract web content" },
  { n: "MCPTool", c: "MCP", d: "Model Context Protocol integration" },
  { n: "McpAuth", c: "MCP", d: "MCP authentication" },
  { n: "ListMcpResources", c: "MCP", d: "List MCP server resources" },
  { n: "ReadMcpResource", c: "MCP", d: "Read MCP resources" },
  { n: "LSP", c: "IDE", d: "Language Server Protocol" },
  { n: "Sleep", c: "Session", d: "User-interruptible wait" },
  { n: "ScheduleCron", c: "Session", d: "Schedule recurring tasks" },
  { n: "RemoteTrigger", c: "Session", d: "Manage remote triggers via API" },
  { n: "SendUserMessage", c: "Session", d: "Proactive messages (KAIROS)", int: true },
  { n: "EnterPlanMode", c: "Nav", d: "Switch to planning mode" },
  { n: "ExitPlanMode", c: "Nav", d: "Exit planning mode" },
  { n: "EnterWorktree", c: "Nav", d: "Create isolated git worktree" },
  { n: "ExitWorktree", c: "Nav", d: "Leave git worktree" },
  { n: "ConfigTool", c: "Config", d: "Manage configuration" },
  { n: "SkillTool", c: "Config", d: "Execute skills" },
  { n: "ToolSearchTool", c: "Config", d: "Search available tools" },
  { n: "DiscoverSkills", c: "Config", d: "AI-powered skill search", int: true },
  { n: "AskUserQuestion", c: "UX", d: "Prompt user for input" },
  { n: "SyntheticOutput", c: "UX", d: "Generate synthetic tool output" },
  { n: "BriefTool", c: "UX", d: "Send KAIROS messages", int: true },
  { n: "TodoWrite", c: "UX", d: "Write and manage todos" },
];

const CAT_COLORS: Record<string, string> = {
  Core: "bg-sky-100 text-sky-700",
  Exec: "bg-orange-100 text-orange-700",
  Agent: "bg-purple-100 text-purple-700",
  Task: "bg-green-100 text-green-700",
  Web: "bg-emerald-100 text-emerald-700",
  MCP: "bg-yellow-100 text-yellow-700",
  IDE: "bg-blue-100 text-blue-700",
  Session: "bg-red-100 text-red-700",
  Nav: "bg-gray-100 text-gray-600",
  Config: "bg-gray-100 text-gray-600",
  UX: "bg-orange-100 text-orange-600",
};

export default function Tools() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const cats = ["all", ...Array.from(new Set(TOOLS.map(t => t.c)))];
  const filtered = TOOLS.filter(t =>
    (cat === "all" || t.c === cat) &&
    (!q || t.n.toLowerCase().includes(q.toLowerCase()) || t.d.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <section id="tools" className="py-20 bg-surface2">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-xs font-mono font-semibold text-brand uppercase tracking-widest mb-1">Complete Arsenal</div>
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-2">All 43 Tools</h2>
        <p className="text-text2 mb-6">Every capability is a discrete, permission-gated tool. Dashed border = internal only.</p>

        <input type="text" value={q} onChange={e => setQ(e.target.value)}
          placeholder="Search tools..."
          className="w-full max-w-sm px-4 py-2.5 bg-white border border-border rounded-lg font-mono text-sm outline-none focus:border-brand transition-colors mb-3" />
        <div className="flex flex-wrap gap-1.5 mb-5">
          {cats.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-3 py-1 rounded-md font-mono text-xs font-semibold transition-all ${cat === c ? "bg-brand text-white" : "bg-white border border-border text-text2 hover:border-brand hover:text-brand"}`}>
              {c === "all" ? `All (${TOOLS.length})` : `${c} (${TOOLS.filter(t => t.c === c).length})`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {filtered.map((t, i) => (
            <div key={t.n + i} className={`bg-white border rounded-lg px-4 py-3 transition-all hover:shadow-sm ${t.int ? "border-dashed border-purple/30 opacity-75" : "border-border"}`}>
              <div className="font-mono font-semibold text-sm">
                {t.n}
                {t.int && <span className="text-[10px] text-purple font-normal ml-1">(internal)</span>}
              </div>
              <div className="text-text2 text-xs mt-0.5 mb-2">{t.d}</div>
              <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${CAT_COLORS[t.c] || "bg-gray-100 text-gray-600"}`}>{t.c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
