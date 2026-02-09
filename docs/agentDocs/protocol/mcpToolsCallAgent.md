# mcpToolsCallAgent

## Package
[@graphai/mcp_agent](https://www.npmjs.com/package/@graphai/mcp_agent)
## Source
[https://github.com/receptron/graphai-agents/tree/main/protocol/mcp-agent/src/mcp_tools_call_agent.ts](https://github.com/receptron/graphai-agents/tree/main/protocol/mcp-agent/src/mcp_tools_call_agent.ts)

## Description

Model Context Protocol Tools/Call Agent

## Schema

#### inputs

```json

{
  "type": "object",
  "properties": {
    "tools": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "arguments": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string"
            }
          },
          "required": [
            "path"
          ]
        }
      },
      "required": [
        "name",
        "arguments"
      ]
    }
  },
  "required": [
    "tools"
  ]
}

```

## Input example of the next node

```json

[
  ":agentId",
  ":agentId.response",
  ":agentId.response.content",
  ":agentId.response.content.$0",
  ":agentId.response.content.$0.text",
  ":agentId.response.content.$0.type",
  ":agentId.response.structuredContent",
  ":agentId.response.structuredContent.content"
]

```
```json

[
  ":agentId",
  ":agentId.response",
  ":agentId.response.content",
  ":agentId.response.content.$0",
  ":agentId.response.content.$0.text",
  ":agentId.response.content.$0.type",
  ":agentId.response.structuredContent",
  ":agentId.response.structuredContent.content"
]

```

## Samples

### Sample0

#### inputs

```json

{
  "tools": {
    "name": "filesystem--list_directory",
    "arguments": {
      "path": "/home/runner/work/graphai-agents/graphai-agents/protocol/mcp-agent/lib/../tests/sample"
    }
  }
}

```

#### params

```json

{}

```

#### result

```json

{
  "response": {
    "content": [
      {
        "text": "[FILE] 1.txt\n[FILE] 2.txt",
        "type": "text"
      }
    ],
    "structuredContent": {
      "content": "[FILE] 1.txt\n[FILE] 2.txt"
    }
  }
}

```
### Sample1

#### inputs

```json

{
  "tools": {
    "name": "filesystem--list_directory",
    "arguments": {
      "path": "/home/runner/work/graphai-agents/graphai-agents/protocol/mcp-agent/lib/../tests/sample"
    }
  }
}

```

#### params

```json

{"mcpClientsKey":"key"}

```

#### result

```json

{
  "response": {
    "content": [
      {
        "text": "[FILE] 1.txt\n[FILE] 2.txt",
        "type": "text"
      }
    ],
    "structuredContent": {
      "content": "[FILE] 1.txt\n[FILE] 2.txt"
    }
  }
}

```

## Author

isamu arimoto

## Repository

https://github.com/receptron/graphai-agents

## License

MIT

