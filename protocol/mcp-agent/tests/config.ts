export const path = __dirname;

export const mcpFileConfig = {
  mcp: {
    filesystem: {
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-filesystem", path],
    },
  },
  systemPrompt: "base path is " + path,
};

export const mcpLaprasConfig = {
  mcp: {
    lapras: {
      command: "npx",
      args: ["-y", "@lapras-inc/lapras-mcp-server"],
    },
  },
  systemPrompt: "You will be supported in finding a job.",
};

export const mcpPlaywrightConfig = {
  mcp: {
    playwright: {
      command: "npx",
      args: ["@playwright/mcp@latest", "--browser", "chrome"],
    },
  },
  systemPrompt: "you are playwright",
};
