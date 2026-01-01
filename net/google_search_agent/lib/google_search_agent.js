"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleSearchAgent = void 0;
const graphai_1 = require("graphai");
const customsearch_1 = require("@googleapis/customsearch");
const gaxios_1 = require("gaxios");
const getGoogleSearchAPIKey = (params, config) => {
    if (params?.apiKey) {
        return params.apiKey;
    }
    if (config?.apiKey) {
        return config.apiKey;
    }
    return typeof process !== "undefined" ? process?.env?.GOOGLE_SEARCH_API_KEY : null;
};
const googleSearchAgent = async ({ namedInputs, params, config, }) => {
    const { query } = namedInputs;
    (0, graphai_1.assert)(!!query, "googleSearchAgent: query is required! set inputs: { query: 'your search query' }");
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
    const supressError = params?.supressError ?? false;
    const customsearchClient = (0, customsearch_1.customsearch)("v1");
    try {
        const jsonResponse = await customsearchClient.cse.list({
            cx: cx,
            q: query,
            auth: googleSearchAPIKey,
        });
        const webResults = jsonResponse?.data?.items || [];
        const formattedResults = webResults.map((item) => ({
            title: item.title,
            link: item.link,
            snippet: item.snippet,
        }));
        return {
            items: formattedResults,
        };
    }
    catch (error) {
        const isErrorInstance = error instanceof gaxios_1.GaxiosError;
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
exports.googleSearchAgent = googleSearchAgent;
// https://developers.google.com/custom-search/v1/overview
const googleSearchAgentInfo = {
    name: "googleSearchAgent",
    agent: exports.googleSearchAgent,
    mock: exports.googleSearchAgent,
    params: {
        type: "object",
        properties: {
            apiKey: {
                type: "string",
                description: "Google Search API key",
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
exports.default = googleSearchAgentInfo;
