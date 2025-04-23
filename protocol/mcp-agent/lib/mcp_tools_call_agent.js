"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcpToolsCallAgent = void 0;
const graphai_1 = require("graphai");
const mcp_1 = require("./mcp");
const mcpToolsCallAgent = async ({ namedInputs, config, params }) => {
    const mcpClientsKey = params.mcpClientsKey ?? mcp_1.mcpClientsDefaultKey;
    const mcpClients = (config ?? {})[mcpClientsKey];
    (0, graphai_1.assert)(!!mcpClients, "mcpToolsCallAgent: no mcpClients");
    (0, graphai_1.assert)(Object.keys(mcpClients).length > 0, "mcpToolsCallAgent: no mcpClients");
    const { name, arguments: mcpArguments } = namedInputs.tools;
    const response = await (0, mcp_1.toolsCall)(mcpClients, { name, arguments: mcpArguments });
    return {
        response,
    };
};
exports.mcpToolsCallAgent = mcpToolsCallAgent;
const mcpToolsCallAgentInfo = {
    name: "mcpToolsCallAgent",
    agent: exports.mcpToolsCallAgent,
    mock: exports.mcpToolsCallAgent,
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
    source: "https://github.com/receptron/graphai-agents/tree/main/protocol/mcp-agent/src/mcp_tools_call_agent.ts",
    package: "@graphai/mcp_agent",
    license: "MIT",
};
exports.default = mcpToolsCallAgentInfo;
