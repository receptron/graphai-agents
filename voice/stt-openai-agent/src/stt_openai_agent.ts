import { AgentFunction, AgentFunctionInfo } from "graphai";
import OpenAI from "openai";
import { GraphAINullableText } from "@graphai/agent_utils";

type STTOpenAIInputs = OpenAI.Audio.Transcriptions.TranscriptionCreateParams;

type STTOpenAIConfig = {
  apiKey?: string;
  baseURL?: string;
  model?: string;
};

type STTOpenAIParams = STTOpenAIInputs &
  STTOpenAIConfig & {
    throwError?: boolean;
  };

type STTOpenAIResult = Partial<GraphAINullableText> & {
  error?: any;
};

export const sttOpenaiAgent: AgentFunction<STTOpenAIParams, STTOpenAIResult, STTOpenAIInputs, STTOpenAIConfig> = async ({ params, namedInputs, config }) => {
  const { file, language, prompt, response_format, temperature, timestamp_granularities, throwError } = { ...params, ...namedInputs };
  const { apiKey, model, baseURL } = {
    ...(config || {}),
    ...params,
  };

  const openai = new OpenAI({ apiKey, baseURL });

  try {
    const transcription = await openai.audio.transcriptions.create({
      file: file,
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
    if (throwError) {
      console.error(e);
      throw new Error("TTS OpenAI Error");
    }
    return {
      error: e,
    };
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
  license: "MIT",
  environmentVariables: ["OPENAI_API_KEY"],
};

export default sttOpenaiAgentInfo;
