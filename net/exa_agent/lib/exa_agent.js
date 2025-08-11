"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exaAgent = void 0;
const exa_js_1 = __importDefault(require("exa-js"));
// https://github.com/exa-labs/exa-js
const exaAgent = async ({ params, namedInputs, config }) => {
    const { query, search_args } = {
        ...params,
        ...namedInputs,
    };
    const { apiKey } = {
        ...(config || {}),
        ...params,
    };
    try {
        const exa = new exa_js_1.default(apiKey);
        const basicResults = await (search_args?.text ? exa.searchAndContents(query, search_args) : exa.search(query, search_args));
        return basicResults.results.map((item) => {
            return {
                title: item.title,
                link: item.url,
                snippet: item.text,
            };
        });
    }
    catch (error) {
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
exports.exaAgent = exaAgent;
const exaAgentInfo = {
    name: "exaAgent",
    agent: exports.exaAgent,
    mock: exports.exaAgent,
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
exports.default = exaAgentInfo;
