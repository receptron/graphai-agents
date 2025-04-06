import { AgentFunction, AgentFunctionInfo } from "graphai";
import { toolsCall, mcpClientsDefaultKey } from "./mcp";

export const mcpToolsCallAgent: AgentFunction<{ mcpClientsKey?: string }> = async ({ namedInputs, config, params }) => {
  const mcpClientsKey = params.mcpClientsKey ?? mcpClientsDefaultKey;
  const mcpClients = (config ?? {})[mcpClientsKey];

  const { name, arguments: mcpArguments } = namedInputs.tools;
  const response = await toolsCall(mcpClients, { name, arguments: mcpArguments });
  return {
    response,
  };
};

const mcpToolsCallAgentInfo: AgentFunctionInfo = {
  name: "mcpToolsCallAgent",
  agent: mcpToolsCallAgent,
  mock: mcpToolsCallAgent,

  samples: [
    {
      params: {},
      inputs: {
        tools: {
          name: "filesystem--list_directory",
          arguments: {
            path: __dirname + "/../tests/sample",
          },
        },
      },
      result: {
        response: {
          content: [
            {
              text: "[FILE] 1.txt\n[FILE] 2.txt",
              type: "text",
            },
          ],
        },
      },
    },
    {
      params: { mcpClientsKey: "key" },
      inputs: {
        tools: {
          name: "filesystem--list_directory",
          arguments: {
            path: __dirname + "/../tests/sample",
          },
        },
      },
      result: {
        response: {
          content: [
            {
              text: "[FILE] 1.txt\n[FILE] 2.txt",
              type: "text",
            },
          ],
        },
      },
    },
  ],
  description: "Model Context Protocol Tools/Call Agent",
  category: ["protocol"],
  author: "isamu arimoto",
  repository: "https://github.com/receptron/graphai-agents",
  license: "MIT",
};

export default mcpToolsCallAgentInfo;
