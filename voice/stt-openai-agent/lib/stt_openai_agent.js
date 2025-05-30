"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sttOpenaiAgent = void 0;
const openai_1 = __importDefault(require("openai"));
const sttOpenaiAgent = async ({ params, namedInputs, config }) => {
    const { inputStream, language, prompt, response_format, temperature, timestamp_granularities, supressError } = { ...params, ...namedInputs };
    const { apiKey, model, baseURL } = {
        ...(config || {}),
        ...params,
    };
    const openai = new openai_1.default({ apiKey, baseURL });
    try {
        const transcription = await openai.audio.transcriptions.create({
            file: inputStream,
            model: model ?? "whisper-1",
            language: language,
            prompt: prompt,
            response_format: response_format,
            temperature: temperature,
            timestamp_granularities: timestamp_granularities,
        });
        return {
            text: transcription.text,
        };
    }
    catch (e) {
        if (supressError) {
            return {
                onError: {
                    message: "SST OpenAI Error",
                    error: e,
                },
            };
        }
        console.error(e);
        throw new Error("TTS OpenAI Error");
    }
};
exports.sttOpenaiAgent = sttOpenaiAgent;
const sttOpenaiAgentInfo = {
    name: "sttOpenaiAgent",
    agent: exports.sttOpenaiAgent,
    mock: exports.sttOpenaiAgent,
    samples: [],
    description: "OpenAI speach to text agent",
    category: ["voice"],
    author: "receptron team",
    repository: "https://github.com/receptron/graphai-agents/",
    source: "https://github.com/receptron/graphai-agents/tree/main/voice/stt-openai-agent/src/stt_openai_agent.ts",
    package: "@graphai/stt_openai_agent",
    license: "MIT",
    environmentVariables: ["OPENAI_API_KEY"],
};
exports.default = sttOpenaiAgentInfo;
