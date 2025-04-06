import { GraphAIOnError } from "@graphai/agent_utils";
import { AgentFunction, AgentFunctionInfo, DefaultConfigData } from "graphai";
interface BraveSearchInputs {
    query: string;
    search_args?: Record<string, any>;
}
interface BraveSearchParams {
    apiKey?: string;
    debug?: boolean;
    throwError?: boolean;
    search_args?: Record<string, any>;
}
interface BraveSearchResult {
    title: string;
    link: string;
    snippet: string;
}
type BraveSearchResponse = {
    items: BraveSearchResult[];
} | GraphAIOnError<string> | {
    url: string;
    method: string;
    headers: Record<string, string>;
    params: Record<string, any>;
};
export declare const braveSearchAgent: AgentFunction<BraveSearchParams, BraveSearchResponse, BraveSearchInputs, DefaultConfigData>;
declare const braveSearchAgentInfo: AgentFunctionInfo;
export default braveSearchAgentInfo;
