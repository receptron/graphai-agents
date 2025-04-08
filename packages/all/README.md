# @graphai/all for GraphAI

All-in packages for GraphAI.

This meta-package contains all the necessary dependencies for using GraphAI, including the core library and standard agents.

### Install

```sh
yarn add @graphai/all
```

### Usage

```typescript
import { GraphAI, agents } from "@graphai/all";

const main = async () => {
  const graphData = {
    version: 0.5,
    nodes: {
      init: { value: "hello" },
      result: {
        agent: "copyAgent",
        inputs: {
          text: ":init",
        },
        isResult: true,
      },
    },
  };
  const graphai = new GraphAI(graphData, agents);
  const result = await graphai.run();
  console.log(result);
};

main();
```



