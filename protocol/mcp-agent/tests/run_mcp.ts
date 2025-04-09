import { mcpInit, toolsList, toolsCall, mcpClose, resources } from "../src/mcp";
import { setTimeout } from "timers/promises";
import { path, mcpConfig } from "./common";

const main = async () => {
  const mcpClients = await mcpInit(mcpConfig);
  await setTimeout(2000);
  const tools = await toolsList(mcpClients);
  console.log(JSON.stringify(tools, null, 2));

  const rs = await resources(mcpClients);
  console.log(rs);

  const tools_data = {
    name: "filesystem--list_directory",
    arguments: {
      path: path,
    },
  };
  const ret = await toolsCall(mcpClients, tools_data);
  // console.log(ret);
  mcpClose(mcpClients);
};

main();
