"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolsCall = exports.toolsList = exports.close = exports.mcpInit = void 0;
const types_js_1 = require("@modelcontextprotocol/sdk/types.js");
const index_js_1 = require("@modelcontextprotocol/sdk/client/index.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/client/stdio.js");
const mcpClents = {};
let mcpConfig = null;
const mcpInit = async (_mcpConfig) => {
    mcpConfig = _mcpConfig;
    await Promise.all(Object.keys(mcpConfig).map(async (serviceName) => {
        const config = mcpConfig[serviceName];
        const transport = new stdio_js_1.StdioClientTransport({
            command: config.command,
            args: config.args,
        });
        const client = new index_js_1.Client({
            name: serviceName,
            version: "1.0.0",
        }, {
            capabilities: {},
        });
        await client.connect(transport);
        mcpClents[serviceName] = client;
        return;
    }));
};
exports.mcpInit = mcpInit;
const close = () => {
    Object.keys(mcpConfig).map(async (serviceName) => {
        const client = mcpClents[serviceName];
        client.close();
    });
};
exports.close = close;
const toolsList = async () => {
    const ret = [];
    await Promise.all(Object.keys(mcpConfig).map(async (serviceName) => {
        const client = mcpClents[serviceName];
        const toolsResponse = await client.request({ method: "tools/list" }, types_js_1.ListToolsResultSchema);
        toolsResponse.tools.map((tool) => {
            tool["name"] = [serviceName, tool["name"]].join("--");
            ret.push(tool);
        });
    }));
    return ret;
};
exports.toolsList = toolsList;
const toolsCall = async (tools) => {
    const { name, arguments: llmArguments } = tools;
    const [serviceName, tools_name] = name.split("--");
    const client = mcpClents[serviceName];
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
/*
const resources = async () => {
  await Promise.all(
    Object.keys(mcpConfig).map(async (serviceName) => {
      const client = mcpClents[serviceName];
      try {
        const resourcesList = await client.request({ method: "resources/list" }, ListResourcesResultSchema);
        console.log(resourcesList);
      } catch (e) {
        console.log(e);
      }
    }),
  );
  // TODO
};
*/
