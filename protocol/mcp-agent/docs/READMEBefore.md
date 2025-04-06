### Configuring each service via `mcpConfig`

Each service is defined as a pair of `command` and `args`. This pattern can be extended to other applications as well.

```TypeScript
export const mcpConfig = {
  filesystem: {
    command: "npx",
    args: ["-y", "@modelcontextprotocol/server-filesystem", path],
  },
  filesystem2: {
    command: __dirname + "/../../../node_modules/@modelcontextprotocol/server-filesystem/dist/index.js",
    args: [path],
  },
};
```

### Initializing MCP and connecting to the server

MCP must be started before running GraphAI. Since the startup time may vary, it’s recommended to include a waiting period to ensure the server is ready. If GraphAI is run before MCP finishes initializing, the list of tools might be returned as empty.

The function that initializes MCP returns mcpClients. Since mcpClients is required when calling MCP, it is passed as a config to the GraphAI instance.
 It is also needed when closing the connection to the MCP server.

```TypeScript
  const mcpClients = await mcpInit(mcpConfig);
  await setTimeout(2000);
```

### Pass the client to the GraphAI instance.
When creating a GraphAI instance, mcpClients is passed via the config.
 Since MCP is divided into multiple agents, mcpClients is provided globally (although it's also possible to pass it individually).

```
  const graphai = new GraphAI(graphData, agents, { config: { global: { mcpClients } } });
```

### Disconnecting from the MCP server

Be sure to explicitly disconnect from the MCP server when your batch job or server (e.g., Express) shuts down.

```TypeScript
  await setTimeout(500);
  mcpClose(mcpClients);
```

