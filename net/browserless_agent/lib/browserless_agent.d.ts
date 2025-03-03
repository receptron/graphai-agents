import { AgentFunction, AgentFunctionInfo, DefaultConfigData } from "graphai";
interface BrowserlessInputs {
    url: string;
    text_content?: boolean;
}
interface BrowserlessParams {
    apiKey?: string;
    debug?: boolean;
    throwError?: boolean;
    text_content?: boolean;
}
type BrowserlessResult = {
    text: string;
} | {
    onError: {
        message: string;
        error: string;
        status?: number;
    };
} | {
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
