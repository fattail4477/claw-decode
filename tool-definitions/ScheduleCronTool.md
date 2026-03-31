# ScheduleCronTool

**Source:** `src/tools/ScheduleCronTool/prompt.ts`

## Prompt

```
export const CRON_DELETE_DESCRIPTION = 'Cancel a scheduled cron job by ID'
export function buildCronDeletePrompt(durableEnabled: boolean): string {
  return durableEnabled
    ? `Cancel a cron job previously scheduled with ${CRON_CREATE_TOOL_NAME}. Removes it from .claude/scheduled_tasks.json (durable jobs) or the in-memory session store (session-only jobs).`
    : `Cancel a cron job previously scheduled with ${CRON_CREATE_TOOL_NAME}. Removes it from the in-memory session store.`
}

export const CRON_LIST_DESCRIPTION = 'List scheduled cron jobs'
export function buildCronListPrompt(durableEnabled: boolean): string {
  return durableEnabled
    ? `List all cron jobs scheduled via ${CRON_CREATE_TOOL_NAME}, both durable (.claude/scheduled_tasks.json) and session-only.`
    : `List all cron jobs scheduled via ${CRON_CREATE_TOOL_NAME} in this session.`
}
```
