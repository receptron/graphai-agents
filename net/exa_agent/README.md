
# @graphai/exa_agent for GraphAI



### Install

```sh
yarn add @graphai/exa_agent
```


### Usage

```typescript
import { GraphAI } from "graphai";
import { exaAgent } from "@graphai/exa_agent";

const agents = { exaAgent };

const graph = new GraphAI(graph_data, agents);
const result = await graph.run();
```

### Agents description
- exaAgent - Exa Agent

### Input/Output/Params Schema & samples
 - [exaAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/net/exaAgent.md)

### Input/Params example
 - exaAgent



```typescript
{
  "inputs": {},
  "params": {}
}
```










