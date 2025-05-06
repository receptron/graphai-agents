import { assert } from "graphai";
import type { AgentFunction, AgentFunctionInfo } from "graphai";
import { resourcesList, mcpClientsDefaultKey } from "./mcp";

export const mcpResourcesAgent: AgentFunction<{ mcpClientsKey?: string }> = async ({ config, params }) => {
  const mcpClientsKey = params.mcpClientsKey ?? mcpClientsDefaultKey;
  const mcpClients = (config ?? {})[mcpClientsKey];

  assert(!!mcpClients, "mcpResourcesAgent: no mcpClients");
  assert(Object.keys(mcpClients).length > 0, "mcpResourcesAgent: no mcpClients");

  const resources = await resourcesList(mcpClients);
  return {
    resources,
  };
};

const mcpResourcesAgentInfo: AgentFunctionInfo = {
  name: "mcpResourcesAgent",
  agent: mcpResourcesAgent,
  mock: mcpResourcesAgent,

  samples: [
    {
      params: {},
      inputs: {},
      result: {
        resources: {
          /*
          playwright: [
            {
              mimeType: "text/plain",
              name: "Page console",
              uri: "browser://console",
            },
            ],
          */
        },
      },
    },
  ],
  description: "Model Context Protocol Resources Agent",
  category: ["protocol"],
  author: "isamu arimoto",
  repository: "https://github.com/receptron/graphai-agents",
  source: "https://github.com/receptron/graphai-agents/tree/main/protocol/mcp-agent/src/mcp_resources_agent.ts",
  package: "@graphai/mcp_agent",
  license: "MIT",
};

export default mcpResourcesAgentInfo;
