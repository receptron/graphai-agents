
# @graphai/google_search_agent for GraphAI

Google Custom Search Agent

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
- googleSearchAgent - Google Custom Search Agent

### Input/Output/Params Schema & samples
 - [googleSearchAgent](https://github.com/receptron/graphai/blob/main/docs/agentDocs/net/googleSearchAgent.md)

### Input/Params example
 - googleSearchAgent
   - inputs
     - query(string)
       - The search query to send to Google Search
   - params
     - apiKey(string)
       - Google Search API key
     - cx(string)
       - The identifier of the Programmable Search Engine.
     - debug(boolean)
       - Enable debug mode
     - supressError(boolean)
       - Suppress error and return onError object if the request fails

```typescript
{
  "inputs": {
    "query": "What is GraphAI?"
  },
  "params": {
    "apiKey": "APIKEY",
    "cx": "CX"
  }
}
```


### Environment Variables
 - googleSearchAgent
   - GOOGLE_SEARCH_API_KEY







