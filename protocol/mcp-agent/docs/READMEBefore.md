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

```TypeScript
  await mcpInit(mcpConfig)
  await setTimeout(2000);
```

### Disconnecting from the MCP server

Be sure to explicitly disconnect from the MCP server when your batch job or server (e.g., Express) shuts down.

```TypeScript
  await setTimeout(500);
  mcpClose();
```

