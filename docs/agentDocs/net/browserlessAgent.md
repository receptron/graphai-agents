# browserlessAgent

## Package
[@graphai/browserless_agent](https://www.npmjs.com/package/@graphai/browserless_agent)
## Source
[https://github.com/receptron/graphai-agents/tree/main/net/browserless_agent/src/browserless_agent.ts](https://github.com/receptron/graphai-agents/tree/main/net/browserless_agent/src/browserless_agent.ts)

## Description

An agent that uses Browserless.io to fetch web page content with JavaScript execution support for retrieving data from SPAs and dynamic content

## Schema

#### inputs

```json

{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL of the web page to scrape or manipulate"
    },
    "text_content": {
      "type": "boolean",
      "description": "If true, returns only the text content of the body element of the page, otherwise returns the full HTML"
    }
  },
  "required": [
    "url"
  ]
}

```

#### output

```json

{
  "type": "object",
  "properties": {
    "text": {
      "type": "string"
    }
  }
}

```

## Input example of the next node

```json

[
  ":agentId",
  ":agentId.text"
]

```
```json

[
  ":agentId",
  ":agentId.text"
]

```
```json

[
  ":agentId",
  ":agentId.url",
  ":agentId.method",
  ":agentId.headers",
  ":agentId.headers.Content-Type",
  ":agentId.body",
  ":agentId.body.url"
]

```

## Samples

### Sample0

#### inputs

```json

{
  "url": "https://www.example.com"
}

```

#### params

```json

{}

```

#### result

```json

{
  "text": "<html><body>Hello, world!</body></html>"
}

```
### Sample1

#### inputs

```json

{
  "url": "https://www.example.com",
  "text_content": true
}

```

#### params

```json

{}

```

#### result

```json

{
  "text": "Hello, world!"
}

```
### Sample2

#### inputs

```json

{
  "url": "https://www.example.com"
}

```

#### params

```json

{"debug":true}

```

#### result

```json

{
  "url": "https://production-sfo.browserless.io/content",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "url": "https://www.example.com"
  }
}

```

## Author

kawamataryo

## Repository

https://github.com/receptron/graphai-agents

## License

MIT

