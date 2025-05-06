import { GraphAIOnError, GraphAIDebug, GraphAISupressError } from "@graphai/agent_utils";
import { AgentFunction, AgentFunctionInfo, DefaultConfigData } from "graphai";
type BraveSearchInputs = {
    query: string;
    search_args?: Record<string, any>;
};
type BraveSearchParams = {
    apiKey?: string;
    search_args?: Record<string, any>;
} & GraphAISupressError & GraphAIDebug;
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
