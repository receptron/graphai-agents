import { GraphAIOnError, GraphAIDebug, GraphAISupressError } from "@graphai/agent_utils";
import { AgentFunction, AgentFunctionInfo, DefaultConfigData } from "graphai";
type ExaSearchInputs = {
    query: string;
    search_args?: Record<string, any>;
};
type ExaSearchParams = {
    apiKey?: string;
    search_args?: Record<string, any>;
} & GraphAISupressError & GraphAIDebug;
type ExaSearchResponse = any | GraphAIOnError<string>;
export declare const exaAgent: AgentFunction<ExaSearchParams, ExaSearchResponse, ExaSearchInputs, DefaultConfigData>;
declare const exaAgentInfo: AgentFunctionInfo;
export default exaAgentInfo;
