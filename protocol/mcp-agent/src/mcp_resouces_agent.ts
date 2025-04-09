import { assert } from "graphai";
import type { AgentFunction, AgentFunctionInfo } from "graphai";
import { resourcesList, mcpClientsDefaultKey } from "./mcp";

export const mcpResoucesAgent: AgentFunction<{ mcpClientsKey?: string }> = async ({ namedInputs, config, params }) => {
  const mcpClientsKey = params.mcpClientsKey ?? mcpClientsDefaultKey;
  const mcpClients = (config ?? {})[mcpClientsKey];

  assert(!!mcpClients, "mcpResoucesAgent: no mcpClients");
  assert(Object.keys(mcpClients).length > 0, "mcpResoucesAgent: no mcpClients");

  const resources = await resourcesList(mcpClients);
  return {
    resources,
  };
};

const mcpResoucesAgentInfo: AgentFunctionInfo = {
  name: "mcpResoucesAgent",
  agent: mcpResoucesAgent,
  mock: mcpResoucesAgent,

  samples: [
    {
      params: {},
      inputs: {},
      result: {
        resources: {
          playwright: [
            {
              mimeType: "text/plain",
              name: "Page console",
              uri: "browser://console",
            },
          ],
        },
      },
    },
  ],
  description: "Model Context Protocol Resouces Agent",
  category: ["protocol"],
  author: "isamu arimoto",
  repository: "https://github.com/receptron/graphai-agents",
  license: "MIT",
};

export default mcpResoucesAgentInfo;
