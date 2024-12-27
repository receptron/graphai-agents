"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sttOpenaiAgent = void 0;
const openai_1 = __importDefault(require("openai"));
const sttOpenaiAgent = async ({ params, namedInputs }) => {
    const { stream, model } = { ...params, ...namedInputs };
    const openai = new openai_1.default();
    const transcription = await openai.audio.transcriptions.create({
        file: stream,
        model: model ?? "whisper-1",
    });
    return {
        text: transcription.text
    };
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
    license: "MIT",
};
exports.default = sttOpenaiAgentInfo;
