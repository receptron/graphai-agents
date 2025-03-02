
# @graphai/browserless_agent for GraphAI

Browserless Agent is a GraphAI agent that uses [Browserless.io](https://www.browserless.io/) to scrape the web.

### Install

```sh
yarn add @graphai/browserless_agent
```


### Usage

```typescript
import { GraphAI } from "graphai";
import { browserlessAgent } from "@graphai/browserless_agent";

const agents = { browserlessAgent };

const graph = new GraphAI(graph_data, agents);
const result = await graph.run();
```

### Agents description
- browserlessAgent - Browserless Agent

### Input/Output/Params Schema & samples
 - [browserlessAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/net/browserlessAgent.md)
