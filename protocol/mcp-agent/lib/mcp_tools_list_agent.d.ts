import type { AgentFunction, AgentFunctionInfo } from "graphai";
export declare const mcpToolsListAgent: AgentFunction<{
    services?: string[];
    mcpClientsKey?: string;
}>;
declare const mcpToolsListAgentInfo: AgentFunctionInfo;
export default mcpToolsListAgentInfo;
