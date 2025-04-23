"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateAgent = void 0;
const templateAgent = async ({ params, namedInputs }) => {
    return { params, namedInputs };
};
exports.templateAgent = templateAgent;
const templateAgentInfo = {
    name: "templateAgent",
    agent: exports.templateAgent,
    mock: exports.templateAgent,
    samples: [],
    description: "Template Agent",
    category: ["template"],
    author: "Receptron team",
    repository: "https://github.com/receptron/graphai",
    source: "https://github.com/receptron/graphai-agents/tree/main/packages/agent_template/src/template_agent.ts",
    // package: "@graphai/agent_template",
    license: "MIT",
};
exports.default = templateAgentInfo;
