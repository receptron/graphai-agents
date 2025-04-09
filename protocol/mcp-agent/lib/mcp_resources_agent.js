"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcpResourcesAgent = void 0;
const graphai_1 = require("graphai");
const mcp_1 = require("./mcp");
const mcpResourcesAgent = async ({ config, params }) => {
    const mcpClientsKey = params.mcpClientsKey ?? mcp_1.mcpClientsDefaultKey;
    const mcpClients = (config ?? {})[mcpClientsKey];
    (0, graphai_1.assert)(!!mcpClients, "mcpResourcesAgent: no mcpClients");
    (0, graphai_1.assert)(Object.keys(mcpClients).length > 0, "mcpResourcesAgent: no mcpClients");
    const resources = await (0, mcp_1.resourcesList)(mcpClients);
    return {
        resources,
    };
};
exports.mcpResourcesAgent = mcpResourcesAgent;
const mcpResourcesAgentInfo = {
    name: "mcpResourcesAgent",
    agent: exports.mcpResourcesAgent,
    mock: exports.mcpResourcesAgent,
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
    description: "Model Context Protocol Resources Agent",
    category: ["protocol"],
    author: "isamu arimoto",
    repository: "https://github.com/receptron/graphai-agents",
    license: "MIT",
};
exports.default = mcpResourcesAgentInfo;
