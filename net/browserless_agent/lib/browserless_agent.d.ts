import { AgentFunction, AgentFunctionInfo, DefaultConfigData } from "graphai";
interface BrowserlessInputs {
    url: string;
    text_content?: boolean;
}
interface BrowserlessParams {
    apiKey?: string;
    debug?: boolean;
    throwError?: boolean;
}
type BrowserlessResult = string | {
    onError?: {
        message: string;
        status?: number;
        error: any;
    };
};
export declare const browserlessAgent: AgentFunction<BrowserlessParams, BrowserlessResult, BrowserlessInputs, DefaultConfigData>;
declare const browserlessAgentInfo: AgentFunctionInfo;
export default browserlessAgentInfo;
