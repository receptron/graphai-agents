
# @graphai/google_search_agent for GraphAI



### Install

```sh
yarn add @graphai/google_search_agent
```


### Usage

```typescript
import { GraphAI } from "graphai";
import { googleSearchAgent } from "@graphai/google_search_agent";

const agents = { googleSearchAgent };

const graph = new GraphAI(graph_data, agents);
const result = await graph.run();
```

### Agents description
- googleSearchAgent - Google Search Agent

### Input/Output/Params Schema & samples
 - [googleSearchAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/net/googleSearchAgent.md)
