"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcpResourceAgent = void 0;
const graphai_1 = require("graphai");
const mcp_1 = require("./mcp");
const mcpResourceAgent = async ({ namedInputs, config, params: _params, }) => {
    const mcpClientsKey = _params.mcpClientsKey ?? mcp_1.mcpClientsDefaultKey;
    const mcpClients = (config ?? {})[mcpClientsKey];
    const params = namedInputs.params ?? _params.params;
    const serviceName = namedInputs.serviceName ?? _params.serviceName;
    (0, graphai_1.assert)(!!mcpClients, "mcpResourceAgent: no mcpClients");
    (0, graphai_1.assert)(Object.keys(mcpClients).length > 0, "mcpResourceAgent: no mcpClients");
    (0, graphai_1.assert)(!!params, "mcpResourceAgent: no params");
    (0, graphai_1.assert)(!!serviceName, "mcpResourceAgent: no serviceName");
    const content = await (0, mcp_1.resourceRead)(mcpClients, serviceName, params);
    return {
        content,
    };
};
exports.mcpResourceAgent = mcpResourceAgent;
const mcpResourceAgentInfo = {
    name: "mcpResourceAgent",
    agent: exports.mcpResourceAgent,
    mock: exports.mcpResourceAgent,
    samples: [],
    description: "Model Context Protocol Resource Agent",
    category: ["protocol"],
    author: "isamu arimoto",
    repository: "https://github.com/receptron/graphai-agents",
    license: "MIT",
};
exports.default = mcpResourceAgentInfo;
