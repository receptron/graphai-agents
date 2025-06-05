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
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "",
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
  ":agentId.llmTools.$0.function.description",
  ":agentId.llmTools.$0.function.inputSchema",
  ":agentId.llmTools.$0.function.inputSchema.type",
  ":agentId.llmTools.$0.function.inputSchema.properties",
  ":agentId.llmTools.$0.function.inputSchema.properties.path",
  ":agentId.llmTools.$0.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$0.function.inputSchema.required",
  ":agentId.llmTools.$0.function.inputSchema.required.$0",
  ":agentId.llmTools.$0.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$0.function.inputSchema.$schema",
  ":agentId.llmTools.$1",
  ":agentId.llmTools.$1.type",
  ":agentId.llmTools.$1.function",
  ":agentId.llmTools.$1.function.name",
  ":agentId.llmTools.$1.function.description",
  ":agentId.llmTools.$1.function.inputSchema",
  ":agentId.llmTools.$1.function.inputSchema.type",
  ":agentId.llmTools.$1.function.inputSchema.properties",
  ":agentId.llmTools.$1.function.inputSchema.properties.paths",
  ":agentId.llmTools.$1.function.inputSchema.properties.paths.type",
  ":agentId.llmTools.$1.function.inputSchema.properties.paths.items",
  ":agentId.llmTools.$1.function.inputSchema.properties.paths.items.type",
  ":agentId.llmTools.$1.function.inputSchema.required",
  ":agentId.llmTools.$1.function.inputSchema.required.$0",
  ":agentId.llmTools.$1.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$1.function.inputSchema.$schema",
  ":agentId.llmTools.$2",
  ":agentId.llmTools.$2.type",
  ":agentId.llmTools.$2.function",
  ":agentId.llmTools.$2.function.name",
  ":agentId.llmTools.$2.function.description",
  ":agentId.llmTools.$2.function.inputSchema",
  ":agentId.llmTools.$2.function.inputSchema.type",
  ":agentId.llmTools.$2.function.inputSchema.properties",
  ":agentId.llmTools.$2.function.inputSchema.properties.path",
  ":agentId.llmTools.$2.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$2.function.inputSchema.properties.content",
  ":agentId.llmTools.$2.function.inputSchema.properties.content.type",
  ":agentId.llmTools.$2.function.inputSchema.required",
  ":agentId.llmTools.$2.function.inputSchema.required.$0",
  ":agentId.llmTools.$2.function.inputSchema.required.$1",
  ":agentId.llmTools.$2.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$2.function.inputSchema.$schema",
  ":agentId.llmTools.$3",
  ":agentId.llmTools.$3.type",
  ":agentId.llmTools.$3.function",
  ":agentId.llmTools.$3.function.name",
  ":agentId.llmTools.$3.function.description",
  ":agentId.llmTools.$3.function.inputSchema",
  ":agentId.llmTools.$3.function.inputSchema.type",
  ":agentId.llmTools.$3.function.inputSchema.properties",
  ":agentId.llmTools.$3.function.inputSchema.properties.path",
  ":agentId.llmTools.$3.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.type",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items.type",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items.properties",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items.properties.oldText",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items.properties.oldText.type",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items.properties.oldText.description",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items.properties.newText",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items.properties.newText.type",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items.properties.newText.description",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items.required",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items.required.$0",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items.required.$1",
  ":agentId.llmTools.$3.function.inputSchema.properties.edits.items.additionalProperties",
  ":agentId.llmTools.$3.function.inputSchema.properties.dryRun",
  ":agentId.llmTools.$3.function.inputSchema.properties.dryRun.type",
  ":agentId.llmTools.$3.function.inputSchema.properties.dryRun.default",
  ":agentId.llmTools.$3.function.inputSchema.properties.dryRun.description",
  ":agentId.llmTools.$3.function.inputSchema.required",
  ":agentId.llmTools.$3.function.inputSchema.required.$0",
  ":agentId.llmTools.$3.function.inputSchema.required.$1",
  ":agentId.llmTools.$3.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$3.function.inputSchema.$schema",
  ":agentId.llmTools.$4",
  ":agentId.llmTools.$4.type",
  ":agentId.llmTools.$4.function",
  ":agentId.llmTools.$4.function.name",
  ":agentId.llmTools.$4.function.description",
  ":agentId.llmTools.$4.function.inputSchema",
  ":agentId.llmTools.$4.function.inputSchema.type",
  ":agentId.llmTools.$4.function.inputSchema.properties",
  ":agentId.llmTools.$4.function.inputSchema.properties.path",
  ":agentId.llmTools.$4.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$4.function.inputSchema.required",
  ":agentId.llmTools.$4.function.inputSchema.required.$0",
  ":agentId.llmTools.$4.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$4.function.inputSchema.$schema",
  ":agentId.llmTools.$5",
  ":agentId.llmTools.$5.type",
  ":agentId.llmTools.$5.function",
  ":agentId.llmTools.$5.function.name",
  ":agentId.llmTools.$5.function.description",
  ":agentId.llmTools.$5.function.inputSchema",
  ":agentId.llmTools.$5.function.inputSchema.type",
  ":agentId.llmTools.$5.function.inputSchema.properties",
  ":agentId.llmTools.$5.function.inputSchema.properties.path",
  ":agentId.llmTools.$5.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$5.function.inputSchema.required",
  ":agentId.llmTools.$5.function.inputSchema.required.$0",
  ":agentId.llmTools.$5.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$5.function.inputSchema.$schema",
  ":agentId.llmTools.$6",
  ":agentId.llmTools.$6.type",
  ":agentId.llmTools.$6.function",
  ":agentId.llmTools.$6.function.name",
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
  ":agentId.llmTools.$7",
  ":agentId.llmTools.$7.type",
  ":agentId.llmTools.$7.function",
  ":agentId.llmTools.$7.function.name",
  ":agentId.llmTools.$7.function.description",
  ":agentId.llmTools.$7.function.inputSchema",
  ":agentId.llmTools.$7.function.inputSchema.type",
  ":agentId.llmTools.$7.function.inputSchema.properties",
  ":agentId.llmTools.$7.function.inputSchema.properties.source",
  ":agentId.llmTools.$7.function.inputSchema.properties.source.type",
  ":agentId.llmTools.$7.function.inputSchema.properties.destination",
  ":agentId.llmTools.$7.function.inputSchema.properties.destination.type",
  ":agentId.llmTools.$7.function.inputSchema.required",
  ":agentId.llmTools.$7.function.inputSchema.required.$0",
  ":agentId.llmTools.$7.function.inputSchema.required.$1",
  ":agentId.llmTools.$7.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$7.function.inputSchema.$schema",
  ":agentId.llmTools.$8",
  ":agentId.llmTools.$8.type",
  ":agentId.llmTools.$8.function",
  ":agentId.llmTools.$8.function.name",
  ":agentId.llmTools.$8.function.description",
  ":agentId.llmTools.$8.function.inputSchema",
  ":agentId.llmTools.$8.function.inputSchema.type",
  ":agentId.llmTools.$8.function.inputSchema.properties",
  ":agentId.llmTools.$8.function.inputSchema.properties.path",
  ":agentId.llmTools.$8.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$8.function.inputSchema.properties.pattern",
  ":agentId.llmTools.$8.function.inputSchema.properties.pattern.type",
  ":agentId.llmTools.$8.function.inputSchema.properties.excludePatterns",
  ":agentId.llmTools.$8.function.inputSchema.properties.excludePatterns.type",
  ":agentId.llmTools.$8.function.inputSchema.properties.excludePatterns.items",
  ":agentId.llmTools.$8.function.inputSchema.properties.excludePatterns.items.type",
  ":agentId.llmTools.$8.function.inputSchema.properties.excludePatterns.default",
  ":agentId.llmTools.$8.function.inputSchema.required",
  ":agentId.llmTools.$8.function.inputSchema.required.$0",
  ":agentId.llmTools.$8.function.inputSchema.required.$1",
  ":agentId.llmTools.$8.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$8.function.inputSchema.$schema",
  ":agentId.llmTools.$9",
  ":agentId.llmTools.$9.type",
  ":agentId.llmTools.$9.function",
  ":agentId.llmTools.$9.function.name",
  ":agentId.llmTools.$9.function.description",
  ":agentId.llmTools.$9.function.inputSchema",
  ":agentId.llmTools.$9.function.inputSchema.type",
  ":agentId.llmTools.$9.function.inputSchema.properties",
  ":agentId.llmTools.$9.function.inputSchema.properties.path",
  ":agentId.llmTools.$9.function.inputSchema.properties.path.type",
  ":agentId.llmTools.$9.function.inputSchema.required",
  ":agentId.llmTools.$9.function.inputSchema.required.$0",
  ":agentId.llmTools.$9.function.inputSchema.additionalProperties",
  ":agentId.llmTools.$9.function.inputSchema.$schema",
  ":agentId.llmTools.$10",
  ":agentId.llmTools.$10.type",
  ":agentId.llmTools.$10.function",
  ":agentId.llmTools.$10.function.name",
  ":agentId.llmTools.$10.function.description",
  ":agentId.llmTools.$10.function.inputSchema",
  ":agentId.llmTools.$10.function.inputSchema.type",
  ":agentId.llmTools.$10.function.inputSchema.properties",
  ":agentId.llmTools.$10.function.inputSchema.required",
  ":agentId.tools",
  ":agentId.tools.$0",
  ":agentId.tools.$0.name",
  ":agentId.tools.$0.description",
  ":agentId.tools.$0.inputSchema",
  ":agentId.tools.$0.inputSchema.type",
  ":agentId.tools.$0.inputSchema.properties",
  ":agentId.tools.$0.inputSchema.properties.path",
  ":agentId.tools.$0.inputSchema.properties.path.type",
  ":agentId.tools.$0.inputSchema.required",
  ":agentId.tools.$0.inputSchema.required.$0",
  ":agentId.tools.$0.inputSchema.additionalProperties",
  ":agentId.tools.$0.inputSchema.$schema",
  ":agentId.tools.$1",
  ":agentId.tools.$1.name",
  ":agentId.tools.$1.description",
  ":agentId.tools.$1.inputSchema",
  ":agentId.tools.$1.inputSchema.type",
  ":agentId.tools.$1.inputSchema.properties",
  ":agentId.tools.$1.inputSchema.properties.paths",
  ":agentId.tools.$1.inputSchema.properties.paths.type",
  ":agentId.tools.$1.inputSchema.properties.paths.items",
  ":agentId.tools.$1.inputSchema.properties.paths.items.type",
  ":agentId.tools.$1.inputSchema.required",
  ":agentId.tools.$1.inputSchema.required.$0",
  ":agentId.tools.$1.inputSchema.additionalProperties",
  ":agentId.tools.$1.inputSchema.$schema",
  ":agentId.tools.$2",
  ":agentId.tools.$2.name",
  ":agentId.tools.$2.description",
  ":agentId.tools.$2.inputSchema",
  ":agentId.tools.$2.inputSchema.type",
  ":agentId.tools.$2.inputSchema.properties",
  ":agentId.tools.$2.inputSchema.properties.path",
  ":agentId.tools.$2.inputSchema.properties.path.type",
  ":agentId.tools.$2.inputSchema.properties.content",
  ":agentId.tools.$2.inputSchema.properties.content.type",
  ":agentId.tools.$2.inputSchema.required",
  ":agentId.tools.$2.inputSchema.required.$0",
  ":agentId.tools.$2.inputSchema.required.$1",
  ":agentId.tools.$2.inputSchema.additionalProperties",
  ":agentId.tools.$2.inputSchema.$schema",
  ":agentId.tools.$3",
  ":agentId.tools.$3.name",
  ":agentId.tools.$3.description",
  ":agentId.tools.$3.inputSchema",
  ":agentId.tools.$3.inputSchema.type",
  ":agentId.tools.$3.inputSchema.properties",
  ":agentId.tools.$3.inputSchema.properties.path",
  ":agentId.tools.$3.inputSchema.properties.path.type",
  ":agentId.tools.$3.inputSchema.properties.edits",
  ":agentId.tools.$3.inputSchema.properties.edits.type",
  ":agentId.tools.$3.inputSchema.properties.edits.items",
  ":agentId.tools.$3.inputSchema.properties.edits.items.type",
  ":agentId.tools.$3.inputSchema.properties.edits.items.properties",
  ":agentId.tools.$3.inputSchema.properties.edits.items.properties.oldText",
  ":agentId.tools.$3.inputSchema.properties.edits.items.properties.oldText.type",
  ":agentId.tools.$3.inputSchema.properties.edits.items.properties.oldText.description",
  ":agentId.tools.$3.inputSchema.properties.edits.items.properties.newText",
  ":agentId.tools.$3.inputSchema.properties.edits.items.properties.newText.type",
  ":agentId.tools.$3.inputSchema.properties.edits.items.properties.newText.description",
  ":agentId.tools.$3.inputSchema.properties.edits.items.required",
  ":agentId.tools.$3.inputSchema.properties.edits.items.required.$0",
  ":agentId.tools.$3.inputSchema.properties.edits.items.required.$1",
  ":agentId.tools.$3.inputSchema.properties.edits.items.additionalProperties",
  ":agentId.tools.$3.inputSchema.properties.dryRun",
  ":agentId.tools.$3.inputSchema.properties.dryRun.type",
  ":agentId.tools.$3.inputSchema.properties.dryRun.default",
  ":agentId.tools.$3.inputSchema.properties.dryRun.description",
  ":agentId.tools.$3.inputSchema.required",
  ":agentId.tools.$3.inputSchema.required.$0",
  ":agentId.tools.$3.inputSchema.required.$1",
  ":agentId.tools.$3.inputSchema.additionalProperties",
  ":agentId.tools.$3.inputSchema.$schema",
  ":agentId.tools.$4",
  ":agentId.tools.$4.name",
  ":agentId.tools.$4.description",
  ":agentId.tools.$4.inputSchema",
  ":agentId.tools.$4.inputSchema.type",
  ":agentId.tools.$4.inputSchema.properties",
  ":agentId.tools.$4.inputSchema.properties.path",
  ":agentId.tools.$4.inputSchema.properties.path.type",
  ":agentId.tools.$4.inputSchema.required",
  ":agentId.tools.$4.inputSchema.required.$0",
  ":agentId.tools.$4.inputSchema.additionalProperties",
  ":agentId.tools.$4.inputSchema.$schema",
  ":agentId.tools.$5",
  ":agentId.tools.$5.name",
  ":agentId.tools.$5.description",
  ":agentId.tools.$5.inputSchema",
  ":agentId.tools.$5.inputSchema.type",
  ":agentId.tools.$5.inputSchema.properties",
  ":agentId.tools.$5.inputSchema.properties.path",
  ":agentId.tools.$5.inputSchema.properties.path.type",
  ":agentId.tools.$5.inputSchema.required",
  ":agentId.tools.$5.inputSchema.required.$0",
  ":agentId.tools.$5.inputSchema.additionalProperties",
  ":agentId.tools.$5.inputSchema.$schema",
  ":agentId.tools.$6",
  ":agentId.tools.$6.name",
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
  ":agentId.tools.$7",
  ":agentId.tools.$7.name",
  ":agentId.tools.$7.description",
  ":agentId.tools.$7.inputSchema",
  ":agentId.tools.$7.inputSchema.type",
  ":agentId.tools.$7.inputSchema.properties",
  ":agentId.tools.$7.inputSchema.properties.source",
  ":agentId.tools.$7.inputSchema.properties.source.type",
  ":agentId.tools.$7.inputSchema.properties.destination",
  ":agentId.tools.$7.inputSchema.properties.destination.type",
  ":agentId.tools.$7.inputSchema.required",
  ":agentId.tools.$7.inputSchema.required.$0",
  ":agentId.tools.$7.inputSchema.required.$1",
  ":agentId.tools.$7.inputSchema.additionalProperties",
  ":agentId.tools.$7.inputSchema.$schema",
  ":agentId.tools.$8",
  ":agentId.tools.$8.name",
  ":agentId.tools.$8.description",
  ":agentId.tools.$8.inputSchema",
  ":agentId.tools.$8.inputSchema.type",
  ":agentId.tools.$8.inputSchema.properties",
  ":agentId.tools.$8.inputSchema.properties.path",
  ":agentId.tools.$8.inputSchema.properties.path.type",
  ":agentId.tools.$8.inputSchema.properties.pattern",
  ":agentId.tools.$8.inputSchema.properties.pattern.type",
  ":agentId.tools.$8.inputSchema.properties.excludePatterns",
  ":agentId.tools.$8.inputSchema.properties.excludePatterns.type",
  ":agentId.tools.$8.inputSchema.properties.excludePatterns.items",
  ":agentId.tools.$8.inputSchema.properties.excludePatterns.items.type",
  ":agentId.tools.$8.inputSchema.properties.excludePatterns.default",
  ":agentId.tools.$8.inputSchema.required",
  ":agentId.tools.$8.inputSchema.required.$0",
  ":agentId.tools.$8.inputSchema.required.$1",
  ":agentId.tools.$8.inputSchema.additionalProperties",
  ":agentId.tools.$8.inputSchema.$schema",
  ":agentId.tools.$9",
  ":agentId.tools.$9.name",
  ":agentId.tools.$9.description",
  ":agentId.tools.$9.inputSchema",
  ":agentId.tools.$9.inputSchema.type",
  ":agentId.tools.$9.inputSchema.properties",
  ":agentId.tools.$9.inputSchema.properties.path",
  ":agentId.tools.$9.inputSchema.properties.path.type",
  ":agentId.tools.$9.inputSchema.required",
  ":agentId.tools.$9.inputSchema.required.$0",
  ":agentId.tools.$9.inputSchema.additionalProperties",
  ":agentId.tools.$9.inputSchema.$schema",
  ":agentId.tools.$10",
  ":agentId.tools.$10.name",
  ":agentId.tools.$10.description",
  ":agentId.tools.$10.inputSchema",
  ":agentId.tools.$10.inputSchema.type",
  ":agentId.tools.$10.inputSchema.properties",
  ":agentId.tools.$10.inputSchema.required"
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
        "description": "Read the complete contents of a file from the file system. Handles various text encodings and provides detailed error messages if the file cannot be read. Use this tool when you need to examine the contents of a single file. Only works within allowed directories.",
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
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--read_multiple_files",
        "description": "Read the contents of multiple files simultaneously. This is more efficient than reading files one by one when you need to analyze or compare multiple files. Each file's content is returned with its path as a reference. Failed reads for individual files won't stop the entire operation. Only works within allowed directories.",
        "inputSchema": {
          "type": "object",
          "properties": {
            "paths": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "paths"
          ],
          "additionalProperties": false,
          "$schema": "http://json-schema.org/draft-07/schema#"
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--write_file",
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
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--edit_file",
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
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--create_directory",
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
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--list_directory",
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
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--directory_tree",
        "description": "Get a recursive tree view of files and directories as a JSON structure. Each entry includes 'name', 'type' (file/directory), and 'children' for directories. Files have no children array, while directories always have a children array (which may be empty). The output is formatted with 2-space indentation for readability. Only works within allowed directories.",
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
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--move_file",
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
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--search_files",
        "description": "Recursively search for files and directories matching a pattern. Searches through all subdirectories from the starting path. The search is case-insensitive and matches partial names. Returns full paths to all matching items. Great for finding files when you don't know their exact location. Only searches within allowed directories.",
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
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--get_file_info",
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
        }
      }
    },
    {
      "type": "function",
      "function": {
        "name": "filesystem--list_allowed_directories",
        "description": "Returns the list of directories that this server is allowed to access. Use this to understand which directories are available before trying to access files.",
        "inputSchema": {
          "type": "object",
          "properties": {},
          "required": []
        }
      }
    }
  ],
  "tools": [
    {
      "name": "filesystem--read_file",
      "description": "Read the complete contents of a file from the file system. Handles various text encodings and provides detailed error messages if the file cannot be read. Use this tool when you need to examine the contents of a single file. Only works within allowed directories.",
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
      }
    },
    {
      "name": "filesystem--read_multiple_files",
      "description": "Read the contents of multiple files simultaneously. This is more efficient than reading files one by one when you need to analyze or compare multiple files. Each file's content is returned with its path as a reference. Failed reads for individual files won't stop the entire operation. Only works within allowed directories.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "paths": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "paths"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      }
    },
    {
      "name": "filesystem--write_file",
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
      }
    },
    {
      "name": "filesystem--edit_file",
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
      }
    },
    {
      "name": "filesystem--create_directory",
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
      }
    },
    {
      "name": "filesystem--list_directory",
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
      }
    },
    {
      "name": "filesystem--directory_tree",
      "description": "Get a recursive tree view of files and directories as a JSON structure. Each entry includes 'name', 'type' (file/directory), and 'children' for directories. Files have no children array, while directories always have a children array (which may be empty). The output is formatted with 2-space indentation for readability. Only works within allowed directories.",
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
      }
    },
    {
      "name": "filesystem--move_file",
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
      }
    },
    {
      "name": "filesystem--search_files",
      "description": "Recursively search for files and directories matching a pattern. Searches through all subdirectories from the starting path. The search is case-insensitive and matches partial names. Returns full paths to all matching items. Great for finding files when you don't know their exact location. Only searches within allowed directories.",
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
      }
    },
    {
      "name": "filesystem--get_file_info",
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
      }
    },
    {
      "name": "filesystem--list_allowed_directories",
      "description": "Returns the list of directories that this server is allowed to access. Use this to understand which directories are available before trying to access files.",
      "inputSchema": {
        "type": "object",
        "properties": {},
        "required": []
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

