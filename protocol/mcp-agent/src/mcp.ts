import { ListToolsResultSchema, CallToolResultSchema } from "@modelcontextprotocol/sdk/types.js";

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

type MCPConfig = Record<string, { command: string; args: string[] }>;

export const mcpInit = async (_mcpConfig: MCPConfig) => {
  const mcpClents: Record<string, Client> = {};
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
      mcpClents[serviceName] = client;
      return;
    }),
  );
  return mcpClents;
};

export const mcpClose = (mcpClents: Record<string, Client>) => {
  Object.keys(mcpClents).map(async (serviceName) => {
    const client = mcpClents[serviceName];
    client.close();
  });
};

export const createToolsList = (mcpClents: Record<string, Client>) => {
  return async (services: string[] = []) => {
    const ret: { name: string; description?: string; inputSchema: unknown }[] = [];
    await Promise.all(
      Object.keys(mcpClents).map(async (serviceName) => {
        const client = mcpClents[serviceName];
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
};

export const createToolsCall = (mcpClents: Record<string, Client>) => {
  return async (tools: { name: string; arguments: unknown }) => {
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
  }
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
