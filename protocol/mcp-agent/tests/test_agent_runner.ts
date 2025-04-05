import { createMcpToolsListAgent, createMcpToolsCallAgent, mcpInit, mcpClose } from "../src/index";
import { agentTestRunner } from "@receptron/test_utils/lib/agent_test_runner";

import { setTimeout } from "timers/promises";
import { mcpConfig } from "./common";

const main = async () => {
  const mcpClients = await mcpInit(mcpConfig);
  await setTimeout(2000);

  const factories = [createMcpToolsListAgent, createMcpToolsCallAgent];
  for await (const factory of factories) {
    const agentInfo = factory(mcpClients);
    await agentTestRunner(agentInfo);
  }
  await setTimeout(500);
  mcpClose(mcpClients);
};

main();
