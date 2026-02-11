"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pdf2text_agent_1 = require("@graphai/pdf2text_agent");
const vanilla_node_agents_1 = require("@graphai/vanilla_node_agents");
const openai_agent_1 = require("@graphai/openai_agent");
const prompts_1 = require("@graphai/prompts");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ quiet: true });
require("@graphai/vanilla_node_agents");
const graphai_1 = require("graphai");
const main = async () => {
    const graphData = {
        version: 0.5,
        nodes: {
            file: {
                agent: "fileReadAgent",
                inputs: { file: "2410.14735v2.pdf" },
                params: { baseDir: __dirname },
            },
            totext: {
                agent: "pdf2textAgent",
                inputs: {
                    buffer: ":file.data",
                },
            },
            prompt: {
                agent: "promptsAgent",
                params: {
                    promptKey: "paper2",
                },
            },
            llm: {
                agent: "openAIAgent",
                inputs: {
                    system: ":prompt.text",
                    prompt: ":totext.text",
                },
            },
        },
    };
    const graph = new graphai_1.GraphAI(graphData, { pdf2textAgent: pdf2text_agent_1.pdf2textAgent, fileReadAgent: vanilla_node_agents_1.fileReadAgent, promptsAgent: prompts_1.promptsAgent, openAIAgent: openai_agent_1.openAIAgent });
    const result = (await graph.run(true));
    console.log(result.llm.text);
};
main();
