import "dotenv/config";

import { mcpToolsListAgent, mcpToolsCallAgent, mcpInit, mcpClose } from "../src/index";
import * as vanilla from "@graphai/vanilla";

import { openAIAgent } from "@graphai/openai_agent";
import { textInputAgent } from "@graphai/input_agents";

import { setTimeout } from "timers/promises";

import { GraphAI } from "graphai";

export const path = __dirname;

export const mcpConfig = {
  filesystem: {
    command: "npx",
    args: ["-y", "@modelcontextprotocol/server-filesystem", path],
  },
  filesystem2: {
    command: __dirname + "/../../../node_modules/@modelcontextprotocol/server-filesystem/dist/index.js",
    args: [path],
  },
};

const main = async () => {
  const mcpClients = await mcpInit(mcpConfig);
  await setTimeout(2000);

  const graphData = {
    version: 0.5,
    loop: {
      while: true,
    },
    nodes: {
      list: {
        agent: "mcpToolsListAgent",
        isResult: true,
      },
      userInput: {
        agent: "textInputAgent",
        params: {
          message: "You:",
          required: true
        }
      },
      llm: {
        agent: "openAIAgent",
        inputs: {
          tools: ":list.llmTools",
          // prompt: "get all file list on " + path,
          
          system: "base path is " + path,
          prompt: ":userInput.text",
        },
      },
      call: {
        console: { after: true },
        agent: "mcpToolsCallAgent",
        inputs: {
          tools: ":llm.tool",
        },
        if: ":llm.tool"
      },
      textReply: {
        agent: "copyAgent",
        inputs: {
          text: ":llm.text",
        },
        console: {
          after: true,
        },
      },
      
    },
  };
  const graphai = new GraphAI(graphData, { ...vanilla, mcpToolsListAgent, mcpToolsCallAgent, openAIAgent, textInputAgent }, { config: { global: { mcpClients } } });
  const result = await graphai.run();
  // console.log(result);

  await setTimeout(500);
  mcpClose(mcpClients);
};

main();
