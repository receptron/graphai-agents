
# @graphai/brave_search_agent for GraphAI

An agent that uses the Brave Search API

### Install

```sh
yarn add @graphai/brave_search_agent
```


### Usage

```typescript
import { GraphAI } from "graphai";
import { braveSearchAgent } from "@graphai/brave_search_agent";

const agents = { braveSearchAgent };

const graph = new GraphAI(graph_data, agents);
const result = await graph.run();
```

### Agents description
- braveSearchAgent - An agent that uses the Brave Search API. https://api-dashboard.search.brave.com/app/documentation/web-search/get-started

### Input/Output/Params Schema & samples
 - [braveSearchAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/net/braveSearchAgent.md)

### Input/Params example
 - braveSearchAgent
   - inputs
     - query(string)
       - The search query to send to Brave Search
     - search_args(object)
       - Additional search parameters to pass to the Brave Search API. See https://api-dashboard.search.brave.com/app/documentation/web-search/query
   - params
     - apiKey(string)
       - Brave Search API key
     - debug(boolean)
       - Enable debug mode
     - supressError(boolean)
       - Suppress error and return onError object if the request fails
     - search_args(object)
       - Additional search parameters to pass to the Brave Search API. See https://api-dashboard.search.brave.com/app/documentation/web-search/query

```typescript
{
  "inputs": {
    "query": "GraphAI framework"
  },
  "params": {}
}
```


```typescript
{
  "inputs": {
    "query": "GraphAI vs TensorFlow",
    "search_args": {
      "country": "JP",
      "language": "ja"
    }
  },
  "params": {}
}
```


```typescript
{
  "inputs": {
    "query": "GraphAI tutorials"
  },
  "params": {
    "debug": true
  }
}
```


### Environment Variables
 - braveSearchAgent
   - BRAVE_SEARCH_API_TOKEN







