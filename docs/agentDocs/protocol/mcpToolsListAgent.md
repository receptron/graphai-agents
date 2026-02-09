# mcpToolsListAgent

## Package
[@graphai/mcp_agent](https://www.npmjs.com/package/@graphai/mcp_agent)
## Source
[https://github.com/receptron/graphai-agents/tree/main/protocol/mcp-agent/src/mcp_tools_list_agent.ts](https://github.com/receptron/graphai-agents/tree/main/protocol/mcp-agent/src/mcp_tools_list_agent.ts)

## Description

Model Context Protocol Tools/List Agent

## Schema

#### inputs

```json

{
  "type": "object",
  "properties": {},
  "required": []
}

```

## Input example of the next node

```json

[
  ":agentId",
  ":agentId.llmTools",
  ":agentId.llmTools.$0",
  ":agentId.llmTools.$0.type",
  ":agentId.llmTools.$0.function",
  ":agentId.llmTools.$0.function.name",
  ":agentId.llmTools.$0.function.title",
  ":agentId.llmTools.$0.function.description",
  ":agentId.llmTools.$0.function.inputSchema",
  ":agentId.llmTools.$0.function.inputSchema.type",
  ":agentId.llmTools.$0.function.inputSchema.properties",
  ":agentId.llmTools.$0.function.inputSchema.properties.path",
  ":agentId.llmTools.$0.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$0.function.inputSchema.properties.tail",
  ":agentId.llmTools.$0.function.inputSchema.properties.tail.type",
  ":agentId.llmTools.$0.function.inputSchema.properties.tail.description",
  ":agentId.llmTools.$0.function.inputSchema.properties.head",
  ":agentId.llmTools.$0.function.inputSchema.properties.head.type",
  ":agentId.llmTools.$0.function.inputSchema.properties.head.description",
  ":agentId.llmTools.$0.function.inputSchema.required",
  ":agentId.llmTools.$0.function.inputSchema.required.$0",
  ":agentId.llmTools.$0.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$0.function.inputSchema.$schema",
  ":agentId.llmTools.$0.function.outputSchema",
  ":agentId.llmTools.$0.function.outputSchema.type",
  ":agentId.llmTools.$0.function.outputSchema.properties",
  ":agentId.llmTools.$0.function.outputSchema.properties.content",
  ":agentId.llmTools.$0.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$0.function.outputSchema.required",
  ":agentId.llmTools.$0.function.outputSchema.required.$0",
  ":agentId.llmTools.$0.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$0.function.outputSchema.$schema",
  ":agentId.llmTools.$0.function.annotations",
  ":agentId.llmTools.$0.function.annotations.readOnlyHint",
  ":agentId.llmTools.$0.function.execution",
  ":agentId.llmTools.$0.function.execution.taskSupport",
  ":agentId.llmTools.$1",
  ":agentId.llmTools.$1.type",
  ":agentId.llmTools.$1.function",
  ":agentId.llmTools.$1.function.name",
  ":agentId.llmTools.$1.function.title",
  ":agentId.llmTools.$1.function.description",
  ":agentId.llmTools.$1.function.inputSchema",
  ":agentId.llmTools.$1.function.inputSchema.type",
  ":agentId.llmTools.$1.function.inputSchema.properties",
  ":agentId.llmTools.$1.function.inputSchema.properties.path",
  ":agentId.llmTools.$1.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$1.function.inputSchema.properties.tail",
  ":agentId.llmTools.$1.function.inputSchema.properties.tail.type",
  ":agentId.llmTools.$1.function.inputSchema.properties.tail.description",
  ":agentId.llmTools.$1.function.inputSchema.properties.head",
  ":agentId.llmTools.$1.function.inputSchema.properties.head.type",
  ":agentId.llmTools.$1.function.inputSchema.properties.head.description",
  ":agentId.llmTools.$1.function.inputSchema.required",
  ":agentId.llmTools.$1.function.inputSchema.required.$0",
  ":agentId.llmTools.$1.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$1.function.inputSchema.$schema",
  ":agentId.llmTools.$1.function.outputSchema",
  ":agentId.llmTools.$1.function.outputSchema.type",
  ":agentId.llmTools.$1.function.outputSchema.properties",
  ":agentId.llmTools.$1.function.outputSchema.properties.content",
  ":agentId.llmTools.$1.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$1.function.outputSchema.required",
  ":agentId.llmTools.$1.function.outputSchema.required.$0",
  ":agentId.llmTools.$1.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$1.function.outputSchema.$schema",
  ":agentId.llmTools.$1.function.annotations",
  ":agentId.llmTools.$1.function.annotations.readOnlyHint",
  ":agentId.llmTools.$1.function.execution",
  ":agentId.llmTools.$1.function.execution.taskSupport",
  ":agentId.llmTools.$2",
  ":agentId.llmTools.$2.type",
  ":agentId.llmTools.$2.function",
  ":agentId.llmTools.$2.function.name",
  ":agentId.llmTools.$2.function.title",
  ":agentId.llmTools.$2.function.description",
  ":agentId.llmTools.$2.function.inputSchema",
  ":agentId.llmTools.$2.function.inputSchema.type",
  ":agentId.llmTools.$2.function.inputSchema.properties",
  ":agentId.llmTools.$2.function.inputSchema.properties.path",
  ":agentId.llmTools.$2.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$2.function.inputSchema.required",
  ":agentId.llmTools.$2.function.inputSchema.required.$0",
  ":agentId.llmTools.$2.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$2.function.inputSchema.$schema",
  ":agentId.llmTools.$2.function.outputSchema",
  ":agentId.llmTools.$2.function.outputSchema.type",
  ":agentId.llmTools.$2.function.outputSchema.properties",
  ":agentId.llmTools.$2.function.outputSchema.properties.content",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.type",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.properties",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.properties.type",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.properties.type.type",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.properties.type.enum",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.properties.type.enum.$0",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.properties.type.enum.$1",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.properties.type.enum.$2",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.properties.data",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.properties.data.type",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.properties.mimeType",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.properties.mimeType.type",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.required",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.required.$0",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.required.$1",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.required.$2",
  ":agentId.llmTools.$2.function.outputSchema.properties.content.items.additionalProperties",
  ":agentId.llmTools.$2.function.outputSchema.required",
  ":agentId.llmTools.$2.function.outputSchema.required.$0",
  ":agentId.llmTools.$2.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$2.function.outputSchema.$schema",
  ":agentId.llmTools.$2.function.annotations",
  ":agentId.llmTools.$2.function.annotations.readOnlyHint",
  ":agentId.llmTools.$2.function.execution",
  ":agentId.llmTools.$2.function.execution.taskSupport",
  ":agentId.llmTools.$3",
  ":agentId.llmTools.$3.type",
  ":agentId.llmTools.$3.function",
  ":agentId.llmTools.$3.function.name",
  ":agentId.llmTools.$3.function.title",
  ":agentId.llmTools.$3.function.description",
  ":agentId.llmTools.$3.function.inputSchema",
  ":agentId.llmTools.$3.function.inputSchema.type",
  ":agentId.llmTools.$3.function.inputSchema.properties",
  ":agentId.llmTools.$3.function.inputSchema.properties.paths",
  ":agentId.llmTools.$3.function.inputSchema.properties.paths.type",
  ":agentId.llmTools.$3.function.inputSchema.properties.paths.items",
  ":agentId.llmTools.$3.function.inputSchema.properties.paths.items.type",
  ":agentId.llmTools.$3.function.inputSchema.properties.paths.minItems",
  ":agentId.llmTools.$3.function.inputSchema.properties.paths.description",
  ":agentId.llmTools.$3.function.inputSchema.required",
  ":agentId.llmTools.$3.function.inputSchema.required.$0",
  ":agentId.llmTools.$3.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$3.function.inputSchema.$schema",
  ":agentId.llmTools.$3.function.outputSchema",
  ":agentId.llmTools.$3.function.outputSchema.type",
  ":agentId.llmTools.$3.function.outputSchema.properties",
  ":agentId.llmTools.$3.function.outputSchema.properties.content",
  ":agentId.llmTools.$3.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$3.function.outputSchema.required",
  ":agentId.llmTools.$3.function.outputSchema.required.$0",
  ":agentId.llmTools.$3.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$3.function.outputSchema.$schema",
  ":agentId.llmTools.$3.function.annotations",
  ":agentId.llmTools.$3.function.annotations.readOnlyHint",
  ":agentId.llmTools.$3.function.execution",
  ":agentId.llmTools.$3.function.execution.taskSupport",
  ":agentId.llmTools.$4",
  ":agentId.llmTools.$4.type",
  ":agentId.llmTools.$4.function",
  ":agentId.llmTools.$4.function.name",
  ":agentId.llmTools.$4.function.title",
  ":agentId.llmTools.$4.function.description",
  ":agentId.llmTools.$4.function.inputSchema",
  ":agentId.llmTools.$4.function.inputSchema.type",
  ":agentId.llmTools.$4.function.inputSchema.properties",
  ":agentId.llmTools.$4.function.inputSchema.properties.path",
  ":agentId.llmTools.$4.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$4.function.inputSchema.properties.content",
  ":agentId.llmTools.$4.function.inputSchema.properties.content.type",
  ":agentId.llmTools.$4.function.inputSchema.required",
  ":agentId.llmTools.$4.function.inputSchema.required.$0",
  ":agentId.llmTools.$4.function.inputSchema.required.$1",
  ":agentId.llmTools.$4.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$4.function.inputSchema.$schema",
  ":agentId.llmTools.$4.function.outputSchema",
  ":agentId.llmTools.$4.function.outputSchema.type",
  ":agentId.llmTools.$4.function.outputSchema.properties",
  ":agentId.llmTools.$4.function.outputSchema.properties.content",
  ":agentId.llmTools.$4.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$4.function.outputSchema.required",
  ":agentId.llmTools.$4.function.outputSchema.required.$0",
  ":agentId.llmTools.$4.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$4.function.outputSchema.$schema",
  ":agentId.llmTools.$4.function.annotations",
  ":agentId.llmTools.$4.function.annotations.readOnlyHint",
  ":agentId.llmTools.$4.function.annotations.destructiveHint",
  ":agentId.llmTools.$4.function.annotations.idempotentHint",
  ":agentId.llmTools.$4.function.execution",
  ":agentId.llmTools.$4.function.execution.taskSupport",
  ":agentId.llmTools.$5",
  ":agentId.llmTools.$5.type",
  ":agentId.llmTools.$5.function",
  ":agentId.llmTools.$5.function.name",
  ":agentId.llmTools.$5.function.title",
  ":agentId.llmTools.$5.function.description",
  ":agentId.llmTools.$5.function.inputSchema",
  ":agentId.llmTools.$5.function.inputSchema.type",
  ":agentId.llmTools.$5.function.inputSchema.properties",
  ":agentId.llmTools.$5.function.inputSchema.properties.path",
  ":agentId.llmTools.$5.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.type",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.type",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties.oldText",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties.oldText.type",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties.oldText.description",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties.newText",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties.newText.type",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties.newText.description",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.required",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.required.$0",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.required.$1",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.additionalProperties",
  ":agentId.llmTools.$5.function.inputSchema.properties.dryRun",
  ":agentId.llmTools.$5.function.inputSchema.properties.dryRun.type",
  ":agentId.llmTools.$5.function.inputSchema.properties.dryRun.default",
  ":agentId.llmTools.$5.function.inputSchema.properties.dryRun.description",
  ":agentId.llmTools.$5.function.inputSchema.required",
  ":agentId.llmTools.$5.function.inputSchema.required.$0",
  ":agentId.llmTools.$5.function.inputSchema.required.$1",
  ":agentId.llmTools.$5.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$5.function.inputSchema.$schema",
  ":agentId.llmTools.$5.function.outputSchema",
  ":agentId.llmTools.$5.function.outputSchema.type",
  ":agentId.llmTools.$5.function.outputSchema.properties",
  ":agentId.llmTools.$5.function.outputSchema.properties.content",
  ":agentId.llmTools.$5.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$5.function.outputSchema.required",
  ":agentId.llmTools.$5.function.outputSchema.required.$0",
  ":agentId.llmTools.$5.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$5.function.outputSchema.$schema",
  ":agentId.llmTools.$5.function.annotations",
  ":agentId.llmTools.$5.function.annotations.readOnlyHint",
  ":agentId.llmTools.$5.function.annotations.destructiveHint",
  ":agentId.llmTools.$5.function.annotations.idempotentHint",
  ":agentId.llmTools.$5.function.execution",
  ":agentId.llmTools.$5.function.execution.taskSupport",
  ":agentId.llmTools.$6",
  ":agentId.llmTools.$6.type",
  ":agentId.llmTools.$6.function",
  ":agentId.llmTools.$6.function.name",
  ":agentId.llmTools.$6.function.title",
  ":agentId.llmTools.$6.function.description",
  ":agentId.llmTools.$6.function.inputSchema",
  ":agentId.llmTools.$6.function.inputSchema.type",
  ":agentId.llmTools.$6.function.inputSchema.properties",
  ":agentId.llmTools.$6.function.inputSchema.properties.path",
  ":agentId.llmTools.$6.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$6.function.inputSchema.required",
  ":agentId.llmTools.$6.function.inputSchema.required.$0",
  ":agentId.llmTools.$6.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$6.function.inputSchema.$schema",
  ":agentId.llmTools.$6.function.outputSchema",
  ":agentId.llmTools.$6.function.outputSchema.type",
  ":agentId.llmTools.$6.function.outputSchema.properties",
  ":agentId.llmTools.$6.function.outputSchema.properties.content",
  ":agentId.llmTools.$6.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$6.function.outputSchema.required",
  ":agentId.llmTools.$6.function.outputSchema.required.$0",
  ":agentId.llmTools.$6.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$6.function.outputSchema.$schema",
  ":agentId.llmTools.$6.function.annotations",
  ":agentId.llmTools.$6.function.annotations.readOnlyHint",
  ":agentId.llmTools.$6.function.annotations.destructiveHint",
  ":agentId.llmTools.$6.function.annotations.idempotentHint",
  ":agentId.llmTools.$6.function.execution",
  ":agentId.llmTools.$6.function.execution.taskSupport",
  ":agentId.llmTools.$7",
  ":agentId.llmTools.$7.type",
  ":agentId.llmTools.$7.function",
  ":agentId.llmTools.$7.function.name",
  ":agentId.llmTools.$7.function.title",
  ":agentId.llmTools.$7.function.description",
  ":agentId.llmTools.$7.function.inputSchema",
  ":agentId.llmTools.$7.function.inputSchema.type",
  ":agentId.llmTools.$7.function.inputSchema.properties",
  ":agentId.llmTools.$7.function.inputSchema.properties.path",
  ":agentId.llmTools.$7.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$7.function.inputSchema.required",
  ":agentId.llmTools.$7.function.inputSchema.required.$0",
  ":agentId.llmTools.$7.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$7.function.inputSchema.$schema",
  ":agentId.llmTools.$7.function.outputSchema",
  ":agentId.llmTools.$7.function.outputSchema.type",
  ":agentId.llmTools.$7.function.outputSchema.properties",
  ":agentId.llmTools.$7.function.outputSchema.properties.content",
  ":agentId.llmTools.$7.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$7.function.outputSchema.required",
  ":agentId.llmTools.$7.function.outputSchema.required.$0",
  ":agentId.llmTools.$7.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$7.function.outputSchema.$schema",
  ":agentId.llmTools.$7.function.annotations",
  ":agentId.llmTools.$7.function.annotations.readOnlyHint",
  ":agentId.llmTools.$7.function.execution",
  ":agentId.llmTools.$7.function.execution.taskSupport",
  ":agentId.llmTools.$8",
  ":agentId.llmTools.$8.type",
  ":agentId.llmTools.$8.function",
  ":agentId.llmTools.$8.function.name",
  ":agentId.llmTools.$8.function.title",
  ":agentId.llmTools.$8.function.description",
  ":agentId.llmTools.$8.function.inputSchema",
  ":agentId.llmTools.$8.function.inputSchema.type",
  ":agentId.llmTools.$8.function.inputSchema.properties",
  ":agentId.llmTools.$8.function.inputSchema.properties.path",
  ":agentId.llmTools.$8.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy.type",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy.enum",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy.enum.$0",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy.enum.$1",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy.default",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy.description",
  ":agentId.llmTools.$8.function.inputSchema.required",
  ":agentId.llmTools.$8.function.inputSchema.required.$0",
  ":agentId.llmTools.$8.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$8.function.inputSchema.$schema",
  ":agentId.llmTools.$8.function.outputSchema",
  ":agentId.llmTools.$8.function.outputSchema.type",
  ":agentId.llmTools.$8.function.outputSchema.properties",
  ":agentId.llmTools.$8.function.outputSchema.properties.content",
  ":agentId.llmTools.$8.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$8.function.outputSchema.required",
  ":agentId.llmTools.$8.function.outputSchema.required.$0",
  ":agentId.llmTools.$8.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$8.function.outputSchema.$schema",
  ":agentId.llmTools.$8.function.annotations",
  ":agentId.llmTools.$8.function.annotations.readOnlyHint",
  ":agentId.llmTools.$8.function.execution",
  ":agentId.llmTools.$8.function.execution.taskSupport",
  ":agentId.llmTools.$9",
  ":agentId.llmTools.$9.type",
  ":agentId.llmTools.$9.function",
  ":agentId.llmTools.$9.function.name",
  ":agentId.llmTools.$9.function.title",
  ":agentId.llmTools.$9.function.description",
  ":agentId.llmTools.$9.function.inputSchema",
  ":agentId.llmTools.$9.function.inputSchema.type",
  ":agentId.llmTools.$9.function.inputSchema.properties",
  ":agentId.llmTools.$9.function.inputSchema.properties.path",
  ":agentId.llmTools.$9.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$9.function.inputSchema.properties.excludePatterns",
  ":agentId.llmTools.$9.function.inputSchema.properties.excludePatterns.type",
  ":agentId.llmTools.$9.function.inputSchema.properties.excludePatterns.items",
  ":agentId.llmTools.$9.function.inputSchema.properties.excludePatterns.items.type",
  ":agentId.llmTools.$9.function.inputSchema.properties.excludePatterns.default",
  ":agentId.llmTools.$9.function.inputSchema.required",
  ":agentId.llmTools.$9.function.inputSchema.required.$0",
  ":agentId.llmTools.$9.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$9.function.inputSchema.$schema",
  ":agentId.llmTools.$9.function.outputSchema",
  ":agentId.llmTools.$9.function.outputSchema.type",
  ":agentId.llmTools.$9.function.outputSchema.properties",
  ":agentId.llmTools.$9.function.outputSchema.properties.content",
  ":agentId.llmTools.$9.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$9.function.outputSchema.required",
  ":agentId.llmTools.$9.function.outputSchema.required.$0",
  ":agentId.llmTools.$9.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$9.function.outputSchema.$schema",
  ":agentId.llmTools.$9.function.annotations",
  ":agentId.llmTools.$9.function.annotations.readOnlyHint",
  ":agentId.llmTools.$9.function.execution",
  ":agentId.llmTools.$9.function.execution.taskSupport",
  ":agentId.llmTools.$10",
  ":agentId.llmTools.$10.type",
  ":agentId.llmTools.$10.function",
  ":agentId.llmTools.$10.function.name",
  ":agentId.llmTools.$10.function.title",
  ":agentId.llmTools.$10.function.description",
  ":agentId.llmTools.$10.function.inputSchema",
  ":agentId.llmTools.$10.function.inputSchema.type",
  ":agentId.llmTools.$10.function.inputSchema.properties",
  ":agentId.llmTools.$10.function.inputSchema.properties.source",
  ":agentId.llmTools.$10.function.inputSchema.properties.source.type",
  ":agentId.llmTools.$10.function.inputSchema.properties.destination",
  ":agentId.llmTools.$10.function.inputSchema.properties.destination.type",
  ":agentId.llmTools.$10.function.inputSchema.required",
  ":agentId.llmTools.$10.function.inputSchema.required.$0",
  ":agentId.llmTools.$10.function.inputSchema.required.$1",
  ":agentId.llmTools.$10.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$10.function.inputSchema.$schema",
  ":agentId.llmTools.$10.function.outputSchema",
  ":agentId.llmTools.$10.function.outputSchema.type",
  ":agentId.llmTools.$10.function.outputSchema.properties",
  ":agentId.llmTools.$10.function.outputSchema.properties.content",
  ":agentId.llmTools.$10.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$10.function.outputSchema.required",
  ":agentId.llmTools.$10.function.outputSchema.required.$0",
  ":agentId.llmTools.$10.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$10.function.outputSchema.$schema",
  ":agentId.llmTools.$10.function.annotations",
  ":agentId.llmTools.$10.function.annotations.readOnlyHint",
  ":agentId.llmTools.$10.function.annotations.destructiveHint",
  ":agentId.llmTools.$10.function.annotations.idempotentHint",
  ":agentId.llmTools.$10.function.execution",
  ":agentId.llmTools.$10.function.execution.taskSupport",
  ":agentId.llmTools.$11",
  ":agentId.llmTools.$11.type",
  ":agentId.llmTools.$11.function",
  ":agentId.llmTools.$11.function.name",
  ":agentId.llmTools.$11.function.title",
  ":agentId.llmTools.$11.function.description",
  ":agentId.llmTools.$11.function.inputSchema",
  ":agentId.llmTools.$11.function.inputSchema.type",
  ":agentId.llmTools.$11.function.inputSchema.properties",
  ":agentId.llmTools.$11.function.inputSchema.properties.path",
  ":agentId.llmTools.$11.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$11.function.inputSchema.properties.pattern",
  ":agentId.llmTools.$11.function.inputSchema.properties.pattern.type",
  ":agentId.llmTools.$11.function.inputSchema.properties.excludePatterns",
  ":agentId.llmTools.$11.function.inputSchema.properties.excludePatterns.type",
  ":agentId.llmTools.$11.function.inputSchema.properties.excludePatterns.items",
  ":agentId.llmTools.$11.function.inputSchema.properties.excludePatterns.items.type",
  ":agentId.llmTools.$11.function.inputSchema.properties.excludePatterns.default",
  ":agentId.llmTools.$11.function.inputSchema.required",
  ":agentId.llmTools.$11.function.inputSchema.required.$0",
  ":agentId.llmTools.$11.function.inputSchema.required.$1",
  ":agentId.llmTools.$11.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$11.function.inputSchema.$schema",
  ":agentId.llmTools.$11.function.outputSchema",
  ":agentId.llmTools.$11.function.outputSchema.type",
  ":agentId.llmTools.$11.function.outputSchema.properties",
  ":agentId.llmTools.$11.function.outputSchema.properties.content",
  ":agentId.llmTools.$11.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$11.function.outputSchema.required",
  ":agentId.llmTools.$11.function.outputSchema.required.$0",
  ":agentId.llmTools.$11.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$11.function.outputSchema.$schema",
  ":agentId.llmTools.$11.function.annotations",
  ":agentId.llmTools.$11.function.annotations.readOnlyHint",
  ":agentId.llmTools.$11.function.execution",
  ":agentId.llmTools.$11.function.execution.taskSupport",
  ":agentId.llmTools.$12",
  ":agentId.llmTools.$12.type",
  ":agentId.llmTools.$12.function",
  ":agentId.llmTools.$12.function.name",
  ":agentId.llmTools.$12.function.title",
  ":agentId.llmTools.$12.function.description",
  ":agentId.llmTools.$12.function.inputSchema",
  ":agentId.llmTools.$12.function.inputSchema.type",
  ":agentId.llmTools.$12.function.inputSchema.properties",
  ":agentId.llmTools.$12.function.inputSchema.properties.path",
  ":agentId.llmTools.$12.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$12.function.inputSchema.required",
  ":agentId.llmTools.$12.function.inputSchema.required.$0",
  ":agentId.llmTools.$12.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$12.function.inputSchema.$schema",
  ":agentId.llmTools.$12.function.outputSchema",
  ":agentId.llmTools.$12.function.outputSchema.type",
  ":agentId.llmTools.$12.function.outputSchema.properties",
  ":agentId.llmTools.$12.function.outputSchema.properties.content",
  ":agentId.llmTools.$12.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$12.function.outputSchema.required",
  ":agentId.llmTools.$12.function.outputSchema.required.$0",
  ":agentId.llmTools.$12.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$12.function.outputSchema.$schema",
  ":agentId.llmTools.$12.function.annotations",
  ":agentId.llmTools.$12.function.annotations.readOnlyHint",
  ":agentId.llmTools.$12.function.execution",
  ":agentId.llmTools.$12.function.execution.taskSupport",
  ":agentId.llmTools.$13",
  ":agentId.llmTools.$13.type",
  ":agentId.llmTools.$13.function",
  ":agentId.llmTools.$13.function.name",
  ":agentId.llmTools.$13.function.title",
  ":agentId.llmTools.$13.function.description",
  ":agentId.llmTools.$13.function.inputSchema",
  ":agentId.llmTools.$13.function.inputSchema.type",
  ":agentId.llmTools.$13.function.inputSchema.properties",
  ":agentId.llmTools.$13.function.inputSchema.$schema",
  ":agentId.llmTools.$13.function.outputSchema",
  ":agentId.llmTools.$13.function.outputSchema.type",
  ":agentId.llmTools.$13.function.outputSchema.properties",
  ":agentId.llmTools.$13.function.outputSchema.properties.content",
  ":agentId.llmTools.$13.function.outputSchema.properties.content.type",
  ":agentId.llmTools.$13.function.outputSchema.required",
  ":agentId.llmTools.$13.function.outputSchema.required.$0",
  ":agentId.llmTools.$13.function.outputSchema.additionalProperties",
  ":agentId.llmTools.$13.function.outputSchema.$schema",
  ":agentId.llmTools.$13.function.annotations",
  ":agentId.llmTools.$13.function.annotations.readOnlyHint",
  ":agentId.llmTools.$13.function.execution",
  ":agentId.llmTools.$13.function.execution.taskSupport",
  ":agentId.tools",
  ":agentId.tools.$0",
  ":agentId.tools.$0.name",
  ":agentId.tools.$0.title",
  ":agentId.tools.$0.description",
  ":agentId.tools.$0.inputSchema",
  ":agentId.tools.$0.inputSchema.type",
  ":agentId.tools.$0.inputSchema.properties",
  ":agentId.tools.$0.inputSchema.properties.path",
  ":agentId.tools.$0.inputSchema.properties.path.type",
  ":agentId.tools.$0.inputSchema.properties.tail",
  ":agentId.tools.$0.inputSchema.properties.tail.type",
  ":agentId.tools.$0.inputSchema.properties.tail.description",
  ":agentId.tools.$0.inputSchema.properties.head",
  ":agentId.tools.$0.inputSchema.properties.head.type",
  ":agentId.tools.$0.inputSchema.properties.head.description",
  ":agentId.tools.$0.inputSchema.required",
  ":agentId.tools.$0.inputSchema.required.$0",
  ":agentId.tools.$0.inputSchema.additionalProperties",
  ":agentId.tools.$0.inputSchema.$schema",
  ":agentId.tools.$0.outputSchema",
  ":agentId.tools.$0.outputSchema.type",
  ":agentId.tools.$0.outputSchema.properties",
  ":agentId.tools.$0.outputSchema.properties.content",
  ":agentId.tools.$0.outputSchema.properties.content.type",
  ":agentId.tools.$0.outputSchema.required",
  ":agentId.tools.$0.outputSchema.required.$0",
  ":agentId.tools.$0.outputSchema.additionalProperties",
  ":agentId.tools.$0.outputSchema.$schema",
  ":agentId.tools.$0.annotations",
  ":agentId.tools.$0.annotations.readOnlyHint",
  ":agentId.tools.$0.execution",
  ":agentId.tools.$0.execution.taskSupport",
  ":agentId.tools.$1",
  ":agentId.tools.$1.name",
  ":agentId.tools.$1.title",
  ":agentId.tools.$1.description",
  ":agentId.tools.$1.inputSchema",
  ":agentId.tools.$1.inputSchema.type",
  ":agentId.tools.$1.inputSchema.properties",
  ":agentId.tools.$1.inputSchema.properties.path",
  ":agentId.tools.$1.inputSchema.properties.path.type",
  ":agentId.tools.$1.inputSchema.properties.tail",
  ":agentId.tools.$1.inputSchema.properties.tail.type",
  ":agentId.tools.$1.inputSchema.properties.tail.description",
  ":agentId.tools.$1.inputSchema.properties.head",
  ":agentId.tools.$1.inputSchema.properties.head.type",
  ":agentId.tools.$1.inputSchema.properties.head.description",
  ":agentId.tools.$1.inputSchema.required",
  ":agentId.tools.$1.inputSchema.required.$0",
  ":agentId.tools.$1.inputSchema.additionalProperties",
  ":agentId.tools.$1.inputSchema.$schema",
  ":agentId.tools.$1.outputSchema",
  ":agentId.tools.$1.outputSchema.type",
  ":agentId.tools.$1.outputSchema.properties",
  ":agentId.tools.$1.outputSchema.properties.content",
  ":agentId.tools.$1.outputSchema.properties.content.type",
  ":agentId.tools.$1.outputSchema.required",
  ":agentId.tools.$1.outputSchema.required.$0",
  ":agentId.tools.$1.outputSchema.additionalProperties",
  ":agentId.tools.$1.outputSchema.$schema",
  ":agentId.tools.$1.annotations",
  ":agentId.tools.$1.annotations.readOnlyHint",
  ":agentId.tools.$1.execution",
  ":agentId.tools.$1.execution.taskSupport",
  ":agentId.tools.$2",
  ":agentId.tools.$2.name",
  ":agentId.tools.$2.title",
  ":agentId.tools.$2.description",
  ":agentId.tools.$2.inputSchema",
  ":agentId.tools.$2.inputSchema.type",
  ":agentId.tools.$2.inputSchema.properties",
  ":agentId.tools.$2.inputSchema.properties.path",
  ":agentId.tools.$2.inputSchema.properties.path.type",
  ":agentId.tools.$2.inputSchema.required",
  ":agentId.tools.$2.inputSchema.required.$0",
  ":agentId.tools.$2.inputSchema.additionalProperties",
  ":agentId.tools.$2.inputSchema.$schema",
  ":agentId.tools.$2.outputSchema",
  ":agentId.tools.$2.outputSchema.type",
  ":agentId.tools.$2.outputSchema.properties",
  ":agentId.tools.$2.outputSchema.properties.content",
  ":agentId.tools.$2.outputSchema.properties.content.type",
  ":agentId.tools.$2.outputSchema.properties.content.items",
  ":agentId.tools.$2.outputSchema.properties.content.items.type",
  ":agentId.tools.$2.outputSchema.properties.content.items.properties",
  ":agentId.tools.$2.outputSchema.properties.content.items.properties.type",
  ":agentId.tools.$2.outputSchema.properties.content.items.properties.type.type",
  ":agentId.tools.$2.outputSchema.properties.content.items.properties.type.enum",
  ":agentId.tools.$2.outputSchema.properties.content.items.properties.type.enum.$0",
  ":agentId.tools.$2.outputSchema.properties.content.items.properties.type.enum.$1",
  ":agentId.tools.$2.outputSchema.properties.content.items.properties.type.enum.$2",
  ":agentId.tools.$2.outputSchema.properties.content.items.properties.data",
  ":agentId.tools.$2.outputSchema.properties.content.items.properties.data.type",
  ":agentId.tools.$2.outputSchema.properties.content.items.properties.mimeType",
  ":agentId.tools.$2.outputSchema.properties.content.items.properties.mimeType.type",
  ":agentId.tools.$2.outputSchema.properties.content.items.required",
  ":agentId.tools.$2.outputSchema.properties.content.items.required.$0",
  ":agentId.tools.$2.outputSchema.properties.content.items.required.$1",
  ":agentId.tools.$2.outputSchema.properties.content.items.required.$2",
  ":agentId.tools.$2.outputSchema.properties.content.items.additionalProperties",
  ":agentId.tools.$2.outputSchema.required",
  ":agentId.tools.$2.outputSchema.required.$0",
  ":agentId.tools.$2.outputSchema.additionalProperties",
  ":agentId.tools.$2.outputSchema.$schema",
  ":agentId.tools.$2.annotations",
  ":agentId.tools.$2.annotations.readOnlyHint",
  ":agentId.tools.$2.execution",
  ":agentId.tools.$2.execution.taskSupport",
  ":agentId.tools.$3",
  ":agentId.tools.$3.name",
  ":agentId.tools.$3.title",
  ":agentId.tools.$3.description",
  ":agentId.tools.$3.inputSchema",
  ":agentId.tools.$3.inputSchema.type",
  ":agentId.tools.$3.inputSchema.properties",
  ":agentId.tools.$3.inputSchema.properties.paths",
  ":agentId.tools.$3.inputSchema.properties.paths.type",
  ":agentId.tools.$3.inputSchema.properties.paths.items",
  ":agentId.tools.$3.inputSchema.properties.paths.items.type",
  ":agentId.tools.$3.inputSchema.properties.paths.minItems",
  ":agentId.tools.$3.inputSchema.properties.paths.description",
  ":agentId.tools.$3.inputSchema.required",
  ":agentId.tools.$3.inputSchema.required.$0",
  ":agentId.tools.$3.inputSchema.additionalProperties",
  ":agentId.tools.$3.inputSchema.$schema",
  ":agentId.tools.$3.outputSchema",
  ":agentId.tools.$3.outputSchema.type",
  ":agentId.tools.$3.outputSchema.properties",
  ":agentId.tools.$3.outputSchema.properties.content",
  ":agentId.tools.$3.outputSchema.properties.content.type",
  ":agentId.tools.$3.outputSchema.required",
  ":agentId.tools.$3.outputSchema.required.$0",
  ":agentId.tools.$3.outputSchema.additionalProperties",
  ":agentId.tools.$3.outputSchema.$schema",
  ":agentId.tools.$3.annotations",
  ":agentId.tools.$3.annotations.readOnlyHint",
  ":agentId.tools.$3.execution",
  ":agentId.tools.$3.execution.taskSupport",
  ":agentId.tools.$4",
  ":agentId.tools.$4.name",
  ":agentId.tools.$4.title",
  ":agentId.tools.$4.description",
  ":agentId.tools.$4.inputSchema",
  ":agentId.tools.$4.inputSchema.type",
  ":agentId.tools.$4.inputSchema.properties",
  ":agentId.tools.$4.inputSchema.properties.path",
  ":agentId.tools.$4.inputSchema.properties.path.type",
  ":agentId.tools.$4.inputSchema.properties.content",
  ":agentId.tools.$4.inputSchema.properties.content.type",
  ":agentId.tools.$4.inputSchema.required",
  ":agentId.tools.$4.inputSchema.required.$0",
  ":agentId.tools.$4.inputSchema.required.$1",
  ":agentId.tools.$4.inputSchema.additionalProperties",
  ":agentId.tools.$4.inputSchema.$schema",
  ":agentId.tools.$4.outputSchema",
  ":agentId.tools.$4.outputSchema.type",
  ":agentId.tools.$4.outputSchema.properties",
  ":agentId.tools.$4.outputSchema.properties.content",
  ":agentId.tools.$4.outputSchema.properties.content.type",
  ":agentId.tools.$4.outputSchema.required",
  ":agentId.tools.$4.outputSchema.required.$0",
  ":agentId.tools.$4.outputSchema.additionalProperties",
  ":agentId.tools.$4.outputSchema.$schema",
  ":agentId.tools.$4.annotations",
  ":agentId.tools.$4.annotations.readOnlyHint",
  ":agentId.tools.$4.annotations.destructiveHint",
  ":agentId.tools.$4.annotations.idempotentHint",
  ":agentId.tools.$4.execution",
  ":agentId.tools.$4.execution.taskSupport",
  ":agentId.tools.$5",
  ":agentId.tools.$5.name",
  ":agentId.tools.$5.title",
  ":agentId.tools.$5.description",
  ":agentId.tools.$5.inputSchema",
  ":agentId.tools.$5.inputSchema.type",
  ":agentId.tools.$5.inputSchema.properties",
  ":agentId.tools.$5.inputSchema.properties.path",
  ":agentId.tools.$5.inputSchema.properties.path.type",
  ":agentId.tools.$5.inputSchema.properties.edits",
  ":agentId.tools.$5.inputSchema.properties.edits.type",
  ":agentId.tools.$5.inputSchema.properties.edits.items",
  ":agentId.tools.$5.inputSchema.properties.edits.items.type",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties.oldText",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties.oldText.type",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties.oldText.description",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties.newText",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties.newText.type",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties.newText.description",
  ":agentId.tools.$5.inputSchema.properties.edits.items.required",
  ":agentId.tools.$5.inputSchema.properties.edits.items.required.$0",
  ":agentId.tools.$5.inputSchema.properties.edits.items.required.$1",
  ":agentId.tools.$5.inputSchema.properties.edits.items.additionalProperties",
  ":agentId.tools.$5.inputSchema.properties.dryRun",
  ":agentId.tools.$5.inputSchema.properties.dryRun.type",
  ":agentId.tools.$5.inputSchema.properties.dryRun.default",
  ":agentId.tools.$5.inputSchema.properties.dryRun.description",
  ":agentId.tools.$5.inputSchema.required",
  ":agentId.tools.$5.inputSchema.required.$0",
  ":agentId.tools.$5.inputSchema.required.$1",
  ":agentId.tools.$5.inputSchema.additionalProperties",
  ":agentId.tools.$5.inputSchema.$schema",
  ":agentId.tools.$5.outputSchema",
  ":agentId.tools.$5.outputSchema.type",
  ":agentId.tools.$5.outputSchema.properties",
  ":agentId.tools.$5.outputSchema.properties.content",
  ":agentId.tools.$5.outputSchema.properties.content.type",
  ":agentId.tools.$5.outputSchema.required",
  ":agentId.tools.$5.outputSchema.required.$0",
  ":agentId.tools.$5.outputSchema.additionalProperties",
  ":agentId.tools.$5.outputSchema.$schema",
  ":agentId.tools.$5.annotations",
  ":agentId.tools.$5.annotations.readOnlyHint",
  ":agentId.tools.$5.annotations.destructiveHint",
  ":agentId.tools.$5.annotations.idempotentHint",
  ":agentId.tools.$5.execution",
  ":agentId.tools.$5.execution.taskSupport",
  ":agentId.tools.$6",
  ":agentId.tools.$6.name",
  ":agentId.tools.$6.title",
  ":agentId.tools.$6.description",
  ":agentId.tools.$6.inputSchema",
  ":agentId.tools.$6.inputSchema.type",
  ":agentId.tools.$6.inputSchema.properties",
  ":agentId.tools.$6.inputSchema.properties.path",
  ":agentId.tools.$6.inputSchema.properties.path.type",
  ":agentId.tools.$6.inputSchema.required",
  ":agentId.tools.$6.inputSchema.required.$0",
  ":agentId.tools.$6.inputSchema.additionalProperties",
  ":agentId.tools.$6.inputSchema.$schema",
  ":agentId.tools.$6.outputSchema",
  ":agentId.tools.$6.outputSchema.type",
  ":agentId.tools.$6.outputSchema.properties",
  ":agentId.tools.$6.outputSchema.properties.content",
  ":agentId.tools.$6.outputSchema.properties.content.type",
  ":agentId.tools.$6.outputSchema.required",
  ":agentId.tools.$6.outputSchema.required.$0",
  ":agentId.tools.$6.outputSchema.additionalProperties",
  ":agentId.tools.$6.outputSchema.$schema",
  ":agentId.tools.$6.annotations",
  ":agentId.tools.$6.annotations.readOnlyHint",
  ":agentId.tools.$6.annotations.destructiveHint",
  ":agentId.tools.$6.annotations.idempotentHint",
  ":agentId.tools.$6.execution",
  ":agentId.tools.$6.execution.taskSupport",
  ":agentId.tools.$7",
  ":agentId.tools.$7.name",
  ":agentId.tools.$7.title",
  ":agentId.tools.$7.description",
  ":agentId.tools.$7.inputSchema",
  ":agentId.tools.$7.inputSchema.type",
  ":agentId.tools.$7.inputSchema.properties",
  ":agentId.tools.$7.inputSchema.properties.path",
  ":agentId.tools.$7.inputSchema.properties.path.type",
  ":agentId.tools.$7.inputSchema.required",
  ":agentId.tools.$7.inputSchema.required.$0",
  ":agentId.tools.$7.inputSchema.additionalProperties",
  ":agentId.tools.$7.inputSchema.$schema",
  ":agentId.tools.$7.outputSchema",
  ":agentId.tools.$7.outputSchema.type",
  ":agentId.tools.$7.outputSchema.properties",
  ":agentId.tools.$7.outputSchema.properties.content",
  ":agentId.tools.$7.outputSchema.properties.content.type",
  ":agentId.tools.$7.outputSchema.required",
  ":agentId.tools.$7.outputSchema.required.$0",
  ":agentId.tools.$7.outputSchema.additionalProperties",
  ":agentId.tools.$7.outputSchema.$schema",
  ":agentId.tools.$7.annotations",
  ":agentId.tools.$7.annotations.readOnlyHint",
  ":agentId.tools.$7.execution",
  ":agentId.tools.$7.execution.taskSupport",
  ":agentId.tools.$8",
  ":agentId.tools.$8.name",
  ":agentId.tools.$8.title",
  ":agentId.tools.$8.description",
  ":agentId.tools.$8.inputSchema",
  ":agentId.tools.$8.inputSchema.type",
  ":agentId.tools.$8.inputSchema.properties",
  ":agentId.tools.$8.inputSchema.properties.path",
  ":agentId.tools.$8.inputSchema.properties.path.type",
  ":agentId.tools.$8.inputSchema.properties.sortBy",
  ":agentId.tools.$8.inputSchema.properties.sortBy.type",
  ":agentId.tools.$8.inputSchema.properties.sortBy.enum",
  ":agentId.tools.$8.inputSchema.properties.sortBy.enum.$0",
  ":agentId.tools.$8.inputSchema.properties.sortBy.enum.$1",
  ":agentId.tools.$8.inputSchema.properties.sortBy.default",
  ":agentId.tools.$8.inputSchema.properties.sortBy.description",
  ":agentId.tools.$8.inputSchema.required",
  ":agentId.tools.$8.inputSchema.required.$0",
  ":agentId.tools.$8.inputSchema.additionalProperties",
  ":agentId.tools.$8.inputSchema.$schema",
  ":agentId.tools.$8.outputSchema",
  ":agentId.tools.$8.outputSchema.type",
  ":agentId.tools.$8.outputSchema.properties",
  ":agentId.tools.$8.outputSchema.properties.content",
  ":agentId.tools.$8.outputSchema.properties.content.type",
  ":agentId.tools.$8.outputSchema.required",
  ":agentId.tools.$8.outputSchema.required.$0",
  ":agentId.tools.$8.outputSchema.additionalProperties",
  ":agentId.tools.$8.outputSchema.$schema",
  ":agentId.tools.$8.annotations",
  ":agentId.tools.$8.annotations.readOnlyHint",
  ":agentId.tools.$8.execution",
  ":agentId.tools.$8.execution.taskSupport",
  ":agentId.tools.$9",
  ":agentId.tools.$9.name",
  ":agentId.tools.$9.title",
  ":agentId.tools.$9.description",
  ":agentId.tools.$9.inputSchema",
  ":agentId.tools.$9.inputSchema.type",
  ":agentId.tools.$9.inputSchema.properties",
  ":agentId.tools.$9.inputSchema.properties.path",
  ":agentId.tools.$9.inputSchema.properties.path.type",
  ":agentId.tools.$9.inputSchema.properties.excludePatterns",
  ":agentId.tools.$9.inputSchema.properties.excludePatterns.type",
  ":agentId.tools.$9.inputSchema.properties.excludePatterns.items",
  ":agentId.tools.$9.inputSchema.properties.excludePatterns.items.type",
  ":agentId.tools.$9.inputSchema.properties.excludePatterns.default",
  ":agentId.tools.$9.inputSchema.required",
  ":agentId.tools.$9.inputSchema.required.$0",
  ":agentId.tools.$9.inputSchema.additionalProperties",
  ":agentId.tools.$9.inputSchema.$schema",
  ":agentId.tools.$9.outputSchema",
  ":agentId.tools.$9.outputSchema.type",
  ":agentId.tools.$9.outputSchema.properties",
  ":agentId.tools.$9.outputSchema.properties.content",
  ":agentId.tools.$9.outputSchema.properties.content.type",
  ":agentId.tools.$9.outputSchema.required",
  ":agentId.tools.$9.outputSchema.required.$0",
  ":agentId.tools.$9.outputSchema.additionalProperties",
  ":agentId.tools.$9.outputSchema.$schema",
  ":agentId.tools.$9.annotations",
  ":agentId.tools.$9.annotations.readOnlyHint",
  ":agentId.tools.$9.execution",
  ":agentId.tools.$9.execution.taskSupport",
  ":agentId.tools.$10",
  ":agentId.tools.$10.name",
  ":agentId.tools.$10.title",
  ":agentId.tools.$10.description",
  ":agentId.tools.$10.inputSchema",
  ":agentId.tools.$10.inputSchema.type",
  ":agentId.tools.$10.inputSchema.properties",
  ":agentId.tools.$10.inputSchema.properties.source",
  ":agentId.tools.$10.inputSchema.properties.source.type",
  ":agentId.tools.$10.inputSchema.properties.destination",
  ":agentId.tools.$10.inputSchema.properties.destination.type",
  ":agentId.tools.$10.inputSchema.required",
  ":agentId.tools.$10.inputSchema.required.$0",
  ":agentId.tools.$10.inputSchema.required.$1",
  ":agentId.tools.$10.inputSchema.additionalProperties",
  ":agentId.tools.$10.inputSchema.$schema",
  ":agentId.tools.$10.outputSchema",
  ":agentId.tools.$10.outputSchema.type",
  ":agentId.tools.$10.outputSchema.properties",
  ":agentId.tools.$10.outputSchema.properties.content",
  ":agentId.tools.$10.outputSchema.properties.content.type",
  ":agentId.tools.$10.outputSchema.required",
  ":agentId.tools.$10.outputSchema.required.$0",
  ":agentId.tools.$10.outputSchema.additionalProperties",
  ":agentId.tools.$10.outputSchema.$schema",
  ":agentId.tools.$10.annotations",
  ":agentId.tools.$10.annotations.readOnlyHint",
  ":agentId.tools.$10.annotations.destructiveHint",
  ":agentId.tools.$10.annotations.idempotentHint",
  ":agentId.tools.$10.execution",
  ":agentId.tools.$10.execution.taskSupport",
  ":agentId.tools.$11",
  ":agentId.tools.$11.name",
  ":agentId.tools.$11.title",
  ":agentId.tools.$11.description",
  ":agentId.tools.$11.inputSchema",
  ":agentId.tools.$11.inputSchema.type",
  ":agentId.tools.$11.inputSchema.properties",
  ":agentId.tools.$11.inputSchema.properties.path",
  ":agentId.tools.$11.inputSchema.properties.path.type",
  ":agentId.tools.$11.inputSchema.properties.pattern",
  ":agentId.tools.$11.inputSchema.properties.pattern.type",
  ":agentId.tools.$11.inputSchema.properties.excludePatterns",
  ":agentId.tools.$11.inputSchema.properties.excludePatterns.type",
  ":agentId.tools.$11.inputSchema.properties.excludePatterns.items",
  ":agentId.tools.$11.inputSchema.properties.excludePatterns.items.type",
  ":agentId.tools.$11.inputSchema.properties.excludePatterns.default",
  ":agentId.tools.$11.inputSchema.required",
  ":agentId.tools.$11.inputSchema.required.$0",
  ":agentId.tools.$11.inputSchema.required.$1",
  ":agentId.tools.$11.inputSchema.additionalProperties",
  ":agentId.tools.$11.inputSchema.$schema",
  ":agentId.tools.$11.outputSchema",
  ":agentId.tools.$11.outputSchema.type",
  ":agentId.tools.$11.outputSchema.properties",
  ":agentId.tools.$11.outputSchema.properties.content",
  ":agentId.tools.$11.outputSchema.properties.content.type",
  ":agentId.tools.$11.outputSchema.required",
  ":agentId.tools.$11.outputSchema.required.$0",
  ":agentId.tools.$11.outputSchema.additionalProperties",
  ":agentId.tools.$11.outputSchema.$schema",
  ":agentId.tools.$11.annotations",
  ":agentId.tools.$11.annotations.readOnlyHint",
  ":agentId.tools.$11.execution",
  ":agentId.tools.$11.execution.taskSupport",
  ":agentId.tools.$12",
  ":agentId.tools.$12.name",
  ":agentId.tools.$12.title",
  ":agentId.tools.$12.description",
  ":agentId.tools.$12.inputSchema",
  ":agentId.tools.$12.inputSchema.type",
  ":agentId.tools.$12.inputSchema.properties",
  ":agentId.tools.$12.inputSchema.properties.path",
  ":agentId.tools.$12.inputSchema.properties.path.type",
  ":agentId.tools.$12.inputSchema.required",
  ":agentId.tools.$12.inputSchema.required.$0",
  ":agentId.tools.$12.inputSchema.additionalProperties",
  ":agentId.tools.$12.inputSchema.$schema",
  ":agentId.tools.$12.outputSchema",
  ":agentId.tools.$12.outputSchema.type",
  ":agentId.tools.$12.outputSchema.properties",
  ":agentId.tools.$12.outputSchema.properties.content",
  ":agentId.tools.$12.outputSchema.properties.content.type",
  ":agentId.tools.$12.outputSchema.required",
  ":agentId.tools.$12.outputSchema.required.$0",
  ":agentId.tools.$12.outputSchema.additionalProperties",
  ":agentId.tools.$12.outputSchema.$schema",
  ":agentId.tools.$12.annotations",
  ":agentId.tools.$12.annotations.readOnlyHint",
  ":agentId.tools.$12.execution",
  ":agentId.tools.$12.execution.taskSupport",
  ":agentId.tools.$13",
  ":agentId.tools.$13.name",
  ":agentId.tools.$13.title",
  ":agentId.tools.$13.description",
  ":agentId.tools.$13.inputSchema",
  ":agentId.tools.$13.inputSchema.type",
  ":agentId.tools.$13.inputSchema.properties",
  ":agentId.tools.$13.inputSchema.$schema",
  ":agentId.tools.$13.outputSchema",
  ":agentId.tools.$13.outputSchema.type",
  ":agentId.tools.$13.outputSchema.properties",
  ":agentId.tools.$13.outputSchema.properties.content",
  ":agentId.tools.$13.outputSchema.properties.content.type",
  ":agentId.tools.$13.outputSchema.required",
  ":agentId.tools.$13.outputSchema.required.$0",
  ":agentId.tools.$13.outputSchema.additionalProperties",
  ":agentId.tools.$13.outputSchema.$schema",
  ":agentId.tools.$13.annotations",
  ":agentId.tools.$13.annotations.readOnlyHint",
  ":agentId.tools.$13.execution",
  ":agentId.tools.$13.execution.taskSupport"
]

```

## Samples

### Sample0

#### inputs

```json

{}

```

#### params

```json

{"services":["filesystem"]}

```

#### result

```json

{
  "llmTools": [
    {
      "type": "function",
      "function": {
        "name": "filesystem--read_file",
        "title": "Read File (Deprecated)",
        "description": "Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            },
            "tail": {
              "type": "number",
              "description": "If provided, returns only the last N lines of the file"
            },
            "head": {
              "type": "number",
              "description": "If provided, returns only the first N lines of the file"
            }
          },
          "required": [
            "path"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": true
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--read_text_file",
        "title": "Read Text File",
        "description": "Read the complete contents of a file from the file system as text. Handles various text encodings and provides detailed error messages if the file cannot be read. Use this tool when you need to examine the contents of a single file. Use the 'head' parameter to read only the first N lines of a file, or the 'tail' parameter to read only the last N lines of a file. Operates on the file as text regardless of extension. Only works within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            },
            "tail": {
              "type": "number",
              "description": "If provided, returns only the last N lines of the file"
            },
            "head": {
              "type": "number",
              "description": "If provided, returns only the first N lines of the file"
            }
          },
          "required": [
            "path"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": true
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--read_media_file",
        "title": "Read Media File",
        "description": "Read an image or audio file. Returns the base64 encoded data and MIME type. Only works within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            }
          },
          "required": [
            "path"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "image",
                      "audio",
                      "blob"
                    ]
                  },
                  "data": {
                    "type": "string"
                  },
                  "mimeType": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "data",
                  "mimeType"
                ],
                "additionalProperties": false
              }
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": true
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--read_multiple_files",
        "title": "Read Multiple Files",
        "description": "Read the contents of multiple files simultaneously. This is more efficient than reading files one by one when you need to analyze or compare multiple files. Each file's content is returned with its path as a reference. Failed reads for individual files won't stop the entire operation. Only works within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "paths": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "minItems": 1,
              "description": "Array of file paths to read. Each path must be a string pointing to a valid file within allowed directories."
            }
          },
          "required": [
            "paths"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": true
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--write_file",
        "title": "Write File",
        "description": "Create a new file or completely overwrite an existing file with new content. Use with caution as it will overwrite existing files without warning. Handles text content with proper encoding. Only works within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            },
            "content": {
              "type": "string"
            }
          },
          "required": [
            "path",
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": false,
          "destructiveHint": true,
          "idempotentHint": true
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--edit_file",
        "title": "Edit File",
        "description": "Make line-based edits to a text file. Each edit replaces exact line sequences with new content. Returns a git-style diff showing the changes made. Only works within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            },
            "edits": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "oldText": {
                    "type": "string",
                    "description": "Text to search for - must match exactly"
                  },
                  "newText": {
                    "type": "string",
                    "description": "Text to replace with"
                  }
                },
                "required": [
                  "oldText",
                  "newText"
                ],
                "additionalProperties": false
              }
            },
            "dryRun": {
              "type": "boolean",
              "default": false,
              "description": "Preview changes using git-style diff format"
            }
          },
          "required": [
            "path",
            "edits"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": false,
          "destructiveHint": true,
          "idempotentHint": false
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--create_directory",
        "title": "Create Directory",
        "description": "Create a new directory or ensure a directory exists. Can create multiple nested directories in one operation. If the directory already exists, this operation will succeed silently. Perfect for setting up directory structures for projects or ensuring required paths exist. Only works within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            }
          },
          "required": [
            "path"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": false,
          "destructiveHint": false,
          "idempotentHint": true
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--list_directory",
        "title": "List Directory",
        "description": "Get a detailed listing of all files and directories in a specified path. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is essential for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            }
          },
          "required": [
            "path"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": true
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--list_directory_with_sizes",
        "title": "List Directory with Sizes",
        "description": "Get a detailed listing of all files and directories in a specified path, including sizes. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is useful for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            },
            "sortBy": {
              "type": "string",
              "enum": [
                "name",
                "size"
              ],
              "default": "name",
              "description": "Sort entries by name or size"
            }
          },
          "required": [
            "path"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": true
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--directory_tree",
        "title": "Directory Tree",
        "description": "Get a recursive tree view of files and directories as a JSON structure. Each entry includes 'name', 'type' (file/directory), and 'children' for directories. Files have no children array, while directories always have a children array (which may be empty). The output is formatted with 2-space indentation for readability. Only works within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            },
            "excludePatterns": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "default": []
            }
          },
          "required": [
            "path"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": true
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--move_file",
        "title": "Move File",
        "description": "Move or rename files and directories. Can move files between directories and rename them in a single operation. If the destination exists, the operation will fail. Works across different directories and can be used for simple renaming within the same directory. Both source and destination must be within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "source": {
              "type": "string"
            },
            "destination": {
              "type": "string"
            }
          },
          "required": [
            "source",
            "destination"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": false,
          "destructiveHint": false,
          "idempotentHint": false
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--search_files",
        "title": "Search Files",
        "description": "Recursively search for files and directories matching a pattern. The patterns should be glob-style patterns that match paths relative to the working directory. Use pattern like '*.ext' to match files in current directory, and '**/*.ext' to match files in all subdirectories. Returns full paths to all matching items. Great for finding files when you don't know their exact location. Only searches within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            },
            "pattern": {
              "type": "string"
            },
            "excludePatterns": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "default": []
            }
          },
          "required": [
            "path",
            "pattern"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": true
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--get_file_info",
        "title": "Get File Info",
        "description": "Retrieve detailed metadata about a file or directory. Returns comprehensive information including size, creation time, last modified time, permissions, and type. This tool is perfect for understanding file characteristics without reading the actual content. Only works within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            }
          },
          "required": [
            "path"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": true
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--list_allowed_directories",
        "title": "List Allowed Directories",
        "description": "Returns the list of directories that this server is allowed to access. Subdirectories within these allowed directories are also accessible. Use this to understand which directories and their nested paths are available before trying to access files.",
        "inputSchema": {
          "type": "object",
          "properties": {},
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "outputSchema": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string"
            }
          },
          "required": [
            "content"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        },
        "annotations": {
          "readOnlyHint": true
        },
        "execution": {
          "taskSupport": "forbidden"
        }
      }
    }
  ],
  "tools": [
    {
      "name": "filesystem--read_file",
      "title": "Read File (Deprecated)",
      "description": "Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          },
          "tail": {
            "type": "number",
            "description": "If provided, returns only the last N lines of the file"
          },
          "head": {
            "type": "number",
            "description": "If provided, returns only the first N lines of the file"
          }
        },
        "required": [
          "path"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": true
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--read_text_file",
      "title": "Read Text File",
      "description": "Read the complete contents of a file from the file system as text. Handles various text encodings and provides detailed error messages if the file cannot be read. Use this tool when you need to examine the contents of a single file. Use the 'head' parameter to read only the first N lines of a file, or the 'tail' parameter to read only the last N lines of a file. Operates on the file as text regardless of extension. Only works within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          },
          "tail": {
            "type": "number",
            "description": "If provided, returns only the last N lines of the file"
          },
          "head": {
            "type": "number",
            "description": "If provided, returns only the first N lines of the file"
          }
        },
        "required": [
          "path"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": true
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--read_media_file",
      "title": "Read Media File",
      "description": "Read an image or audio file. Returns the base64 encoded data and MIME type. Only works within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          }
        },
        "required": [
          "path"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "image",
                    "audio",
                    "blob"
                  ]
                },
                "data": {
                  "type": "string"
                },
                "mimeType": {
                  "type": "string"
                }
              },
              "required": [
                "type",
                "data",
                "mimeType"
              ],
              "additionalProperties": false
            }
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": true
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--read_multiple_files",
      "title": "Read Multiple Files",
      "description": "Read the contents of multiple files simultaneously. This is more efficient than reading files one by one when you need to analyze or compare multiple files. Each file's content is returned with its path as a reference. Failed reads for individual files won't stop the entire operation. Only works within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "paths": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "minItems": 1,
            "description": "Array of file paths to read. Each path must be a string pointing to a valid file within allowed directories."
          }
        },
        "required": [
          "paths"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": true
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--write_file",
      "title": "Write File",
      "description": "Create a new file or completely overwrite an existing file with new content. Use with caution as it will overwrite existing files without warning. Handles text content with proper encoding. Only works within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          },
          "content": {
            "type": "string"
          }
        },
        "required": [
          "path",
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": false,
        "destructiveHint": true,
        "idempotentHint": true
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--edit_file",
      "title": "Edit File",
      "description": "Make line-based edits to a text file. Each edit replaces exact line sequences with new content. Returns a git-style diff showing the changes made. Only works within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          },
          "edits": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "oldText": {
                  "type": "string",
                  "description": "Text to search for - must match exactly"
                },
                "newText": {
                  "type": "string",
                  "description": "Text to replace with"
                }
              },
              "required": [
                "oldText",
                "newText"
              ],
              "additionalProperties": false
            }
          },
          "dryRun": {
            "type": "boolean",
            "default": false,
            "description": "Preview changes using git-style diff format"
          }
        },
        "required": [
          "path",
          "edits"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": false,
        "destructiveHint": true,
        "idempotentHint": false
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--create_directory",
      "title": "Create Directory",
      "description": "Create a new directory or ensure a directory exists. Can create multiple nested directories in one operation. If the directory already exists, this operation will succeed silently. Perfect for setting up directory structures for projects or ensuring required paths exist. Only works within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          }
        },
        "required": [
          "path"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": false,
        "destructiveHint": false,
        "idempotentHint": true
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--list_directory",
      "title": "List Directory",
      "description": "Get a detailed listing of all files and directories in a specified path. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is essential for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          }
        },
        "required": [
          "path"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": true
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--list_directory_with_sizes",
      "title": "List Directory with Sizes",
      "description": "Get a detailed listing of all files and directories in a specified path, including sizes. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is useful for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          },
          "sortBy": {
            "type": "string",
            "enum": [
              "name",
              "size"
            ],
            "default": "name",
            "description": "Sort entries by name or size"
          }
        },
        "required": [
          "path"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": true
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--directory_tree",
      "title": "Directory Tree",
      "description": "Get a recursive tree view of files and directories as a JSON structure. Each entry includes 'name', 'type' (file/directory), and 'children' for directories. Files have no children array, while directories always have a children array (which may be empty). The output is formatted with 2-space indentation for readability. Only works within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          },
          "excludePatterns": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "default": []
          }
        },
        "required": [
          "path"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": true
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--move_file",
      "title": "Move File",
      "description": "Move or rename files and directories. Can move files between directories and rename them in a single operation. If the destination exists, the operation will fail. Works across different directories and can be used for simple renaming within the same directory. Both source and destination must be within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "source": {
            "type": "string"
          },
          "destination": {
            "type": "string"
          }
        },
        "required": [
          "source",
          "destination"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": false,
        "destructiveHint": false,
        "idempotentHint": false
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--search_files",
      "title": "Search Files",
      "description": "Recursively search for files and directories matching a pattern. The patterns should be glob-style patterns that match paths relative to the working directory. Use pattern like '*.ext' to match files in current directory, and '**/*.ext' to match files in all subdirectories. Returns full paths to all matching items. Great for finding files when you don't know their exact location. Only searches within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          },
          "pattern": {
            "type": "string"
          },
          "excludePatterns": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "default": []
          }
        },
        "required": [
          "path",
          "pattern"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": true
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--get_file_info",
      "title": "Get File Info",
      "description": "Retrieve detailed metadata about a file or directory. Returns comprehensive information including size, creation time, last modified time, permissions, and type. This tool is perfect for understanding file characteristics without reading the actual content. Only works within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          }
        },
        "required": [
          "path"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": true
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    },
    {
      "name": "filesystem--list_allowed_directories",
      "title": "List Allowed Directories",
      "description": "Returns the list of directories that this server is allowed to access. Subdirectories within these allowed directories are also accessible. Use this to understand which directories and their nested paths are available before trying to access files.",
      "inputSchema": {
        "type": "object",
        "properties": {},
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "content": {
            "type": "string"
          }
        },
        "required": [
          "content"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      },
      "annotations": {
        "readOnlyHint": true
      },
      "execution": {
        "taskSupport": "forbidden"
      }
    }
  ]
}

```

## Author

isamu arimoto

## Repository

https://github.com/receptron/graphai-agents

## License

MIT

