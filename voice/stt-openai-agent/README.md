
# @graphai/stt_openai_agent for GraphAI

OpenAI speach to text agent

### Install

```sh
yarn add @graphai/stt_openai_agent
```


### Usage

```typescript
import { GraphAI } from "graphai";
import { sttOpenaiAgent } from "@graphai/stt_openai_agent";

const agents = { sttOpenaiAgent };

const graph = new GraphAI(graph_data, agents);
const result = await graph.run();
```

### Agents description
- sttOpenaiAgent - OpenAI speach to text agent

### Input/Output/Params Schema & samples
 - [sttOpenaiAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/voice/sttOpenaiAgent.md)











