import { mcpInit, createToolsList, createToolsCall, mcpClose } from "../src/mcp";
import { setTimeout } from "timers/promises";
import { path, mcpConfig } from "./common";

const main = async () => {
  const mcpClients = await mcpInit(mcpConfig);
  await setTimeout(2000);
  const toolsList = createToolsList(mcpClients);
  const toolsCall = createToolsCall(mcpClients);
  const tools = await toolsList();
  // console.log(JSON.stringify(tools, null, 2));

  const tools_data = {
    name: "filesystem--list_directory",
    arguments: {
      path: path,
    },
  };
  const ret = await toolsCall(tools_data);
  console.log(ret);
  mcpClose(mcpClients);
};

main();
