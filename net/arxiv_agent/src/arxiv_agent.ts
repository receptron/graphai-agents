import { AgentFunction, AgentFunctionInfo } from "graphai";
import search, { SearchApiType } from "arxiv-api-ts";

export const arxivAgent: AgentFunction<SearchApiType> = async ({ params, namedInputs }) => {
  const { searchQueryParams, sortBy, sortOrder, start, maxResults } = {
    ...params,
    ...namedInputs,
  };

  const papers = await search({
    searchQueryParams,
    sortBy,
    sortOrder,
    start,
    maxResults,
  });
  return papers;
};

const arxivAgentInfo: AgentFunctionInfo = {
  name: "arxivAgent",
  agent: arxivAgent,
  mock: arxivAgent,

  samples: [
    {
      params: {
        searchQueryParams: [
          {
            include: [{ name: "LLM" }],
          },
        ],
        sortBy: "lastUpdatedDate",
        sortOrder: "descending",
        start: 0,
        maxResults: 100,
      },
      inputs: {},
      result: {},
    },
  ],
  description: "Arxiv Agent",
  category: ["net"],
  author: "Receptron team",
  repository: "https://github.com/receptron/graphai-agents/tree/main/net/arxiv_agent",
  source: "https://github.com/receptron/graphai-agents/tree/main/net/arxiv_agent/src/arxiv_agent.ts",
  package: "@graphai/arxiv_agent",
  license: "MIT",
};

export default arxivAgentInfo;
