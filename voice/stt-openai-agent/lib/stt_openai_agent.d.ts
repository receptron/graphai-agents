import type { AgentFunction, AgentFunctionInfo } from "graphai";
import OpenAI from "openai";
import { GraphAINullableText, GraphAISupressError, GraphAIOnError } from "@graphai/agent_utils";
import fs from "fs";
type STTOpenAIInputs = OpenAI.Audio.Transcriptions.TranscriptionCreateParams & {
    inputStream: fs.ReadStream;
};
type STTOpenAIConfig = {
    apiKey?: string;
    baseURL?: string;
    model?: string;
};
type STTOpenAIParams = STTOpenAIInputs & STTOpenAIConfig & Partial<GraphAISupressError>;
type STTOpenAIResult = Partial<GraphAINullableText | GraphAIOnError>;
export declare const sttOpenaiAgent: AgentFunction<STTOpenAIParams, STTOpenAIResult, STTOpenAIInputs, STTOpenAIConfig>;
declare const sttOpenaiAgentInfo: AgentFunctionInfo;
export default sttOpenaiAgentInfo;
