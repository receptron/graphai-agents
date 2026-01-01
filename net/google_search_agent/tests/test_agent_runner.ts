import { defaultTestContext } from "graphai";

import googleSearchAgent from "../src/google_search_agent";

const main = async () => {
  const result = await googleSearchAgent.agent({
    ...defaultTestContext,
    namedInputs: { query: "What is GraphAI?" },
    params: {
      apiKey: process.env.GOOGLE_SEARCH_API_KEY,
      cx: "CX",
      supressError: true,
    },
  });
  console.log(result);
};

main();
