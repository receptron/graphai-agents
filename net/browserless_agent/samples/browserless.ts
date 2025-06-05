import "dotenv/config";

import { GraphData } from "graphai";
import { graphDataTestRunner } from "@receptron/test_utils";
import browserlessAgentInfo from "../src/browserless_agent";

const graph_data: GraphData = {
  version: 0.5,
  nodes: {
    input: {
      value: { url: "https://example.com" },
    },
    browserless: {
      agent: "browserlessAgent",
      inputs: {
        url: ":input.url",
        text_content: true,
      },
    },
    result: {
      agent: "copyAgent",
      inputs: { result: ":browserless.text" },
      isResult: true,
    },
  },
};

export const main = async () => {
  const result = await graphDataTestRunner(__dirname + "/../", __filename, graph_data, { browserlessAgent: browserlessAgentInfo });
  console.log(result["result"]);
};

main();
