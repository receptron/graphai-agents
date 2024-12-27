import { AgentFunctionInfo, AgentFunction } from "graphai";

const nodeBrowserDetectAgentInfoGenerator = (nodeBrowserDetectAgent: AgentFunction) => {
  const nodeBrowserDetectAgentInfo: AgentFunctionInfo = {
    name: "nodeBrowserDetectAgent",
    agent: nodeBrowserDetectAgent,
    mock: nodeBrowserDetectAgent,
    samples: [
      {
        params: { a: "1" },
        inputs: { b: "2" },
        result: {
          params: { a: "1" },
          namedInputs: { b: "2" },
        },
      },
    ],
    description: "test agent",
    category: ["general"],
    author: "Receptron Team",
    repository: "https://github.com/receptron/graphai/",
    license: "MIT",
  };
  return nodeBrowserDetectAgentInfo;
};

const nodeBrowserDetectAgentInfo: AgentFunctionInfo = {
  name: "nodeBrowserDetectAgent",
  agent: async (__context) => {
    return {};
  },
  mock: async (__context) => {
    return {};
  },
  samples: [
    {
      params: { a: "1" },
      inputs: { b: "2" },
      result: {
        params: { a: "1" },
        namedInputs: { b: "2" },
      },
    },
  ],
  description: "test agent",
  category: ["general"],
  author: "Receptron Team",
  repository: "https://github.com/receptron/graphai/",
  license: "MIT",
};

export { nodeBrowserDetectAgentInfoGenerator, nodeBrowserDetectAgentInfo };
