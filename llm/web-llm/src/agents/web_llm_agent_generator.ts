import { AgentFunction, AgentFunctionInfo } from "graphai";
import { getMergeValue, getMessages } from "@graphai/llm_utils";

import * as webllm from "@mlc-ai/web-llm";

export type CallbackReport = webllm.InitProgressReport;

interface WebLlmAgentOptions {
  modelId: string;
  callback?: (__report: CallbackReport) => void;
  agentId?: string;
  useIndexedDBCache?: boolean;
}
// const appConfig = webllm.prebuiltAppConfig;
const model_list = webllm.prebuiltAppConfig.model_list;

export const pushModelList = (__model_list?: any[]) => {
  __model_list.forEach((model) => {
    model_list.push(model);
  });
};

export const webLlmAgentGenerator = ({ modelId, callback, useIndexedDBCache, agentId = "webLlmAgent" }: WebLlmAgentOptions) => {
  let engine: null | webllm.MLCEngine = null;

  const loadEngine = async (callback2: (__report: CallbackReport) => void) => {
    const reportCallback =
      callback2 ??
      callback ??
      ((__report: webllm.InitProgressReport) => {
        console.log("not implement callback");
      });
    const updateEngineInitProgressCallback: webllm.InitProgressCallback = (report: webllm.InitProgressReport) => {
      reportCallback(report);
    };
    if (engine === null) {
      /* eslint new-cap: 0 */
      /* eslint require-atomic-updates: 0 */
      console.log(modelId);
      engine = await webllm.CreateMLCEngine(modelId, {
        appConfig: {
          model_list,
          useIndexedDBCache,
        },
        initProgressCallback: updateEngineInitProgressCallback,
      });
    }
  };

  const _webLlmAgent: AgentFunction = async ({ filterParams, params, namedInputs, config }) => {
    const { verbose, temperature, system, prompt, messages, message } = {
      ...params,
      ...namedInputs,
    };
    const { top_p, stream_options, logit_bias, frequency_penalty } = params;

    const { stream } = {
      ...(config || {}),
      ...params,
    };

    const userPrompt = getMergeValue(namedInputs, params, "mergeablePrompts", prompt);
    const systemPrompt = getMergeValue(namedInputs, params, "mergeableSystem", system);

    const messagesCopy = getMessages<webllm.ChatCompletionMessageParam>(systemPrompt, messages);

    if (message) {
      messagesCopy.push(message);
    } else if (userPrompt) {
      messagesCopy.push({
        role: "user",
        content: userPrompt,
      });
    }

    if (engine === null) {
      await loadEngine();
    }

    if (verbose) {
      console.log(messagesCopy);
    }

    const llmParams = {
      stream,
      messages: messagesCopy,
      temperature: temperature ?? 0.7,
      top_p: top_p ?? 0.95,
      stream_options: stream_options ?? { include_usage: true },
      logit_bias: logit_bias ?? { "14444": -100 },
      frequency_penalty: frequency_penalty ?? 0.5,
    };

    if (!stream) {
      const result = await engine.chat.completions.create(llmParams);
      return result;
    }

    const completion = await engine.chat.completions.create(llmParams);
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
    const assistantMessage = {
      role: "assistant" as const,
      content: text,
    };
    messagesCopy.push(assistantMessage);

    return {
      message: assistantMessage,
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
    repository: "https://github.com/receptron/graphai-agents",
    license: "MIT",
    stream: true,
    npms: ["webLlm"],
    environmentVariables: [],
  };
  return {
    webLlmAgent,
    loadEngine,
  };
};

// export default webLlmAgentInfo;
