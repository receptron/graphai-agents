import { AgentFunction, AgentFunctionInfo } from "graphai";

import { ListToolsResultSchema, CallToolResultSchema, ListResourcesResultSchema, ReadResourceResultSchema } from "@modelcontextprotocol/sdk/types.js";

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const mcpClents: Record<string, any> = {};
let mcpConfig: any = null;

export const mcpInit = async (_mcpConfig: any) => {
  mcpConfig = _mcpConfig;
  await Promise.all(
    Object.keys(mcpConfig).map(async (serviceName) => {
      const config = mcpConfig[serviceName];
      const transport = new StdioClientTransport({
        command: config.command,
        args: config.args,
      });
      const client = new Client(
        {
          name: serviceName,
          version: "1.0.0",
        },
        {
          capabilities: {},
        },
      );
      await client.connect(transport);
      mcpClents[serviceName] = client;
      return;
    }),
  );
};

export const close = () => {
  Object.keys(mcpConfig).map(async (serviceName) => {
    const client = mcpClents[serviceName];
    client.close();
  });
};

export const toolsList = async () => {
  const ret: any[] = [];
  await Promise.all(
    Object.keys(mcpConfig).map(async (serviceName) => {
      const client = mcpClents[serviceName];
      const toolsResponse = await client.request({ method: "tools/list" }, ListToolsResultSchema);
      toolsResponse.tools.map((tool: any) => {
        tool["name"] = [serviceName, tool["name"]].join("--");
        ret.push(tool);
      });
    }),
  );
  return ret;
};

export const toolsCall = async (tools: any) => {
  const { name, arguments: llmArguments } = tools;
  const [serviceName, tools_name] = name.split("--");
  const client = mcpClents[serviceName];

  const resourceContent = await client.request(
    {
      method: "tools/call",
      params: {
        name: tools_name,
        arguments: llmArguments,
      },
    },
    CallToolResultSchema,
  );
  return resourceContent;

};

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
