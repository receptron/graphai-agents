import { ListToolsResultSchema, CallToolResultSchema } from "@modelcontextprotocol/sdk/types.js";

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

export const mcpClientsDefaultKey = "mcpClients";
type MCPConfig = Record<string, { command: string; args: string[] }>;
type MCPClients = Record<string, Client>;

export const mcpInit = async (_mcpConfig: MCPConfig) => {
  const mcpClients: MCPClients = {};
  const mcpConfig = _mcpConfig;

  await Promise.all(
    Object.keys(mcpConfig).map(async (serviceName) => {
      const config = (mcpConfig ?? {})[serviceName];
      const transport = new StdioClientTransport({
        command: config.command,
        args: config.args,
      });
      const client = new Client(
        {
          name: serviceName,
          version: "0.0.1",
        },
        {
          capabilities: {},
        },
      );
      await client.connect(transport);
      mcpClients[serviceName] = client;
      return;
    }),
  );
  return mcpClients;
};

export const mcpClose = (mcpClients: MCPClients) => {
  Object.keys(mcpClients).map(async (serviceName) => {
    const client = mcpClients[serviceName];
    client.close();
  });
};

export const toolsList = async (mcpClients: MCPClients, services: string[] = []) => {
  const ret: { name: string; description?: string; inputSchema: unknown }[] = [];
  await Promise.all(
    Object.keys(mcpClients).map(async (serviceName) => {
      const client = mcpClients[serviceName];
      if (services.length === 0 || services.includes(serviceName)) {
        const toolsResponse = await client.request({ method: "tools/list" }, ListToolsResultSchema);
        toolsResponse.tools.map((tool) => {
          tool["name"] = [serviceName, tool["name"]].join("--");
          ret.push(tool);
        });
      }
    }),
  );
  return ret;
};

export const toolsCall = async (mcpClients: MCPClients, tools: { name: string; arguments: unknown }) => {
  const { name, arguments: llmArguments } = tools;
  const [serviceName, tools_name] = name.split("--");
  const client = mcpClients[serviceName];

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
      const client = mcpClients[serviceName];
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
