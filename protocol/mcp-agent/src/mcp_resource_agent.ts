import { assert } from "graphai";
import type { AgentFunction, AgentFunctionInfo } from "graphai";
import { resourceRead, mcpClientsDefaultKey } from "./mcp";

export const mcpResourceAgent: AgentFunction<{ mcpClientsKey?: string; params?: unknown; serviceName?: string }> = async ({
  namedInputs,
  config,
  params: _params,
}) => {
  const mcpClientsKey = _params.mcpClientsKey ?? mcpClientsDefaultKey;
  const mcpClients = (config ?? {})[mcpClientsKey];

  const params = namedInputs.params ?? _params.params;
  const serviceName = namedInputs.serviceName ?? _params.serviceName;

  assert(!!mcpClients, "mcpResourceAgent: no mcpClients");
  assert(Object.keys(mcpClients).length > 0, "mcpResourceAgent: no mcpClients");
  assert(!!params, "mcpResourceAgent: no params");
  assert(!!serviceName, "mcpResourceAgent: no serviceName");

  const content = await resourceRead(mcpClients, serviceName, params);
  return {
    content,
  };
};

const mcpResourceAgentInfo: AgentFunctionInfo = {
  name: "mcpResourceAgent",
  agent: mcpResourceAgent,
  mock: mcpResourceAgent,

  samples: [],
  description: "Model Context Protocol Resource Agent",
  category: ["protocol"],
  author: "isamu arimoto",
  repository: "https://github.com/receptron/graphai-agents",
  source: "https://github.com/receptron/graphai-agents/tree/main/protocol/mcp-agent/src/mcp_resource_agent.ts",
  package: "@graphai/mcp_agent",
  license: "MIT",
};

export default mcpResourceAgentInfo;
