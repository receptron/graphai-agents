import type { AgentFunction, AgentFunctionInfo } from "graphai";
import OpenAI from "openai";
import { GraphAINullableText, GraphAISupressError, GraphAIOnError } from "@graphai/agent_utils";
import fs from "fs";

type STTOpenAIInputs = OpenAI.Audio.Transcriptions.TranscriptionCreateParams & { inputStream: fs.ReadStream };

type STTOpenAIConfig = {
  apiKey?: string;
  baseURL?: string;
  model?: string;
};

type STTOpenAIParams = STTOpenAIInputs & STTOpenAIConfig & Partial<GraphAISupressError>;

type STTOpenAIResult = Partial<GraphAINullableText | GraphAIOnError>;

export const sttOpenaiAgent: AgentFunction<STTOpenAIParams, STTOpenAIResult, STTOpenAIInputs, STTOpenAIConfig> = async ({ params, namedInputs, config }) => {
  const { inputStream, language, prompt, response_format, temperature, timestamp_granularities, supressError } = { ...params, ...namedInputs };
  const { apiKey, model, baseURL } = {
    ...(config || {}),
    ...params,
  };

  const openai = new OpenAI({ apiKey, baseURL });

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
  } catch (e) {
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

const sttOpenaiAgentInfo: AgentFunctionInfo = {
  name: "sttOpenaiAgent",
  agent: sttOpenaiAgent,
  mock: sttOpenaiAgent,
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

export default sttOpenaiAgentInfo;
