# mcpToolsCallAgent

## Description

Model Context Protocol Tools/Call Agent

## Schema

#### inputs

```json

{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "",
  "type": "object",
  "properties": {
    "tools": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "minLength": 1
        },
        "arguments": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string",
              "minLength": 1
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

````

## Input example of the next node

```json

[
  ":agentId",
  ":agentId.response",
  ":agentId.response.content",
  ":agentId.response.content.$0",
  ":agentId.response.content.$0.text",
  ":agentId.response.content.$0.type"
]

````
```json

[
  ":agentId",
  ":agentId.response",
  ":agentId.response.content",
  ":agentId.response.content.$0",
  ":agentId.response.content.$0.text",
  ":agentId.response.content.$0.type"
]

````

## Samples

### Sample0

#### inputs

```json

{
  "tools": {
    "name": "filesystem--list_directory",
    "arguments": {
      "path": "/Users/isamu/ss/llm/graphai-agents/protocol/mcp-agent/lib/../tests/sample"
    }
  }
}

````

#### params

```json

{}

````

#### result

```json

{
  "response": {
    "content": [
      {
        "text": "[FILE] 1.txt\n[FILE] 2.txt",
        "type": "text"
      }
    ]
  }
}

````
### Sample1

#### inputs

```json

{
  "tools": {
    "name": "filesystem--list_directory",
    "arguments": {
      "path": "/Users/isamu/ss/llm/graphai-agents/protocol/mcp-agent/lib/../tests/sample"
    }
  }
}

````

#### params

```json

{"mcpClientsKey":"key"}

````

#### result

```json

{
  "response": {
    "content": [
      {
        "text": "[FILE] 1.txt\n[FILE] 2.txt",
        "type": "text"
      }
    ]
  }
}

````

## Author

isamu arimoto

## Repository

https://github.com/receptron/graphai-agents

## License

MIT

