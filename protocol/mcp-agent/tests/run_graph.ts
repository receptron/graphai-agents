import "dotenv/config";

import { mcpToolsListAgent, mcpToolsCallAgent, mcpInit, mcpClose } from "../src/index";
import * as vanilla from "@graphai/vanilla";
import { openAIAgent } from "@graphai/openai_agent";

import { setTimeout } from "timers/promises";
import { mcpConfig, path } from "./common";

import { GraphAI } from "graphai";

const main = async () => {
  const mcpClients = await mcpInit(mcpConfig);
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
  const graphai = new GraphAI(graphData, { ...vanilla, mcpToolsListAgent, mcpToolsCallAgent, openAIAgent }, { config: { global: { mcpClients } } });
  const result = await graphai.run();
  // console.log(result);

  await setTimeout(500);
  mcpClose(mcpClients);
};

main();
