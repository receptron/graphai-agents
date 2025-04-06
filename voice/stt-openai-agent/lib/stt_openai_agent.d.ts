import { AgentFunction, AgentFunctionInfo } from "graphai";
import OpenAI from "openai";
import { GraphAINullableText } from "@graphai/agent_utils";
type STTOpenAIInputs = OpenAI.Audio.Transcriptions.TranscriptionCreateParams;
type STTOpenAIConfig = {
    apiKey?: string;
    baseURL?: string;
    model?: string;
};
type STTOpenAIParams = STTOpenAIInputs & STTOpenAIConfig & {
    throwError?: boolean;
};
type STTOpenAIResult = Partial<GraphAINullableText> & {
    error?: any;
};
export declare const sttOpenaiAgent: AgentFunction<STTOpenAIParams, STTOpenAIResult, STTOpenAIInputs, STTOpenAIConfig>;
declare const sttOpenaiAgentInfo: AgentFunctionInfo;
export default sttOpenaiAgentInfo;
