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
  ":agentId.llmTools.$0.function",
  ":agentId.llmTools.$0.function.description",
  ":agentId.llmTools.$0.function.inputSchema",
  ":agentId.llmTools.$0.function.inputSchema.$schema",
  ":agentId.llmTools.$0.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$0.function.inputSchema.properties",
  ":agentId.llmTools.$0.function.inputSchema.properties.head",
  ":agentId.llmTools.$0.function.inputSchema.properties.head.description",
  ":agentId.llmTools.$0.function.inputSchema.properties.head.type",
  ":agentId.llmTools.$0.function.inputSchema.properties.path",
  ":agentId.llmTools.$0.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$0.function.inputSchema.properties.tail",
  ":agentId.llmTools.$0.function.inputSchema.properties.tail.description",
  ":agentId.llmTools.$0.function.inputSchema.properties.tail.type",
  ":agentId.llmTools.$0.function.inputSchema.required",
  ":agentId.llmTools.$0.function.inputSchema.required.$0",
  ":agentId.llmTools.$0.function.inputSchema.type",
  ":agentId.llmTools.$0.function.name",
  ":agentId.llmTools.$0.type",
  ":agentId.llmTools.$1",
  ":agentId.llmTools.$1.function",
  ":agentId.llmTools.$1.function.description",
  ":agentId.llmTools.$1.function.inputSchema",
  ":agentId.llmTools.$1.function.inputSchema.$schema",
  ":agentId.llmTools.$1.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$1.function.inputSchema.properties",
  ":agentId.llmTools.$1.function.inputSchema.properties.head",
  ":agentId.llmTools.$1.function.inputSchema.properties.head.description",
  ":agentId.llmTools.$1.function.inputSchema.properties.head.type",
  ":agentId.llmTools.$1.function.inputSchema.properties.path",
  ":agentId.llmTools.$1.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$1.function.inputSchema.properties.tail",
  ":agentId.llmTools.$1.function.inputSchema.properties.tail.description",
  ":agentId.llmTools.$1.function.inputSchema.properties.tail.type",
  ":agentId.llmTools.$1.function.inputSchema.required",
  ":agentId.llmTools.$1.function.inputSchema.required.$0",
  ":agentId.llmTools.$1.function.inputSchema.type",
  ":agentId.llmTools.$1.function.name",
  ":agentId.llmTools.$1.type",
  ":agentId.llmTools.$2",
  ":agentId.llmTools.$2.function",
  ":agentId.llmTools.$2.function.description",
  ":agentId.llmTools.$2.function.inputSchema",
  ":agentId.llmTools.$2.function.inputSchema.$schema",
  ":agentId.llmTools.$2.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$2.function.inputSchema.properties",
  ":agentId.llmTools.$2.function.inputSchema.properties.path",
  ":agentId.llmTools.$2.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$2.function.inputSchema.required",
  ":agentId.llmTools.$2.function.inputSchema.required.$0",
  ":agentId.llmTools.$2.function.inputSchema.type",
  ":agentId.llmTools.$2.function.name",
  ":agentId.llmTools.$2.type",
  ":agentId.llmTools.$3",
  ":agentId.llmTools.$3.function",
  ":agentId.llmTools.$3.function.description",
  ":agentId.llmTools.$3.function.inputSchema",
  ":agentId.llmTools.$3.function.inputSchema.$schema",
  ":agentId.llmTools.$3.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$3.function.inputSchema.properties",
  ":agentId.llmTools.$3.function.inputSchema.properties.paths",
  ":agentId.llmTools.$3.function.inputSchema.properties.paths.items",
  ":agentId.llmTools.$3.function.inputSchema.properties.paths.items.type",
  ":agentId.llmTools.$3.function.inputSchema.properties.paths.type",
  ":agentId.llmTools.$3.function.inputSchema.required",
  ":agentId.llmTools.$3.function.inputSchema.required.$0",
  ":agentId.llmTools.$3.function.inputSchema.type",
  ":agentId.llmTools.$3.function.name",
  ":agentId.llmTools.$3.type",
  ":agentId.llmTools.$4",
  ":agentId.llmTools.$4.function",
  ":agentId.llmTools.$4.function.description",
  ":agentId.llmTools.$4.function.inputSchema",
  ":agentId.llmTools.$4.function.inputSchema.$schema",
  ":agentId.llmTools.$4.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$4.function.inputSchema.properties",
  ":agentId.llmTools.$4.function.inputSchema.properties.content",
  ":agentId.llmTools.$4.function.inputSchema.properties.content.type",
  ":agentId.llmTools.$4.function.inputSchema.properties.path",
  ":agentId.llmTools.$4.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$4.function.inputSchema.required",
  ":agentId.llmTools.$4.function.inputSchema.required.$0",
  ":agentId.llmTools.$4.function.inputSchema.required.$1",
  ":agentId.llmTools.$4.function.inputSchema.type",
  ":agentId.llmTools.$4.function.name",
  ":agentId.llmTools.$4.type",
  ":agentId.llmTools.$5",
  ":agentId.llmTools.$5.function",
  ":agentId.llmTools.$5.function.description",
  ":agentId.llmTools.$5.function.inputSchema",
  ":agentId.llmTools.$5.function.inputSchema.$schema",
  ":agentId.llmTools.$5.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$5.function.inputSchema.properties",
  ":agentId.llmTools.$5.function.inputSchema.properties.dryRun",
  ":agentId.llmTools.$5.function.inputSchema.properties.dryRun.default",
  ":agentId.llmTools.$5.function.inputSchema.properties.dryRun.description",
  ":agentId.llmTools.$5.function.inputSchema.properties.dryRun.type",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.additionalProperties",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties.newText",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties.newText.description",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties.newText.type",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties.oldText",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties.oldText.description",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.properties.oldText.type",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.required",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.required.$0",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.required.$1",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.items.type",
  ":agentId.llmTools.$5.function.inputSchema.properties.edits.type",
  ":agentId.llmTools.$5.function.inputSchema.properties.path",
  ":agentId.llmTools.$5.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$5.function.inputSchema.required",
  ":agentId.llmTools.$5.function.inputSchema.required.$0",
  ":agentId.llmTools.$5.function.inputSchema.required.$1",
  ":agentId.llmTools.$5.function.inputSchema.type",
  ":agentId.llmTools.$5.function.name",
  ":agentId.llmTools.$5.type",
  ":agentId.llmTools.$6",
  ":agentId.llmTools.$6.function",
  ":agentId.llmTools.$6.function.description",
  ":agentId.llmTools.$6.function.inputSchema",
  ":agentId.llmTools.$6.function.inputSchema.$schema",
  ":agentId.llmTools.$6.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$6.function.inputSchema.properties",
  ":agentId.llmTools.$6.function.inputSchema.properties.path",
  ":agentId.llmTools.$6.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$6.function.inputSchema.required",
  ":agentId.llmTools.$6.function.inputSchema.required.$0",
  ":agentId.llmTools.$6.function.inputSchema.type",
  ":agentId.llmTools.$6.function.name",
  ":agentId.llmTools.$6.type",
  ":agentId.llmTools.$7",
  ":agentId.llmTools.$7.function",
  ":agentId.llmTools.$7.function.description",
  ":agentId.llmTools.$7.function.inputSchema",
  ":agentId.llmTools.$7.function.inputSchema.$schema",
  ":agentId.llmTools.$7.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$7.function.inputSchema.properties",
  ":agentId.llmTools.$7.function.inputSchema.properties.path",
  ":agentId.llmTools.$7.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$7.function.inputSchema.required",
  ":agentId.llmTools.$7.function.inputSchema.required.$0",
  ":agentId.llmTools.$7.function.inputSchema.type",
  ":agentId.llmTools.$7.function.name",
  ":agentId.llmTools.$7.type",
  ":agentId.llmTools.$8",
  ":agentId.llmTools.$8.function",
  ":agentId.llmTools.$8.function.description",
  ":agentId.llmTools.$8.function.inputSchema",
  ":agentId.llmTools.$8.function.inputSchema.$schema",
  ":agentId.llmTools.$8.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$8.function.inputSchema.properties",
  ":agentId.llmTools.$8.function.inputSchema.properties.path",
  ":agentId.llmTools.$8.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy.default",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy.description",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy.enum",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy.enum.$0",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy.enum.$1",
  ":agentId.llmTools.$8.function.inputSchema.properties.sortBy.type",
  ":agentId.llmTools.$8.function.inputSchema.required",
  ":agentId.llmTools.$8.function.inputSchema.required.$0",
  ":agentId.llmTools.$8.function.inputSchema.type",
  ":agentId.llmTools.$8.function.name",
  ":agentId.llmTools.$8.type",
  ":agentId.llmTools.$9",
  ":agentId.llmTools.$9.function",
  ":agentId.llmTools.$9.function.description",
  ":agentId.llmTools.$9.function.inputSchema",
  ":agentId.llmTools.$9.function.inputSchema.$schema",
  ":agentId.llmTools.$9.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$9.function.inputSchema.properties",
  ":agentId.llmTools.$9.function.inputSchema.properties.path",
  ":agentId.llmTools.$9.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$9.function.inputSchema.required",
  ":agentId.llmTools.$9.function.inputSchema.required.$0",
  ":agentId.llmTools.$9.function.inputSchema.type",
  ":agentId.llmTools.$9.function.name",
  ":agentId.llmTools.$9.type",
  ":agentId.llmTools.$10",
  ":agentId.llmTools.$10.function",
  ":agentId.llmTools.$10.function.description",
  ":agentId.llmTools.$10.function.inputSchema",
  ":agentId.llmTools.$10.function.inputSchema.$schema",
  ":agentId.llmTools.$10.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$10.function.inputSchema.properties",
  ":agentId.llmTools.$10.function.inputSchema.properties.destination",
  ":agentId.llmTools.$10.function.inputSchema.properties.destination.type",
  ":agentId.llmTools.$10.function.inputSchema.properties.source",
  ":agentId.llmTools.$10.function.inputSchema.properties.source.type",
  ":agentId.llmTools.$10.function.inputSchema.required",
  ":agentId.llmTools.$10.function.inputSchema.required.$0",
  ":agentId.llmTools.$10.function.inputSchema.required.$1",
  ":agentId.llmTools.$10.function.inputSchema.type",
  ":agentId.llmTools.$10.function.name",
  ":agentId.llmTools.$10.type",
  ":agentId.llmTools.$11",
  ":agentId.llmTools.$11.function",
  ":agentId.llmTools.$11.function.description",
  ":agentId.llmTools.$11.function.inputSchema",
  ":agentId.llmTools.$11.function.inputSchema.$schema",
  ":agentId.llmTools.$11.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$11.function.inputSchema.properties",
  ":agentId.llmTools.$11.function.inputSchema.properties.excludePatterns",
  ":agentId.llmTools.$11.function.inputSchema.properties.excludePatterns.default",
  ":agentId.llmTools.$11.function.inputSchema.properties.excludePatterns.items",
  ":agentId.llmTools.$11.function.inputSchema.properties.excludePatterns.items.type",
  ":agentId.llmTools.$11.function.inputSchema.properties.excludePatterns.type",
  ":agentId.llmTools.$11.function.inputSchema.properties.path",
  ":agentId.llmTools.$11.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$11.function.inputSchema.properties.pattern",
  ":agentId.llmTools.$11.function.inputSchema.properties.pattern.type",
  ":agentId.llmTools.$11.function.inputSchema.required",
  ":agentId.llmTools.$11.function.inputSchema.required.$0",
  ":agentId.llmTools.$11.function.inputSchema.required.$1",
  ":agentId.llmTools.$11.function.inputSchema.type",
  ":agentId.llmTools.$11.function.name",
  ":agentId.llmTools.$11.type",
  ":agentId.llmTools.$12",
  ":agentId.llmTools.$12.function",
  ":agentId.llmTools.$12.function.description",
  ":agentId.llmTools.$12.function.inputSchema",
  ":agentId.llmTools.$12.function.inputSchema.$schema",
  ":agentId.llmTools.$12.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$12.function.inputSchema.properties",
  ":agentId.llmTools.$12.function.inputSchema.properties.path",
  ":agentId.llmTools.$12.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$12.function.inputSchema.required",
  ":agentId.llmTools.$12.function.inputSchema.required.$0",
  ":agentId.llmTools.$12.function.inputSchema.type",
  ":agentId.llmTools.$12.function.name",
  ":agentId.llmTools.$12.type",
  ":agentId.llmTools.$13",
  ":agentId.llmTools.$13.function",
  ":agentId.llmTools.$13.function.description",
  ":agentId.llmTools.$13.function.inputSchema",
  ":agentId.llmTools.$13.function.inputSchema.properties",
  ":agentId.llmTools.$13.function.inputSchema.required",
  ":agentId.llmTools.$13.function.inputSchema.type",
  ":agentId.llmTools.$13.function.name",
  ":agentId.llmTools.$13.type",
  ":agentId.tools",
  ":agentId.tools.$0",
  ":agentId.tools.$0.description",
  ":agentId.tools.$0.inputSchema",
  ":agentId.tools.$0.inputSchema.$schema",
  ":agentId.tools.$0.inputSchema.additionalProperties",
  ":agentId.tools.$0.inputSchema.properties",
  ":agentId.tools.$0.inputSchema.properties.head",
  ":agentId.tools.$0.inputSchema.properties.head.description",
  ":agentId.tools.$0.inputSchema.properties.head.type",
  ":agentId.tools.$0.inputSchema.properties.path",
  ":agentId.tools.$0.inputSchema.properties.path.type",
  ":agentId.tools.$0.inputSchema.properties.tail",
  ":agentId.tools.$0.inputSchema.properties.tail.description",
  ":agentId.tools.$0.inputSchema.properties.tail.type",
  ":agentId.tools.$0.inputSchema.required",
  ":agentId.tools.$0.inputSchema.required.$0",
  ":agentId.tools.$0.inputSchema.type",
  ":agentId.tools.$0.name",
  ":agentId.tools.$1",
  ":agentId.tools.$1.description",
  ":agentId.tools.$1.inputSchema",
  ":agentId.tools.$1.inputSchema.$schema",
  ":agentId.tools.$1.inputSchema.additionalProperties",
  ":agentId.tools.$1.inputSchema.properties",
  ":agentId.tools.$1.inputSchema.properties.head",
  ":agentId.tools.$1.inputSchema.properties.head.description",
  ":agentId.tools.$1.inputSchema.properties.head.type",
  ":agentId.tools.$1.inputSchema.properties.path",
  ":agentId.tools.$1.inputSchema.properties.path.type",
  ":agentId.tools.$1.inputSchema.properties.tail",
  ":agentId.tools.$1.inputSchema.properties.tail.description",
  ":agentId.tools.$1.inputSchema.properties.tail.type",
  ":agentId.tools.$1.inputSchema.required",
  ":agentId.tools.$1.inputSchema.required.$0",
  ":agentId.tools.$1.inputSchema.type",
  ":agentId.tools.$1.name",
  ":agentId.tools.$2",
  ":agentId.tools.$2.description",
  ":agentId.tools.$2.inputSchema",
  ":agentId.tools.$2.inputSchema.$schema",
  ":agentId.tools.$2.inputSchema.additionalProperties",
  ":agentId.tools.$2.inputSchema.properties",
  ":agentId.tools.$2.inputSchema.properties.path",
  ":agentId.tools.$2.inputSchema.properties.path.type",
  ":agentId.tools.$2.inputSchema.required",
  ":agentId.tools.$2.inputSchema.required.$0",
  ":agentId.tools.$2.inputSchema.type",
  ":agentId.tools.$2.name",
  ":agentId.tools.$3",
  ":agentId.tools.$3.description",
  ":agentId.tools.$3.inputSchema",
  ":agentId.tools.$3.inputSchema.$schema",
  ":agentId.tools.$3.inputSchema.additionalProperties",
  ":agentId.tools.$3.inputSchema.properties",
  ":agentId.tools.$3.inputSchema.properties.paths",
  ":agentId.tools.$3.inputSchema.properties.paths.items",
  ":agentId.tools.$3.inputSchema.properties.paths.items.type",
  ":agentId.tools.$3.inputSchema.properties.paths.type",
  ":agentId.tools.$3.inputSchema.required",
  ":agentId.tools.$3.inputSchema.required.$0",
  ":agentId.tools.$3.inputSchema.type",
  ":agentId.tools.$3.name",
  ":agentId.tools.$4",
  ":agentId.tools.$4.description",
  ":agentId.tools.$4.inputSchema",
  ":agentId.tools.$4.inputSchema.$schema",
  ":agentId.tools.$4.inputSchema.additionalProperties",
  ":agentId.tools.$4.inputSchema.properties",
  ":agentId.tools.$4.inputSchema.properties.content",
  ":agentId.tools.$4.inputSchema.properties.content.type",
  ":agentId.tools.$4.inputSchema.properties.path",
  ":agentId.tools.$4.inputSchema.properties.path.type",
  ":agentId.tools.$4.inputSchema.required",
  ":agentId.tools.$4.inputSchema.required.$0",
  ":agentId.tools.$4.inputSchema.required.$1",
  ":agentId.tools.$4.inputSchema.type",
  ":agentId.tools.$4.name",
  ":agentId.tools.$5",
  ":agentId.tools.$5.description",
  ":agentId.tools.$5.inputSchema",
  ":agentId.tools.$5.inputSchema.$schema",
  ":agentId.tools.$5.inputSchema.additionalProperties",
  ":agentId.tools.$5.inputSchema.properties",
  ":agentId.tools.$5.inputSchema.properties.dryRun",
  ":agentId.tools.$5.inputSchema.properties.dryRun.default",
  ":agentId.tools.$5.inputSchema.properties.dryRun.description",
  ":agentId.tools.$5.inputSchema.properties.dryRun.type",
  ":agentId.tools.$5.inputSchema.properties.edits",
  ":agentId.tools.$5.inputSchema.properties.edits.items",
  ":agentId.tools.$5.inputSchema.properties.edits.items.additionalProperties",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties.newText",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties.newText.description",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties.newText.type",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties.oldText",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties.oldText.description",
  ":agentId.tools.$5.inputSchema.properties.edits.items.properties.oldText.type",
  ":agentId.tools.$5.inputSchema.properties.edits.items.required",
  ":agentId.tools.$5.inputSchema.properties.edits.items.required.$0",
  ":agentId.tools.$5.inputSchema.properties.edits.items.required.$1",
  ":agentId.tools.$5.inputSchema.properties.edits.items.type",
  ":agentId.tools.$5.inputSchema.properties.edits.type",
  ":agentId.tools.$5.inputSchema.properties.path",
  ":agentId.tools.$5.inputSchema.properties.path.type",
  ":agentId.tools.$5.inputSchema.required",
  ":agentId.tools.$5.inputSchema.required.$0",
  ":agentId.tools.$5.inputSchema.required.$1",
  ":agentId.tools.$5.inputSchema.type",
  ":agentId.tools.$5.name",
  ":agentId.tools.$6",
  ":agentId.tools.$6.description",
  ":agentId.tools.$6.inputSchema",
  ":agentId.tools.$6.inputSchema.$schema",
  ":agentId.tools.$6.inputSchema.additionalProperties",
  ":agentId.tools.$6.inputSchema.properties",
  ":agentId.tools.$6.inputSchema.properties.path",
  ":agentId.tools.$6.inputSchema.properties.path.type",
  ":agentId.tools.$6.inputSchema.required",
  ":agentId.tools.$6.inputSchema.required.$0",
  ":agentId.tools.$6.inputSchema.type",
  ":agentId.tools.$6.name",
  ":agentId.tools.$7",
  ":agentId.tools.$7.description",
  ":agentId.tools.$7.inputSchema",
  ":agentId.tools.$7.inputSchema.$schema",
  ":agentId.tools.$7.inputSchema.additionalProperties",
  ":agentId.tools.$7.inputSchema.properties",
  ":agentId.tools.$7.inputSchema.properties.path",
  ":agentId.tools.$7.inputSchema.properties.path.type",
  ":agentId.tools.$7.inputSchema.required",
  ":agentId.tools.$7.inputSchema.required.$0",
  ":agentId.tools.$7.inputSchema.type",
  ":agentId.tools.$7.name",
  ":agentId.tools.$8",
  ":agentId.tools.$8.description",
  ":agentId.tools.$8.inputSchema",
  ":agentId.tools.$8.inputSchema.$schema",
  ":agentId.tools.$8.inputSchema.additionalProperties",
  ":agentId.tools.$8.inputSchema.properties",
  ":agentId.tools.$8.inputSchema.properties.path",
  ":agentId.tools.$8.inputSchema.properties.path.type",
  ":agentId.tools.$8.inputSchema.properties.sortBy",
  ":agentId.tools.$8.inputSchema.properties.sortBy.default",
  ":agentId.tools.$8.inputSchema.properties.sortBy.description",
  ":agentId.tools.$8.inputSchema.properties.sortBy.enum",
  ":agentId.tools.$8.inputSchema.properties.sortBy.enum.$0",
  ":agentId.tools.$8.inputSchema.properties.sortBy.enum.$1",
  ":agentId.tools.$8.inputSchema.properties.sortBy.type",
  ":agentId.tools.$8.inputSchema.required",
  ":agentId.tools.$8.inputSchema.required.$0",
  ":agentId.tools.$8.inputSchema.type",
  ":agentId.tools.$8.name",
  ":agentId.tools.$9",
  ":agentId.tools.$9.description",
  ":agentId.tools.$9.inputSchema",
  ":agentId.tools.$9.inputSchema.$schema",
  ":agentId.tools.$9.inputSchema.additionalProperties",
  ":agentId.tools.$9.inputSchema.properties",
  ":agentId.tools.$9.inputSchema.properties.path",
  ":agentId.tools.$9.inputSchema.properties.path.type",
  ":agentId.tools.$9.inputSchema.required",
  ":agentId.tools.$9.inputSchema.required.$0",
  ":agentId.tools.$9.inputSchema.type",
  ":agentId.tools.$9.name",
  ":agentId.tools.$10",
  ":agentId.tools.$10.description",
  ":agentId.tools.$10.inputSchema",
  ":agentId.tools.$10.inputSchema.$schema",
  ":agentId.tools.$10.inputSchema.additionalProperties",
  ":agentId.tools.$10.inputSchema.properties",
  ":agentId.tools.$10.inputSchema.properties.destination",
  ":agentId.tools.$10.inputSchema.properties.destination.type",
  ":agentId.tools.$10.inputSchema.properties.source",
  ":agentId.tools.$10.inputSchema.properties.source.type",
  ":agentId.tools.$10.inputSchema.required",
  ":agentId.tools.$10.inputSchema.required.$0",
  ":agentId.tools.$10.inputSchema.required.$1",
  ":agentId.tools.$10.inputSchema.type",
  ":agentId.tools.$10.name",
  ":agentId.tools.$11",
  ":agentId.tools.$11.description",
  ":agentId.tools.$11.inputSchema",
  ":agentId.tools.$11.inputSchema.$schema",
  ":agentId.tools.$11.inputSchema.additionalProperties",
  ":agentId.tools.$11.inputSchema.properties",
  ":agentId.tools.$11.inputSchema.properties.excludePatterns",
  ":agentId.tools.$11.inputSchema.properties.excludePatterns.default",
  ":agentId.tools.$11.inputSchema.properties.excludePatterns.items",
  ":agentId.tools.$11.inputSchema.properties.excludePatterns.items.type",
  ":agentId.tools.$11.inputSchema.properties.excludePatterns.type",
  ":agentId.tools.$11.inputSchema.properties.path",
  ":agentId.tools.$11.inputSchema.properties.path.type",
  ":agentId.tools.$11.inputSchema.properties.pattern",
  ":agentId.tools.$11.inputSchema.properties.pattern.type",
  ":agentId.tools.$11.inputSchema.required",
  ":agentId.tools.$11.inputSchema.required.$0",
  ":agentId.tools.$11.inputSchema.required.$1",
  ":agentId.tools.$11.inputSchema.type",
  ":agentId.tools.$11.name",
  ":agentId.tools.$12",
  ":agentId.tools.$12.description",
  ":agentId.tools.$12.inputSchema",
  ":agentId.tools.$12.inputSchema.$schema",
  ":agentId.tools.$12.inputSchema.additionalProperties",
  ":agentId.tools.$12.inputSchema.properties",
  ":agentId.tools.$12.inputSchema.properties.path",
  ":agentId.tools.$12.inputSchema.properties.path.type",
  ":agentId.tools.$12.inputSchema.required",
  ":agentId.tools.$12.inputSchema.required.$0",
  ":agentId.tools.$12.inputSchema.type",
  ":agentId.tools.$12.name",
  ":agentId.tools.$13",
  ":agentId.tools.$13.description",
  ":agentId.tools.$13.inputSchema",
  ":agentId.tools.$13.inputSchema.properties",
  ":agentId.tools.$13.inputSchema.required",
  ":agentId.tools.$13.inputSchema.type",
  ":agentId.tools.$13.name"
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
      "function": {
        "description": "Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "head": {
              "description": "If provided, returns only the first N lines of the file",
              "type": "number"
            },
            "path": {
              "type": "string"
            },
            "tail": {
              "description": "If provided, returns only the last N lines of the file",
              "type": "number"
            }
          },
          "required": [
            "path"
          ],
          "type": "object"
        },
        "name": "filesystem--read_file"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Read the complete contents of a file from the file system as text. Handles various text encodings and provides detailed error messages if the file cannot be read. Use this tool when you need to examine the contents of a single file. Use the 'head' parameter to read only the first N lines of a file, or the 'tail' parameter to read only the last N lines of a file. Operates on the file as text regardless of extension. Only works within allowed directories.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "head": {
              "description": "If provided, returns only the first N lines of the file",
              "type": "number"
            },
            "path": {
              "type": "string"
            },
            "tail": {
              "description": "If provided, returns only the last N lines of the file",
              "type": "number"
            }
          },
          "required": [
            "path"
          ],
          "type": "object"
        },
        "name": "filesystem--read_text_file"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Read an image or audio file. Returns the base64 encoded data and MIME type. Only works within allowed directories.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "path": {
              "type": "string"
            }
          },
          "required": [
            "path"
          ],
          "type": "object"
        },
        "name": "filesystem--read_media_file"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Read the contents of multiple files simultaneously. This is more efficient than reading files one by one when you need to analyze or compare multiple files. Each file's content is returned with its path as a reference. Failed reads for individual files won't stop the entire operation. Only works within allowed directories.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "paths": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          "required": [
            "paths"
          ],
          "type": "object"
        },
        "name": "filesystem--read_multiple_files"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Create a new file or completely overwrite an existing file with new content. Use with caution as it will overwrite existing files without warning. Handles text content with proper encoding. Only works within allowed directories.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "content": {
              "type": "string"
            },
            "path": {
              "type": "string"
            }
          },
          "required": [
            "path",
            "content"
          ],
          "type": "object"
        },
        "name": "filesystem--write_file"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Make line-based edits to a text file. Each edit replaces exact line sequences with new content. Returns a git-style diff showing the changes made. Only works within allowed directories.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "dryRun": {
              "default": false,
              "description": "Preview changes using git-style diff format",
              "type": "boolean"
            },
            "edits": {
              "items": {
                "additionalProperties": false,
                "properties": {
                  "newText": {
                    "description": "Text to replace with",
                    "type": "string"
                  },
                  "oldText": {
                    "description": "Text to search for - must match exactly",
                    "type": "string"
                  }
                },
                "required": [
                  "oldText",
                  "newText"
                ],
                "type": "object"
              },
              "type": "array"
            },
            "path": {
              "type": "string"
            }
          },
          "required": [
            "path",
            "edits"
          ],
          "type": "object"
        },
        "name": "filesystem--edit_file"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Create a new directory or ensure a directory exists. Can create multiple nested directories in one operation. If the directory already exists, this operation will succeed silently. Perfect for setting up directory structures for projects or ensuring required paths exist. Only works within allowed directories.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "path": {
              "type": "string"
            }
          },
          "required": [
            "path"
          ],
          "type": "object"
        },
        "name": "filesystem--create_directory"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Get a detailed listing of all files and directories in a specified path. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is essential for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "path": {
              "type": "string"
            }
          },
          "required": [
            "path"
          ],
          "type": "object"
        },
        "name": "filesystem--list_directory"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Get a detailed listing of all files and directories in a specified path, including sizes. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is useful for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "path": {
              "type": "string"
            },
            "sortBy": {
              "default": "name",
              "description": "Sort entries by name or size",
              "enum": [
                "name",
                "size"
              ],
              "type": "string"
            }
          },
          "required": [
            "path"
          ],
          "type": "object"
        },
        "name": "filesystem--list_directory_with_sizes"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Get a recursive tree view of files and directories as a JSON structure. Each entry includes 'name', 'type' (file/directory), and 'children' for directories. Files have no children array, while directories always have a children array (which may be empty). The output is formatted with 2-space indentation for readability. Only works within allowed directories.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "path": {
              "type": "string"
            }
          },
          "required": [
            "path"
          ],
          "type": "object"
        },
        "name": "filesystem--directory_tree"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Move or rename files and directories. Can move files between directories and rename them in a single operation. If the destination exists, the operation will fail. Works across different directories and can be used for simple renaming within the same directory. Both source and destination must be within allowed directories.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "destination": {
              "type": "string"
            },
            "source": {
              "type": "string"
            }
          },
          "required": [
            "source",
            "destination"
          ],
          "type": "object"
        },
        "name": "filesystem--move_file"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Recursively search for files and directories matching a pattern. Searches through all subdirectories from the starting path. The search is case-insensitive and matches partial names. Returns full paths to all matching items. Great for finding files when you don't know their exact location. Only searches within allowed directories.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "excludePatterns": {
              "default": [],
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            "path": {
              "type": "string"
            },
            "pattern": {
              "type": "string"
            }
          },
          "required": [
            "path",
            "pattern"
          ],
          "type": "object"
        },
        "name": "filesystem--search_files"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Retrieve detailed metadata about a file or directory. Returns comprehensive information including size, creation time, last modified time, permissions, and type. This tool is perfect for understanding file characteristics without reading the actual content. Only works within allowed directories.",
        "inputSchema": {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "additionalProperties": false,
          "properties": {
            "path": {
              "type": "string"
            }
          },
          "required": [
            "path"
          ],
          "type": "object"
        },
        "name": "filesystem--get_file_info"
      },
      "type": "function"
    },
    {
      "function": {
        "description": "Returns the list of directories that this server is allowed to access. Subdirectories within these allowed directories are also accessible. Use this to understand which directories and their nested paths are available before trying to access files.",
        "inputSchema": {
          "properties": {},
          "required": [],
          "type": "object"
        },
        "name": "filesystem--list_allowed_directories"
      },
      "type": "function"
    }
  ],
  "tools": [
    {
      "description": "Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "head": {
            "description": "If provided, returns only the first N lines of the file",
            "type": "number"
          },
          "path": {
            "type": "string"
          },
          "tail": {
            "description": "If provided, returns only the last N lines of the file",
            "type": "number"
          }
        },
        "required": [
          "path"
        ],
        "type": "object"
      },
      "name": "filesystem--read_file"
    },
    {
      "description": "Read the complete contents of a file from the file system as text. Handles various text encodings and provides detailed error messages if the file cannot be read. Use this tool when you need to examine the contents of a single file. Use the 'head' parameter to read only the first N lines of a file, or the 'tail' parameter to read only the last N lines of a file. Operates on the file as text regardless of extension. Only works within allowed directories.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "head": {
            "description": "If provided, returns only the first N lines of the file",
            "type": "number"
          },
          "path": {
            "type": "string"
          },
          "tail": {
            "description": "If provided, returns only the last N lines of the file",
            "type": "number"
          }
        },
        "required": [
          "path"
        ],
        "type": "object"
      },
      "name": "filesystem--read_text_file"
    },
    {
      "description": "Read an image or audio file. Returns the base64 encoded data and MIME type. Only works within allowed directories.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "path": {
            "type": "string"
          }
        },
        "required": [
          "path"
        ],
        "type": "object"
      },
      "name": "filesystem--read_media_file"
    },
    {
      "description": "Read the contents of multiple files simultaneously. This is more efficient than reading files one by one when you need to analyze or compare multiple files. Each file's content is returned with its path as a reference. Failed reads for individual files won't stop the entire operation. Only works within allowed directories.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "paths": {
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "paths"
        ],
        "type": "object"
      },
      "name": "filesystem--read_multiple_files"
    },
    {
      "description": "Create a new file or completely overwrite an existing file with new content. Use with caution as it will overwrite existing files without warning. Handles text content with proper encoding. Only works within allowed directories.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "content": {
            "type": "string"
          },
          "path": {
            "type": "string"
          }
        },
        "required": [
          "path",
          "content"
        ],
        "type": "object"
      },
      "name": "filesystem--write_file"
    },
    {
      "description": "Make line-based edits to a text file. Each edit replaces exact line sequences with new content. Returns a git-style diff showing the changes made. Only works within allowed directories.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "dryRun": {
            "default": false,
            "description": "Preview changes using git-style diff format",
            "type": "boolean"
          },
          "edits": {
            "items": {
              "additionalProperties": false,
              "properties": {
                "newText": {
                  "description": "Text to replace with",
                  "type": "string"
                },
                "oldText": {
                  "description": "Text to search for - must match exactly",
                  "type": "string"
                }
              },
              "required": [
                "oldText",
                "newText"
              ],
              "type": "object"
            },
            "type": "array"
          },
          "path": {
            "type": "string"
          }
        },
        "required": [
          "path",
          "edits"
        ],
        "type": "object"
      },
      "name": "filesystem--edit_file"
    },
    {
      "description": "Create a new directory or ensure a directory exists. Can create multiple nested directories in one operation. If the directory already exists, this operation will succeed silently. Perfect for setting up directory structures for projects or ensuring required paths exist. Only works within allowed directories.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "path": {
            "type": "string"
          }
        },
        "required": [
          "path"
        ],
        "type": "object"
      },
      "name": "filesystem--create_directory"
    },
    {
      "description": "Get a detailed listing of all files and directories in a specified path. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is essential for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "path": {
            "type": "string"
          }
        },
        "required": [
          "path"
        ],
        "type": "object"
      },
      "name": "filesystem--list_directory"
    },
    {
      "description": "Get a detailed listing of all files and directories in a specified path, including sizes. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is useful for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "path": {
            "type": "string"
          },
          "sortBy": {
            "default": "name",
            "description": "Sort entries by name or size",
            "enum": [
              "name",
              "size"
            ],
            "type": "string"
          }
        },
        "required": [
          "path"
        ],
        "type": "object"
      },
      "name": "filesystem--list_directory_with_sizes"
    },
    {
      "description": "Get a recursive tree view of files and directories as a JSON structure. Each entry includes 'name', 'type' (file/directory), and 'children' for directories. Files have no children array, while directories always have a children array (which may be empty). The output is formatted with 2-space indentation for readability. Only works within allowed directories.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "path": {
            "type": "string"
          }
        },
        "required": [
          "path"
        ],
        "type": "object"
      },
      "name": "filesystem--directory_tree"
    },
    {
      "description": "Move or rename files and directories. Can move files between directories and rename them in a single operation. If the destination exists, the operation will fail. Works across different directories and can be used for simple renaming within the same directory. Both source and destination must be within allowed directories.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "destination": {
            "type": "string"
          },
          "source": {
            "type": "string"
          }
        },
        "required": [
          "source",
          "destination"
        ],
        "type": "object"
      },
      "name": "filesystem--move_file"
    },
    {
      "description": "Recursively search for files and directories matching a pattern. Searches through all subdirectories from the starting path. The search is case-insensitive and matches partial names. Returns full paths to all matching items. Great for finding files when you don't know their exact location. Only searches within allowed directories.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "excludePatterns": {
            "default": [],
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "path": {
            "type": "string"
          },
          "pattern": {
            "type": "string"
          }
        },
        "required": [
          "path",
          "pattern"
        ],
        "type": "object"
      },
      "name": "filesystem--search_files"
    },
    {
      "description": "Retrieve detailed metadata about a file or directory. Returns comprehensive information including size, creation time, last modified time, permissions, and type. This tool is perfect for understanding file characteristics without reading the actual content. Only works within allowed directories.",
      "inputSchema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "additionalProperties": false,
        "properties": {
          "path": {
            "type": "string"
          }
        },
        "required": [
          "path"
        ],
        "type": "object"
      },
      "name": "filesystem--get_file_info"
    },
    {
      "description": "Returns the list of directories that this server is allowed to access. Subdirectories within these allowed directories are also accessible. Use this to understand which directories and their nested paths are available before trying to access files.",
      "inputSchema": {
        "properties": {},
        "required": [],
        "type": "object"
      },
      "name": "filesystem--list_allowed_directories"
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

