// graphai repository
export * from "graphai";
export * from "@graphai/agents";
export * from "@graphai/agent_filters";
export * from "@receptron/test_utils";

// graphai agent
export * from "@graphai/extra-agents";

import * as defaultAgents from "@graphai/agents";
import * as extraAgents from "@graphai/extra-agents";
import { AgentFunctionInfo } from "graphai";

const packages = { ...defaultAgents, ...extraAgents };
export const agents = Object.entries(packages).reduce((tmp: Record<string, AgentFunctionInfo>, [key, value]) => {
  if (typeof key === "string" && "agent" in value) {
    tmp[key] = value;
  }
  return tmp;
}, {});
