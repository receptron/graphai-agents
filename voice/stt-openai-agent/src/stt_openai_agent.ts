import { AgentFunction, AgentFunctionInfo } from "graphai";
import OpenAI from "openai";

export const sttOpenaiAgent: AgentFunction = async ({ params, namedInputs }) => {
  const { stream, model, throwError } = { ...params, ...namedInputs };
  const openai = new OpenAI();

  try {
    const transcription = await openai.audio.transcriptions.create({
      file: stream,
      model: model ?? "whisper-1",
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
};

export default sttOpenaiAgentInfo;
