"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeBrowserDetectAgentInfo = exports.nodeBrowserDetectAgentInfoGenerator = void 0;
const nodeBrowserDetectAgentInfoGenerator = (nodeBrowserDetectAgent) => {
    const nodeBrowserDetectAgentInfo = {
        name: "nodeBrowserDetectAgent",
        agent: nodeBrowserDetectAgent,
        mock: nodeBrowserDetectAgent,
        samples: [
            {
                params: { a: "1" },
                inputs: { b: "2" },
                result: {
                    params: { a: "1" },
                    namedInputs: { b: "2" },
                },
            },
        ],
        description: "test agent",
        category: ["general"],
        author: "Receptron Team",
        repository: "https://github.com/receptron/graphai/",
        license: "MIT",
    };
    return nodeBrowserDetectAgentInfo;
};
exports.nodeBrowserDetectAgentInfoGenerator = nodeBrowserDetectAgentInfoGenerator;
const nodeBrowserDetectAgentInfo = {
    name: "nodeBrowserDetectAgent",
    agent: async (__context) => {
        return {};
    },
    mock: async (__context) => {
        return {};
    },
    samples: [
        {
            params: { a: "1" },
            inputs: { b: "2" },
            result: {
                params: { a: "1" },
                namedInputs: { b: "2" },
            },
        },
    ],
    description: "test agent",
    category: ["general"],
    author: "Receptron Team",
    repository: "https://github.com/receptron/graphai/",
    license: "MIT",
};
exports.nodeBrowserDetectAgentInfo = nodeBrowserDetectAgentInfo;
