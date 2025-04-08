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
  /*
  spotify: {
    command: "npx",
    args: ["-y", "@shopify/dev-mcp@latest"],
  },
  */
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
      messages: {
        value: [
          {
            role: "system",
            content: "base path is " + path,
          },
        ],
        update: ":reducer.array.$0",
      },
      list: {
        agent: "mcpToolsListAgent",
        isResult: true,
      },
      userInput: {
        agent: "textInputAgent",
        params: {
          message: "You:",
          required: true,
        },
      },
      llm: {
        agent: "openAIAgent",
        inputs: {
          tools: ":list.llmTools",
          messages: ":messages",
          prompt: ":userInput.text",
        },
      },
      call: {
        agent: "mcpToolsCallAgent",
        inputs: {
          tools: ":llm.tool",
        },
        if: ":llm.tool",
      },
      llm2: {
        agent: "openAIAgent",
        inputs: {
          tools: ":list.llmTools",
          messages: ":llm.messages",
          message: {
            role: "tool",
            tool_call_id: ":llm.tool.id",
            content: ":call.response.content",
          },
        },
      },
      no_tool_calls: {
        agent: "copyAgent",
        unless: ":llm.tool",
        inputs: {
          result: ":llm.messages",
        },
      },
      reducer: {
        agent: "copyAgent",
        anyInput: true,
        // console: { after: true},
        inputs: {
          array: [":no_tool_calls.result", ":llm2.messages"],
        },
      },
      textReplyNoTool: {
        agent: "copyAgent",
        params: {
          namedKey: "text",
        },
        inputs: {
          text: ":llm.text",
        },
        console: {
          after: true,
        },
        if: ":llm.text",
      },
      textReplyWithTool: {
        agent: "copyAgent",
        params: {
          namedKey: "text",
        },
        inputs: {
          text: ":llm2.text",
        },
        console: {
          after: true,
        },
      },
    },
  };
  const graphai = new GraphAI(
    graphData,
    { ...vanilla, mcpToolsListAgent, mcpToolsCallAgent, openAIAgent, textInputAgent },
    { config: { global: { mcpClients } } },
  );
  const result = await graphai.run();
  // console.log(result);

  await setTimeout(500);
  mcpClose(mcpClients);
};

main();
