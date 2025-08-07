# pdf2textAgent

## Package
[@graphai/pdf2text_agent](https://www.npmjs.com/package/@graphai/pdf2text_agent)
## Source
[https://github.com/receptron/graphai-agents/tree/main/documents/pdf2text_agent/src/pdf2text_agent.ts](https://github.com/receptron/graphai-agents/tree/main/documents/pdf2text_agent/src/pdf2text_agent.ts)

## Description

Pdf2text Agent

## Schema

#### inputs

```json

{
  "type": "object",
  "properties": {
    "buffer": {
      "type": "object",
      "properties": {
        "0": {
          "type": "number"
        },
        "1": {
          "type": "number"
        },
        "2": {
          "type": "number"
        },
        "3": {
          "type": "number"
        },
        "4": {
          "type": "number"
        },
        "5": {
          "type": "number"
        },
        "6": {
          "type": "number"
        },
        "7": {
          "type": "number"
        }
      },
      "required": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
      ]
    }
  },
  "required": [
    "buffer"
  ]
}

```

## Input example of the next node

```json

[
  ":agentId",
  ":agentId.test"
]

```

## Samples

### Sample0

#### inputs

```json

{
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
}

```

#### params

```json

{"type":"md"}

```

#### result

```json

{
  "test": "hello"
}

```

## Author

Receptron team

## Repository

https://github.com/receptron/graphai-agents/tree/main/documents/pdf2text_agent

## License

MIT

