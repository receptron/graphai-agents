import { GraphAIOnError, GraphAIDebug, GraphAISupressError } from "@graphai/agent_utils";
import { AgentFunction, AgentFunctionInfo, DefaultConfigData } from "graphai";
import Exa from "exa-js";

type ExaSearchInputs = {
  query: string;
  search_args?: Record<string, any>;
};

type ExaSearchParams = {
  apiKey?: string;
  search_args?: Record<string, any>;
} & GraphAISupressError &
  GraphAIDebug;

type ExaSearchResponse = any | GraphAIOnError<string>;

// https://github.com/exa-labs/exa-js
export const exaAgent: AgentFunction<ExaSearchParams, ExaSearchResponse, ExaSearchInputs, DefaultConfigData> = async ({ params, namedInputs, config }) => {
  const { query, search_args } = {
    ...params,
    ...namedInputs,
  };

  const { apiKey } = {
    ...(config || {}),
    ...params,
  };

  try {
    const exa = new Exa(apiKey);
    const basicResults = await (search_args?.text ? exa.searchAndContents(query, search_args) : exa.search(query, search_args));
    return basicResults.results.map((item) => {
      return {
        title: item.title,
        link: item.url,
        snippet: item.text,
      };
    });
  } catch (error) {
    const isErrorInstance = error instanceof Error;
    const errorMessage = isErrorInstance ? error.message : "Unknown error occurred";
    const errorObject = isErrorInstance ? error : new Error(errorMessage);

    if (params.supressError) {
      return {
        onError: {
          message: errorMessage,
          error: errorObject.toString(),
        },
      };
    }

    throw errorObject;
  }
};

const exaAgentInfo: AgentFunctionInfo = {
  name: "exaAgent",
  agent: exaAgent,
  mock: exaAgent,

  samples: [
    {
      params: {},
      inputs: {},
      result: {},
    },
  ],
  description: "Exa Agent",
  category: ["net"],
  author: "Receptron team",
  repository: "https://github.com/receptron/graphai-agents/tree/main/net/exa_agent",
  source: "https://github.com/receptron/graphai-agents/tree/main/net/exa_agent/src/exa_agent.ts",
  package: "@graphai/exa_agent",
  license: "MIT",
};

export default exaAgentInfo;
