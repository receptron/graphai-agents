import * as packages from "../src/index";
import { agentTestRunner } from "@receptron/test_utils/lib/agent_test_runner";

import { mcpInit, toolsList, toolsCall, close } from "../src/mcp";
import { setTimeout } from "timers/promises";
import { path, mcpConfig2 } from "./common";

const main = async () => {
  await mcpInit(mcpConfig2);
  await setTimeout(2000);

  for await (const agentInfo of Object.values(packages)) {
    await agentTestRunner(agentInfo);
  }
  await setTimeout(500);
  close();
};

main();
