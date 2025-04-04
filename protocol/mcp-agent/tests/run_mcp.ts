import { mcpInit, tools, toolsCall, close } from "../src/mcp";
import { setTimeout } from 'timers/promises';

const path = __dirname + "/sample";

const mcpConfig = {
  "filesystem": {
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-filesystem",
      path
    ]
  },
  "filesystem2": {
    "command": __dirname + "/../node_modules/@modelcontextprotocol/server-filesystem/dist/index.js",
    "args": [
      path,
    ]
  }
};

const main = async () => {
  await mcpInit(mcpConfig);
  await setTimeout(2000);
  const t = await tools();
  console.log(t);

  const tools_data = {
    name: "filesystem--list_directory",
    arguments: {
      "path": path
    }
  };
  const ret = await toolsCall(tools_data);
  console.log(ret);
  close(); 
};

main();


