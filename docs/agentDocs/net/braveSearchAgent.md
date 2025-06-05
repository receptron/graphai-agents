# braveSearchAgent

## Package
[@graphai/brave_search_agent](https://www.npmjs.com/package/@graphai/brave_search_agent)
## Source
[https://github.com/receptron/graphai-agents/tree/main/net/brave_search_agent/src/brave_search_agent.ts](https://github.com/receptron/graphai-agents/tree/main/net/brave_search_agent/src/brave_search_agent.ts)

## Description

An agent that uses the Brave Search API. https://api-dashboard.search.brave.com/app/documentation/web-search/get-started

## Schema

#### inputs

```json

{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "The search query to send to Brave Search"
    },
    "search_args": {
      "type": "object",
      "description": "Additional search parameters to pass to the Brave Search API. See https://api-dashboard.search.brave.com/app/documentation/web-search/query"
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
```json

[
  ":agentId",
  ":agentId.url",
  ":agentId.method",
  ":agentId.headers",
  ":agentId.headers.X-Subscription-Token",
  ":agentId.headers.Accept",
  ":agentId.params",
  ":agentId.params.q",
  ":agentId.params.extra_snippets"
]

```

## Samples

### Sample0

#### inputs

```json

{
  "query": "GraphAI framework"
}

```

#### params

```json

{}

```

#### result

```json

{
  "items": [
    {
      "title": "GraphAI: A Modern AI Framework",
      "link": "https://example.com/graphai",
      "snippet": "GraphAI is a modern framework for building AI applications with a focus on graph-based architectures."
    },
    {
      "title": "Getting Started with GraphAI",
      "link": "https://example.com/graphai/docs",
      "snippet": "Learn how to get started with GraphAI, the powerful framework for AI development."
    }
  ]
}

```
### Sample1

#### inputs

```json

{
  "query": "GraphAI vs TensorFlow",
  "search_args": {
    "country": "JP",
    "language": "ja"
  }
}

```

#### params

```json

{}

```

#### result

```json

{
  "items": [
    {
      "title": "GraphAIとは何か？",
      "link": "https://example.com/ja/graphai",
      "snippet": "GraphAIの概要を説明します。"
    }
  ]
}

```
### Sample2

#### inputs

```json

{
  "query": "GraphAI tutorials"
}

```

#### params

```json

{"debug":true}

```

#### result

```json

{
  "url": "https://api.search.brave.com/res/v1/web/search",
  "method": "GET",
  "headers": {
    "X-Subscription-Token": "your-api-key",
    "Accept": "application/json"
  },
  "params": {
    "q": "GraphAI tutorials",
    "extra_snippets": true
  }
}

```

## Author

kawamataryo

## Repository

https://github.com/receptron/graphai-agents

## License

MIT

