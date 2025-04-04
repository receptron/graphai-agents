"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcpToolsCallAgent = void 0;
const mcp_1 = require("./mcp");
const mcpToolsCallAgent = async ({ namedInputs }) => {
    const { name, arguments: mcpArguments } = namedInputs.tools;
    const response = await (0, mcp_1.toolsCall)({ name, arguments: mcpArguments });
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
                            type: "text"
                        }
                    ]
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
exports.default = mcpToolsCallAgentInfo;
