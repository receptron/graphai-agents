"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceRead = exports.resourcesList = exports.toolsCall = exports.toolsList = exports.mcpClose = exports.mcpInit = exports.mcpClientsDefaultKey = void 0;
const types_js_1 = require("@modelcontextprotocol/sdk/types.js");
const index_js_1 = require("@modelcontextprotocol/sdk/client/index.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/client/stdio.js");
exports.mcpClientsDefaultKey = "mcpClients";
const mcpInit = async (_mcpConfig) => {
    const mcpClients = {};
    const mcpConfig = _mcpConfig;
    await Promise.all(Object.keys(mcpConfig).map(async (serviceName) => {
        const config = (mcpConfig ?? {})[serviceName];
        const transport = new stdio_js_1.StdioClientTransport({
            command: config.command,
            args: config.args,
        });
        const client = new index_js_1.Client({
            name: serviceName,
            version: "0.0.1",
        }, {
            capabilities: {},
        });
        await client.connect(transport);
        mcpClients[serviceName] = client;
        return;
    }));
    return mcpClients;
};
exports.mcpInit = mcpInit;
const mcpClose = (mcpClients) => {
    Object.keys(mcpClients).map(async (serviceName) => {
        const client = mcpClients[serviceName];
        client.close();
    });
};
exports.mcpClose = mcpClose;
const toolsList = async (mcpClients, services = []) => {
    const ret = [];
    await Promise.all(Object.keys(mcpClients).map(async (serviceName) => {
        const client = mcpClients[serviceName];
        if (services.length === 0 || services.includes(serviceName)) {
            const toolsResponse = await client.request({ method: "tools/list" }, types_js_1.ListToolsResultSchema);
            toolsResponse.tools.map((tool) => {
                tool["name"] = [serviceName, tool["name"]].join("--");
                ret.push(tool);
            });
        }
    }));
    return ret;
};
exports.toolsList = toolsList;
const toolsCall = async (mcpClients, tools) => {
    const { name, arguments: llmArguments } = tools;
    const [serviceName, tools_name] = name.split("--");
    const client = mcpClients[serviceName];
    const resourceContent = await client.request({
        method: "tools/call",
        params: {
            name: tools_name,
            arguments: llmArguments,
        },
    }, types_js_1.CallToolResultSchema);
    return resourceContent;
};
exports.toolsCall = toolsCall;
const resourcesList = async (mcpClients) => {
    const ret = {};
    await Promise.all(Object.keys(mcpClients).map(async (serviceName) => {
        const client = mcpClients[serviceName];
        try {
            const resourcesList = await client.request({ method: "resources/list" }, types_js_1.ListResourcesResultSchema);
            ret[serviceName] = resourcesList.resources;
            // console.log(resourcesList);
        }
        catch (e) {
            console.log(e);
            // nothing
            // console.log(e);
        }
    }));
    return ret;
};
exports.resourcesList = resourcesList;
const resourceRead = async (mcpClients, serviceName, params) => {
    const client = mcpClients[serviceName];
    const content = await client.request({
        method: "resources/read",
        params,
    }, types_js_1.ReadResourceResultSchema);
    return content;
};
exports.resourceRead = resourceRead;
