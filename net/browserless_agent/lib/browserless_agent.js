"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserlessAgent = void 0;
const graphai_1 = require("graphai");
const getBrowserlessToken = (params, config) => {
    if (params?.apiKey) {
        return params.apiKey;
    }
    if (config?.apiKey) {
        return config.apiKey;
    }
    return typeof process !== "undefined" ? process?.env?.BROWSERLESS_API_TOKEN : null;
};
const browserlessAgent = async ({ namedInputs, params, config, }) => {
    const { url, text_content } = namedInputs;
    (0, graphai_1.assert)(!!url, "browserlessAgent: url is required! set inputs: { url: 'https://example.com' }");
    const shouldExtractTextContent = text_content ?? params?.text_content ?? false;
    const supressError = params.supressError ?? false;
    const browserlessToken = getBrowserlessToken(params, config);
    // Check if API token is provided
    if (!browserlessToken) {
        const errorMessage = "Browserless API token is required. Please set the BROWSERLESS_API_TOKEN environment variable.";
        throw new Error(errorMessage);
    }
    const region = params?.region || "sfo";
    const baseUrl = `https://production-${region}.browserless.io`;
    const path = shouldExtractTextContent ? "scrape" : "content";
    const endpoint = `${baseUrl}/${path}?token=${browserlessToken}`;
    const requestBody = shouldExtractTextContent ? { url, elements: [{ selector: "body" }] } : { url };
    // Return request information in debug mode
    if (params?.debug) {
        return {
            url: endpoint,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: requestBody,
        };
    }
    // API request options
    const fetchOptions = {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        body: JSON.stringify(requestBody),
    };
    try {
        const response = await fetch(endpoint, fetchOptions);
        if (!response.ok) {
            const status = response.status;
            const error = await response.text();
            if (supressError) {
                return {
                    onError: {
                        message: `Browserless HTTP error: ${status}`,
                        status,
                        error,
                    },
                };
            }
            throw new Error(`Browserless HTTP error: ${status}, ${error}`);
        }
        if (shouldExtractTextContent) {
            const jsonResponse = await response.json();
            return {
                text: jsonResponse.data[0].results[0].text,
            };
        }
        else {
            const textResponse = await response.text();
            return {
                text: textResponse,
            };
        }
    }
    catch (error) {
        const isErrorInstance = error instanceof Error;
        const errorMessage = isErrorInstance ? error.message : "Unknown error occurred";
        const errorObject = isErrorInstance ? error : new Error(errorMessage);
        if (supressError) {
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
exports.browserlessAgent = browserlessAgent;
const browserlessAgentInfo = {
    name: "browserlessAgent",
    agent: exports.browserlessAgent,
    mock: exports.browserlessAgent,
    params: {
        type: "object",
        properties: {
            apiKey: {
                type: "string",
                description: "Browserless API key",
            },
            debug: {
                type: "boolean",
                description: "Enable debug mode",
            },
            supressError: {
                type: "boolean",
                description: "Suppress error and return onError object if the request fails",
            },
            text_content: {
                type: "boolean",
                description: "If true, returns only the text content of the body element of the page, otherwise returns the full HTML",
            },
            region: {
                type: "string",
                enum: ["sfo", "lon", "ams"],
                description: "Regional endpoint to use. sfo: San Francisco (default), lon: London, ams: Amsterdam",
            },
        },
    },
    inputs: {
        type: "object",
        properties: {
            url: {
                type: "string",
                description: "URL of the web page to scrape or manipulate",
            },
            text_content: {
                type: "boolean",
                description: "If true, returns only the text content of the body element of the page, otherwise returns the full HTML",
            },
        },
        required: ["url"],
    },
    output: {
        type: "object",
        properties: {
            text: {
                type: "string",
            },
        },
    },
    samples: [
        {
            inputs: {
                url: "https://www.example.com",
            },
            params: {},
            result: {
                text: "<html><body>Hello, world!</body></html>",
            },
        },
        {
            inputs: {
                url: "https://www.example.com",
                text_content: true,
            },
            params: {},
            result: {
                text: "Hello, world!",
            },
        },
        {
            inputs: {
                url: "https://www.example.com",
            },
            params: {
                debug: true,
            },
            result: {
                url: "https://production-sfo.browserless.io/content",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: { url: "https://www.example.com" },
            },
        },
    ],
    description: "An agent that uses Browserless.io to fetch web page content with JavaScript execution support for retrieving data from SPAs and dynamic content",
    category: ["net"],
    author: "kawamataryo",
    repository: "https://github.com/receptron/graphai-agents",
    source: "https://github.com/receptron/graphai-agents/tree/main/net/browserless_agent/src/browserless_agent.ts",
    package: "@graphai/browserless_agent",
    license: "MIT",
    environmentVariables: ["BROWSERLESS_API_TOKEN"],
};
exports.default = browserlessAgentInfo;
