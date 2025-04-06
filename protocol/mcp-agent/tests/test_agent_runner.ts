import * as packages from "../src/index";
import { agentTestRunner } from "@receptron/test_utils/lib/agent_test_runner";

import { mcpInit, toolsList, toolsCall, mcpClose } from "../src/mcp";
import { setTimeout } from "timers/promises";
import { mcpConfig } from "./common";

const main = async () => {
  const mcpClients = await mcpInit(mcpConfig);
  await setTimeout(2000);

  const config = {
    mcpClients,
    key: mcpClients, // for mcpClientsKey Test
  };
  for await (const agentInfo of Object.values(packages)) {
    if ("name" in agentInfo && "agent" in agentInfo) {
      await agentTestRunner(agentInfo, config);
    }
  }
  await setTimeout(500);
  mcpClose(mcpClients);
};

main();
