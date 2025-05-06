import type { AgentFunction, AgentFunctionInfo } from "graphai";
import type { GraphAIBuffer, GraphAISupressError, GraphAIOnError, GraphAIText } from "@graphai/agent_utils";
export declare const ttsNijivoiceAgent: AgentFunction<{
    apiKey?: string;
    voice?: string;
} & Partial<GraphAISupressError>, Partial<(GraphAIBuffer & {
    generatedVoice: string;
}) | GraphAIOnError>, GraphAIText>;
declare const ttsNijivoiceAgentInfo: AgentFunctionInfo;
export default ttsNijivoiceAgentInfo;
