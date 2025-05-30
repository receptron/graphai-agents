import { AgentFunction, AgentFunctionInfo } from "graphai";
import { data } from "./prompt";

export const awesomeChatgptPromptsAgent: AgentFunction<{ promptKey: keyof typeof data }> = async ({ params }) => {
  const { promptKey } = params;
  const prompt = data[promptKey];

  return {
    text: prompt,
  };
};

const awesomeChatgptPromptsAgentInfo: AgentFunctionInfo = {
  name: "awesomeChatgptPromptsAgent",
  agent: awesomeChatgptPromptsAgent,
  mock: awesomeChatgptPromptsAgent,

  samples: [
    {
      inputs: {},
      params: {
        promptKey: "travelGuide",
      },
      result: {
        text: "I want you to act as a travel guide. I will write you my location and you will suggest a place to visit near my location. In some cases",
      },
    },
  ],
  description: "awesomeChatgptPrompts Agent",
  category: ["prompt"],
  author: "Receptron team",
  repository: "https://github.com/receptron/graphai-agents/tree/main/prompts/awesome-chatgpt-prompts_agent",
  source: "https://github.com/receptron/graphai-agents/tree/main/prompts/awesome-chatgpt-prompts_agent/src/awesome_chatgpt_prompts_agent.ts",
  package: "@graphai/awesome_chatgpt_prompts_agent",
  license: "MIT",
};

export default awesomeChatgptPromptsAgentInfo;
