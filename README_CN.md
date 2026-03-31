# 🔓 Claude Code 秘密

> **Claude Code 泄露源码中所有有趣的发现 — 整理好了，你不用读 512,000 行代码。**

2026年3月31日，Anthropic 意外暴露了 [Claude Code](https://docs.anthropic.com/en/docs/claude-code) 的全部源代码 — 通过 npm 包中的 source map 文件。安全研究员 [Chaofan Shou](https://x.com/shoucccc) 发现了这个问题。数小时内，GitHub 上出现了多个镜像。

**本仓库不包含源代码。** 我们提取了真正有价值的部分：工具定义、隐藏功能、系统提示词和架构模式。

---

## 🔮 隐藏功能

| 功能 | 说明 |
|------|------|
| 🐾 **Buddy 虚拟宠物** | 18种物种、稀有度等级、ASCII动画、还能戴帽子 |
| 💤 **Dream 模式** | 空闲时自动整理记忆的4阶段后台系统 |
| 🕵️ **Undercover 模式** | 向公开仓库贡献代码时隐藏 Anthropic 身份 |
| 🤖 **KAIROS** | 主动式持久助手 — 不只是回答，还会主动发起对话 |
| 👥 **Team 模式** | 多智能体编排，共享任务列表，跨会话通信 |
| 🎭 **Feature Flags** | 10+ 个未发布功能隐藏在编译时特性开关后面 |
| 🔒 **网络安全指令** | 由安全团队维护的硬编码安全边界 |

---

## 🔧 43 个工具

Claude Code 的每个能力都是一个独立的、有权限控制的工具：

**文件操作：** FileRead, FileWrite, FileEdit, Glob, Grep, NotebookEdit

**执行：** Bash, PowerShell, REPL

**智能体与团队：** Agent, TeamCreate, TeamDelete, SendMessage, TaskCreate/Get/List/Update/Stop/Output, TodoWrite

**Web：** WebSearch, WebFetch, MCPTool, McpAuth, ListMcpResources, ReadMcpResource, LSP

**会话与调度：** Sleep, ScheduleCron, RemoteTrigger, SendUserMessage

**导航与配置：** EnterPlanMode, ExitPlanMode, EnterWorktree, ExitWorktree, ConfigTool, SkillTool, ToolSearchTool, AskUserQuestion

> 📁 每个工具的完整提示词定义：[`tool-definitions/`](tool-definitions/)

---

## 💡 关键发现

### 1. 这不是 CLI 工具，是 Agent 操作系统
进程管理（tasks）、进程间通信（SendMessage）、定时任务（cron）、文件系统（memdir）、用户态应用（tools）— 这是操作系统级别的基础设施。

### 2. 记忆架构出人意料地简单
没有 RAG，没有向量嵌入。只是 markdown 文件 + 索引。精妙之处在于维护方式 — Dream 模式的4阶段整合更像人类整理笔记。

### 3. Anthropic 用 Claude 贡献开源代码
Undercover 模式的存在证明 Anthropic 员工常规性地使用 Claude Code 向公开仓库贡献代码 — 有自动化安全措施防止身份泄露。

### 4. 内部模型代号泄露
源码引用了动物主题代号（Capybara、Tengu）和未发布版本号（opus-4-7、sonnet-4-8）。

### 5. 虚拟宠物系统是认真的工程
Buddy 不是玩笑 — 有稀有度等级、动画帧、帽子配饰、提示词集成和静音控制。

---

## 👤 关于

**[Jaylan Chai](https://linkedin.com/in/averychai/)** — AI Agent 领域创业者

- Twitter/X: [@YOUR_HANDLE](https://x.com/YOUR_HANDLE)
- LinkedIn: [Jaylan Chai](https://linkedin.com/in/averychai/)

---

## 📄 许可证

MIT — 详见 [LICENSE](LICENSE)
