import type { AgentFunction, AgentFunctionInfo } from "graphai";
export declare const mcpResourceAgent: AgentFunction<{
    mcpClientsKey?: string;
    params?: unknown;
    serviceName?: string;
}>;
declare const mcpResourceAgentInfo: AgentFunctionInfo;
export default mcpResourceAgentInfo;
