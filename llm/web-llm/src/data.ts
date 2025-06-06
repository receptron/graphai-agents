export const graphData = {
  version: 0.5,
  nodes: {
    start: {
      value: 1,
    },
    one: {
      agent: "sleeperAgent",
      params: { duration: 1000 },
      inputs: { data: ":start" },
    },
    nested: {
      agent: "nestedAgent",
      graph: {
        version: 0.5,
        nodes: {
          input1: {
            value: ":test",
          },
          llm: {
            agent: "webLlmAgent",
            // params: { duration: 1000 },
            inputs: { prompt: "hello" },
          },
        },
      },
      inputs: { data: ":one", test: ":one" },
    },
  },
};
