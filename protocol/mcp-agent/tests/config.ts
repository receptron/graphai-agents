export const path = __dirname;

export const mcpFileConfig = {
  filesystem: {
    command: "npx",
    args: ["-y", "@modelcontextprotocol/server-filesystem", path],
  },
};

export const mcpLaprasConfig = {
  lapras: {
    command: "npx",
    args: ["-y", "@lapras-inc/lapras-mcp-server"],
  },
};

export const mcpPlaywrightConfig = {
  playwright: {
    command: "npx",
    args: ["@playwright/mcp@latest", "--browser", "chrome"],
  },
};
