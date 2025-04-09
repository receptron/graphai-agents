# mcpResourcesAgent

## Description

Model Context Protocol Resources Agent

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

````

## Input example of the next node

```json

[
  ":agentId",
  ":agentId.resources",
  ":agentId.resources.playwright",
  ":agentId.resources.playwright.$0",
  ":agentId.resources.playwright.$0.mimeType",
  ":agentId.resources.playwright.$0.name",
  ":agentId.resources.playwright.$0.uri"
]

````

## Samples

### Sample0

#### inputs

```json

{}

````

#### params

```json

{}

````

#### result

```json

{
  "resources": {
    "playwright": [
      {
        "mimeType": "text/plain",
        "name": "Page console",
        "uri": "browser://console"
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

