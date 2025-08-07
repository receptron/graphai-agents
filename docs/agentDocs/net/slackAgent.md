# slackAgent




## Description

Slack Agent

## Schema

#### inputs

```json

{
  "type": "object",
  "properties": {
    "message": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "message"
  ]
}

```

## Input example of the next node

```json

[
  ":agentId"
]

```

## Samples

### Sample0

#### inputs

```json

{
  "message": [
    "Hello amateraru from GraphAI Slack agent!"
  ]
}

```

#### params

```json

{"post_channel":"#p_bootcamp_e_raycast_jp_amaterasu_dev"}

```

#### result

```json

{}

```

## Author

Receptron team

## Repository

https://github.com/receptron/graphai-agents/tree/main/net/slack_agent

## License

MIT

