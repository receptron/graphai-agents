import { AgentFunction, AgentFunctionInfo } from "graphai";
import { toolsCall } from "./mcp";

export const mcpToolsCallAgent: AgentFunction = async ({ namedInputs }) => {
  const { name, arguments: mcpArguments } = namedInputs.tools;
  const response = await toolsCall({ name, arguments: mcpArguments });
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
  ],
  description: "Model Context Protocol",
  category: ["protocol"],
  author: "isamu arimoto",
  repository: "https://github.com/receptron/graphai/",
  license: "MIT",
};

export default mcpToolsCallAgentInfo;
