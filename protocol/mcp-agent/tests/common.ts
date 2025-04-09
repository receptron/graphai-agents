export const path = __dirname + "/sample";

export const mcpConfig = {
  filesystem: {
    command: "npx",
    args: ["-y", "@modelcontextprotocol/server-filesystem", path],
  },
  filesystem2: {
    command: __dirname + "/../../../node_modules/@modelcontextprotocol/server-filesystem/dist/index.js",
    args: [path],
  },
  playwright: {
    command: "npx",
    args: ["@playwright/mcp@latest", "--browser", "chrome"],
  },
};
