
# @graphai/browserless_agent for GraphAI



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
- browserlessAgent - An agent that uses Browserless.io to fetch web page content with JavaScript execution support for retrieving data from SPAs and dynamic content

### Input/Output/Params Schema & samples
 - [browserlessAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/net/browserlessAgent.md)

### Input/Params example
 - browserlessAgent

```typescript
{
  "inputs": {
    "url": "https://www.example.com"
  },
  "params": {}
}
```


```typescript
{
  "inputs": {
    "url": "https://www.example.com",
    "text_content": true
  },
  "params": {}
}
```


```typescript
{
  "inputs": {
    "url": "https://www.example.com"
  },
  "params": {
    "debug": true
  }
}
```


### Environment Variables
 - browserlessAgent
   - BROWSERLESS_API_TOKEN







