import { AgentFunction, AgentFunctionInfo } from "graphai";

export const templateAgent: AgentFunction = async ({ params, namedInputs }) => {
  return { params, namedInputs };
};

const templateAgentInfo: AgentFunctionInfo = {
  name: "templateAgent",
  agent: templateAgent,
  mock: templateAgent,

  samples: [],
  description: "Template Agent",
  category: ["template"],
  author: "Receptron team",
  repository: "https://github.com/receptron/graphai",
  source: "https://github.com/receptron/graphai-agents/tree/main/packages/agent_template/src/template_agent.ts",
  // package: "@graphai/agent_template",
  license: "MIT",
};

export default templateAgentInfo;
