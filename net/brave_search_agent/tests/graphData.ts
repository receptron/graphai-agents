import { GraphData, graphDataLatestVersion } from "graphai";

// Graph for testing search
export const graphDataSearch: GraphData = {
  version: graphDataLatestVersion,
  nodes: {
    start: {
      agent: "braveSearchAgent",
      inputs: {
        query: "graphai",
      },
    },
    success: {
      agent: "copyAgent",
      inputs: {
        items: ":start.items",
      },
      isResult: true,
    },
  },
};

// Graph for testing missing API token
export const graphDataNoToken: GraphData = {
  version: graphDataLatestVersion,
  nodes: {
    start: {
      agent: "braveSearchAgent",
      inputs: {
        query: "graphai",
      },
    },
    success: {
      agent: "copyAgent",
      inputs: {
        result: ":start",
      },
      isResult: true,
    },
  },
};

// Graph for testing error response handling
export const graphDataErrorResponse: GraphData = {
  version: graphDataLatestVersion,
  nodes: {
    start: {
      agent: "braveSearchAgent",
      inputs: {
        query: "error",
      },
      params: {
        supressError: true,
      },
    },
    error: {
      agent: "copyAgent",
      inputs: {
        result: ":start",
      },
      isResult: true,
    },
  },
};

// Graph for testing api key from env
export const graphDataApiKeyFromEnv: GraphData = {
  version: graphDataLatestVersion,
  nodes: {
    start: {
      agent: "braveSearchAgent",
      inputs: {
        query: "graphai",
      },
    },
    success: {
      agent: "copyAgent",
      inputs: {
        items: ":start.items",
      },
      isResult: true,
    },
  },
};
