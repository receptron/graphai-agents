import { AgentFunction, AgentFunctionInfo, assert, DefaultConfigData } from "graphai";

interface BraveSearchInputs {
  query: string;
  search_args?: Record<string, any>;
}

interface BraveSearchParams {
  apiKey?: string;
  debug?: boolean;
  throwError?: boolean;
  search_args?: Record<string, any>;
}

interface BraveSearchResult {
  title: string;
  link: string;
  snippet: string;
}

type BraveSearchResponse =
  | {
      items: BraveSearchResult[];
    }
  | {
      onError: {
        message: string;
        error: string;
        status?: number;
      };
    }
  | {
      url: string;
      method: string;
      headers: Record<string, string>;
      params: Record<string, any>;
    };

const getBraveSearchToken = (params: BraveSearchParams, config?: DefaultConfigData) => {
  if (params?.apiKey) {
    return params.apiKey;
  }
  if (config?.apiKey) {
    return config.apiKey;
  }
  return typeof process !== "undefined" ? process?.env?.BRAVE_SEARCH_API_TOKEN : null;
};

export const braveSearchAgent: AgentFunction<BraveSearchParams, BraveSearchResponse, BraveSearchInputs, DefaultConfigData> = async ({
  namedInputs,
  params,
  config,
}) => {
  const { query, search_args } = namedInputs;

  assert(!!query, "braveSearchAgent: query is required! set inputs: { query: 'your search query' }");

  const throwError = params?.throwError ?? false;
  const _search_args = search_args ?? params?.search_args ?? {};

  const braveSearchToken = getBraveSearchToken(params, config);

  // Check if API token is provided
  if (!braveSearchToken) {
    const errorMessage = "Brave Search API token is required. Please set the BRAVE_SEARCH_API_TOKEN environment variable.";
    throw new Error(errorMessage);
  }

  const baseUrl = "https://api.search.brave.com/res/v1/web/search";
  const searchParams = {
    ..._search_args,
    q: query,
  };

  // Return request information in debug mode
  if (params?.debug) {
    return {
      url: baseUrl,
      method: "GET",
      headers: {
        "X-Subscription-Token": braveSearchToken,
        Accept: "application/json",
      },
      params: searchParams,
    };
  }

  // Build URL with query parameters
  const url = new URL(baseUrl);
  Object.entries(searchParams).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });

  const fetchOptions: RequestInit = {
    method: "GET",
    headers: new Headers({
      "X-Subscription-Token": braveSearchToken,
      Accept: "application/json",
    }),
  };

  try {
    const response = await fetch(url.toString(), fetchOptions);

    if (!response.ok) {
      const status = response.status;
      const error = await response.text();

      if (throwError) {
        throw new Error(`Brave Search HTTP error: ${status}`);
      }

      return {
        items: [],
        onError: {
          message: `Brave Search HTTP error: ${status}`,
          status,
          error,
        },
      };
    }

    const jsonResponse = await response.json();
    const webResults = jsonResponse.web?.results || [];

    const formattedResults = webResults.map((item: any) => ({
      title: item.title,
      link: item.url,
      snippet: item.description,
    }));

    return {
      items: formattedResults,
    };
  } catch (error) {
    if (throwError) {
      throw error;
    }

    return {
      onError: {
        message: error instanceof Error ? error.message : "Unknown error occurred",
        error: error instanceof Error ? error.toString() : String(error),
      },
    };
  }
};

const braveSearchAgentInfo: AgentFunctionInfo = {
  name: "braveSearchAgent",
  agent: braveSearchAgent,
  mock: braveSearchAgent,
  params: {
    type: "object",
    properties: {
      apiKey: {
        type: "string",
        description: "Brave Search API key",
      },
      debug: {
        type: "boolean",
        description: "Enable debug mode",
      },
      throwError: {
        type: "boolean",
        description: "Throw error if the request fails",
      },
      search_args: {
        type: "object",
        description:
          "Additional search parameters to pass to the Brave Search API. See https://api-dashboard.search.brave.com/app/documentation/web-search/query",
      },
    },
  },
  inputs: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "The search query to send to Brave Search",
      },
      search_args: {
        type: "object",
        description:
          "Additional search parameters to pass to the Brave Search API. See https://api-dashboard.search.brave.com/app/documentation/web-search/query",
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
      inputs: {
        query: "GraphAI framework",
      },
      params: {},
      result: {
        items: [
          {
            title: "GraphAI: A Modern AI Framework",
            link: "https://example.com/graphai",
            snippet: "GraphAI is a modern framework for building AI applications with a focus on graph-based architectures.",
          },
          {
            title: "Getting Started with GraphAI",
            link: "https://example.com/graphai/docs",
            snippet: "Learn how to get started with GraphAI, the powerful framework for AI development.",
          },
        ],
      },
    },
    {
      inputs: {
        query: "GraphAI vs TensorFlow",
        search_args: {
          country: "JP",
          language: "ja",
        },
      },
      params: {},
      result: {
        items: [
          {
            title: "GraphAIとは何か？",
            link: "https://example.com/ja/graphai",
            snippet: "GraphAIの概要を説明します。",
          },
        ],
      },
    },
    {
      inputs: {
        query: "GraphAI tutorials",
      },
      params: {
        debug: true,
      },
      result: {
        url: "https://api.search.brave.com/res/v1/web/search",
        method: "GET",
        headers: { "X-Subscription-Token": "your-api-key", Accept: "application/json" },
        params: { q: "GraphAI tutorials", extra_snippets: true },
      },
    },
  ],
  description: "An agent that uses the Brave Search API. https://api-dashboard.search.brave.com/app/documentation/web-search/get-started",
  category: ["net"],
  author: "kawamataryo",
  repository: "https://github.com/receptron/graphai-agents",
  license: "MIT",
  environmentVariables: ["BRAVE_SEARCH_API_TOKEN"],
};

export default braveSearchAgentInfo;
