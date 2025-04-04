import { AgentFunction, AgentFunctionInfo } from "graphai";

export const mcpAgent: AgentFunction = async ({ params, namedInputs }) => {
  return { params, namedInputs };
};

const mcpAgentInfo: AgentFunctionInfo = {
  name: "mcpAgent",
  agent: mcpAgent,
  mock: mcpAgent,

  samples: [{
    params: {a: "1"},
    inputs: {b: "2"},
    result: {
      params: {a: "1"},
      namedInputs: {b: "2"},
    },
  }],
  description: "Model Context Protocol",
  category: ["protocol"],
  author: "isamu arimoto",
  repository: "https://github.com/receptron/graphai/",
  license: "MIT",
};

export default mcpAgentInfo;
