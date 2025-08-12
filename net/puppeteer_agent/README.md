
# @graphai/puppeteer_agent for GraphAI



### Install

```sh
yarn add @graphai/puppeteer_agent
```


### Usage

```typescript
import { GraphAI } from "graphai";
import { puppeteerAgent } from "@graphai/puppeteer_agent";

const agents = { puppeteerAgent };

const graph = new GraphAI(graph_data, agents);
const result = await graph.run();
```

### Agents description
- puppeteerAgent - Puppeteer Agent

### Input/Output/Params Schema & samples
 - [puppeteerAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/net/puppeteerAgent.md)

### Input/Params example
 - puppeteerAgent



```typescript
{
  "inputs": {},
  "params": {}
}
```










