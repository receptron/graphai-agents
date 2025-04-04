
# mcp_agent for GraphAI

Model Context Protocol

### Install

```sh
yarn add mcp_agent
```


### Usage

```typescript
import { GraphAI } from "graphai";
import { mcpToolsCallAgent, mcpToolsListAgent } from "mcp_agent";

const agents = { mcpToolsCallAgent, mcpToolsListAgent };

const graph = new GraphAI(graph_data, agents);
const result = await graph.run();
```

### Agents description
- mcpToolsCallAgent - Model Context Protocol
- mcpToolsListAgent - Model Context Protocol

### Input/Output/Params Schema & samples
 - [mcpToolsCallAgent](https://github.com/receptron/graphai/blob/main/docs/agentDocs/protocol/mcpToolsCallAgent.md)
 - [mcpToolsListAgent](https://github.com/receptron/graphai/blob/main/docs/agentDocs/protocol/mcpToolsListAgent.md)

### Input/Params example
 - mcpToolsCallAgent

```typescript
{
  "inputs": {
    "tools": {
      "name": "filesystem--list_directory",
      "arguments": {
        "path": "/home/runner/work/graphai-agents/graphai-agents/protocol/mcp-agent/lib/../tests/sample"
      }
    }
  },
  "params": {}
}
```

 - mcpToolsListAgent

```typescript
{
  "inputs": {},
  "params": {}
}
```










