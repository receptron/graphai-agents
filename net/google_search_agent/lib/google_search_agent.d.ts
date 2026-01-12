import { GraphAIOnError, GraphAIDebug, GraphAISupressError } from "@graphai/agent_utils";
import { AgentFunction, AgentFunctionInfo, DefaultConfigData } from "graphai";
type GoogleSearchInputs = {
    query: string;
};
type GoogleSearchParams = {
    apiKey: string;
    cx: string;
} & GraphAISupressError & GraphAIDebug;
interface GoogleSearchResult {
    title: string;
    link: string;
    snippet: string;
}
type GoogleSearchResponse = {
    items: GoogleSearchResult[];
} | GraphAIOnError<string>;
export declare const googleSearchAgent: AgentFunction<GoogleSearchParams, GoogleSearchResponse, GoogleSearchInputs, DefaultConfigData>;
declare const googleSearchAgentInfo: AgentFunctionInfo;
export default googleSearchAgentInfo;
