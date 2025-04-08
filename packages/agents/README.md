
# @graphai/extra-agents for GraphAI

Extra agents for GraphAI.

### Install

```sh
yarn add @graphai/extra-agents
```


### Usage

```typescript
import { GraphAI } from "graphai";
import { 
  arxivAgent,
  awesomeChatgptPromptsAgent,
  braveSearchAgent,
  browserlessAgent,
  mcpToolsCallAgent,
  mcpToolsListAgent,
  pdf2textAgent,
  promptsAgent,
  serperAgent,
  slackAgent,
  sttOpenaiAgent,
  ttsNijivoiceAgent,
  ttsOpenaiAgent
 } from "@graphai/extra-agents";

const agents = { 
  arxivAgent,
  awesomeChatgptPromptsAgent,
  braveSearchAgent,
  browserlessAgent,
  mcpToolsCallAgent,
  mcpToolsListAgent,
  pdf2textAgent,
  promptsAgent,
  serperAgent,
  slackAgent,
  sttOpenaiAgent,
  ttsNijivoiceAgent,
  ttsOpenaiAgent
 };

const graph = new GraphAI(graph_data, agents);
const result = await graph.run();
```

### Agents description
- arxivAgent - Arxiv Agent
- awesomeChatgptPromptsAgent - awesomeChatgptPrompts Agent
- braveSearchAgent - An agent that uses the Brave Search API. https://api-dashboard.search.brave.com/app/documentation/web-search/get-started
- browserlessAgent - An agent that uses Browserless.io to fetch web page content with JavaScript execution support for retrieving data from SPAs and dynamic content
- mcpToolsCallAgent - Model Context Protocol Tools/Call Agent
- mcpToolsListAgent - Model Context Protocol Tools/List Agent
- pdf2textAgent - Pdf2text Agent
- promptsAgent - Prompts Agent
- serperAgent - serper agent
- slackAgent - Slack Agent
- sttOpenaiAgent - OpenAI speach to text agent
- ttsNijivoiceAgent - TTS nijivoice agent
- ttsOpenaiAgent - OpenAI TTS agent

### Input/Output/Params Schema & samples
 - [arxivAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/net/arxivAgent.md)
 - [awesomeChatgptPromptsAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/prompt/awesomeChatgptPromptsAgent.md)
 - [braveSearchAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/net/braveSearchAgent.md)
 - [browserlessAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/net/browserlessAgent.md)
 - [mcpToolsCallAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/protocol/mcpToolsCallAgent.md)
 - [mcpToolsListAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/protocol/mcpToolsListAgent.md)
 - [pdf2textAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/documents/pdf2textAgent.md)
 - [promptsAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/prompt/promptsAgent.md)
 - [serperAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/net/serperAgent.md)
 - [slackAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/net/slackAgent.md)
 - [sttOpenaiAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/voice/sttOpenaiAgent.md)
 - [ttsNijivoiceAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/voice/ttsNijivoiceAgent.md)
 - [ttsOpenaiAgent](https://github.com/receptron/graphai-agents/blob/main/docs/agentDocs/voice/ttsOpenaiAgent.md)

### Input/Params example
 - arxivAgent

```typescript
{
  "inputs": {},
  "params": {
    "searchQueryParams": [
      {
        "include": [
          {
            "name": "LLM"
          }
        ]
      }
    ],
    "sortBy": "lastUpdatedDate",
    "sortOrder": "descending",
    "start": 0,
    "maxResults": 100
  }
}
```

 - awesomeChatgptPromptsAgent

```typescript
{
  "inputs": {},
  "params": {
    "promptKey": "travelGuide"
  }
}
```

 - braveSearchAgent

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

 - mcpToolsCallAgent

```typescript
{
  "inputs": {
    "tools": {
      "name": "filesystem--list_directory",
      "arguments": {
        "path": "/home/runner/work/graphai-agents/graphai-agents/protocol/mcp-agent/lib/../tests/sample"
      }
    }
  },
  "params": {}
}
```


```typescript
{
  "inputs": {
    "tools": {
      "name": "filesystem--list_directory",
      "arguments": {
        "path": "/home/runner/work/graphai-agents/graphai-agents/protocol/mcp-agent/lib/../tests/sample"
      }
    }
  },
  "params": {
    "mcpClientsKey": "key"
  }
}
```

 - mcpToolsListAgent

```typescript
{
  "inputs": {},
  "params": {
    "services": [
      "filesystem"
    ]
  }
}
```

 - pdf2textAgent

```typescript
{
  "inputs": {
    "buffer": {
      "type": "Buffer",
      "data": [
        104,
        101,
        108,
        108,
        111,
        112,
        100,
        102
      ]
    }
  },
  "params": {
    "type": "md"
  }
}
```

 - promptsAgent

```typescript
{
  "inputs": {},
  "params": {
    "promptKey": "test"
  }
}
```

 - serperAgent

```typescript
{
  "inputs": {
    "query": "apple inc"
  },
  "params": {}
}
```

 - slackAgent

```typescript
{
  "inputs": {
    "message": [
      "Hello amateraru from GraphAI Slack agent!"
    ]
  },
  "params": {
    "post_channel": "#p_bootcamp_e_raycast_jp_amaterasu_dev"
  }
}
```


### Environment Variables
 - braveSearchAgent
   - BRAVE_SEARCH_API_TOKEN
 - browserlessAgent
   - BROWSERLESS_API_TOKEN
 - serperAgent
   - SERPER_API_KEY
 - sttOpenaiAgent
   - OPENAI_API_KEY
 - ttsNijivoiceAgent
   - NIJIVOICE_API_KEY
 - ttsOpenaiAgent
   - OPENAI_API_KEY

### Related Agent Packages
 - [@graphai/arxiv_agent](https://www.npmjs.com/package/@graphai/arxiv_agent)
 - [@graphai/awesome_chatgpt_prompts_agent](https://www.npmjs.com/package/@graphai/awesome_chatgpt_prompts_agent)
 - [@graphai/brave_search_agent](https://www.npmjs.com/package/@graphai/brave_search_agent)
 - [@graphai/browserless_agent](https://www.npmjs.com/package/@graphai/browserless_agent)
 - [@graphai/mcp_agent](https://www.npmjs.com/package/@graphai/mcp_agent)
 - [@graphai/pdf2text_agent](https://www.npmjs.com/package/@graphai/pdf2text_agent)
 - [@graphai/serper_agent](https://www.npmjs.com/package/@graphai/serper_agent)
 - [@graphai/slack_agent](https://www.npmjs.com/package/@graphai/slack_agent)
 - [@graphai/stt_openai_agent](https://www.npmjs.com/package/@graphai/stt_openai_agent)
 - [@graphai/tts_nijivoice_agent](https://www.npmjs.com/package/@graphai/tts_nijivoice_agent)
 - [@graphai/tts_openai_agent](https://www.npmjs.com/package/@graphai/tts_openai_agent)





