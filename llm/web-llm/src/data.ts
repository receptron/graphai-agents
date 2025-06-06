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
          child1: {
            agent: "sleeperAgent",
            params: { duration: 1000 },
            inputs: { data: ":data", data2: ":input1" },
          },
          child2: {
            agent: "sleeperAgent",
            params: { duration: 1000 },
            inputs: { data: ":child1" },
            isResult: true,
          },
          child3: {
            agent: "sleeperAgent",
            params: { duration: 1000 },
            inputs: { data: ":child2" },
          },
        },
      },
      inputs: { data: ":one", test: ":one" },
    },
  },
};
