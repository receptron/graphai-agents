import type { AgentFunction, AgentFunctionInfo } from "graphai";
import type { GraphAIBuffer, GraphAISupressError, GraphAIOnError, GraphAIText } from "@graphai/agent_utils";
export declare const ttsOpenaiAgent: AgentFunction<{
    apiKey?: string;
    model?: string;
    voice?: string;
} & Partial<GraphAISupressError>, Partial<GraphAIBuffer | GraphAIOnError>, GraphAIText>;
declare const ttsOpenaiAgentInfo: AgentFunctionInfo;
export default ttsOpenaiAgentInfo;
