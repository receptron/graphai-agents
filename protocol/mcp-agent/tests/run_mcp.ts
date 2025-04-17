import { mcpInit, toolsList, toolsCall, mcpClose, resourcesList, resourceRead } from "../src/mcp";
import { setTimeout } from "timers/promises";
import { path, mcpConfig } from "./common";

const main = async () => {
  const mcpClients = await mcpInit(mcpConfig);
  await setTimeout(2000);
  const tools = await toolsList(mcpClients);
  console.log(JSON.stringify(tools, null, 2));

  const resoures = await resourcesList(mcpClients);
  console.log(resoures);

  /*
  await toolsCall(mcpClients, {
    name: "playwright--browser_navigate",
    arguments: { url: "https://www.google.com" },
  });
  const content = await resourceRead(mcpClients, "playwright", resoures.playwright[0]);
  console.log(content);
  */

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
