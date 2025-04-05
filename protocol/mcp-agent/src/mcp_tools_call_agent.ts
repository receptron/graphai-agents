import { AgentFunction, AgentFunctionInfo } from "graphai";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { createToolsCall } from "./mcp";

export const createMcpToolsCallAgent = (mcpClents: Record<string, Client>) => {
  const toolsCall = createToolsCall(mcpClents);
  return async ({ namedInputs }: { namedInputs: any }) => {
    const { name, arguments: mcpArguments } = namedInputs.tools;
    const response = await toolsCall({ name, arguments: mcpArguments });
    return {
      response,
    };
  };
};

export const createMcpToolsCallAgentInfo = (mcpToolsCallAgent: AgentFunction) => {
  return {
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
    description: "Model Context Protocol Tools/Call Agent",
    category: ["protocol"],
    author: "isamu arimoto",
    repository: "https://github.com/receptron/graphai-agents",
    license: "MIT",
  };
};