# googleSearchAgent

## Package
[@graphai/google_search_agent](https://www.npmjs.com/package/@graphai/google_search_agent)
## Source
[https://github.com/receptron/graphai-agents/tree/main/net/google_search_agent/src/google_search_agent.ts](https://github.com/receptron/graphai-agents/tree/main/net/google_search_agent/src/google_search_agent.ts)

## Description

Google Search Agent

## Schema

#### inputs

```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The search query to send to Google Search"
    }
  },
  "required": [
    "query"
  ]
}
```

#### output

```json
{
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "description": "The title of the search result"
          },
          "link": {
            "type": "string",
            "description": "The URL of the search result"
          },
          "snippet": {
            "type": "string",
            "description": "A snippet of text from the search result"
          }
        }
      }
    }
  }
}
```


## Input example of the next node

```json

[
  ":agentId",
  ":agentId.items",
  ":agentId.items.$0",
  ":agentId.items.$0.title",
  ":agentId.items.$0.link",
  ":agentId.items.$0.snippet",
  ":agentId.items.$1",
  ":agentId.items.$1.title",
  ":agentId.items.$1.link",
  ":agentId.items.$1.snippet"
]

```
```json

[
  ":agentId",
  ":agentId.items",
  ":agentId.items.$0",
  ":agentId.items.$0.title",
  ":agentId.items.$0.link",
  ":agentId.items.$0.snippet"
]

```

## Samples

### Sample0

#### inputs

```json

{
  "query": "What is GraphAI?"
}

```

#### params

```json

{
  "apiKey": "APIKEY",
  "cx": "CX"
}

```

#### result

```json

{
  "items": [
    {
      "title": "GraphAI",
      "link": "https://www.graphifi.com/graphai",
      "snippet": "GraphAI is a natural language processing service, powered by Graphifi's knowledge graph technology. With GraphAI, you can easily transform your unstructured ..."
    }
  ]
}

```

## Author

Receptron team

## Repository

https://github.com/receptron/graphai-agents/tree/main/net/google_search_agent

## License

MIT
