import { AgentFunction, AgentFunctionInfo, DefaultConfigData } from "graphai";
import type { GraphAIDebug, GraphAIOnError, GraphAISupressError, GraphAIText } from "@graphai/agent_utils";
type BrowserlessInputs = {
    url: string;
    text_content?: boolean;
};
type BrowserlessParams = {
    apiKey?: string;
    text_content?: boolean;
} & GraphAISupressError & GraphAIDebug;
type BrowserlessResult = GraphAIText | GraphAIOnError<string> | {
    url: string;
    method: string;
    headers: Record<string, string>;
    body: {
        url: string;
        elements?: {
            selector: string;
        }[];
    };
};
export declare const browserlessAgent: AgentFunction<BrowserlessParams, BrowserlessResult, BrowserlessInputs, DefaultConfigData>;
declare const browserlessAgentInfo: AgentFunctionInfo;
export default browserlessAgentInfo;
