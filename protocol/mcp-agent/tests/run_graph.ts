import "dotenv/config";

import { createMcpToolsListAgent, createMcpToolsCallAgent, mcpInit, mcpClose } from "../src/index";
import * as vanilla from "@graphai/vanilla";
import { openAIAgent } from "@graphai/openai_agent";

import { setTimeout } from "timers/promises";
import { mcpConfig, path } from "./common";

import { GraphAI } from "graphai";

const main = async () => {
  const mpcClients = await mcpInit(mcpConfig);
  await setTimeout(2000);

  const graphData = {
    version: 0.5,
    nodes: {
      list: {
        agent: "mcpToolsListAgent",
        isResult: true,
        console: true,
      },
      llm: {
        agent: "openAIAgent",
        inputs: {
          tools: ":list.llmTools",
          prompt: "get all file list on " + path,
        },
      },
      call: {
        console: { before: true, after: true },
        agent: "mcpToolsCallAgent",
        inputs: {
          tools: ":llm.tool",
        },
      },
    },
  };
  const mcpToolsListAgent = createMcpToolsListAgent(mpcClients);
  const mcpToolsCallAgent = createMcpToolsCallAgent(mpcClients);
  const graphai = new GraphAI(graphData, { ...vanilla, mcpToolsListAgent, mcpToolsCallAgent, openAIAgent });
  const result = await graphai.run();
  console.log(result);

  await setTimeout(500);
  mcpClose(mpcClients);
};

main();
