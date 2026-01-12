import { GraphAIOnError, GraphAIDebug, GraphAISupressError } from "@graphai/agent_utils";
import { AgentFunction, AgentFunctionInfo, assert, DefaultConfigData } from "graphai";
import { customsearch } from "@googleapis/customsearch";
import { GaxiosError } from "gaxios";

type GoogleSearchInputs = {
  query: string;
};

type GoogleSearchParams = {
  apiKey: string;
  cx: string;
} & GraphAISupressError &
  GraphAIDebug;

interface GoogleSearchResult {
  title: string;
  link: string;
  snippet: string;
}

type GoogleSearchResponse =
  | {
      items: GoogleSearchResult[];
    }
  | GraphAIOnError<string>;

const getGoogleSearchAPIKey = (params: GoogleSearchParams, config?: DefaultConfigData) => {
  if (params?.apiKey) {
    return params.apiKey;
  }
  if (config?.apiKey) {
    return config.apiKey;
  }
  return typeof process !== "undefined" ? process?.env?.GOOGLE_SEARCH_API_KEY : null;
};

export const googleSearchAgent: AgentFunction<GoogleSearchParams, GoogleSearchResponse, GoogleSearchInputs, DefaultConfigData> = async ({
  namedInputs,
  params,
  config,
}) => {
  const { query } = namedInputs;
  assert(!!query, "googleSearchAgent: query is required! set inputs: { query: 'your search query' }");

  const googleSearchAPIKey = getGoogleSearchAPIKey(params, config);
  if (!googleSearchAPIKey) {
    const errorMessage = "Google Search API key is required. Please set the GOOGLE_SEARCH_API_KEY environment variable.";
    throw new Error(errorMessage);
  }
  const { cx } = params;
  if (!cx) {
    const errorMessage = "Google Search API cx is required.";
    throw new Error(errorMessage);
  }

  // Return request information in debug mode
  if (params?.debug) {
    return {
      items: [
        {
          title: "GraphAI: A Modern AI Framework",
          link: "https://example.com/graphai",
          snippet: "GraphAI is a modern framework for building AI applications.",
        },
        {
          title: "Getting Started with GraphAI",
          link: "https://example.com/graphai/docs",
          snippet: "Learn how to get started with GraphAI.",
        },
      ],
    };
  }

  const supressError = params?.supressError ?? false;

  const customsearchClient = customsearch("v1");

  try {
    const jsonResponse = await customsearchClient.cse.list({
      cx: cx,
      q: query,
      auth: googleSearchAPIKey,
    });
    const webResults = jsonResponse?.data?.items || [];
    const formattedResults = webResults.map((item: any) => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
    }));
    return {
      items: formattedResults,
    };
  } catch (error) {
    const isErrorInstance = error instanceof GaxiosError;
    const errorMessage = isErrorInstance ? error.message : "Unknown error occurred";
    const errorObject = isErrorInstance ? error : new Error(errorMessage);

    if (supressError) {
      return {
        items: [],
        onError: {
          message: errorMessage,
          error: errorObject.toString(),
        },
      };
    }

    throw new Error(`Google Search HTTP error: ${error}`);
  }
};

// https://developers.google.com/custom-search/v1/overview
const googleSearchAgentInfo: AgentFunctionInfo = {
  name: "googleSearchAgent",
  agent: googleSearchAgent,
  mock: googleSearchAgent,
  params: {
    type: "object",
    properties: {
      apiKey: {
        type: "string",
        description: "Google Search API key",
      },
      cx: {
        type: "string",
        description: "The identifier of the Programmable Search Engine.",
      },
      debug: {
        type: "boolean",
        description: "Enable debug mode",
      },
      supressError: {
        type: "boolean",
        description: "Suppress error and return onError object if the request fails",
      },
    },
    required: ["cx"],
  },
  inputs: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "The search query to send to Google Search",
      },
    },
    required: ["query"],
  },
  output: {
    type: "object",
    properties: {
      items: {
        type: "array",
        items: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "The title of the search result",
            },
            link: {
              type: "string",
              description: "The URL of the search result",
            },
            snippet: {
              type: "string",
              description: "A snippet of text from the search result",
            },
          },
        },
      },
    },
  },
  samples: [
    {
      params: {
        apiKey: "APIKEY",
        cx: "CX",
      },
      inputs: { query: "What is GraphAI?" },
      result: {
        items: [
          {
            title: "GraphAI",
            link: "https://www.graphifi.com/graphai",
            snippet: "GraphAI is a natural language processing service, powered by Graphifi's knowledge graph technology. With GraphAI, you can easily transform your unstructured ...",
          },
        ],
      },
    },
  ],
  description: "Google Custom Search Agent",
  category: ["net"],
  author: "Masashi Homma",
  repository: "https://github.com/receptron/graphai-agents/tree/main/net/google_search_agent",
  source: "https://github.com/receptron/graphai-agents/tree/main/net/google_search_agent/src/google_search_agent.ts",
  package: "@graphai/google_search_agent",
  license: "MIT",
  environmentVariables: ["GOOGLE_SEARCH_API_KEY"],
};

export default googleSearchAgentInfo;
