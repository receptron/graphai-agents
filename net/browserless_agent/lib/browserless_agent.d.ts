import { AgentFunction, AgentFunctionInfo, DefaultConfigData } from "graphai";
interface BrowserlessInputs {
    url: string;
    operation?: "content" | "screenshot";
    options?: Record<string, any>;
    headers?: Record<string, string>;
    cookies?: Array<{
        name: string;
        value: string;
        domain?: string;
    }>;
}
interface BufferResponse {
    base64: string;
    contentType: string;
}
interface BrowserlessParams {
    debug?: boolean;
    type?: "json" | "text" | "buffer";
    throwError?: boolean;
}
type BrowserlessResult = object | string | BufferResponse | {
    onError?: {
        message: string;
        status?: number;
        error: any;
    };
};
export declare const browserlessAgent: AgentFunction<BrowserlessParams, BrowserlessResult, BrowserlessInputs, DefaultConfigData>;
declare const browserlessAgentInfo: AgentFunctionInfo;
export default browserlessAgentInfo;
