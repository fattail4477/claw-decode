# 👥 Team Mode — Multi-Agent Orchestration

## Overview

Claude Code includes a built-in multi-agent orchestration system. Users can spawn teams of agents that coordinate through shared task lists, each with different capabilities and roles.

## How It Works

### TeamCreate
Creates a team with a 1:1 correspondence to a task list:

```
Team = TaskList
```

Creates:
- Team config at `~/.claude/teams/{team-name}/config.json`
- Task list directory at `~/.claude/tasks/{team-name}/`

### Agent Types

When spawning teammates, you choose agent types based on needed capabilities:

| Type | Capabilities |
|------|-------------|
| **Read-only** (Explore, Plan) | Search, research, planning only. Cannot edit files. |
| **Full-capability** | All tools: file editing, writing, bash, everything. |
| **Custom agents** | Defined in `.claude/agents/` with custom tool restrictions. |

### Workflow

1. **Create a team** with TeamCreate
2. **Create tasks** using TaskCreate, TaskList, TaskGet, TaskUpdate, TaskStop
3. **Agents coordinate** via shared task state
4. **TaskOutput** to collect results

## Cross-Session Communication

The SendMessage tool enables agents to communicate:

- **Local:** Via Unix domain sockets (`uds:/path/to.sock`)
- **Remote:** Via bridge protocol (`bridge:session_01AbCd...`)
- Messages enqueue and drain at the receiver's next tool round
- Messages arrive wrapped as `<cross-session-message from="...">`

Discovery via `ListPeers` — shows all alive sessions on the network.

## Why This Matters

This isn't just "spawn a subprocess." It's a full distributed agent coordination system with:
- Role-based access control per agent
- Shared task state
- Cross-machine communication
- Discovery protocol

This is infrastructure for an **agent operating system**.
