import { AgentFunction } from "graphai";
export declare const nodeBrowserDetectAgent: AgentFunction;
declare const retNodeBrowserDetectAgentInfo: {
    name: string;
    agent: AgentFunction<any, any, any>;
    mock: AgentFunction<any, any, any>;
    inputs?: any;
    output?: any;
    outputFormat?: any;
    params?: any;
    samples: import("graphai").AgentFunctionInfoSample[];
    description: string;
    category: string[];
    author: string;
    repository: string;
    license: string;
    cacheType?: import("graphai/lib/type").CacheTypes;
    environmentVariables?: string[];
    stream?: boolean;
    apiKeys?: string[];
    npms?: string[];
};
export default retNodeBrowserDetectAgentInfo;