import { AgentFunctionInfo } from "graphai";
import * as webllm from "@mlc-ai/web-llm";
export type CallbackReport = webllm.InitProgressReport;
interface WebLlmAgentOptions {
    modelId: string;
    callback?: (__report: CallbackReport) => void;
    useIndexedDBCache?: boolean;
}
export declare const pushModelList: (__model_list?: any[]) => void;
export declare const webLlmAgentGenerator: ({ modelId, callback, useIndexedDBCache }: WebLlmAgentOptions) => {
    webLlmAgent: AgentFunctionInfo;
    loadEngine: (callback2?: (__report: CallbackReport) => void) => Promise<void>;
};
export {};
