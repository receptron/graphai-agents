import { AgentFunction, AgentFunctionInfo } from "graphai";
import { getMergeValue, getMessages } from "@graphai/llm_utils";

import * as webllm from "@mlc-ai/web-llm";

export type CallbackReport = webllm.InitProgressReport;

interface WebLlmAgentOptions {
  modelId: string;
  callback?: (__report: CallbackReport) => void;
  appConfig?: any;
}

export const webLlmAgentGenerator = ({
  modelId,
  callback,
  appConfig = {},
}: WebLlmAgentOptions) => {
  let engine: null | webllm.MLCEngine = null;

  const loadEngine = async (callback2: (__report: CallbackReport) => void) => {
    const reportCallback = callback2 ?? callback ?? (__report: webllm.InitProgressReport) => {
      console.log("not implement callback");
    };
    const updateEngineInitProgressCallback: webllm.InitProgressCallback = (report: webllm.InitProgressReport) => {
      reportCallback(report);
    };
    if (engine === null) {
      /* eslint new-cap: 0 */
      /* eslint require-atomic-updates: 0 */
      engine = await webllm.CreateMLCEngine(modelId, {
        appConfig,
        initProgressCallback: updateEngineInitProgressCallback,
      });
    }
  };

  const _webLlmAgent: AgentFunction = async ({ filterParams, params, namedInputs, config }) => {
    const { system, prompt, messages } = {
      ...params,
      ...namedInputs,
    };

    const { stream } = {
      ...(config || {}),
      ...params,
    };

    const userPrompt = getMergeValue(namedInputs, params, "mergeablePrompts", prompt);
    const systemPrompt = getMergeValue(namedInputs, params, "mergeableSystem", system);

    const messagesCopy = getMessages<webllm.ChatCompletionMessageParam>(systemPrompt, messages);

    if (userPrompt) {
      messagesCopy.push({
        role: "user",
        content: userPrompt,
      });
    }

    if (engine === null) {
      await loadEngine();
    }

    const completion = await engine.chat.completions.create({
      stream,
      messages: messagesCopy,
      temperature: 0.7,
      top_p: 0.95,
      //
      stream_options: { include_usage: true },
      logit_bias: { "14444": -100 },
      frequency_penalty: 0.5,
    });

    const tokens = [];
    for await (const chunk of completion) {
      if (chunk.choices && chunk.choices[0]) {
        const token = chunk.choices[0].delta.content;
        tokens.push(token);
        if (stream && filterParams && filterParams.streamTokenCallback && token) {
          filterParams.streamTokenCallback(token);
        }
      }
    }
    const text = tokens.join("");
    const message = {
      role: "assistant" as const,
      content: text,
    };
    messagesCopy.push(message);

    return {
      message,
      messages: messagesCopy,
      text,
    };
  };

  const webLlmAgent: AgentFunctionInfo = {
    name: "webLlmAgent",
    agent: _webLlmAgent,
    mock: _webLlmAgent,
    inputs: {},
    output: {},
    params: {},
    outputFormat: {},
    samples: [],
    description: "WebLlm Agent",
    category: ["llm"],
    author: "Receptron team",
    repository: "https://github.com/receptron/graphai",
    license: "MIT",
    stream: true,
    npms: ["webLlm"],
    environmentVariables: [],
  };
  return {
    webLlmAgent,
    loadEngine,
  }
};

// export default webLlmAgentInfo;
