import "dotenv/config";

import { GraphData } from "graphai";
import { graphDataTestRunner } from "@receptron/test_utils";
import braveSearchAgentInfo from "../src/brave_search_agent";

const graph_data: GraphData = {
  version: 0.5,
  nodes: {
    input: {
      value: { content: "GraphAI" },
    },
    braveSearch: {
      agent: "braveSearchAgent",
      inputs: {
        query: ":input.content",
        search_args: {
          country: "JP",
          search_lang: "jp",
          count: 3,
        },
      },
    },
    result: {
      agent: "copyAgent",
      inputs: { result: ":braveSearch.items" },
      isResult: true,
    },
  },
};

export const main = async () => {
  const result = await graphDataTestRunner(__dirname + "/../", __filename, graph_data, { braveSearchAgent: braveSearchAgentInfo });
  console.log(result["result"]);
};

main();
