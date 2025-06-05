
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
   - inputs
     - url(string)
       - URL of the web page to scrape or manipulate
     - text_content(boolean)
       - If true, returns only the text content of the body element of the page, otherwise returns the full HTML
   - params
     - apiKey(string)
       - Browserless API key
     - debug(boolean)
       - Enable debug mode
     - supressError(boolean)
       - Suppress error and return onError object if the request fails
     - text_content(boolean)
       - If true, returns only the text content of the body element of the page, otherwise returns the full HTML
     - region(string)
       - Regional endpoint to use. sfo: San Francisco (default), lon: London, ams: Amsterdam

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







